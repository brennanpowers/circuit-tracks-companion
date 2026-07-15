# Site architecture — how site/ works

Last updated: 2026-07-15. Stack: Astro 7, Tailwind 4 (vite plugin), MDX, Pagefind,
Vitest 4 (jsdom). Node 22+ (dev machine runs 25).

## The load-bearing design decision

`src/content.config.ts` defines two collections:
- **course** — local MDX under `src/content/course/<project>/<nn>-<slug>.mdx`,
  schema `{title, project(enum), order, minutes, goal}`. Project enum ids match
  `src/data/projects.ts` PROJECTS and the content directory names.
- **reference** — a glob loader pointed at **`../guide`** (the repo's canonical
  guide). Reference pages ARE the guide files; nothing is copied. Editing
  `guide/*.md` changes the site on next build.

`src/lib/guide-links.ts` — remark plugin rewriting `NN-slug.md` / `README.md` hrefs
to `/reference/...` routes (base-prefixed). Applies to guide files AND course MDX,
so lessons link to reference pages using plain guide-style hrefs. Unit-tested in
`tests/guide-links.test.ts`.

## Base path rules

GitHub Pages project site → `base: '/circuit-tracks-companion'` in astro.config.
Every internal href in .astro files goes through `withBase()` from `src/lib/url.ts`.
In markdown/MDX, only guide-style links get auto-prefixed (via the plugin) — do NOT
hand-write absolute internal links in content.

## Interactivity (no UI framework)

- Theme: inline bootstrap script in `layouts/Base.astro` + `ThemeToggle.astro`;
  `data-theme="light"` on <html>, tokens in `styles/global.css`. Track colours have
  darker light-theme variants (contrast — the pale device colours fail on white).
- Progress: `src/lib/progress.ts` (localStorage key `ctc-progress`, custom event
  `ctc-progress-change`), consumed by `MarkComplete.astro` and `ProgressBar.astro`.
  Tests stub localStorage (`tests/setup.ts`) because Node 25's built-in webstorage
  shadows jsdom's and is broken without a flag.
- Panel map: `data/panel-controls.json` (facts from guide 01/11) + `PanelMap.astro`
  (schematic SVG hotspots, keyboard accessible, detail card).
- Search: Pagefind, indexed at build (`pagefind --site dist` in the build script),
  loaded lazily by `Search.astro` into a <dialog> (Cmd/Ctrl-K).

## Quality gates

`npm run check` (astro check), `npm test` (vitest), `npm run build`,
`npm run test:links` (`scripts/check-links.mjs` — validates every internal
href/src in dist/ resolves to a file; base-aware). CI runs all four before deploy.

## The panel diagram (1-to-1 with the device)

`src/data/panel-geometry.ts` — every physical control individually mapped (39
elements) with coordinates transcribed from the manual's Top View photo (p15,
PDF: fael CDN URL in guide README). Each element carries a `plain` layman
description. Reviewed 2026-07-15 by a three-agent panel (layout / labels /
descriptions) against manual pages 15-17 — verdicts in that day's session notes.
`PanelSVG.astro` renders it (props: highlight[], interactive, labels);
`PanelMap.astro` = interactive reference version; `PanelHighlight.astro` = lesson
asset. In lesson MDX (no import needed):
`<PanelHighlight controls={['macro-5','record']} caption="..." />` — accepts
element ids and aliases (macros, drums, synths, tracks, arrows, step-buttons,
transport, grid). Deliberately omitted: Novation logo (trade dress).
Dev check loop: `node scripts/render-panel-check.mjs` → /tmp/panel-check.svg →
headless-Chrome screenshot → eyeball against manual p15.

## Adding a lesson

1. Create `src/content/course/<project>/<nn>-<slug>.mdx` with the frontmatter schema.
2. Callouts available in MDX without imports: `<Goal>` (auto-rendered from
   frontmatter goal — don't add another), `<TheoryBridge>`, `<DeviceLab issue="">`,
   `<Checkpoint>`, `<JamTip>`.
3. Link to reference sections as `[text](06-sequencing.md)`.
3b. Show where controls are with `<PanelHighlight controls={[...]} />` at the
    moment a lesson introduces new hardware.
4. Facts must trace to `guide/` — same rule as everything else.
5. Prev/next and course cards pick it up automatically (order field).
