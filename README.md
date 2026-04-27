# Nimbus BCI — Venture pitch deck

**The Intel Inside for Brain-Computer Interfaces.** A static, single-page venture presentation for Nimbus BCI: real-time, explainable neural inference for the next generation of BCI devices.

**Live site:** [deck.nimbusbci.com](https://deck.nimbusbci.com/)

## Contents

- Slide-based narrative (HTML + Tailwind CSS)
- Keyboard, touch, and control-button navigation
- Accessibility affordances (skip link, screen reader announcements, reduced motion)

## Local development

```bash
npm install
npm run format      # optional: apply Prettier
npm run lint        # ESLint (js/script.js)
npm run typecheck   # TypeScript checkJs on presentation logic
```

Open `index.html` in a browser from a local server if you need correct asset paths (for example `npx serve .`).

## Deployment

See [docs/DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md). Changelog: [docs/CHANGELOG.md](docs/CHANGELOG.md).

## Repository

- **Source:** [github.com/mamagarobonomon/nimbus-bci-presentation](https://github.com/mamagarobonomon/nimbus-bci-presentation)
- **Primary domain (GitHub Pages):** `deck.nimbusbci.com` (see `CNAME`)

### Suggested GitHub metadata (Settings → General → About)

Use these in the repository **About** box and **Topics** for discoverability:

| Field   | Suggested value                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Website | `https://deck.nimbusbci.com`                                                                                                                   |
| Topics  | `bci`, `brain-computer-interface`, `neurotechnology`, `pitch-deck`, `static-site`, `github-pages`, `nimbus-bci`, `neural-inference`, `rxinfer` |

Short **Description** (max ~350 characters for display):

> Venture pitch deck for Nimbus BCI — real-time, explainable neural inference for brain-computer interfaces. Static site hosted at deck.nimbusbci.com.
