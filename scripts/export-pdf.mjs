#!/usr/bin/env node
/**
 * Export pitch deck to PDF (Playwright screenshot per slide → Pillow merge).
 * Usage: node scripts/export-pdf.mjs [baseUrl] [output.pdf]
 */
import { mkdir, rm } from "node:fs/promises";
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
const slideCount = Number(process.env.SLIDE_COUNT || "20");
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

console.log(
  `Exporting ${slideCount} slides (A4 landscape, ${scale}×) from ${baseUrl}`,
);

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
  console.log("ok");
}

await browser.close();

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
import glob, sys
from pathlib import Path
from PIL import Image

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
print(f"Wrote {output} ({len(images)} pages @ {dpi} DPI, {pw}x{ph}px)")
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
