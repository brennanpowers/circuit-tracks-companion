# Circuit Tracks Reference Guide (Phase 2) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Write the complete, verified Circuit Tracks reference guide in `guide/` — the canonical knowledge base that the Phase-3 website and all future Claude sessions derive from.

**Architecture:** Thirteen focused markdown files (one topic each) plus an index, written exclusively from `research/dossier.md` (233 triple-verified claims + adjudications + manual-cited additions). Every operational fact traces to the dossier; every section ends with a Sources block; unresolved facts are flagged `[device-check]`, never stated as certain.

**Tech Stack:** Markdown only. Verification via grep/manual cross-check against `research/dossier.md`. Git per section.

**Note:** Phase 3 (Astro site) is a separate plan, to be written after this one completes — site content derives from the finished guide.

## Global Constraints

- **Tracks only:** no original-Circuit or Circuit Rhythm facts. Rhythm-only features (Grid FX, Drift, on-device sampling) may appear ONLY as "Tracks does not have this" notes.
- **Dossier is law:** `research/dossier.md` Section A adjudications override everything, including the official manual's own errors (Synth 2 page-3 typo, "DELAY TYPE" header, "Ukranian" spelling, compressor-location contradiction).
- **Unverified = flagged:** anything in `research/open-questions.md` appears with an explicit `[device-check]` marker, phrased as "believed/likely", never as fact.
- **Physical button labels** are used in prose (e.g. "Pattern Settings" not "Probability button"), with the manual's alternate naming mentioned once where relevant (dossier A.9).
- **Combo notation:** `Shift + Button` with capitalized button names, backticked, e.g. `` `Shift + FX` ``.
- **Every section ends with a `## Sources` block** listing User Guide v3 page ranges and dossier claim-ID ranges used.
- **Section files link relatively** (e.g. `[Sequencing](06-sequencing.md)`); no absolute paths, no external links except in Sources and the resources section.
- Writing style: operational and terse — a field manual, not marketing. Second person ("press", "hold"). Tables for enumerable facts (scales, presets, channels, shortcuts).

## File Structure

```
guide/
  README.md                       Index, how to use, sourcing rules, device-at-a-glance
  01-orientation.md               What it is, signal flow, panel map, interaction model
  02-data-model.md                Pack → Project → Track → Pattern → Step hierarchy; what saves when
  03-synth-tracks.md              Patches, macros, scales/keys, note entry, polyphony
  04-drum-tracks.md               Samples, sample flip, drum macros, expanded drum view
  05-midi-tracks.md               Templates, channels, CC/NRPN, external gear
  06-sequencing.md                Steps, gate, velocity, probability, micro steps, mutate
  07-patterns-scenes-arrangement.md  Pattern settings, chaining, scenes, song building
  08-fx-mixer-sidechain.md        Reverb/delay, mixer, side-chain, master filter/compressor, automation
  09-live-performance.md          The jam-session playbook
  10-components.md                Samples, patches, backups, firmware, packs/microSD
  11-shortcuts.md                 Every combo and power-on gesture in one set of tables
  12-pitfalls-faq.md              Beginner traps, known limitations, troubleshooting
```

Task order = file order (later sections link back to earlier ones). Every task follows the same verify-then-commit cycle; the "test" for content is the fact-audit step, which is not optional.

---

### Task 1: Guide index and orientation section

**Files:**
- Create: `guide/README.md`
- Create: `guide/01-orientation.md`

**Interfaces:**
- Produces: the 13-file TOC in README.md with the exact filenames above (later tasks must match them); the "device at a glance" table other sections may link to; section-file naming convention `NN-slug.md`.

