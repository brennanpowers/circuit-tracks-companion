# 4. Drum tracks — samples, sample flip, drum macros

Four independent drum tracks — **Drum 1** (orange), **Drum 2** (yellow), **Drum 3**
(purple), **Drum 4** (aqua) — each a full sequencer track playing **one active sample
from a pool of 64**. There is **no on-device sampling**; the 64 slots are loaded from
the pack, replaceable via Components ([section 10](10-components.md)).

## Samples and the default kit

Samples appear as 4 pages of 16 in Note View, or 2 pages of 32 in Preset View
(track button → `Preset`). Each 16-slot page is organized as a kit:

| Slots | Contents | Slots | Contents |
|---|---|---|---|
| 1–2 | Kicks | 7–8 | Open hats |
| 3–4 | Snares | 9–12 | Percussion |
| 5–6 | Closed hats | 13–16 | Melodic |

Defaults: Drum 1 = Kick 1 (slot 1), Drum 2 = Snare 1 (slot 3), Drum 3 = Closed
Hat 1 (slot 5), Drum 4 = Perc 1 (slot 9).

**Tap** a sample pad = make it the track's active sample. **Long-press** = audition it
without reassigning. Note the quirk: with the sequencer **stopped**, drum hits are
silent in Note View — audition steps from Velocity or Gate View, or just press Play.

## Programming beats

In Note View the top rows are the 16 steps; tap to place a hit with the active sample
(bright blue). Live-record instead via `Record` — and for the full kit at once, use
**Expanded Drum View** (`Shift + Note`): every pad goes dark except **29–32, which
become live pads for Drums 1–4 simultaneously**. Non-quantised capture: `Shift +
Record` (with Shift held, drums show bright green = quantised, dim red = not).

## Sample flip — the 4-voices-that-sound-like-more trick

One sample per track would be limiting; **sample flip assigns a different sample to
individual steps**: hold a **sample pad** (it turns red), then tap the step pads that
should play it (they turn red while held). Flipped steps show **pink** in the pattern
display vs bright blue for active-sample hits. Per track, per step — this is the
community's canonical answer to "only 4 drum tracks", and Mutate reshuffles flips
along with everything else ([section 6](06-sequencing.md)).

Step-programmed drum hits always use fixed velocity; velocity, gate, probability, and
micro-steps are all editable per step afterwards. In Gate View, pads 17–22 toggle each
of a step's **6 micro-steps individually** — multiple micro-hits on one step =
ratchets/rolls (all sharing the step's velocity and sample).

## Drum macros

Only the **even** macros work on drum tracks, with fixed functions (patches can't
remap them, unlike synths):

| Macro | Function |
|---|---|
| 2 | Pitch (continuous — no note quantisation, so melodic pitched playback is impractical) |
| 4 | Decay envelope time |
| 6 | Distortion |
| 8 | EQ |

Odd macros are inactive. Macro moves record as automation, but on drum tracks
**only while in Velocity, Gate, or Probability view**.

External control: drum sample selection responds to MIDI CC on **channel 10** (all
four drums share it) — see the Programmer's Reference for the map.

## Sources

User Guide v3 p60–71. Dossier: `sound-18–24`, `official-8, 36, 39`, `sequencing-38–39`,
`community-19, 28`; dossier B (Sequencing & patterns).
