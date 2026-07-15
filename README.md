# Circuit Tracks Companion

A community learning site for the **Novation Circuit Tracks** groovebox: a
project-driven course (24 lessons, five projects, each ending in a finished piece of
music), a wiki-style reference for every control and behavior, and a printable
jam-night cheat sheet.

**Live site:** https://brennanpowers.github.io/circuit-tracks-companion/

> Unofficial and unaffiliated with Novation or Focusrite. "Circuit Tracks" is their
> trademark; the manual is their copyright — this site links to it rather than
> reproducing it.

## Why trust it

Community material about the Circuit family constantly mixes up three different
devices (the 2015 Circuit, Circuit Tracks, and Circuit Rhythm). This project's
content pipeline was built around that problem:

- `research/` — a dossier of 235 falsifiable claims, each independently verified by
  three adversarial reviewers against the official **User Guide v3** and
  **Programmer's Reference v3**, including a dedicated device-confusion audit.
  Claim-level evidence is preserved per round.
- `guide/` — the canonical reference, written **only** from verified dossier facts,
  with adjudication notes where Novation's own manual contradicts itself.
- `site/` — the website. Its Reference section renders `guide/` directly (single
  source of truth); course lessons derive from it and never contradict it.

Facts that only a physical device can settle are flagged as **Device Labs** in the
course, and findings flow back into the research.

## Local development

```bash
cd site
npm install
npm run dev          # dev server
npm run build        # static build + search index
npm run check        # type-check
npm test             # unit tests
npm run test:links   # internal link check over dist/
```

## Contributing

Corrections are welcome — with sources. A claim about device behavior needs a User
Guide page reference, an official Novation source, or a reproducible on-device test
(state your firmware version). Fix `guide/` first; the site follows. See `CLAUDE.md`
for the content principles.
