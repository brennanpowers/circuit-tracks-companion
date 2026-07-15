# 3. Synth tracks — patches, macros, scales

Two identical synth tracks: **Synth 1** (violet) and **Synth 2** (pale green). Each is
**6-voice polyphonic** — up to six notes on a single step. Out of the box, factory
projects load Synth 1 with a *monophonic* patch (bass duty) and Synth 2 *polyphonic*
(keys/chords) — a default, not a restriction.

The engine is Novation's Nova family (dual-oscillator virtual-analogue/wavetable, the
MiniNova lineage). It shines at digital pads, wavetable leads, and gnarly basses;
reviewers agree it's not a convincing vintage-analog emulation. Full engine depth —
2 oscillators × 30 waveforms each, noise, ring mod, multimode filters, 3 envelopes,
2 LFOs, per-patch insert FX — is editable **only in Components' Synth Editor**
([section 10](10-components.md)). On the hardware you get the 8 macros.

## Note View — the playing surface

Press a synth's track button → Note View. Top two rows = the 16 pattern steps
(notes lit bright blue); bottom two rows = a two-octave keyboard laid out in the
current scale. The two keyboard rows overlap by one note: **pad 32 (top of the lower
row) is the same pitch as pad 17 (bottom of the upper row)** — a two-octave ascending
run goes pads 25→32 then 18→24.

- **Octaves:** `▼`/`▲` shift the track's keyboard — up to 5 octaves up / 6 down,
  independent per track, ~10 octaves of total range.
- **Expanded Note View:** `Shift + Note` (the **Note button** turns gold). Drops the
  step display for a **4-octave keyboard** — the manual's preferred way to live-record.
  Press `Note` to toggle back.
- **Transpose a recorded pattern:** `Shift + ▼/▲` shifts the whole pattern by octave
  (button lights red at the range extremes when notes can't shift further).

## Scales — where your theory pays off

Press `Scales`. Pads 17–32 select among **16 scales**:

| Pad | Scale | Pad | Scale |
|---|---|---|---|
| 17 | Natural Minor | 25 | Blues |
| 18 | Major | 26 | Minor Pentatonic |
| 19 | Dorian | 27 | Hungarian Minor |
| 20 | Phrygian | 28 | Ukrainian Dorian¹ |
| 21 | Mixolydian | 29 | Marva |
| 22 | Melodic Minor (ascending) | 30 | Todi |
| 23 | Harmonic Minor | 31 | Whole Tone |
| 24 | Bebop Dorian | 32 | Chromatic |

¹ the manual spells it "Ukranian".

The top rows select the **root note** (default C — pad 9, lit darker blue) on a
C-to-B chromatic layout: white notes on pads 9–16, black notes on pads 2/3/5/6/7.

Rules that matter:

- **One scale + root per project**, applied to *both* synth tracks **and both MIDI
  tracks** simultaneously. There is no per-track key.
- **Root change = transpose.** Existing patterns move with it, non-destructively.
- **Scale change = substitution.** Notes absent from the new scale get remapped
  (typically ~a semitone) and **revert when you switch back** — audition scales
  freely, nothing is destroyed. Both changes work during playback.
- **Chromatic** (the only 12-note scale) collapses the keyboard to one octave (two in
  Expanded) in a piano-style layout matching the root-selection pads.
- Notes arriving from an **external MIDI controller snap to the scale** — play in
  Chromatic if you want your controller's actual pitches ([section 5](05-midi-tracks.md)).

## Patches

Press `Preset` → Patch View. **128 patches per synth, 4 pages of 32** (`▼`/`▲` to
page). Synth 1 defaults to Patch 1 (page 1, pad 1); Synth 2 defaults to Patch 33 —
**which lives on page 2, pad 1**, even though the manual claims Preset View "opens at
page 3" for Synth 2 (a documented Novation error — patches 65–96 are on page 3;
dossier adjudication A.3).

- Selecting a patch **auditions it** (Patch Preview) in the current scale/root.
  `Shift` + patch pad selects **silently** — for live use.
- External patch recall: MIDI Program Change 0–63 on Ch 1 (Synth 1) / Ch 2 (Synth 2).

## Macros on synths

Each patch maps up to 4 parameters per macro knob, with the panel's default legend
(Oscillator, Oscillator Mod, Amp Envelope, Filter Envelope, Filter Frequency,
Resonance, Modulation, FX) as the *typical* — not guaranteed — assignment. Tweaks are
live sound-shaping; in Record mode they're captured as per-pattern automation
([section 8](08-fx-mixer-sidechain.md)). `[device-check]` Un-recorded tweaks are
believed to reset to the patch's saved state on project reload.

## Sources

User Guide v3 p27–38. Dossier: `sound-1–17`, `official-2–7, 38`, `hardware-29–31`,
`sequencing-37, 41`, adjudications A.3, A.4, A.6, A.8; dossier B (Sound engine & FX).
