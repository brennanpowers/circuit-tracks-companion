# Open questions

Items that round-1 research could not settle, plus candidate angles for a future
research round. Remove items as they're resolved; record resolutions in `dossier.md`
(Adjudications) with a note of how they were settled.

## Device checks (fastest resolved on the physical unit)

- [ ] `[device-check]` **Do unrecorded macro tweaks survive save/reload?** Tweak a
  synth macro without recording, save the project, power-cycle, reload — does the
  tweaked sound come back, or the patch default? (round-1 `community-7`, unverifiable
  from sources; verifiers believe live tweaks are transient unless recorded as
  automation or saved, but no source states it.)
- [ ] `[device-check]` **Master compressor toggle location.** Manual contradicts
  itself: Setup View (Shift+Save, p92/p102) vs Advanced Setup View (Shift at
  power-on, FX button, p106). Check both views for the FX-button compressor toggle
  (green = on).
- [ ] `[device-check]` **Synth 2 Preset View opening page.** Manual says "page 3";
  patch 33 mathematically lives on page 2. Select Synth 2, press Preset, check which
  page lights and where patch 33 sits.
- [ ] `[device-check]` **Fixed Velocity value 96** — quick confirm: Shift+Velocity,
  enter a note, check its velocity in Velocity View (should read as fixed level).

- [ ] `[device-check]` **Side Chain View exact pad layout.** The verified claims say
  "pad 1 in each row = off, pads 2–8 = the seven presets" AND "top-row pads 5–8
  select the key drum" — which overlap if both use absolute numbering. Open Side
  Chain View (`Shift + FX`) and map the actual rows/pads for the synth presets and
  the key-drum selector. (Blocks adding a pad diagram to the side-chain lesson.)

## Round-2 research candidates (defer until guide drafting exposes real gaps)

- **Novation Components deep-dive**: step-by-step pack building, sample slot
  management, synth patch editor parameter inventory (and verify the "up to 4
  parameters per macro" mapping figure — it comes from Components, not the manual),
  project backup/restore, firmware update flow + failure recovery.
- **Firmware history completeness**: full changelogs 1.0 → 1.1 → 1.1.5 → 1.2 from
  primary sources (Novation's 1.1.5 article; the Synthtopia comment thread carries
  the full 1.1.5 changelog).
- **Performance-technique mining** for the Jam Toolkit course project: loopop /
  Nu-Trix / Novation official videos on live workflows (pattern-switch timing, mute
  choreography, filter rides, scene arrangement on the fly).
- **Jam-session audio practicalities**: gain staging into a PA/amp/DI at +5.3 dBu
  max output, headphone cueing workflow while the mains play. (RESOLVED during guide
  writing: L/Mono carries a mono sum when R is unplugged — `hardware-15`, manual p18.)

## Known limitations (documented, not questions)

- No on-device sampling/resampling (Circuit Rhythm feature; samples only via
  Components). No Grid FX / Drift (Rhythm features). No Ableton Link. One global
  scale/root shared by synth + MIDI tracks. One reverb + one delay engine globally.
  Integer-only internal BPM. Save Lock and click state have global-not-per-project
  quirks.
