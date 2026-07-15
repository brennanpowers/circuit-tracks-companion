# circuit-tracks-companion

A learning companion for the Novation Circuit Tracks groovebox: a verified reference
guide plus a project-driven beginner course, published as a static website.

**Scope rule: Circuit Tracks only.** The original Novation Circuit (2015) and Circuit
Rhythm are different devices, and source material constantly confuses the three. Every
fact in this repo must be true of the Circuit Tracks specifically. Never assume feature
parity with the sibling devices.

## Structure

```
research/        Verified research dossier (claims + sources) feeding the guide
guide/           The complete reference guide (markdown, source of truth for site content)
site/            Astro site — course, wiki reference, cheat sheet (see .contexts/site-architecture.md)
docs/            Design specs and plans
.contexts/       Persistent project context files (version-controlled)
.sessions/       Session summaries (gitignored)
```

Site commands (from `site/`): `npm run dev` · `npm run build` · `npm run check` ·
`npm test` · `npm run test:links`. All four gates must pass before deploy.

## Content principles

1. **Accurate** — every operational fact (button combo, count, behavior) traces back to
   the official Novation Circuit Tracks User Guide or a verified source in `research/`.
   When sources conflict, the official manual wins; note firmware-version differences.
2. **Functional** — the site must build clean and every internal link must resolve.
3. **Modern and pretty** — the site is meant to be shared with the community; treat UX
   as a first-class requirement, not an afterthought.

The guide in `guide/` is the canonical knowledge base — site content derives from it,
never the other way around.

## Context Index

- **guide-map** — one-line-per-section index of where facts live in `guide/`
  (`.contexts/guide-map.md`)
- **site-architecture** — how site/ works: collections, guide-link plugin, base-path
  rules, progress store, adding lessons (`.contexts/site-architecture.md`)
- **course-backlog** — reviewed-but-unaddressed coverage gaps and deferred ideas;
  the menu for future course enhancements (`.contexts/course-backlog.md`)
