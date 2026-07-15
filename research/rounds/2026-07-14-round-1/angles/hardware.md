# Round 1 research notes — angle: hardware

*Raw researcher output (Opus). Immutable — corrections go in dossier.md.*

## Circuit Tracks — Hardware & Panel Field Notes

Source of record: the official **Novation Circuit Tracks User Guide, Version 3** (PDF, focusrite/Novation downloads, © Dec 2020). Every fact below is drawn from that Tracks-specific manual unless flagged. The manual uses numbered callouts for Top View (①–⑳) and Rear View (①–⑨); I reuse those numbers.

### The 32-pad grid (Top View ①)
A **4 × 8 matrix = 32 pads**, RGB-illuminated (each pad has red, green, blue LEDs at variable intensity, so "almost any colour" can be shown), velocity-sensitive. The grid is context-dependent: depending on the selected View it is "split into logical areas." In **Note View** it acts as synth keys / MIDI notes / drum hits; in step Views the pads are the 16 (or 32) sequencer steps plus data displays. The **playback cursor** is a white pad scrolling through the pattern; it turns **red in Record mode**. When stopped, the step where the sequencer halted **pulses blue/white**.

### Knobs (top row)
- **Master Volume** (④): overall output level.
- **Master Filter** (②): large rotary with a **centre detent** and RGB LED, always active, applies a DJ-style filter to the whole mix (all 6 internal tracks + both external inputs). CCW from centre = low-pass (removes treble/highs → muffled), CW from centre = high-pass (removes bass → thin). At detent no filtering, LED dim white; LED goes **pale blue** when either filter type engages, brighter as you turn.
- **Macro controls 1–8** (③): eight multifunction rotary **encoders**, each with an RGB LED. Function changes per View. Panel legends (Oscillator, Oscillator Mod, Amp Envelope, Filter Envelope, Filter Frequency, Resonance, Modulation, FX) describe their default synth-patch role. Macro movements can be recorded/replayed into a pattern (live record). In Mixer View macros = track level (or pan via ▼); in FX View = reverb/delay send levels; in Tempo View Macro 1 = tempo, Macro 2 = swing, Macro 5 = click level.

### Track buttons (⑤) — 8 buttons
**Synth 1, Synth 2, MIDI 1, MIDI 2, Drum 1, Drum 2, Drum 3, Drum 4.** Selecting any track button always jumps to Note View for that track. This is the defining Tracks layout: 2 synth + 2 MIDI + 4 drum = 8 tracks.

### Step/function buttons (⑥ ⑦) — left column below Preset
- **Note** — Note View (enter notes/hits). Shift = **Expanded View** (doubles the synth performance-pad area; lets you play all four drum tracks simultaneously).
- **Velocity** — Velocity View. Shift = **Fixed** (disables velocity response of the pads).
- **Gate** — Gate View (how many steps a note sounds, 1–16). Shift = **Micro Step** (each step subdivides into **6 micro steps** for off-beat timing).
- **Pattern Settings** (⑦) — pattern length/start-end, playback rate vs BPM, play direction. Shift = **Probability** (assign per-step probability).

### Top utility row (left→right: ⑨ ⑮ ⑧ ⑯ ⑰ ⑱ ⑲ ⑳)
- **Scales** (⑨) — Scales View: choose one of **16 musical scales**, transpose the keyboard up/down.
- **▼ / ▲ arrows** (⑮) — in Note View shift synth/MIDI pitch by octave: **up to 5 octaves up, 6 octaves down** (independent per track). In other Views they select a second page (e.g. patterns 5–8).
- **Step Page 1-16 / 17-32** (⑧) — sets whether the pattern is 16 or 32 steps; the legend colour changes while running to show which half is displayed.
- **Tempo/Swing** (⑯) — Tempo View (Macro 1 = BPM, Macro 2 = swing). Shift = **Tap Tempo** (needs ≥3 taps; averages last 5).
- **Clear** (⑰) — deletes steps, macro automation, patterns or projects. Shift = **Click** (metronome on/off; Clear lights green=on, dim red=off).
- **Duplicate** (⑱) — copy/paste for patterns and individual steps. Shift = **Mutate** (randomises which steps the notes/hits play on).
- **Save** (⑲) and **Projects** (⑲, adjacent). Save must be **pressed twice** to store. Shift over Projects = **Packs**. Shift+Save = **Setup View**.
- **Shift** (⑳) — modifier for all second functions. **Sticky Shift**: enable in Setup View by pressing Shift; then Shift latches (bright green) until pressed again.

### Right column (⑭ ⑩ ⑪ ⑫ ⑬)
- **Preset** (⑭) — Preset View for the selected track: 128 synth patches (4 pages of 32) / 8 MIDI templates / 64 drum samples (2 pages of 32).
- **Patterns** (⑩) — Patterns View: 8 patterns per track (shown 4 at a time). Shift = **View Lock** (freeze step display of current pattern while selecting/playing others).
- **Mixer** (⑪) — Mixer View: 8-channel mixer, Row 1 = mute pads, macros = level (default) or pan (press ▼). Track volume default 100 (range 0–127).
- **FX** (⑫) — FX View: 16 delay presets, 8 reverb presets, per-track sends on macros. Shift = **Side Chain** (7 side-chain presets; drum ducks synths/inputs).
- **Record ● and Play ▶** (⑬). Play lights **bright green** in playback; Record lights **bright red** in Record mode. Record has a special momentary mode for punch-in/out. Record's shift legend = **Rec Quantise**.

