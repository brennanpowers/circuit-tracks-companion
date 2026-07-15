# Novation Circuit Tracks — Complete Reference Guide

An operational field manual for the Novation Circuit Tracks groovebox. Every fact in
this guide traces to `../research/dossier.md` — 233 claims triple-verified against the
official **Circuit Tracks User Guide v3** and the **Programmer's Reference Guide v3**,
plus adjudications where sources conflict (including places where Novation's own
manual contradicts itself).

**Authoritative manual (stable URL):**
<https://fael-downloads-prod.focusrite.com/customer/prod/downloads/circuit_tracks_user_guide_v3_en.pdf>

> **Scope:** Circuit **Tracks** only. The original Novation Circuit (2015) and Circuit
> Rhythm are different devices; features like Grid FX, Drift, and on-device sampling
> belong to Rhythm and do **not** exist on Tracks. Community material blurs the three
> constantly — this guide never does.

> **`[device-check]`** marks the handful of facts that could not be fully settled from
> sources and should be confirmed on the physical unit (list: `../research/open-questions.md`).

## The device at a glance

| | |
|---|---|
| Tracks | 8, fixed: Synth 1, Synth 2, MIDI 1, MIDI 2, Drum 1–4 |
| Synth engine | Nova-family, 2 tracks, 6-voice polyphonic, 128 patches each |
| Drum tracks | 4, sample-based, 64 samples each, per-step sample flip |
| MIDI tracks | 2, full sequencer feature set, no internal sound, 8 templates each |
| Grid | 32 velocity-sensitive RGB pads (4×8) |
| Macros | 8 endless encoders, function changes per view |
| Patterns | 8 per track; 16 or 32 steps (start/end anywhere in 1–32) |
| Scenes | 16, chainable into song arrangements |
| Projects | 64 per pack; 1 internal pack + 31 on microSD = 32 packs |
| Scales | 16, global root + scale shared by synth and MIDI tracks |
| Tempo | 40–240 BPM internal (integers); 30–300 slaved (fractional OK) |
| Power | USB-C or internal battery (~4 h); no audio over USB |
| Released | Early 2021 · current firmware 1.2 (Dec 2022) |

## Contents

1. [Orientation — panel, signal flow, interaction model](01-orientation.md)
2. [The data model — packs, projects, patterns, and what saves when](02-data-model.md)
3. [Synth tracks — patches, macros, scales](03-synth-tracks.md)
4. [Drum tracks — samples, sample flip, drum macros](04-drum-tracks.md)
5. [MIDI tracks — templates, channels, external gear](05-midi-tracks.md)
6. [Sequencing deep dive — steps, gate, velocity, probability, micro steps, Mutate](06-sequencing.md)
7. [Patterns, Scenes, and arrangement](07-patterns-scenes-arrangement.md)
8. [FX, mixer, side-chain, master section, automation](08-fx-mixer-sidechain.md)
9. [Live performance — the jam-session playbook](09-live-performance.md)
10. [Novation Components and storage](10-components.md)
11. [Shortcuts — every combo in one place](11-shortcuts.md)
12. [Pitfalls, limitations, FAQ](12-pitfalls-faq.md)

## How facts are cited

Each section ends with a **Sources** block listing User Guide v3 page ranges and the
dossier claim IDs used. Claim IDs (e.g. `sequencing-25`) resolve to
`../research/rounds/2026-07-14-round-1/claims/*.json`, where every claim carries its
full verification evidence.
