# 10. Novation Components and storage

Circuit Tracks is screen-free by design; **Components is its screen.** It's Novation's
management app: browser-based (needs Web-MIDI — Chrome or Opera; **no iOS**) with a
**Standalone desktop app** (Mac/Windows, available after registering the device) for
offline use. Connect over USB.

## What Components does (the only place these things happen)

1. **Sample management.** Replace any of the 64 drum-sample slots. Everything imports
   to **48 kHz / 16-bit / mono** — stereo files are down-mixed (width is lost; plan
   accordingly). Budget: **196.6 s total sample time per pack, max 98.3 s for any one
   sample** (since firmware 1.1.5 — a Tracks-exclusive upgrade the 2015 Circuit never
   got).
2. **Synth patch editing.** The full Nova-engine editor — build patches from scratch,
   assign up to 4 parameters per macro knob with ranges/depths. On-device you only
   ever get the 8 macros ([section 3](03-synth-tracks.md)).
3. **MIDI template editing.** The only way to customize the 8 template slots per MIDI
   track (CC numbers, ranges, polarity — [section 5](05-midi-tracks.md)).
4. **Project backup/restore.** Individual projects or whole packs, to your computer.
   Do this before firmware updates and before lending anyone the device.
5. **Pack building.** Assemble sample+patch+project packs; load them to the microSD
   card (auto-populate, or Novation's "manually setting up SD card packs" support
   article). Packs are **deleted** only via Components.
6. **Firmware updates.** Components detects the device and prompts when out of date.

## Firmware history (what your unit can do)

| Version | Added |
|---|---|
| 1.1.5 (Apr 2021) | Sample memory 60 s → **196.6 s**; less synth voice-stealing; **Sticky Shift** |
| 1.2 (Dec 2022) | **Mute states saved in Scenes** — current official firmware |

(A "1.2.1" appears only in a third-party reverse-engineering gist — not an official
release.) If a normal update fails, **Bootloader Mode** recovers: power off, hold
`Scales + Preset + Note`, power on (Synth 1/2 pads show the firmware version as
binary; exit with `Play`).

## Easy Start / mass storage

Out of the box, first USB connection mounts the device as a "TRACKS" drive with a
getting-started link. Once you're set up, disable it: **Advanced Setup View** (hold
`Shift` while powering on) → `Note` button (green = on, dim red = off).

## Living without a screen

- Components is the canonical way to *see* patch names, sample names, and project
  contents — keep it open while learning, wean off it as muscle memory builds.
- The community **beppigames** web tool reads macro-knob values over MIDI when you
  need to know "where is this knob, really".
- The **16 factory demo projects** are your best teachers: open one, enter each view,
  and read how it was built.

## Ecosystem (with provenance caveats)

- **Tutorials:** Novation's official Circuit Tracks video series; **loopop's** review/
  tutorial (the most-cited deep dive — chapter-marked); Nu-Trix "the Synth Guy".
- **Patches/packs:** Novation Components' own content, Isotonik Studios (note: their
  free "Big City Dream" pack was built for the *original 2015 Circuit*, Tracks
  compatibility added later; Isotonik also runs a dedicated Tracks patch store),
  SoundGhost, synthpatches.gumroad.com.
- **Forums:** r/novationcircuit and the Elektronauts Circuit thread — both serve the
  whole Circuit *family*; re-check any tip against Tracks specifically. If a tip
  mentions Grid FX, Drift, or on-device sampling, it's about Circuit **Rhythm**.

## Sources

User Guide v3 p99–108. Dossier: `official-23–24, 26, 29, 33–35, 40`, `hardware-10, 13`,
`community-1–2, 8, 21–25, 39–40`; dossier B (Setup/storage; Ecosystem caveats),
adjudication A.7.
