# 2. The data model — packs, projects, patterns, and what saves when

Understanding this hierarchy prevents 90% of beginner data loss on this device.

```
Pack (32 accessible: 1 internal + 31 on microSD)
 └─ 64 Projects, 128 synth patches, 64 drum samples
     └─ Project = the "song" unit
         ├─ 8 tracks × 8 Patterns each
         ├─ 16 Scenes (pattern-chain snapshots; fw 1.2 also stores mutes)
         ├─ Mixer state, FX preset choices, side-chain setup
         ├─ Tempo, swing, scale/root, project colour
         └─ Pattern = up to 32 steps
             └─ Step: notes (up to 6, per-note velocity), gate (incl. ties),
                probability, micro-step positions, sample flip (drums),
                macro automation
```

## Saving — the rule that bites everyone

**Nothing is ever saved automatically.** Power off without saving and the session is
gone. There is **no undo** anywhere on the device.

- **Save = press `Save` twice.** First press: Save flashes and the last-used project
  pad pulses white. Second press: commits, **overwriting the project you loaded
  from**.
- **Save to a different slot:** after the first press, hit another project pad in
  Projects View (it flashes green ~2 s) — this is also your "save as" / version
  backup.
- **Abort:** press any other button after the first press.
- **Colour-code:** after the first press, turn Macro 1 to pick one of 14 project-pad
  colours before confirming.
- **Save Lock:** hold `Shift + Save` while powering on — disables Save entirely
  (button unlit) until toggled off the same way. Survives power cycles. Live-set
  insurance against a bandmate's elbow.

What Save captures: everything in the project tree above. What it does *not* capture:
`[device-check]` un-recorded macro-knob tweaks are believed transient (the patch's
saved state returns on reload) — confirm on the unit; recorded automation *is* saved.

## Global settings vs project settings

These live outside the project and follow the device, not the song:

| Global (device-wide) | Per-project |
|---|---|
| MIDI channel assignments (a noted limitation) | Scale + root note (one per project, shared by synths *and* MIDI tracks) |
| MIDI Rx/Tx toggles, clock source, sync-out rate | Patterns, scenes, mixer, FX, side-chain |
| Click on/off is session-only (level *is* retained) | Tempo & swing |
| Pad brightness (retained), Sticky Shift | Project colour |
| Save Lock | |
| View Lock (resets to off at power-on, saved with neither) | |

## Switching projects

In Projects View, tapping a project pad while **playing** queues it — the current
pattern finishes first (a chain or scene does *not* run to its end, just the playing
pattern). `Shift` + pad switches instantly, continuing from the equivalent step.
Loaded while **stopped**, a project plays at its saved tempo; loaded while **playing**,
it adopts the current tempo — so you can chain projects live at a constant BPM.

Program Change on MIDI Ch 16 does the same from outside: values 0–63 switch instantly,
64–127 queue ([section 5](05-midi-tracks.md)).

## Packs and the card

A pack bundles 64 projects + 128 patches + 64 samples. Internal memory holds exactly
one; a microSD card (Class 10+, FAT32) holds 31 more. **Packs View** = `Shift +
Projects` (needs a card inserted). Packs can only be *deleted* via Components. Never
pull the card during a save or load — Novation warns it can corrupt saved work.

Sixteen factory demo projects ship pre-loaded — free dissection material.

## Recovery gestures

- Corrupted/hung project at boot: hold `Shift + Clear` while powering on → forces a
  blank project.
- Firmware diagnostics/recovery: Bootloader Mode, `Scales + Preset + Note` held while
  powering on ([section 10](10-components.md)).

## Sources

User Guide v3 p5, p20–23, p95–100, p106–107. Dossier: `official-23–25, 30`,
`hardware-11–12, 37, 42–43`, `sequencing-35–36`, `community-3–6, 8, 12, 23, 26–27`,
adjudication context in dossier B (Setup, storage, workflow & safeguards);
`[device-check]` item: open-questions #1.