### Rear panel (Rear View ①–⑨), left→right roughly
- **Outputs L/Mono & R** (①): main audio on **two ¼" TS jacks**, max +5.3 dBu (±1.5). With nothing in R, L/Mono carries a mono sum.
- **Sync** (②): **3.5 mm TRS**, 5 V analogue clock pulse, rate set in Setup View, **default 2 ppqn** (options 1/2/4/8/24 ppqn). Swing is NOT applied to the analogue sync output.
- **Headphones** (③): **3.5 mm** stereo; main outputs stay live when plugged. Drives +5 dBu into 150 Ω.
- **MIDI In, Out, Thru** (④): **full-size 5-pin DIN**, standard three-connector set (NOT TRS minijack — this is an upgrade over the original Circuit). Thru can be reconfigured in Advanced Setup to clone MIDI Out.
- **Inputs 1 & 2** (⑤): two **¼" TS unbalanced** line-level audio inputs; mixed with internal sound, can be FX-treated and ducked by drum tracks. In Mixer View, Macros 3 & 4 control their level.
- **USB-C** (⑥): power + charging + USB-MIDI (class compliant) + Components + firmware. **Does NOT carry audio.**
- **microSD** (⑦): stores/imports Packs (up to 32 packs on card).
- **Power ⏻** (⑧): soft switch, ~1-second press to power on/off (anti-accidental). Integral LED lights **green while the internal battery is charging**.
- **Kensington MiniSaver** (⑨): security lock slot.

### Power / battery
Three power sources: computer USB 3.0 (USB-C), supplied **AC adaptor (5 V DC, 2 A, interchangeable plug heads)** via USB-C, or the internal **non-removable, non-replaceable Lithium-ion battery**. Battery life **up to 4 hours**; recharge time up to 4 hours. **Low-battery warning** appears when capacity drops below 15% (a red battery-shaped grid graphic). In box: unit, USB-A→USB-C cable (1.5 m), safety sheet, AC adaptor.

### Boot-up light show
Long-press power → ~5 s boot display (yellow "C"-like pattern), then pads sweep from **pale red to bright green top-left→bottom-right** indicating Pack loading, then normal grid.

### Setup View (Shift + Save; exit with Play)
Global settings, normal operation suspended:
- **Pad 24** (illuminated white) = brightness toggle; dims pads ~50% (saved at power-down).
- **Top two rows, pads 1–16** = MIDI channel of the currently selected track. Any track can be set to **channels 1–15**; **channel 16 is reserved for the Project**. No two tracks may transmit on the same channel. Factory defaults: **Synth 1 = ch 1, Synth 2 = ch 2, MIDI 1 = ch 3, MIDI 2 = ch 4, all Drums = ch 10.**
- **Row 3, pads 17–21** = analogue Sync-out rate: 17 = 1 ppqn, **18 = 2 ppqn (default)**, 19 = 4, 20 = 8, 21 = 24.
- **Pads 25–32** = independent MIDI Rx/Tx toggles in four coloured pairs: 25 Note Rx / 26 Note Tx (**green**), 27 CC Rx / 28 CC Tx (**orange**), 29 PGM Rx / 30 PGM Tx (**purple**), 31 Clock Rx / 32 Clock Tx (**pale blue**). All Rx/Tx default ON. Clock Rx OFF = internal clock only; Clock Rx ON = AUTO (slaves to external MIDI clock at MIDI In or USB if present). Clock Tx ON = Circuit is clock master out USB + MIDI Out.

### Advanced Setup View (hold Shift while powering on; exit with Play; grid unlit)
- **Note button** toggles Easy Start / Mass Storage Device (bright green = on, dim red = off).
- **Duplicate button** toggles MIDI Thru behaviour (bright green = acts as second MIDI Out, dim red = normal hardware Thru).
- **FX button** toggles the Master Compressor (bright green = on, dim red = off).

### Other power-on / hidden gestures
- **Save Lock**: hold **Shift + Save while powering on** to toggle (Save button stays unlit when locked; persists across power cycles; default off).
- **Load blank project** (recover from corruption): hold **Shift + Clear while powering on**.
- **Bootloader Mode** (engineering/firmware): power off, hold **Scales + Preset + Note**, power on; exit with **Play**.

### Tempo & swing specifics
Internal tempo range **40–240 BPM (integers only), default 120**. When slaved to external MIDI clock it follows **30–300 BPM including fractional** values. External clock auto-detected; grid shows "SYN" in red if you try Macro 1 while slaved. Swing range **20–80, default 50**; below 50 advances even (off-beat) steps, above 50 delays them.

### Colour/brightness language (summary)
RGB pads communicate state by hue + brightness: track colours identify tracks; bright green Play = running; bright red Record = recording; white cursor = playhead; pulsing white = queued/selected; dim vs bright = level/on-off (e.g., mute dims a pad, Setup toggles bright=on/dim=off). Macro LEDs adopt the track colour and dim as level drops; pan shows white at centre, blue left, pink right.

### Cross-device caution
The DIN MIDI trio, the two MIDI tracks, and the two ¼" audio inputs are **Tracks-specific** and distinguish it from the original Circuit (2015, TRS-minijack MIDI, no MIDI tracks, no audio inputs) and from Circuit Rhythm (sampler). All facts here are from the Tracks V3 manual, so device confusion is avoided.
