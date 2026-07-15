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
site/            Static site (Astro) — course, wiki reference, cheat sheet
docs/            Design specs and plans
.contexts/       Persistent project context files (version-controlled)
.sessions/       Session summaries (gitignored)
```

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

(No context files yet — add entries here as `.contexts/*.md` files are created.)