- [ ] **Step 1: Write `guide/README.md`** containing: one-paragraph description; a "device at a glance" table (8 tracks in fixed order Synth 1/Synth 2/MIDI 1/MIDI 2/Drum 1–4; 6-voice synths; 32-pad grid; 8 macros; 8 patterns/track; 16 scenes; 64 projects/pack; 32 packs; released early 2021, current firmware 1.2); the full TOC linking all 13 files; a sourcing statement (written from `research/dossier.md`, authoritative PDF URL from dossier header); the Tracks-only scope warning; the `[device-check]` marker convention.
- [ ] **Step 2: Write `guide/01-orientation.md`** covering, from dossier B-Hardware and claims `hardware-*`/`official-*`: what the device is (groovebox: sequencer + synth engine + drum sampler + MIDI sequencer); audio path (6 internal audio tracks + 2 external inputs → per-track FX sends → mixer → master compressor → master filter → Master Volume → outs); full panel map (32-pad grid, 8 macros, Master Filter knob, Master Volume knob, step-button group with Pattern Settings naming note, function buttons, track buttons, ▼/▲ arrows and their page-selector double duty); the momentary-vs-latching interaction model incl. Record punch-in special case; track colour table (all 8 colours); rear panel (unbalanced TS I/O per adjudication A.1, +5 dBu headphone/150 Ω, MIDI In/Out/Thru DIN, Sync Out 3.5 mm 5 V, USB-C, microSD, Kensington); power (3 methods, USB 3.0 charge requirement, ~4 h battery); pad-colour language basics (dim = available, bright = active/selected).
- [ ] **Step 3: Fact-audit both files** — for every count, combo, spec, and colour stated, locate its support in `research/dossier.md` (Section A/B prose or a C claim ID). Fix or flag anything unsupported. Confirm zero Rhythm/original-Circuit facts. Confirm README TOC filenames match the File Structure list exactly.
- [ ] **Step 4: Commit** — `git add guide/ && git commit -m "guide: index and orientation"`

### Task 2: Data model — what saves when

**Files:**
- Create: `guide/02-data-model.md`

**Interfaces:**
- Consumes: README's at-a-glance counts (must not contradict).
- Produces: canonical hierarchy terminology (Pack → Project → Track → Pattern → Step) used by all later sections.

- [ ] **Step 1: Write the section** from dossier B-Setup/storage + claims `sequencing-*`, `community-*`, `official-*`: the hierarchy with counts at each level (32 packs incl. internal, 64 projects/pack, 8 tracks/project, 8 patterns/track, 16 or up-to-32 steps/pattern with arbitrary start/end points); what a Step stores (notes w/ per-note velocity, gate incl. ties, probability, micro-step position, sample-flip, automation deltas); what a Project stores (patterns, scenes, mixer, FX selections, side-chain, tempo/swing, colour); the save model — **nothing persists without explicit `Save` ×2** (deliberate double-press, Macro 1 recolour between presses, redirect-to-slot in Projects View); what is global-not-per-project (scale/root are per-project but shared across synth+MIDI tracks; click on/off unsaved vs click level saved; View Lock resets at power-on; Setup/Advanced Setup settings global); project switching (queued at pattern end vs `Shift` = instant; tempo behavior loaded-stopped vs loaded-playing); the 16 factory demo projects; `[device-check]` flag on unrecorded-macro-tweak persistence (open-questions item 1).
- [ ] **Step 2: Fact-audit** against dossier as in Task 1 Step 3.
- [ ] **Step 3: Commit** — `git commit -m "guide: data model and save behavior"`

### Task 3: Synth tracks

**Files:**
- Create: `guide/03-synth-tracks.md`

**Interfaces:**
- Consumes: hierarchy terms from Task 2; panel names from Task 1.
- Produces: the 16-scale table and scale/root behavior rules that 05-midi-tracks and 09-live-performance link to.

- [ ] **Step 1: Write the section** from dossier B-Sound + claims `sound-*`, `official-*`: Note View layout (top 2 rows = 16-step display, bottom 2 rows = keyboard, pad 32 = pad 17 pitch overlap); Expanded Note View (`Shift + Note`, Note button gold per A.6, 4 octaves, preferred for recording); octave shift ±(+5/−6), 10-octave total range; the full 16-scale table with pad numbers 17–32 (order from `official-4`, "Ukrainian" spelling per A.8); root-note selection layout; scale/root shared across both synth AND both MIDI tracks; the two distinct scale-change mechanisms per adjudication A.4; Chromatic's piano layout + 1-octave collapse; 128 patches (4 pages of 32), defaults patch 1 / patch 33 with the page-2-not-3 warning per A.3; patch preview + `Shift`+pad silent select; Program Change patch selection (Ch 1/2, values 0–63); 6-voice polyphony, 6 notes max per step; factory character Synth 1 mono bass / Synth 2 poly keys; engine lineage paragraph (MiniNova-derived; 2 osc × 30 waveforms, noise, ring mod, multimode filters, 3 env, 2 LFO, insert FX — full depth in Components only per B-Sound, `[device-check]`-free but source the "4 params/macro" figure to Components per open-questions); macros as patch-defined performance controls + automation recording basics (pointer to 06 and 08).
- [ ] **Step 2: Fact-audit** against dossier; verify the scale table order matches `official-4` verbatim.
- [ ] **Step 3: Commit** — `git commit -m "guide: synth tracks"`

