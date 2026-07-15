# 8. FX, mixer, side-chain, master section, automation

## FX View

`FX` button. One global **delay** and one global **reverb** engine, shared by all
tracks through per-track sends. Preset selection is the only sound control — there's
no direct access to time/feedback/decay on the hardware (deeper parameters exist over
MIDI Ch 16 NRPN; see [section 5](05-midi-tracks.md)).

**Delay — 16 presets, all BPM-synced** (rows 1–2, peach pads, increasing complexity):
Slapback Fast · Slapback Slow · 32nd Triplets · 32nd · 16th Triplets · 16th ·
16th Ping Pong · 16th Ping Pong Swung · 8th Triplets · 8th Dotted Ping Pong · 8th ·
8th Ping Pong · 8th Ping Pong Swung · 4th Triplets · 4th Dotted Ping Pong Swung ·
4th Triplets Ping Pong Wide.

**Reverb — 8 presets** (row 3, cream pads, increasing size): Small Chamber ·
Small Room 1 · Small Room 2 · Large Room · Hall · Large Hall · Hall Long Reflection ·
Large Hall Long Reflection.

**Sends:** in FX View the 8 macros set per-track send level for whichever effect you
touched last — the macro LEDs tell you which: **cream = reverb sends, peach = delay
sends**. Sends are automatable.

## Mixer View

`Mixer` button. Eight channels; macros control **level** (default 100, range 0–127).
Press `▼` to flip the macros to **pan** (LED white = centre, blue = left, pink =
right), `▲` back to level. Macros 3 and 4 govern **external Inputs 1/2** when their
MIDI tracks are selected contexts ([section 5](05-midi-tracks.md)). Level and pan are
both automatable.

**Row 1 pads = per-track mutes** (pad dims when muted). **There is no solo.** Bonus:
a muted track's step pads go inactive and become a **live playing surface** — play
keys or drum hits in real time over the mix ([section 9](09-live-performance.md)).

The lower two rows are the Scene pads ([section 7](07-patterns-scenes-arrangement.md)) —
Mixer View is deliberately the live cockpit: mutes, levels, and scene launching on one
screen.

## Side-chain

`Shift + FX` → Side Chain View. Classic pump: drum hits duck synths or the external
inputs.

- Page 1 = Synth 1/2; page 2 = the external inputs (MIDI 1/2 rows); `▼`/`▲` to
  switch pages.
- Per source row: pad 1 = OFF (red, the default), pads 2–8 = **7 ducking presets**.
  Top-row pads 5–8 pick the trigger — the "**key**" drum (Drum 1–4).
- The key drum keeps triggering even with its mixer level at **zero** (silent
  side-chain pumping from a ghost kick!) — but **muting** it disables triggering.
- Demo the effect: give a synth a gate-16 drone note, four-on-the-floor on Drum 1,
  then step through presets.

## Master section

- **Master Filter knob:** centre detent = off (LED dim white); anticlockwise = 
  low-pass, clockwise = high-pass (LED pale blue). Always active, affects everything
  including external inputs. Remote: CC74 (freq) / CC71 (res) on Ch 16.
- **Master compressor:** on by default, not adjustable, whole-mix. Toggled with the
  `FX` button inside **Advanced Setup View** (hold `Shift` while powering on; green =
  on). `[device-check]` The manual also references plain Setup View for this toggle —
  its own pages disagree (dossier A.5); check on the unit.
- **Master Volume knob:** analogue output level, downstream of everything.

## Automation

Any macro move made **in Record mode** is captured into the playing pattern —
synth macros, drum macros (even knobs, and only from Velocity/Gate/Probability
views), FX sends, mixer level/pan, MIDI-track CCs. Mechanics:

- LED turns **red** while a knob is writing.
- **Exit Record before the loop comes around**, or the pass overwrites itself with
  the knob's resting position.
- Step-precise automation without playback: stopped, in Note View, press `Record`,
  hold a step pad, turn the macro.
- **Delete one macro's automation:** hold `Clear` + turn that knob ≥20% of a
  rotation (LED red confirms) — clears it for the entire pattern.
- External controllers can write automation too: incoming CC in Record mode is
  captured like a knob move.

## Sources

User Guide v3 p88–94, p102, p106. Dossier: `sound-25–35`, `official-16–18`,
`hardware-3, 10, 32–34`, `sequencing-5–7`, `midi-performance-22–25, 32`,
`community-20, 30–31, 35`, adjudication A.5; dossier B (Sound engine & FX).
