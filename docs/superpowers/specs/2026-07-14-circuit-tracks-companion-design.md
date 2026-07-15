# Circuit Tracks Companion — Design

**Date:** 2026-07-14
**Status:** Awaiting user review

## Purpose

The maintainer owns a Novation Circuit Tracks and is a complete beginner with grooveboxes and
synths, but an experienced musician (bass/guitar, chord/scale/mode theory). Two goals:
screen-free music creation at home, and bringing the device to jam sessions as an extra
instrument. This project produces the learning material to get there, built on deeply
verified research, and polished enough to share with the Circuit Tracks community.

## Success criteria

1. **Accurate** — operational facts are verified against the official Novation Circuit
   Tracks User Guide and cross-checked community sources; zero contamination from the
   original Circuit or Circuit Rhythm.
2. **Functional** — site builds clean, all internal links resolve, works well on mobile
   (the realistic "next to the device" screen).
3. **Modern and pretty** — contemporary design and UX good enough that sharing it with
   the community is a point of pride, not an apology.

## Deliverables (three phases)

### Phase 1 — Research (in progress)

A multi-agent research workflow (Opus agents) covering six angles: official docs,
hardware/panel map, sequencing/arrangement, sound engine, MIDI/performance, and
community knowledge. Every angle's claims are adversarially verified by three
independent lenses: official-manual cross-check, device-confusion audit (Tracks vs
original Circuit vs Rhythm), and a skeptical refuter. Fable (main session) reviews the
verified output, adjudicates conflicts, and fills gaps.

**Output:** `research/` — raw findings preserved per round plus a cumulative
adjudicated dossier (layout and immutability rules in `research/README.md`). Research
is explicitly multi-round: each round's verification output includes what the claims
*missed*, which seeds `open-questions.md` and the next round's angles. The guide is
written only from `dossier.md`, never directly from a single round's raw output.

### Phase 2 — Reference guide

**Output:** `guide/` — a complete markdown reference, the canonical knowledge base for
both the website and future Claude sessions ("help me with my Circuit Tracks" should
start by reading this guide). Organized for lookup, roughly:

1. Orientation — what the device is, signal flow, panel map
2. Projects, tracks, and patterns — the data model of the device
3. The two synth tracks — patches, macros, scales/keys, note entry
4. The four drum tracks — samples, sample flip, drum macros
5. The two MIDI tracks — templates, external gear
6. Sequencing deep dive — gate, velocity, probability, micro nudge, mutate,
   pattern length/sync/chaining
7. Scenes and song arrangement
8. FX, mixer, side-chain, master filter, automation
9. Live performance — jam-session playbook
10. Novation Components — samples, patches, backups, firmware
11. Shortcuts and gestures — every Shift-combo in one table
12. Beginner pitfalls and FAQ

Every section cites its sources back to `research/` / the official manual.

### Phase 3 — Website

**Output:** `site/` — a static site deployed to GitHub Pages.

**Framework: Astro + MDX + Tailwind CSS.** Reasons: content-first architecture with
content collections (lessons and wiki pages are markdown/MDX with typed frontmatter);
ships zero JS by default so it's fast, with "islands" where interactivity is genuinely
wanted (interactive panel map, progress tracking, cheat-sheet filtering); first-class
static output and a documented GitHub Pages deploy path via GitHub Actions.
Alternatives considered: Next.js static export (heavier runtime, more framework than a
content site needs) and Docusaurus/VitePress (fast to stand up but visibly
"docs-template" — conflicts with the modern-and-pretty goal).

**Site structure (hybrid course + wiki, per approved approach):**

- **Home** — what this is, who it's for, how to use it
- **Start Here** — setup, firmware update, first sounds in ten minutes
- **The Course** — project-driven: each project is a sequence of lessons that ends with
  a finished piece of music, introducing device features only as the project needs them.
  Easiest path first, whole device covered by the end:
  1. *First Groove* — drum tracks, step sequencing, velocity/probability, patterns,
     mixer basics. Ends with a beat you made.
  2. *A Full Track* (house/techno idiom) — synth tracks, note entry, scales, macros,
     FX sends, automation, mutate, pattern chaining, scenes. Ends with an arranged track.
  3. *The Jam Toolkit* — tempo/swing, live pattern switching, mute/filter/FX as
     performance moves, changing key mid-jam, syncing or playing alongside live
     musicians. Ends with a jam-night-ready session and a plan for using it.
  4. *Textures* (ambient/melodic idiom) — deep synth-patch work via Components, custom
     samples, side-chain, slower builds. Ends with an ambient piece and full-device fluency.
- **Reference** — wiki-style, derived from `guide/`: one page per topic, plus an
  interactive panel map (hover/tap a control to see what it does in every mode)
- **Cheat Sheet** — single printable/phone-friendly page of shortcuts and jam-night moves
- **Resources** — official manual, firmware, Components, curated community links

**Lesson page anatomy:** goal ("by the end you'll have…"), the new concepts (with
theory bridges for a bassist — e.g. scales on the grid vs the fretboard), numbered
hands-on steps, a "check yourself" checkpoint, and links into Reference for depth.

**UX requirements:** responsive with mobile as a first-class target; dark theme default
(music-den lighting) with a light option; course progress tracked in `localStorage`
(no accounts); fast full-text search across lessons and reference (client-side, e.g.
Pagefind); accessible (keyboard nav, contrast, reduced-motion).

**Deploy:** GitHub Actions workflow → GitHub Pages from the `main` branch. Repo will be
pushed to the maintainer's GitHub (`brennanpowers`).

## Data flow

Research workflow → `research/` dossier → `guide/` (canonical, cited) → `site/` content
(derives from guide; lessons may reorder/simplify but never contradict it). Corrections
flow backwards: if the device behaves differently in the maintainer's hands, fix `guide/` first,
then the site.

## Error handling / quality gates

- Research: claims surviving verification with a refutation or wrong-device verdict are
  adjudicated by Fable before entering the guide; unresolved items are marked
  "unverified — check on device" rather than silently included.
- Site: CI runs `astro build` + `astro check` and a link checker on every push; deploy
  only on green.
- Ultimate test: the maintainer works through lessons on the physical device; discrepancies
  are bugs, tracked and fixed guide-first.

## Out of scope

- Hosting video or audio content (link out instead)
- Accounts, comments, analytics
- Original Circuit / Circuit Rhythm coverage
- Firmware/hardware modding (e.g. custom firmware)