### Task 4: Drum tracks

**Files:**
- Create: `guide/04-drum-tracks.md`

**Interfaces:**
- Consumes: step-storage terms from Task 2.
- Produces: sample-flip mechanics referenced by 06 (Mutate) and 09.

- [ ] **Step 1: Write the section** from dossier B-Sequencing/Sound + claims `sound-*`, `sequencing-*`, `hardware-*`: 4 drum tracks, 64 samples each (4 pages of 16 in Note View / 2 of 32 in Preset View); default kit layout (slots 1–2 kicks, 3–4 snares, 5–6 closed hats, 7–8 open hats, 9–12 perc, 13–16 melodic) and default track assignments (Drum 1 = slot 1 Kick 1, Drum 2 = slot 3 Snare 1, Drum 3 = slot 5 CH 1, Drum 4 = slot 9 Perc 1); step entry (tap = default sample, bright blue) vs **sample flip** (long-press step + sample pad, step turns pink); Expanded Drum View (`Shift + Note`: pads 29–32 = all four drums live); fixed-function drum macros (even only: 2 Pitch, 4 Decay, 6 Distortion, 8 EQ; odd inactive); drum velocity/gate/micro-step editing (Velocity View, Gate View w/ micro steps; step-programmed hits use fixed velocity; multiple micro-hits share step velocity+sample); non-quantised record indicator (bright green vs dim red); external recall via CC on Ch 10; no on-device sampling — samples arrive only via Components (link 10-components).
- [ ] **Step 2: Fact-audit** against dossier.
- [ ] **Step 3: Commit** — `git commit -m "guide: drum tracks"`

### Task 5: MIDI tracks

**Files:**
- Create: `guide/05-midi-tracks.md`

**Interfaces:**
- Consumes: scale-sharing rules from Task 3; sequencer features from Task 2.
- Produces: the MIDI channel table used by 09 and 10.

- [ ] **Step 1: Write the section** from dossier B-MIDI + claims `midi-performance-*`: what MIDI tracks are (full sequencer tracks, no internal sound; MIDI 1 blue / MIDI 2 pink); 8 template slots per track (edit/backup in Components; cannot create from scratch on device; default CC set 1, 2, 5, 11, 12, 13, 71, 74); template-switch gotcha (automation is NOT erased — re-applies to the new CCs); the channel table — Synth 1 = 1, Synth 2 = 2, MIDI defaults **3/4**, Drums share 10, Project control = 16, all reassignable in Setup View; scale/root constrain MIDI-track notes too (Chromatic to bypass); notes transposable +5/−6 octaves; the external-audio duality — the two analog inputs pair with the MIDI tracks through mixer (Macros 3/4), FX sends, and side-chain, enabling sequence-out/audio-back-in workflows; full sequencer parity (velocity/gate/probability/micro/Mutate/automation, transmitted on DIN + USB); Ch 16 project-control surface summary (master filter, tempo, swing, mutate, FX sends CC88–116, NRPN engine access) with pointer to the Programmer's Reference for the complete map; clock behavior (Rx auto-slave 30–300 BPM fractional, "SYN" display; Tx master on USB+DIN; analog Sync Out rates, **swing never applied to analog sync**).
- [ ] **Step 2: Fact-audit** against dossier.
- [ ] **Step 3: Commit** — `git commit -m "guide: midi tracks"`

### Task 6: Sequencing deep dive

**Files:**
- Create: `guide/06-sequencing.md`

**Interfaces:**
- Consumes: step-property rules from Task 2; per-track-type notes from Tasks 3–5.
- Produces: gate/velocity/probability/micro-step semantics that 07 and 09 rely on.

