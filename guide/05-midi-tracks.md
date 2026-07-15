# 5. MIDI tracks — templates, channels, external gear

**MIDI 1** (blue) and **MIDI 2** (pink) are full sequencer tracks with no internal
sound: notes, per-step velocity/gate/probability/micro-steps, Mutate, pattern
settings, and automation all work exactly as on the synths — but the output is MIDI
to external gear, over both 5-pin DIN and USB.

The intended loop: **sequence an external synth from a MIDI track, return its audio
into Inputs 1/2.** On a MIDI track, the macros in Mixer and FX views control those
external inputs (level via Macros 3/4, pan, reverb/delay sends), and the inputs can
even be side-chain-ducked by the drums — external gear becomes a first-class mixer
citizen.

## Channels

| Source | Default channel |
|---|---|
| Synth 1 / Synth 2 | 1 / 2 |
| MIDI 1 / MIDI 2 | **3 / 4** (not 1/2 — a classic setup surprise) |
| Drums 1–4 (shared) | 10 |
| Project control | 16 (reserved, unassignable) |

Reassign in Setup View (`Shift + Save`, exit with `Play`): channels 1–15, no two
tracks may share one. Channel config is **global**, not per-project. There's no
focus/master-channel mode — each external destination needs its own channel (a noted
workflow limitation).

## Templates

A MIDI track's `Preset` button opens **Template View**: 8 slots on the top row of
blue pads (selected = white). All 8 factory templates are identical, mapping the
macros to **CC 1, 2, 5, 11, 12, 13, 71, 74**. Templates are edited **only in
Components** (per-knob CC number, start/end range, unipolar/bipolar — polarity affects
LED behavior only, not the data). You can't create templates from scratch on-device;
you edit the 8 slots.

**The template-switch gotcha:** selecting a new template does *not* erase recorded
macro automation — the same automation curves re-apply to whatever CCs the new
template sends.

MIDI-track macro automation transmits to **both DIN Out and USB** (other tracks'
automation is USB-only).

## Scale applies to MIDI tracks too

The project's scale and root constrain MIDI-track note entry and transpose sequenced
MIDI notes exactly as they do the synths ([section 3](03-synth-tracks.md)). External
gear will follow your key changes — great at a jam, surprising if unaware. Incoming
controller notes also snap to scale; use Chromatic to bypass.

## Clock and sync

- **Clock Rx ON** (default) = auto: locks to valid external clock on DIN or USB
  (30–300 BPM, fractional OK), falls back to internal when absent. If the external
  clock dies, playback stops and the tempo display shows **SYN** until you press Play.
  Rx OFF = internal only (40–240, integers).
- **Clock Tx ON** = Circuit Tracks is the master, sending clock on **USB + DIN Out**.
- Per-category **Rx/Tx toggles** in Setup View pads 25–32: Note (green), CC (orange),
  Program Change (purple), Clock (pale blue) — all ON by default.
- **Analog Sync Out**: 5 V pulses, default 2 ppqn (1/2/4/8/24 selectable) — drives
  Volcas/modular. **Swing is never applied to analog sync**: your Volca will sit
  straight while Tracks swings.
- **MIDI Thru → second Out**: toggle with `Duplicate` in Advanced Setup View (hold
  `Shift` while powering on) to drive two thru-less devices.
- No Ableton Link — MIDI clock or analog sync only.

## Project control on channel 16

From outside, Ch 16 exposes the master filter (CC74 freq: 0–63 LP, 64 off, 65–127 HP;
CC71 resonance), tempo, swing, Mutate, FX send levels (reverb CC88/89 synths,
CC90/106/109/110 drums; delay CC111–116), FX engine parameters and side-chain sources
via NRPN, and Program Change project switching (0–63 instant, 64–127 queued). The
**Programmer's Reference Guide v3** documents the complete map, including full
per-synth engine NRPN access.

## Sources

User Guide v3 p56–57, p85–86, p102–106; Programmer's Reference Guide v3. Dossier:
`midi-performance-1–9, 13–19, 31–33`, `official-5, 19–21, 27–28`, `hardware-14, 22–23`,
`community-27, 33`; dossier B (MIDI).
