# 6. Sequencing deep dive — steps, gate, velocity, probability, micro steps, Mutate

Everything here applies to synth, MIDI, *and* drum tracks except where noted.

## Getting notes in

**Two ways, and only one needs Record mode:**

1. **Step entry (no Record needed):** hold a **step pad** + press a **keyboard pad**
   to add a note (stack up to 6 per step); repeat the same combo to delete that note.
   `Clear` + step pad wipes every note on the step (all octaves).
   `Duplicate` + source step + destination step(s) copies notes **and all step
   attributes**, overwriting the destination.
2. **Live record:** press `Record` (bright red) and play. Notes commit as you go.
   Hold Record longer than ~½ s and it punches **out** on release — quick punch-in/out.
   Recording a macro move? Exit Record before the pattern loops or the pass overwrites
   itself with the knob's resting position.

**Quantise:** `Shift + Record` toggles Rec Quantise. Non-quantised recording lands
notes on **micro steps** (6 per step). Check state by holding `Shift`: Record green =
quantised, red = non-quantised (drums: bright green / dim red).

**Play semantics (worded precisely — the manual trips people here):** `Play` is a
stop/start toggle. Starting with `Play` always restarts at step 1 (or the pattern's
Start Point). **`Shift + Play` starts from wherever you stopped** — patterns, chains,
and freshly-switched projects alike.

## Velocity

`Velocity` button → Velocity View. Select a step; pads 17–32 show its velocity as a
16-pad meter in increments of 8 (1 pad = 8 … 16 pads = 127). Live recording keeps
full 0–127 resolution. Notes stacked on one step can hold **different** velocities
(view shows: bright = the step's lowest, dim = highest).

**Fixed Velocity** — `Shift + Velocity`: locks entry at velocity **96** (12 pads).
Global across all tracks, does not alter existing notes.

## Gate

`Gate` button → Gate View. Gate = how long a note sustains, **1/6 to 16 steps in 1/6
increments** (96 values). Set whole steps by tapping the meter; subtract sixths by
re-pressing the highest lit pad (each press −1/6, the 6th press reverts). Empty steps
have gate 0 and can't be edited. Gate 16 sustains through an entire 16-step pattern.

**Ties/drones:** select the step in Gate View, switch to Micro Step View, toggle
**pad 24** (tie-forward). The gate must reach the next note. Tied notes show orange
(not red) when the step is held in Note View. Trap: a note *added* to an already-tied
step doesn't inherit the tie — toggle tie-forward off and on again so every note on
the step ties.

## Probability

`Shift + Pattern Settings` (or press Pattern Settings twice) → Probability View.
Per-step trigger chance on an 8-level meter (pads 17–24): **100 / 87.5 / 75 / 62.5 /
50 / 37.5 / 25 / 12.5%**. All notes on a step live or die together. Clearing a
step/pattern/project — or live-recording onto the step — resets it to 100%.
Instant controlled variation; jam gold on hi-hats.

## Micro steps

`Shift + Gate` (or press Gate twice) → Micro Step View. Each step subdivides into
**6 ticks**; a note can sit 0–5 ticks late (pad 1 of the six = on the beat). Up to 6
notes on a step display left-to-right in entry order and nudge **individually** —
triplet feels, strummed chords (stagger a chord's notes by ticks), humanized timing.
On drums, Gate View pads 17–22 toggle each micro-step on/off → ratchets and rolls.

## Mutate

**`Shift + Duplicate`.** Shuffles the existing notes/hits of the **currently playing
pattern** onto different steps — reassigning micro steps, gates, sample flips,
probability, and automation with them — without changing note count or sounds. Press
again for a fresh roll. Only the playing pattern of the current track is affected;
other patterns in a chain are untouched. **Cannot be undone** — `Duplicate` the
pattern to a spare slot first if you like the original.

## Tempo, swing, click

`Tempo/Swing` button → Tempo View: Macro 1 = BPM (40–240, integers, default 120;
grid shows big digits), Macro 2 = swing (**20–80, default 50** — below 50 advances
the even/off-beat steps, above 50 delays them), Macro 5 = click level.
**Tap tempo:** hold `Shift` + tap `Tempo/Swing` ≥3 times (averages the last 5).
**Click:** `Shift + Clear` (Clear green = on), quarter-note ticks on all outputs;
on/off resets at power-off, level persists. External clock: [section 5](05-midi-tracks.md).

## Sources

User Guide v3 p35–57, p64–68, p85–87. Dossier: `sequencing-2–19, 25, 37–39`,
`official-13–15, 31–32, 37`, `hardware-7, 25–27`, `community-13–14, 17–18`,
adjudication A.2; dossier B (Sequencing & patterns).