- [ ] **Step 1: Write the section** from dossier B-Sequencing + claims `sequencing-*`: live record (`Record`, momentary punch-in/out >½ s hold; `Shift + Record` quantise toggle; 6 micro-steps capture non-quantised playing); manual step entry needs no record mode (hold step + keyboard pad to add, same to delete; `Clear` + step wipes the step); play semantics per adjudication A.2 (Play toggles; restart at step 1/Start Point; `Shift + Play` continues from stop; applies to chains and project switches); per-step editing — Velocity (16 grid levels, per-note values within a step, bright = lowest at step; Fixed Velocity = `Shift + Velocity`, value 96, non-retroactive), Gate (1/6th resolution to 16 steps, 96 values; ties/drones incl. the tie-inheritance trap from dossier B; empty steps = gate 0, uneditable), Probability (second press of Pattern Settings; per-step trigger chance), Micro steps (`Shift + Gate`, 6 positions, pad 0 = on-beat; strummed chords via staggered offsets); step-not-note property rule (add-before-delete to preserve); Mutate (`Shift + Duplicate` — verify combo against claims during fact-audit; reshuffles existing notes + sample flips, repeatable, current playing pattern only, non-destructive until saved); the click track (`Shift + Clear`, level = Macro 5 in Tempo View); tempo/swing (40–240 integer internal, tap = `Shift` + Tempo/Swing ≥3 taps, swing 20–80 default 50 on even steps).
- [ ] **Step 2: Fact-audit** against dossier — pay special attention to the Mutate access combo and every velocity/gate numeric (these carry exact values 96, 16, 6, 20–80).
- [ ] **Step 3: Commit** — `git commit -m "guide: sequencing deep dive"`

### Task 7: Patterns, scenes, arrangement

**Files:**
- Create: `guide/07-patterns-scenes-arrangement.md`

**Interfaces:**
- Consumes: play semantics from Task 6; save model from Task 2.
- Produces: scene mechanics used by 09.

- [ ] **Step 1: Write the section** from dossier B-Sequencing + claims `sequencing-*`, `official-*`: Patterns View (8/track, 2 pages of 4); queued switch at pattern end vs `Shift` + pad = instant keeping position; pattern length (Step Page button 16↔32, colour states; `Clear` + Step Page reverts preserving 17–32; `Duplicate` + Step Page copies 1–16→17–32); Pattern Settings View — Start/End points (any 1–32 length, trimmed data preserved dim-red), Play Order (Forward/Reverse/Ping-pong/Random, pads 29–32), per-track Sync Rate (1/4…1/32T; 1/16 default; changes apply at cycle end; slow rates for evolving pads); chaining (contiguous only: hold lowest + press highest; 4 × 32 = 128 steps max; queued during playback); Duplicate copy rules (synth↔synth, synth↔MIDI, drum↔drum; never synth/MIDI↔drum); Pattern Octave (`Shift` + ▲/▼, red at extremes); View Lock (`Shift + Patterns`, freezes display incl. step page, all tracks/views, off at power-on); **Scenes** — 16, on Mixer View's lower rows; assign = hold `Shift` + Scene pad (gold); store per-track pattern chains **and (fw 1.2) mute states**; queued at Drum 1 pattern end; `Shift` = instant; chain scenes hold-first-press-last; non-contiguous workaround via scenes; scene-building workflow into full song arrangements; nothing persists without Save (link 02).
- [ ] **Step 2: Fact-audit** against dossier.
- [ ] **Step 3: Commit** — `git commit -m "guide: patterns, scenes, arrangement"`

### Task 8: FX, mixer, side-chain, master section, automation

**Files:**
- Create: `guide/08-fx-mixer-sidechain.md`

**Interfaces:**
- Consumes: track/colour vocabulary from Task 1.
- Produces: automation-recording rules used by 09.

- [ ] **Step 1: Write the section** from dossier B-Sound/FX + claims `sound-*`: FX View (8 reverb presets Small Chamber→Large Hall on row 3 cream; 16 delay presets Slapback→dotted/ping-pong/swung on rows 1–2 peach, all BPM-synced — include both full preset tables from claims); one global reverb + one global delay, per-track sends via macros (cream/peach LED colour tells you which); Mixer View (8 channels, level 0–127 default 100, ▼ switches macros to Pan, ▲ back; Mute on row 1; note Master Volume knob is separate/analog); Side Chain (`Shift + FX`; 7 presets + off per synth/MIDI-in track, default OFF; trigger = "key" drum 1–4; page 1 synths / page 2 MIDI-audio-in; keeps ducking at zero level but muting the key disables; classic pump recipe: long gate-16 synth note + four-on-floor Drum 1); Master Filter knob (DJ-style, both directions from center detent); master compressor (Advanced Setup View FX button per adjudication A.5, with the manual-contradiction note and `[device-check]` flag; default on); automation — record-mode macro moves captured per-pattern (synth macros, drum even-macros in V/G/P views only, FX sends, pan/level), LED red while recording, delete per-knob with `Clear` + turn ≥20%, external CC recordable too.
- [ ] **Step 2: Fact-audit** against dossier — verify both preset tables against the claims verbatim.
- [ ] **Step 3: Commit** — `git commit -m "guide: fx, mixer, side-chain, automation"`

