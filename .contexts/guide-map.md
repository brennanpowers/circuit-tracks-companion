# Guide map — where facts live in guide/

One-line-per-section index so a session can jump straight to the right file.
Last updated: 2026-07-15.

- **README.md** — TOC, device-at-a-glance table, authoritative manual URL, citation
  conventions, `[device-check]` marker meaning.
- **01-orientation.md** — panel map, signal flow, momentary-vs-latching model, track
  colours, rear panel I/O table, power/battery.
- **02-data-model.md** — Pack→Project→Pattern→Step hierarchy, save semantics (double
  press, no undo, Save Lock), global vs per-project settings, project switching,
  packs/microSD, recovery gestures.
- **03-synth-tracks.md** — Note View layout, octaves, the 16-scale table w/ pad
  numbers, scale/root rules, 128 patches (page-2 adjudication), macros, engine
  lineage.
- **04-drum-tracks.md** — 64 samples, default kit layout, sample flip, Expanded Drum
  View, fixed even-macro functions, ratchets, Ch-10 CC recall.
- **05-midi-tracks.md** — templates + CC defaults, channel table (3/4 default!),
  external-audio-return workflow, clock Rx/Tx, analog sync, Ch-16 project control.
- **06-sequencing.md** — note entry, record/quantise, Play vs Shift+Play, velocity/
  gate/probability/micro-step semantics with exact values, ties, Mutate, tempo/swing/
  click.
- **07-patterns-scenes-arrangement.md** — pattern queueing, length/start/end, play
  order, sync rates, chains (contiguous, 256-step max), View Lock, Scenes (assign/
  launch/chain, fw 1.2 mutes).
- **08-fx-mixer-sidechain.md** — full delay/reverb preset tables, sends, mixer (no
  solo; muted-track live-play), side-chain presets/key, master filter/compressor/
  volume, automation record/delete rules.
- **09-live-performance.md** — jam playbook: sync options, live key changes,
  performance-surface ranking, scene choreography, stage don'ts.
- **10-components.md** — Components jobs (samples 48k/16/mono, 196.6 s budget, patch/
  template editors, backups, firmware), Easy Start, screenless aids, ecosystem
  caveats.
- **11-shortcuts.md** — every combo in four tables (views/editing/transport/power-on).
- **12-pitfalls-faq.md** — 12 beginner traps, hard limitations, troubleshooting
  table, FAQ.

Facts trace to `research/dossier.md` (adjudications override the manual where it
contradicts itself). Unsettled facts are tagged `[device-check]` and listed in
`research/open-questions.md`.
