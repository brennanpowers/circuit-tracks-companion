# 7. Patterns, Scenes, and arrangement

## Patterns View

`Patterns` button. Each track has **8 pattern slots**, shown 4 at a time in 8 track
columns (`▼`/`▲` for patterns 1–4 / 5–8). Tap a pattern while playing to **queue** it
(pad flashes; starts when the current pattern ends). **`Shift` + pad switches
instantly**, jumping in at the equivalent step so nothing drifts.

## Length, start/end, direction, speed

- **16 ↔ 32 steps:** the `Step Page` button (legended 1-16/17-32) doubles a pattern
  to 32 steps. While running a 32-step pattern its legend shows which half you're
  seeing (blue = steps 1–16, orange = 17–32). `Clear + Step Page` reverts to 16
  **preserving** the data in 17–32; `Duplicate + Step Page` extends to 32 copying
  steps 1–16 into 17–32, automation included.
- **Any length 1–32:** in **Pattern Settings View**, tap a step pad to move the
  **end point** (default 16); `Shift` + pad moves the **start point**. Independent per
  track. Trimmed-off steps keep their data (glow dim red) and come back if you move
  the end point out again.
- **Play order:** Pattern Settings pads 29–32 = Forward (default) / Reverse /
  Ping-pong / Random.
- **Sync rate:** Pattern Settings third row (pads 1–8) = 1/4, 1/4T, 1/8, 1/8T,
  **1/16 (default)**, 1/16T, 1/32, 1/32T — a per-track BPM multiplier/divider. Halve
  a pad track's rate for evolving slow lines over a busy beat; polyrhythms via
  mismatched rates.
- Order/rate changes made during playback take effect at the **end of the current
  cycle**, never mid-cycle.

## Pattern chains

Hold the **lowest** pattern pad, press the **highest**: those patterns loop in order.
Chains must be **numerically contiguous** (1-2-3, never 1-2-6 — Scenes are the
workaround). Up to 8 patterns × 32 steps = **256 steps** per track. Each track loops
its own chain independently; the longest chain defines the overall cycle and shorter
ones repeat to fill it — instant polymeter.

**Copying patterns:** `Duplicate` works synth↔synth, synth↔MIDI, drum↔drum — never
between a synth/MIDI track and a drum track.

**Whole-pattern transpose:** `Shift + ▼/▲` in any step view shifts a synth/MIDI
pattern by octave (red = at range limit).

## View Lock

`Shift + Patterns`: freezes the step display on the current pattern/page while
playback moves elsewhere — edit pattern 1 while pattern 3 plays, or pin one half of a
32-step pattern. Applies across tracks and Note/Velocity/Gate views. Resets to off at
power-on; never saved.

## Scenes — the arrangement layer

Scenes live in **Mixer View**: the lower two rows (pads 17–32) are **16 scene pads**
(Scene 1 pulses green by default). A scene stores **every track's pattern chain** —
and, since firmware 1.2, **mute states** too (no more empty patterns just to silence
a track).

- **Assign:** set up your chains in Patterns View, then in Mixer View hold `Shift`
  (scene pads dim gold) and tap a scene pad (bright gold; white once Shift is
  released).
- **Launch:** tap a scene pad. Queued scenes flash green and take over at the end of
  the **currently playing Drum 1 pattern**, in sync. `Shift` + pad = instant.
- **Chain scenes:** hold the first pad, press the last — they play in numerical order
  and repeat: verse-chorus song structure from 16 snapshots.
- Scenes also defeat the contiguous-chain rule: a scene can point at any patterns.

Typical song workflow: build parts as patterns → group them into chains → snapshot
sections as Scenes 1–16 → chain scenes for the arrangement → perform mutes/FX on top
([section 9](09-live-performance.md)). Then **save** — scenes persist only with an
explicit Save ([section 2](02-data-model.md)).

## Sources

User Guide v3 p53–56, p73–84. Dossier: `sequencing-20–24, 26–34, 36, 40–41`,
`official-10–12, 34`, `hardware-36, 41`, `community-9–11, 15, 38`,
`midi-performance-20–21`; dossier B (Sequencing & patterns).