### Task 9: Live performance playbook

**Files:**
- Create: `guide/09-live-performance.md`

**Interfaces:**
- Consumes: scenes (07), mutes/filter/FX (08), play semantics (06), clock/channels (05).

- [ ] **Step 1: Write the section** — this one *synthesizes* verified facts into jam-session practice, from dossier B + claims `midi-performance-*`, `community-*`: pre-jam checklist (charge ~4 h battery; Save Lock power-on gesture if desired; set project tempo; unbalanced TS outs → DI/line-in at −5.6 dBu max, L/Mono jack `[device-check]` mono-summing note from open-questions); starting/stopping cleanly (`Shift + Play` continue; queued vs instant pattern/scene switches); staying in key with the band (one global scale/root; changing root transposes synth+MIDI patterns live; changing scale substitutes notes — per A.4; Pattern Octave for register jumps); performance controls ranked (mutes in Mixer View → Master Filter sweeps → FX-send macros → macro rides → Mutate as re-roll); scene choreography (build song sections, queue at Drum 1 boundary, fw 1.2 mute-states); tempo alignment options (tap tempo `Shift` + Tempo/Swing; slave to external clock — auto "SYN"; be the master via Clock Tx; analog sync for Volcas/modular with the no-swing gotcha); momentary-view peeking (long-press Tempo/Swing etc.) and Sticky Shift for one-handed combos; View Lock while editing during playback; what NOT to do live (unsaved project switch discards; `Clear` is destructive-immediate; Save Lock as insurance).
- [ ] **Step 2: Fact-audit** — every mechanism cited must already appear in sections 01–08 or dossier; recommendations must be clearly separable from facts (recommendations get no page cites, facts do).
- [ ] **Step 3: Commit** — `git commit -m "guide: live performance playbook"`

### Task 10: Components & storage

**Files:**
- Create: `guide/10-components.md`

**Interfaces:**
- Consumes: data model (02), sample specs (04), template editing (05).

- [ ] **Step 1: Write the section** from dossier B-Setup/storage + claims `community-*`, `official-*`: what Components is (browser/WebMIDI + Standalone desktop app for offline); the six jobs — sample upload (48 kHz/16-bit mono target, auto-conversion, stereo-width loss warning), pack building (microSD Class 10 FAT32, 31 + internal = 32, ~1 GB full card, auto-populate vs the manual-setup support article), synth patch editing (full engine depth vs 8 macros on device), MIDI template editing (the only way to customize the 8 slots), project backup/restore, firmware updates (current 1.2 with mute-states-in-Scenes; 1.1.5 doubled sample time to 196.6 s, Tracks-exclusive; Bootloader mode = hold `Scales + Preset + Note` at power-on if an update fails); Easy Start / mass-storage mode on first USB connect and its Advanced-Setup disable; screenless-workflow aids (Components as the "screen", beppigames macro-position web tool, the 16 demo projects as dissection material); ecosystem pointers with the Isotonik Big City Dream provenance caveat and family-forum warning (from dossier Ecosystem caveats).
- [ ] **Step 2: Fact-audit** against dossier.
- [ ] **Step 3: Commit** — `git commit -m "guide: components and storage"`

### Task 11: Shortcuts reference

**Files:**
- Create: `guide/11-shortcuts.md`

**Interfaces:**
- Consumes: every combo stated in sections 01–10.
- Produces: the single-page combo tables the site's cheat sheet will derive from.

