#!/usr/bin/env node
/**
 * Export pitch deck to PDF (Playwright screenshot per slide → Pillow merge).
 * Usage: node scripts/export-pdf.mjs [baseUrl] [output.pdf]
 */
import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { chromium } from "playwright";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const port = process.env.PORT || "3456";
const baseUrl = (process.argv[2] || `http://127.0.0.1:${port}/`).replace(
  /\/?$/,
  "/",
);
const outputPath = resolve(
  root,
  process.argv[3] || "Nimbus-BCI-Venture-Deck.pdf",
);
/** Slide count auto-detected from the deck unless SLIDE_COUNT is set. */
let slideCount = Number(process.env.SLIDE_COUNT || "0");
/** 2× retina capture by default; set PDF_SCALE=1 for a faster draft */
const scale = Number(process.env.PDF_SCALE || "2");

// A4 landscape @ 96 CSS px/in
const VIEWPORT = { width: 1123, height: 794 };
const A4_LANDSCAPE_IN = { w: 11.693, h: 8.268 };
const pixelW = Math.round(VIEWPORT.width * scale);
const pixelH = Math.round(VIEWPORT.height * scale);

const tmpDir = resolve(root, ".export-tmp");
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForVisibleSlideAssets(page) {
  await page.evaluate(async () => {
    const pause = (ms) => new Promise((r) => setTimeout(r, ms));
    if (document.fonts?.ready) {
      await Promise.race([document.fonts.ready, pause(3000)]);
    }
    const idx = document.documentElement.getAttribute("data-export-slide");
    const n = idx === null ? 1 : Number.parseInt(idx, 10) + 1;
    const slide = document.querySelector(
      `#slides-wrapper > .slide:nth-child(${n})`,
    );
    if (!slide) return;

    document.querySelectorAll("video").forEach((v) => {
      try {
        v.pause();
        v.removeAttribute("autoplay");
      } catch {
        /* ignore */
      }
    });

    await Promise.all(
      [...slide.querySelectorAll("img")].map((img) =>
        Promise.race([
          new Promise((resolve) => {
            if (img.complete) {
              resolve();
              return;
            }
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          }),
          pause(4000),
        ]),
      ),
    );
  });
}

await rm(tmpDir, { recursive: true, force: true });
await mkdir(tmpDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: scale,
});
const page = await context.newPage();
page.setDefaultTimeout(20_000);

if (!Number.isFinite(slideCount) || slideCount <= 0) {
  await page.goto(`${baseUrl}?export=pdf`, { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#slides-wrapper", { state: "visible" });
  slideCount = await page.evaluate(
    () => document.querySelectorAll("#slides-wrapper > .slide").length,
  );
  if (!slideCount) {
    throw new Error(`No slides found at ${baseUrl}`);
  }
}

console.log(
  `Exporting ${slideCount} slides (A4 landscape, ${scale}×) from ${baseUrl}`,
);

const allLinks = [];

for (let i = 0; i < slideCount; i++) {
  const url = `${baseUrl}?export=pdf&slide=${i}`;
  process.stdout.write(
    `  slide ${String(i + 1).padStart(2)}/${slideCount} ... `,
  );

  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20_000 });
  await page.waitForSelector("#presentation-container", { state: "visible" });
  await page.waitForFunction(
    () => document.documentElement.classList.contains("pdf-export"),
    { timeout: 10_000 },
  );
  await waitForVisibleSlideAssets(page);
  await delay(300);

  const pngPath = resolve(tmpDir, `slide-${String(i).padStart(2, "0")}.png`);
  await page.locator("#presentation-container").screenshot({
    path: pngPath,
    type: "png",
    animations: "disabled",
    timeout: 15_000,
  });

  // Collect live link rects (fractions of the container box) so the Python
  // merge step can stamp real clickable annotations onto the image PDF.
  const slideLinks = await page.evaluate(() => {
    const box = document
      .querySelector("#presentation-container")
      .getBoundingClientRect();
    return [...document.querySelectorAll("#slides-wrapper a[href]")]
      .map((a) => {
        const r = a.getBoundingClientRect();
        return {
          href: a.href,
          x: (r.left - box.left) / box.width,
          y: (r.top - box.top) / box.height,
          w: r.width / box.width,
          h: r.height / box.height,
        };
      })
      .filter((l) => l.w > 0 && l.h > 0);
  });
  allLinks.push(slideLinks);

  console.log(`ok (${slideLinks.length} links)`);
}

await browser.close();

await writeFile(resolve(tmpDir, "links.json"), JSON.stringify(allLinks));

const merge = spawnSync(
  "python3",
  [
    "-",
    tmpDir,
    outputPath,
    String(slideCount),
    String(pixelW),
    String(pixelH),
    String(A4_LANDSCAPE_IN.w),
    String(A4_LANDSCAPE_IN.h),
  ],
  {
    input: `
import glob, json, sys
from pathlib import Path
from PIL import Image
from pypdf import PdfReader, PdfWriter
from pypdf.annotations import Link

tmpdir, output, expected, pw, ph, inch_w, inch_h = sys.argv[1:8]
expected, pw, ph = int(expected), int(pw), int(ph)
inch_w, inch_h = float(inch_w), float(inch_h)
dpi = round(pw / inch_w)

paths = sorted(glob.glob(str(Path(tmpdir) / "slide-*.png")))
if len(paths) != expected:
    raise SystemExit(f"Expected {expected} PNGs, got {len(paths)}")

images = []
for p in paths:
    im = Image.open(p).convert("RGB")
    if im.size != (pw, ph):
        im = im.resize((pw, ph), Image.Resampling.LANCZOS)
    if all(lo == hi for lo, hi in im.getextrema()):
        raise SystemExit(f"Blank slide: {p}")
    images.append(im)

images[0].save(
    output,
    save_all=True,
    append_images=images[1:],
    resolution=float(dpi),
    quality=95,
)

# Stamp real clickable link annotations onto the image-based PDF.
links = json.loads(Path(tmpdir, "links.json").read_text())
writer = PdfWriter()
writer.append(PdfReader(output))
pad = 1.5  # pt, slightly larger hit area
total = 0
for pno, page_links in enumerate(links):
    page = writer.pages[pno]
    W = float(page.mediabox.width)
    H = float(page.mediabox.height)
    for l in page_links:
        x1, x2 = l["x"] * W, (l["x"] + l["w"]) * W
        y2, y1 = H - l["y"] * H, H - (l["y"] + l["h"]) * H
        writer.add_annotation(
            page_number=pno,
            annotation=Link(rect=(x1 - pad, y1 - pad, x2 + pad, y2 + pad), url=l["href"]),
        )
        total += 1
with open(output, "wb") as f:
    writer.write(f)
print(f"Wrote {output} ({len(images)} pages @ {dpi} DPI, {pw}x{ph}px, {total} links)")
`,
    encoding: "utf-8",
    cwd: root,
  },
);

if (merge.status !== 0) {
  console.error(merge.stderr || merge.stdout);
  process.exit(merge.status || 1);
}
console.log(merge.stdout);

await rm(tmpDir, { recursive: true, force: true });
console.log(`Done: ${outputPath}`);
