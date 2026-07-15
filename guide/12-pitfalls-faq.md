# 12. Pitfalls, limitations, FAQ

## The traps every beginner hits

1. **Nothing autosaves, and there is no undo.** Save is a deliberate double-press;
   powering off loses everything since the last save. Habits that fix it: save to a
   *new* slot as a checkpoint before experiments, `Duplicate` a pattern before
   `Mutate`, engage Save Lock at gigs. ([§2](02-data-model.md))
2. **`Clear` is instant and permanent** — steps, automation, patterns, projects.
   There's no confirmation dialog on a device with no screen.
3. **Queued switching feels laggy on purpose.** Pattern/scene/project taps wait for a
   musical boundary. `Shift` + pad when you genuinely want *now*.
4. **MIDI tracks are silent.** Nothing wrong with your unit — they sequence external
   gear only. ([§5](05-midi-tracks.md))
5. **MIDI tracks default to channels 3/4,** not 1/2. External synth not responding?
   Check its receive channel first.
6. **Scale changes reach your external gear too** — the global scale/root applies to
   MIDI tracks. Handy at a jam, baffling when unaware.
7. **Switching MIDI templates re-targets existing automation** rather than deleting
   it — recorded curves now send the new template's CCs.
8. **Recording a macro ride over a looping pattern overwrites itself** if you stay in
   Record past the loop point — punch out before the pattern comes around.
9. **The click plays to the audience** — it ticks on all outputs, and its on/off
   state resets every power cycle (the level doesn't).
10. **Synth 2's default patch is on page 2,** whatever the manual says about page 3.
    ([§3](03-synth-tracks.md), dossier A.3)
11. **Live macro tweaks are (believed) transient** `[device-check]` — unrecorded knob
    positions likely revert to the patch's saved state on reload. Record the move or
    re-save the project to keep it.
12. **No screen = memory exercise.** Scale names, patch names, and knob values are
    invisible — the most-cited adjustment for new owners. Components is the screen;
    the demo projects are the tutorial. ([§10](10-components.md))

## Hard limitations (design, not defects)

- **No sampling, no resampling, no audio over USB.** Sampling and Grid FX/Drift
  belong to Circuit *Rhythm*; stem capture means recording the analog outs per track.
- **No Ableton Link** — MIDI clock or analog sync only.
- **One global scale and root per project** — no per-track keys, and key changes
  within a saved arrangement take a live root-change or a second project.
- **One reverb + one delay** globally, preset-select only (no hands-on time/feedback;
  deeper editing over MIDI NRPN only).
- **Integer BPM internally** (fractional only when slaved).
- **Pattern chains must be contiguous** — Scenes are the sanctioned workaround.
- **MIDI channels are global,** not per-project.
- **Drum pitch is continuous** (Macro 2) with no note quantisation — melodic sample
  playing is impractical; that's what the synths are for.
- **8 patterns/track + 16 scenes** caps self-contained songs around the 3–4 minute
  mark before repetition — owners arrange longer pieces across projects
  (tempo carries over when switching mid-playback, [§2](02-data-model.md)).
- **No solo** in the mixer — invert your mutes.

## Troubleshooting

| Symptom | Fix |
|---|---|
| Won't load a project / hangs at boot | Power on holding `Shift + Clear` → blank project ([§2](02-data-model.md)) |
| Firmware update failed / version unknown | Bootloader Mode: power on holding `Scales + Preset + Note` ([§10](10-components.md)) |
| Save button dead/unlit | Save Lock is on — power on holding `Shift + Save` to toggle ([§2](02-data-model.md)) |
| External synth ignores the sequencer | Its receive channel vs MIDI track's channel (default 3/4); check Setup View Tx toggles ([§5](05-midi-tracks.md)) |
| Controller plays "wrong" notes | Scale snapping — switch to Chromatic ([§3](03-synth-tracks.md)) |
| Volca/modular won't lock | Sync Out rate mismatch — set 1/2/4/8/24 ppqn in Setup View ([§5](05-midi-tracks.md)) |
| Stopped and showing SYN | External clock vanished — press `Play` to run internally ([§5](05-midi-tracks.md)) |
| Components won't connect | Needs Chrome/Opera (Web-MIDI) or the Standalone app; no iOS ([§10](10-components.md)) |
| Official manual link 404s/403s | Use the Focusrite CDN URL in [README](README.md) |

## FAQ

**How long does the battery last?** Up to ~4 hours; recharges in about 4 (USB 3.0
port or the supplied adaptor). A USB power bank works live.

**How much sample memory?** 196.6 s per pack total, 98.3 s max per sample, 48 kHz/
16-bit/mono (firmware 1.1.5+).

**How many sounds?** 128 synth patches per synth per pack, 64 drum samples per pack,
16 scales, 8 reverbs, 16 delays.

**Can it control my DAW?** It sends notes/CC/clock over USB-MIDI, so yes as a
sequencer/clock source; it isn't a control surface and carries no audio over USB.

**Tracks vs the original Circuit?** Tracks adds the 2 dedicated MIDI tracks, audio
inputs, USB-C + internal battery (the 2015 Circuit ran on 6×AA), microSD packs,
doubled projects (64), and more sample time. Tutorials for the original mostly
translate — but verify anything device-specific here first.

**Why does my rear panel say "Sample In"?** Later production units print the two
line inputs "Sample In R · L/Mono" (sharing the Rhythm's panel print); early units
say "Inputs 2 · 1". Identical function — and Tracks cannot sample either way.

**Is my firmware current?** 1.2 (Dec 2022) is the latest official release; Components
prompts when out of date.

## Sources

Dossier: `community-3–40 (throughout)`, `official-30, 33–34, 40`, `hardware-11–13, 20`,
`sequencing-25, 36`, `midi-performance-16, 18, 29–30, 33`, adjudications A.3, A.5,
A.7; dossier B (Ecosystem caveats); `research/open-questions.md` (device checks,
known limitations).