- [ ] **Step 1: Extract every `Shift +` combo, hold-gesture, and power-on gesture** from guide sections 01–10 into grouped tables: *Views* (Shift+Note expanded views, Shift+FX side-chain, Shift+Save setup, Shift+Patterns view lock…), *Editing* (Shift+Record quantise, Shift+Gate micro steps, Shift+Velocity fixed, Clear+combos, Duplicate+combos, Shift+▲/▼ pattern octave…), *Transport & performance* (Shift+Play continue, Shift+pattern/scene instant switch, Shift+Tempo tap, Shift+Clear click…), *Power-on gestures* (Shift = Advanced Setup, Shift+Save = Save Lock, Shift+Clear = blank project, Scales+Preset+Note = Bootloader). Each row: combo, effect, guide-section link.
- [ ] **Step 2: Completeness audit** — grep sections 01–10 for `Shift +`, `hold`, and `power-on`; confirm every hit has a table row; cross-check each combo against dossier once more (this table is the highest-density error surface in the guide).
- [ ] **Step 3: Commit** — `git commit -m "guide: shortcuts reference"`

### Task 12: Pitfalls & FAQ

**Files:**
- Create: `guide/12-pitfalls-faq.md`

**Interfaces:**
- Consumes: all prior sections.

- [ ] **Step 1: Write the section** from dossier (Adjudications, Ecosystem caveats, Known limitations in open-questions.md) + claims `community-*`: beginner traps (nothing saves without Save×2; no undo — Save Lock and blank-project recovery as mitigations; queued switches feel "laggy" by design; macro tweaks likely transient `[device-check]`; MIDI tracks are silent without external gear; MIDI default channels 3/4 surprise; template switch re-maps automation; scale changes affect MIDI tracks too; click state resets); known limitations (no sampling/Grid FX/Drift — those are Rhythm; no Ableton Link; one global scale; one reverb+delay; integer BPM internal; contiguous-only pattern chains with the scene workaround); troubleshooting (firmware via Bootloader mode; corrupted project → blank-project power-on; Components needs Chrome/WebMIDI or the Standalone app; support-portal 403s → Focusrite CDN URL); a short FAQ from community claims (battery life, sample memory 196.6 s, patch counts, can it control X).
- [ ] **Step 2: Fact-audit** against dossier; confirm every `[device-check]` item in open-questions.md appears here or in its topical section.
- [ ] **Step 3: Commit** — `git commit -m "guide: pitfalls and faq"`

### Task 13: Whole-guide consistency pass

**Files:**
- Modify: all `guide/*.md` as needed
- Modify: `CLAUDE.md` (Context Index), `.contexts/` (new entry)

**Interfaces:**
- Consumes: everything.

- [ ] **Step 1: Link check** — every relative link in `guide/` resolves to an existing file/anchor (`grep -o '](\\S*\\.md[^)]*)' guide/*.md` and verify each target exists).
- [ ] **Step 2: Terminology sweep** — one name per concept everywhere: "Pattern Settings" (button), "Note View"/"Expanded Note View", "sample flip", "side chain", "Scenes", "Setup View" vs "Advanced Setup View", track colour names. Fix drift.
- [ ] **Step 3: Number sweep** — grep all numerals; every count/range appears identically wherever repeated (16 scales, 128 patches, 64 samples, 8 patterns, 16 scenes, 64 projects, 40–240 BPM, 96 fixed velocity, 6 micro steps, 196.6 s…).
- [ ] **Step 4: `[device-check]` sweep** — every open-questions device item is flagged in the guide; no flagged item is stated as fact elsewhere.
- [ ] **Step 5: Create `.contexts/guide-map.md`** (one-line-per-section map of what lives where, for future sessions) and add it to CLAUDE.md's Context Index.
- [ ] **Step 6: Commit** — `git commit -m "guide: consistency pass; add guide map context"`

---

## Self-Review (completed)

- **Spec coverage:** all 12 spec-outline topics map to Tasks 1–12 (spec §Phase 2 items 1–12 → files 01–12 + README in Task 1); citation requirement → Sources blocks + fact-audit steps; "knowledge base for future Claude sessions" → Task 13 Step 5.
- **Placeholder scan:** no TBDs; every task lists its concrete fact scope and dossier sources. Content tasks carry fact lists rather than prose drafts by design — the dossier is the single source the implementer writes from.
- **Consistency:** file names in tasks match File Structure; interface references (scale table in Task 3 ← Task 5; combos in Tasks 1–10 ← Task 11) align. One deliberate unknown: the Mutate access combo is left to the Task 6 fact-audit because the dossier's claims carry it with an exact combo that must be quoted from `sequencing-*` claims at write time rather than trusted from memory here.
