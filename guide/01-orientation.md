# 1. Orientation — panel, signal flow, interaction model

## What it is

Circuit Tracks is a battery-powered groovebox: an 8-track pattern sequencer wrapped
around a 6-voice polysynth engine (×2 tracks), a 4-track sample-based drum machine,
and a 2-track external MIDI sequencer. There is no screen; state is communicated
entirely through pad and button colour. There is no on-device sampling — samples and
deep patch editing live in Novation Components ([section 10](10-components.md)).

## Signal flow (mental model)

Six internal audio sources (2 synths + 4 drums) plus **two external audio inputs**
feed per-track sends into one global delay and one global reverb, then the 8-channel
mixer (level, pan, mute). Drums can duck synths/inputs via side-chain. The whole mix —
external inputs included — then passes the master section: a default-on master
compressor, the big **Master Filter** knob (LP one way, HP the other), and the
analogue **Master Volume** knob, out to the unbalanced 1/4″ jacks. The two MIDI
tracks produce no audio; their macros repurpose to control the external inputs in
Mixer/FX views — the intended loop is *sequence an external synth over MIDI, return
its audio into Inputs 1/2* ([section 5](05-midi-tracks.md)).

USB-C carries **no audio** — recording into a DAW means the analogue outs.

## Panel map

**The grid** — 32 velocity-sensitive RGB pads in 4 rows of 8. What the rows mean is
view-dependent; the recurring layout in Note View is *top two rows = 16 pattern steps,
bottom two rows = playing surface*.

**8 macro encoders** — endless rotaries with RGB LEDs. Function changes per view:
synth patch parameters in Note View (default labels: 1 Oscillator, 2 Oscillator Mod,
3 Amp Envelope, 4 Filter Envelope, 5 Filter Frequency, 6 Resonance, 7 Modulation,
8 FX — patches can reassign all of them), drum parameters (even macros only), mixer
levels/pan, FX sends, tempo/swing/click level in Tempo View. Macro movements are
recordable as automation.

**Master Filter** — large knob, centre detent (LED dim white = no filtering).
Anticlockwise = low-pass, clockwise = high-pass (LED pale blue when active). Always
active, affects the entire mix including external inputs.

**Master Volume** — analogue overall output level, separate from mixer track levels.

**8 track buttons** — Synth 1, Synth 2, MIDI 1, MIDI 2, Drum 1–4. Pressing a track
button always jumps to **Note View** for that track.

**Step-edit buttons** — `Note`, `Velocity`, `Gate`, `Pattern Settings`. Each has a
Shift/second-press function: `Shift + Note` = Expanded views, `Shift + Velocity` =
Fixed Velocity, `Shift + Gate` = Micro Steps, `Shift + Pattern Settings` =
Probability. (The manual's glossary calls this group "Note, Velocity, Gate and
Probability" — the physical fourth button is labelled Pattern Settings.)

**Function buttons** — `Scales`, `Preset` (patches/samples/templates), `Step Page`
(1-16/17-32), `Patterns`, `Mixer`, `FX`, `Record`, `Play`, `Tempo/Swing`, `Clear`,
`Duplicate`, `Save`, `Projects`, `Shift`, and the `▼`/`▲` arrows (octave shift in
Note View; page selector in Patterns/Side Chain/Mixer views).

## The interaction model (learn this first)

- **Short press latches, long press peeks.** Most view buttons switch the grid
  permanently on a short press, but a **long press shows the view only while held** —
  e.g. long-press `Tempo/Swing` mid-jam to glance at BPM, release to snap back.
  `Record` is the special case: its momentary mode (hold > ~½ s) is punch-in/punch-out.
- **`Shift` modifies nearly everything.** Every combo is tabulated in
  [section 11](11-shortcuts.md). If holding Shift is awkward, **Sticky Shift** (enable
  in Setup View by pressing Shift) makes it latch.
- **Colour is the interface.** Dim = available, bright = active/selected. The playback
  cursor sweeps as a white pad (red while recording). `Play` lights bright green when
  running; `Record` bright red when armed.

**Track colours (used consistently everywhere):**

| Track | Colour | Track | Colour |
|---|---|---|---|
| Synth 1 | Violet | Drum 1 | Orange |
| Synth 2 | Pale green | Drum 2 | Yellow |
| MIDI 1 | Blue | Drum 3 | Purple |
| MIDI 2 | Pink | Drum 4 | Aqua |

## Rear panel

| Connector | Details |
|---|---|
| Outputs L/Mono, R | 1/4″ TS **unbalanced**, max +5.3 dBu. Nothing in R → L/Mono carries a mono sum |
| Inputs 1, 2 | 1/4″ TS unbalanced line inputs; mixed, FX-capable, duckable. Printed "Sample In R · L/Mono" on later units (early units: "Inputs 2 · 1") — same jacks, and no, Tracks still can't sample |
| Headphones | 3.5 mm stereo; mains stay active; drives +5 dBu into 150 Ω |
| MIDI In / Out / Thru | Full-size 5-pin DIN; Thru reconfigurable as second Out (Advanced Setup) |
| Sync Out | 3.5 mm TRS, 5 V pulse; 1/2/4/8/24 ppqn (default 2); swing never applied |
| USB-C | Power/charging + class-compliant MIDI. **No audio** |
| microSD | Packs storage (Class 10+, FAT32) |
| Power button | ~1 s press on/off; LED green while charging |
| Kensington MiniSaver | Security slot |

## Power and battery

Three ways to run it: computer USB port (charging requires **USB 3.0**), the supplied
AC adaptor (5 V DC 2 A, USB-A, interchangeable plug heads, 1.5 m USB-A→C cable
included), or the internal battery — non-removable Li-ion, **up to 4 h** run, up to
4 h recharge, red low-battery grid symbol below 15%. A USB battery bank works fine for
gigs. Boot shows ~5 s of animation, then pads flip pale-red → green top-left to
bottom-right as the pack loads.

## Sources

User Guide v3 p5–21, p28, p34, p88–94, p102–106. Dossier: `hardware-1…5, 14–21, 24,
28–29, 34–36, 38–40`, `official-1–2, 9, 18, 20–22`, `sound-10, 33, 35–38`,
`community-32, 36 (adjudicated A.9)`, adjudications A.1, A.9, A.10, A.11; dossier B
(Hardware & interaction model).
