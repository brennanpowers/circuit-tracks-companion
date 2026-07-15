# Circuit Tracks — Verified Research Dossier

**Updated:** 2026-07-15 (round 1 complete)
**Provenance:** Round 1 workflow `wf_a6e71cc2-393` — 235 claims from 6 research angles,
each claim judged by 3 independent verification lenses (official-manual cross-check,
device-confusion audit, skeptical refuter), all lenses working directly from the
official Circuit Tracks User Guide v3 PDF (extracted via pdftotext) and the
Programmer's Reference Guide v3. 233 claims survived; 1 was refuted (corrected below),
1 was unverifiable (moved to open-questions). Zero cross-device contamination was
found across all six angles.

**Authoritative primary source:** Circuit Tracks User Guide v3 (EN) —
`https://fael-downloads-prod.focusrite.com/customer/prod/downloads/circuit_tracks_user_guide_v3_en.pdf`
(the Novation support-portal links are fragile/403-prone; this Focusrite CDN URL and
its Kraft Music / B&H mirrors are stable). Secondary official source: Circuit Tracks
Programmer's Reference Guide v3 (same host) for the complete MIDI CC/NRPN maps.

**How to read this:** Section A contains corrections and adjudication notes that
OVERRIDE anything conflicting elsewhere. Section B contains facts surfaced by the
verifiers (single-lens but manual-cited — page numbers refer to User Guide v3).
Section C is the full verified claim base. `guide/` is written from this file only.

---

## A. Adjudications (round 1)

1. **Audio I/O is UNBALANCED, not balanced** *(corrects refuted `community-34`)*.
   Two 1/4″ mono inputs (routable through FX/mixer/side-chain), stereo 1/4″ main out
   (L/Mono + R), 3.5 mm headphone out — counts correct, but all TS **unbalanced**.
   Max main output **+5.3 dBu** per manual p18 (`hardware-15`, triple-confirmed; a
   verifier quoted −5.6 dBu from a spec page — the manual figure wins). The "balanced"
   wording in the djtechtools review is wrong. L/Mono sums to mono when R is unplugged.
2. **Play/stop semantics, worded precisely** *(tightens `midi-performance-27`)*.
   Play is a stop/start toggle. Pressing Play while running **stops** playback.
   Pressing Play from stopped **restarts at step 1** (or the pattern's Start Point);
   **Shift+Play** from stopped continues from where the sequencer stopped. Round-1
   verification flip-flopped on this claim purely over the "while running" phrasing.
3. **Synth 2's default patch (33) lives on Preset View page 2, despite the manual**
   *(caveats `official-7`)*. The manual says Preset View "opens at Page 3" for
   Synth 2, but 128 patches ÷ 4 pages puts patch 33 on page 2 — a genuine Novation
   documentation error (page 3 would show patches 65–96). Guide must warn about this.
4. **Scale-change behavior: two different mechanisms** *(tightens `official-5`)*.
   (a) *Live input snapping*: notes played from an external MIDI controller snap to
   the nearest in-scale note. (b) *Recorded patterns*: steps store pitches; changing
   scale re-maps out-of-scale notes non-destructively (they revert when you switch
   back). The claim merged these; keep them distinct. Changing the **root** transposes;
   changing the **scale** substitutes nearest in-scale notes.
5. **Master compressor location: manual is self-contradictory** — p92/p102 say
   "Setup View", the detailed section (p106) says **Advanced Setup View** (hold Shift
   during power-on, toggle with the FX button, green = on, default on). Three of four
   verifier mentions treat Advanced Setup View as operative. `[device-check]` to
   settle it; until then the guide should describe Advanced Setup View and note the
   manual's inconsistency.
6. **Expanded Note View: the NOTE BUTTON turns gold, not the pads** *(corrects
   `sound-17` wording; p28)*.
7. **Dates.** Device announced/released early 2021 (intro video 2021-02-09; sample-time
   firmware 1.1.5 April 2021) — not 2020. Firmware 1.2 released ~15 Dec 2022 (±1 day
   across sources) added mute-states-in-Scenes and is the newest documented firmware.
8. **Manual's own typos to avoid propagating:** the p91 FX table header reads "DELAY
   TYPE" over the reverb preset list; the manual spells "Ukranian Dorian"
   (sic — use "Ukrainian Dorian"); arrow-button glyphs extract as "J"/"K" from the PDF
   (J = ▼ down, K = ▲ up, confirmed against the online HTML guide).
9. **MIDI track colours: manual wins over reviewer naming.** `community-36`
   (djtechtools) calls MIDI 1 "teal" and MIDI 2 "orange"; the manual (p21) specifies
   MIDI 1 = **blue**, MIDI 2 = **pink** (and Drum 1 = orange). Use the manual's
   colour names everywhere; treat community-36's colours as reviewer approximation.
10. **Rear input labeling varies by production run** *(owner-verified on the maintainer's hardware,
    2026-07-15)*. The User Guide v3 photo (p18) shows the external audio input pair
    printed "— Inputs — 2 1". the maintainer's production unit — confirmed a Circuit Tracks
    by wordmark and the Synth/MIDI/Drum track row — prints the same pair
    "Sample In  R  L/Mono" (matching Circuit Rhythm's rear print; presumably a
    shared later-production panel). Function is unchanged: two unbalanced TS line
    inputs, no sampling capability on Tracks (firmware 1.2 has no sampling). Mapping:
    left jack "R" = Input 2 (Mixer Macro 4), right jack "L/Mono" = Input 1 (Mixer
    Macro 3). Guide and diagrams should show the newer print and mention the older.
11. **Terminology nuance:** the manual's glossary groups the step buttons as
   "Note, Velocity, Gate and Probability", but the fourth physical button is labelled
   **Pattern Settings** (Probability is its Shift function / second press). The guide
   should use the physical labels and mention the manual's naming.

12. **Sync-rate pads: third row = absolute pads 17–24** *(corrects the pad numbers
    in `sequencing-24`; manual p54–56 re-read 2026-07-15)*. The manual's Pattern
    Settings View diagram labels the sync-rate row's pads "1–8" *within the row*,
    and the claim transcribed those as absolute pad numbers. Physically the sync
    rates sit on the grid's third row, absolute pads 17–24; the default 1/16 is the
    row's 5th pad (absolute pad 21 — manual p56: "pad 5 in row 3"). Play order on
    pads 29–32 was transcribed correctly.

## B. Verifier-sourced additions (manual-cited facts the claims missed)

### Hardware & interaction model
- **Master Volume knob** (top panel, item 4): dedicated overall output-level rotary,
  separate from Mixer track levels and the Master Filter knob. (p18/p89)
- **Momentary vs latching buttons** (p16): most view buttons do both — short press
  latches the view; long press shows it only while held (e.g. long-press Tempo/Swing
  to peek at BPM). Record's momentary mode = rapid punch-in/out.
- **Track colour code** (p21): Synth 1 violet, Synth 2 pale green, MIDI 1 blue,
  MIDI 2 pink, Drum 1 orange, Drum 2 yellow, Drum 3 purple, Drum 4 aqua — consistent
  across all views.
- **Power**: three methods — computer USB (charges only from USB 3.0 ports), AC
  adaptor (100–240 V, 5 V DC 2 A USB-A), internal Li-ion (~4 h run / ~4 h charge).
  Kensington MiniSaver slot. Headphone amp drives +5 dBu into 150 Ω; main outs max
  +5.3 dBu; main outputs stay active with headphones plugged in. (p8–10)
- **16 factory demo Projects** ship pre-loaded; boot animation ~5 s. (p20–21)
- The ▼/▲ arrows double as page selectors in several views (patterns page 2,
  side-chain synth/MIDI pages, mixer level↔pan).

### Sequencing & patterns
- **Pattern Settings View** (missed almost entirely by round-1 claims): per-pattern
  **Start/End points** (any length 1–32, not just 16/32; trimmed-off data is preserved
  dim-red and restored if the end point moves back), **Play Order** on pads 29–32
  (Forward / Reverse / Ping-pong / Random), **Sync Rate** per track (1/4, 1/4T, 1/8,
  1/8T, 1/16 default, 1/16T, 1/32, 1/32T) — changes during playback take effect at the
  end of the current cycle. (p54–56)
- **Mutate** reshuffles the notes/hits already in the playing pattern (including drum
  sample flips); re-applying re-randomises; affects only the currently playing
  pattern of the current track; non-destructive until saved. (p57)
- **Velocity/Gate/Probability are properties of the STEP, not the note** — swapping a
  note keeps them if you add the new note before deleting the old. Per-synth
  independent values on the same step number. Empty steps have gate 0 and can't be
  gate-edited. (p41–47)
- **Fixed Velocity mode** = Shift+Velocity, fixed value **96**, non-retroactive.
  16 velocity levels shown on the grid; per-note velocities can differ within a step
  (bright = lowest at that step, dim = highest). Drum step-programmed hits always use
  fixed velocity. (p42–48, p69)
- **Micro steps**: exactly **6 subdivisions** per step (Shift+Gate); staggered
  micro-step delays on a chord create "strummed" playback; multiple micro-hits on one
  drum step share the step's velocity and sample. (p49–52, p67)
- **Tie/drone notes**: gate extends across steps; notes added to an already-tied step
  don't inherit tie-forward (show red, not orange) — toggle tie-forward off/on in Gate
  View to re-include all notes. (p53)
- **Sample flip mechanics**: short-press a drum step = default sample (bright blue);
  long-press step + sample pad = flip that step to another sample (**pink**). CC on
  channel 10 recalls drum samples externally. (p62–66)
- **Pattern Octave** (Shift + ▲/▼) transposes the whole synth/MIDI pattern; button
  lights red at pitch extremes when the shift can't apply. (p79–80)
- **Non-quantised record**: Shift+Record toggles; indicator differs by track type
  (synths: red; drums: bright green = quantised, dim red = non-quantised). Live
  recording uses the 6 micro-steps. (p37, p64)
- **View Lock** (Shift+Patterns): freezes the displayed pattern/step-page while other
  patterns play — applies across tracks and Note/Velocity/Gate views; state resets to
  OFF at power-on, not saved. (p80–81)
- **Tempo/click**: internal 40–240 BPM integer; external clock 30–300 BPM incl.
  fractional ("SYN" shown in red; saved project BPM returns after clock loss).
  Click = Shift+Clear, global; on/off state not saved across power-off but level is
  (Macro 5 in Tempo View). Projects loaded while playing keep the current tempo;
  loaded while stopped they adopt their saved tempo. (p23, p85–87)

### Sound engine & FX
- **Engine lineage**: Nova-class, MiniNova-derived (Supernova → UltraNova → MiniNova →
  Circuit family). 2 oscillators per voice (30 waveforms each: 14 virtual-analogue +
  16 wavetables, with Index & Interpolate), noise + ring mod, multimode filters
  (LP 12/24 dB, HP, BP), 3 envelopes, 2 LFOs, per-patch insert FX (distortion, EQ,
  chorus, phaser) — full depth editable **only in Components' Synth Editor**; the 8
  macros expose up to 4 parameters each per patch (the "4 params" figure is from
  Components, not stated in the user guide). Reviewers: excels at digital pads /
  wavetable leads / gnarly basses; not a convincing classic-analog emulation.
- **Factory defaults**: Synth 1 loads a MONOphonic patch (bass), Synth 2 POLYphonic
  (keys) — 6-voice polyphony is available on both but isn't Synth 1's out-of-box
  behavior. (p35–36)
- **Drum macros are fixed-function** (unlike synth macros): only even macros active —
  2 Pitch, 4 Decay, 6 Distortion, 8 EQ. Odd macros inactive on drums. (p63–64)
- **FX**: one global reverb (8 presets, Small Chamber → Large Hall) + one global delay
  (16 presets, all BPM-synced: slapback, 16th/8th/4th, triplets, dotted, ping-pong,
  swung) shared via per-track sends. Send macros light **cream** (reverb) or **peach**
  (delay); sends are automatable and automation is deletable with Clear + turn ≥20%.
  (p90–92)
- **Side-chain**: Shift+FX; 7 presets per synth/MIDI-input track + off (default OFF);
  trigger drum is called the "key"; page 1 = synths, page 2 = MIDI/audio-in tracks
  (▼/▲ to switch). Ducking continues even when the key drum's mixer level is 0, but
  MUTING the key drum disables it. (p93–94)
- **Keyboard layout details**: pad 32 (top of lower row) = pad 17 (bottom of upper
  row) — same pitch. Note range shiftable +5/−6 octaves per track. Chromatic scale
  uses a piano-style layout and collapses range to 1 octave (2 in Expanded).
  (p17, p28, p31–32)

### MIDI (the claims under-covered the Programmer's Reference)
- **Default channels**: Synth 1 = Ch 1, Synth 2 = Ch 2, MIDI tracks default to
  **Ch 3 / Ch 4** (common setup confusion), Drums 1–4 share **Ch 10**, **Ch 16 =
  Project control**. All reassignable in Setup View (Shift+Save).
- **Program Change** on Ch 1/Ch 2 (values 0–63) selects Synth 1/2 patches; Ch 16 PGM
  switches Projects; drum sample recall via CC on Ch 10.
- **Project-level Ch 16 map**: master filter, tempo, swing, Mutate, reverb sends
  (CC88/89 synths; CC90/106/109/110 drums), delay sends (CC111–116); reverb/delay
  engine params and side-chain sources via NRPN. Per-synth full engine access
  (osc/filter/env/LFO) via NRPN. (Programmer's Reference v3)
- **External control**: a controller/DAW can play both synths live (notes snap to
  scale — use Chromatic to bypass); external CC can drive the macros and be recorded
  as automation (CC Rx on by default).
- **MIDI template gotcha**: selecting a new template does NOT erase recorded macro
  automation — it re-applies to whatever CC the macro now sends. Only 8 template
  slots per MIDI track (edit/backup in Components; can't create from scratch
  on-device). MIDI tracks support the full sequencer feature set and transmit
  automation out both DIN and USB.
- **Clock**: Rx OFF = internal only; Rx ON = auto-slave when external clock present;
  Tx ON = clock master on USB + MIDI Out. Analog Sync Out: 3.5 mm TRS, 5 V, default
  2 ppqn (1/2/4/8/24 selectable in Setup View); **swing is never applied to analog
  sync** — a real gotcha when syncing Volcas/modular.

### Setup, storage, workflow & safeguards
- **Setup View** (Shift+Save): MIDI channels, per-category MIDI Rx/Tx
  (Note/CC/PGM/Clock), clock source, analog sync rate, **Sticky Shift** (press Shift
  in Setup View — makes Shift latch; fw 1.1.5+), pad brightness (pad 24 dims ~50%,
  saved).
- **Advanced Setup View** (hold Shift while powering on): MIDI Thru-duplicates-Out
  toggle (Duplicate button), master compressor (FX button — see adjudication 5),
  Easy Start / mass-storage-mode disable (Note button).
- **Power-on safeguards**: **Save Lock** = hold Shift+Save during power-on (disables
  saving entirely — live-set insurance; persists across power cycles). **Blank-project
  recovery** = hold Shift+Clear during power-on. **Bootloader mode** = hold
  Scales+Preset+Note during power-on (firmware diagnostics/recovery). (p107–108)
- **Save**: two presses (deliberate); Macro 1 recolors the project pad (14 colours)
  between presses; Scenes and all pattern data persist ONLY on explicit save.
- **Storage**: microSD Class 10+, FAT32; card holds **31 packs + 1 internal = 32
  accessible** (glossary's "32 on card" is imprecise); ~1 GB covers a full card.
  Samples: **48 kHz/16-bit mono** target — stereo/other rates are auto-converted on
  import (stereo width is lost). Components can auto-populate a card, or use the
  official manual-setup support article.
- **Components**: browser app (Chrome/WebMIDI) **plus a Standalone desktop app**
  (Mac/Win) for offline use — sample/pack management, synth patch editor, MIDI
  template editor, project backup, firmware. Firmware can also be re-flashed from
  Bootloader mode if a normal update fails.
- **Screenless-workflow aids**: Components is the canonical "see what's loaded" tool;
  the community `beppigames.de` web tool reads macro knob positions from MIDI;
  16 demo projects give instant material to dissect.

### Ecosystem caveats
- r/novationcircuit, r/circuit, and Elektronauts threads cover the whole Circuit
  family — re-check any tip against Tracks specifically (Grid FX, Drift, and on-device
  sampling/resampling are **Circuit Rhythm** features; Tracks has NO on-board
  sampling — samples arrive only via Components).
- Isotonik's free "Big City Dream" pack was built for the original 2015 Circuit
  (Tracks compatibility added later); Isotonik runs a separate dedicated Circuit
  Tracks patch store. Firmware 1.1.5's sample-time doubling (196.6 s) was
  Tracks-exclusive — the original Circuit never got it.
- Other vetted resources: Novation's official video series, loopop's review/tutorial,
  Nu-Trix "the Synth Guy" tutorials, synthpatches.gumroad.com Tracks collections,
  SoundGhost/SoundOnSound/MusicRadar reviews.

---

## C. Verified claim base (233 claims, round 1)

Every claim below carries three CONFIRMED verdicts. IDs refer to
`rounds/2026-07-14-round-1/claims/<angle>.json`, which holds each claim's full
sources and all verifier evidence notes.

### Official documentation & firmware (`official`)

- **[official-1]** Circuit Tracks has 8 tracks: 2 synth tracks (6-voice polyphonic), 2 MIDI tracks (no internal sound, sequence external gear), and 4 sample-based drum tracks, always in that left-to-right order on the Track buttons. *(fael-downloads-prod.focusrite.com)*
- **[official-2]** The grid is 32 velocity-sensitive RGB pads (4x8). In synth/MIDI Note View the top two rows (pads 1-16) show the 16-step pattern and the bottom two rows (17-32) are the keyboard; pad 32 duplicates pad 17. *(fael-downloads-prod.focusrite.com)*
- **[official-3]** Expanded Note View is entered with Shift+Note (Note button turns gold), giving a 4-octave synth keyboard; pressing Note again toggles it. For drum tracks, Shift+Note gives Expanded Drum View where pads 29-32 play all four drum tracks live. *(fael-downloads-prod.focusrite.com)*
- **[official-4]** Scales View (Scales button) offers exactly 16 scales on pads 17-32 in this order: Natural Minor, Major, Dorian, Phrygian, Mixolydian, Melodic Minor, Harmonic Minor, Bebop Dorian, Blues, Minor Pentatonic, Hungarian Minor, Ukrainian Dorian, Marva, Todi, Whole Tone, Chromatic. *(fael-downloads-prod.focusrite.com)*
- **[official-5]** The selected scale and root note apply to both synth tracks AND both MIDI tracks simultaneously; default root is C. Changing scale on an existing pattern is non-destructive (out-of-scale notes snap to nearest and revert on scale change back). *(fael-downloads-prod.focusrite.com)*
- **[official-6]** Chromatic is the only scale with 12 notes; selecting it collapses the Note View keyboard to one octave (two octaves in Expanded Note View). *(fael-downloads-prod.focusrite.com)*
- **[official-7]** Each synth track can use any of 128 factory patches (4 pages of 32). Synth 1 defaults to Patch 1; Synth 2 defaults to Patch 33. Preset View opens at page 1 for Synth 1 and page 3 for Synth 2. *(fael-downloads-prod.focusrite.com)*
- **[official-8]** Each drum track can use any of 64 samples (4 pages of 16 in Note View, or 2 pages of 32 in Preset View). Default assignments: Drum1=Kick1 (slot1), Drum2=Snare1 (slot3), Drum3=Closed hat1 (slot5), Drum4=Perc1 (slot9). *(fael-downloads-prod.focusrite.com)*
- **[official-9]** There are 8 macro encoders. On drum tracks only the even macros are active: Macro 2=Pitch, Macro 4=Decay envelope time, Macro 6=Distortion, Macro 8=EQ. On synth tracks each patch maps up to 4 parameters per macro. *(fael-downloads-prod.focusrite.com)*
- **[official-10]** Each track has 8 pattern memories (2 pages of 4 in Patterns View). Default pattern length is 16 steps; the Step Page (1-16/17-32) button extends it to 32 steps. Clear+Step Page reverts to 16 without erasing steps 17-32; Duplicate+Step Page copies steps 1-16 to 17-32. *(fael-downloads-prod.focusrite.com)*
- **[official-11]** Pattern chains must be contiguous (hold lowest pattern pad, press highest). Scenes (16, on the lower two rows of Mixer View) can chain non-contiguous patterns, working around this. Scenes are assigned by holding Shift in Mixer View and pressing a Scene pad. *(fael-downloads-prod.focusrite.com)*
- **[official-12]** Duplicate can copy patterns synth-to-synth, synth-to-MIDI, and drum-to-drum, but cannot copy between synth/MIDI tracks and drum tracks in either direction. *(fael-downloads-prod.focusrite.com)*
- **[official-13]** Internal tempo range is 40-240 BPM (integer only), default 120, adjusted with Macro 1 in Tempo View. External MIDI clock (USB or MIDI In) auto-slaves and accepts fractional 30-300 BPM, displaying 'SYN'. *(fael-downloads-prod.focusrite.com)*
- **[official-14]** Swing range is 20-80, default 50, adjusted with Macro 2 in Tempo View; swing shifts even-numbered (off-beat) steps. Tap Tempo is Shift+tap on Tempo/Swing (needs at least 3 taps, averages the last 5). *(fael-downloads-prod.focusrite.com)*
- **[official-15]** The click/metronome is toggled with Shift+Clear (Clear lights green when on); its volume is set with Macro 5 in Tempo View. The click is a global setting, ticks every quarter note, and its on/off state is not retained across power cycles (volume level is). *(fael-downloads-prod.focusrite.com)*
- **[official-16]** FX View (FX button) offers 8 reverb presets and 16 tempo-synced delay presets; only one reverb and one delay preset apply globally, but send levels are per-track via the 8 macros. All delay times are locked to BPM. *(fael-downloads-prod.focusrite.com)*
- **[official-17]** Sidechain View is Shift+FX; there are 7 sidechain presets per synth/MIDI track, and you select which of Drum 1-4 triggers the ducking. Muting the trigger drum in Mixer View disables sidechain triggering, but reducing its level to zero does not. *(fael-downloads-prod.focusrite.com)*
- **[official-18]** The large Master Filter knob has a centre detent (no filtering); turning anticlockwise engages a low-pass filter, clockwise a high-pass filter, applied to the entire mix including the two external audio inputs, and is always active. *(fael-downloads-prod.focusrite.com)*
- **[official-19]** MIDI tracks default templates map the 8 macros to CC 1, 2, 5, 11, 12, 13, 71, 74. All 8 default templates are identical. MIDI-track macro automation is sent to both the MIDI Out DIN and USB, unlike other tracks (USB only). *(fael-downloads-prod.focusrite.com)*
- **[official-20]** In Mixer and FX views the MIDI tracks' macros control the two rear-panel external audio inputs (mono 1/4-inch TS), enabling the workflow of sending MIDI to an external synth and returning its audio into Circuit Tracks for mixing, FX and sidechain. *(fael-downloads-prod.focusrite.com)*
- **[official-21]** Rear connectivity includes full-size 5-pin MIDI In/Out/Thru (Thru can mirror Out via Advanced Setup), USB-C (MIDI class-compliant, DC power/charging, carries no audio), a microSD slot, a 3.5mm TRS analogue Sync Out (5V), two 1/4-inch TS audio inputs, stereo 1/4-inch outputs, and a headphone output. *(fael-downloads-prod.focusrite.com)*
- **[official-22]** Circuit Tracks has a built-in rechargeable battery rated at 4 hours; the power button requires an approximately 1-second long-press to turn on or off. *(fael-downloads-prod.focusrite.com)*
- **[official-23]** A Pack contains all 64 project memories, 128 synth patches and 64 drum samples. Internal memory holds one Pack; a microSD card can hold 31 more, for 32 Packs total. Packs View is Shift+Projects and is only accessible with a card inserted. *(fael-downloads-prod.focusrite.com)*
- **[official-24]** microSD cards for Circuit Tracks must be Class 10 minimum and FAT32 formatted. Packs can only be deleted via Novation Components, not from the device directly. *(fael-downloads-prod.focusrite.com)*
- **[official-25]** Saving requires pressing Save twice; the first press pulses the last-used project slot in Projects View, and you can redirect the save to a new slot before the second press. Projects can be colour-coded from a 14-colour palette scrolled with Macro 1 after the first Save press. *(fael-downloads-prod.focusrite.com)*
- **[official-26]** Novation Components for Circuit Tracks can: download content, create/edit synth patches (full synth-engine editor), load user samples, edit MIDI templates, back up projects, load packs, and update firmware. It needs a Web-MIDI browser (Chrome or Opera recommended); a standalone app is available after registration. *(components.novationmusic.com, fael-downloads-prod.focusrite.com)*
- **[official-27]** Default MIDI channels: Synth 1 = ch1, Synth 2 = ch2, MIDI 1 = ch3, MIDI 2 = ch4, all four drums = ch10. Channel 16 is reserved for the Project. Tracks are reassignable to channels 1-15 and no two tracks may share a channel. *(fael-downloads-prod.focusrite.com)*
- **[official-28]** Setup View is entered with Shift+Save and exited with Play; it sets MIDI channels, independent Rx/Tx toggles for Note/CC/Program-Change/Clock (pads 25-32, all ON by default), analogue sync rate (1/2/4/8/24 ppqn, default 2), and grid brightness (pad 24 dims about 50%). *(fael-downloads-prod.focusrite.com)*
- **[official-29]** Bootloader Mode (to check firmware version or recover) is entered by powering off, holding Scales + Preset + Note, then powering on; Synth 1/2 pads then display firmware versions as binary pad patterns. Exit by pressing Play. *(fael-downloads-prod.focusrite.com)*
- **[official-30]** Power-on combos: Shift+power = Advanced Setup View; Shift+Save+power = toggle Save Lock (persists across power cycles); Shift+Clear+power = force-load a blank project for recovery. *(fael-downloads-prod.focusrite.com)*
- **[official-31]** Non-quantised recording is toggled with Shift+Record (Rec Quantise); it enables 6 micro-steps between adjacent pattern steps. Pressing Shift shows the state: Record lit green = quantised, red = non-quantised. *(fael-downloads-prod.focusrite.com)*
- **[official-32]** Synth engines are 6-note polyphonic (up to six notes per step). Manual note entry requires no Record mode: hold a step pad and press a keyboard pad to add, or press step pad then keyboard pad to delete. Shift+Play continues playback from the stopped step instead of restarting at step 1. *(fael-downloads-prod.focusrite.com)*
- **[official-33]** Firmware 1.1.5 (April 2021) tripled Circuit Tracks sample memory from 60 seconds to 196.6 seconds per pack (max single sample 98.3s), reduced synth voice-stealing, and added a sticky-Shift toggle in Setup View. *(synthanatomy.com, synthtopia.com)*
- **[official-34]** Firmware 1.2 (released 15 December 2022) added the ability to save mute states to Scenes, letting muted track states be stored with a Scene so arrangements no longer need empty patterns. It is the newest officially documented Circuit Tracks firmware. *(matrixsynth.com, novationmusic.com)*
- **[official-35]** Firmware is updated through Novation Components, which detects the connected device and prompts an update if it is out of date. *(fael-downloads-prod.focusrite.com, support.novationmusic.com)*
- **[official-36]** Drum steps support Sample Flip: hold a sample pad (turns red) and press step pads to place a different sample on specific steps; flipped steps show pink versus bright blue for the active sample, overcoming the one-sample-per-track limit. *(fael-downloads-prod.focusrite.com)*
- **[official-37]** Each step carries Velocity, Gate and Probability data. Step buttons are Note/Velocity/Gate/Probability, with Probability accessed as Shift+Pattern Settings and Micro Step as Shift+Gate. Gate value sets how many steps a note sustains. *(fael-downloads-prod.focusrite.com)*
- **[official-38]** The synth keyboard spans 10 octaves total, navigated with the up/down (octave) buttons; each track's octave is set independently, and Shift+octave transposes an already-recorded pattern. *(fael-downloads-prod.focusrite.com)*
- **[official-39]** A separate Circuit Tracks Programmer's Reference Guide (downloadable from Novation) documents full MIDI implementation, including recalling synth patches via Program Change and drum samples via CC on MIDI channel 10. *(fael-downloads-prod.focusrite.com)*
- **[official-40]** A build referred to as '1.2.1' appears only in a third-party firmware reverse-engineering gist and is not documented in official Novation firmware release notes, so it should be treated as unconfirmed rather than an official release. *(gist.github.com)*

### Hardware & panel (`hardware`)

- **[hardware-1]** The Circuit Tracks playing grid is a 4 x 8 matrix of exactly 32 velocity-sensitive pads, each RGB-illuminated with independent red, green and blue LEDs. *(Circuit Tracks User Guide V3, p.15 Top View item 1; p.5 Intr)*
- **[hardware-2]** There are 8 macro rotary encoders (Macro 1-8), each with an RGB LED, whose function changes per View; their movements can be recorded and replayed into a pattern. *(Circuit Tracks User Guide V3, p.15 Top View item 3)*
- **[hardware-3]** The Master Filter is a large rotary knob with a centre detent and RGB LED that is always active; turning anticlockwise from centre gives a low-pass filter, clockwise gives a high-pass filter, and the LED is dim white at the detent and pale blue when filtering. *(Circuit Tracks User Guide V3, p.15 item 2; p.94 The Filter K)*
- **[hardware-4]** There are 8 track buttons labelled Synth 1, Synth 2, MIDI 1, MIDI 2, Drum 1, Drum 2, Drum 3, Drum 4; pressing any track button always goes to Note View for that track. *(Circuit Tracks User Guide V3, p.16 item 5; p.14 Glossary 'Tr)*
- **[hardware-5]** The four step buttons are Note, Velocity, Gate and Pattern Settings; Probability is the Shift function of the Pattern Settings button. *(Circuit Tracks User Guide V3, p.16 items 6-7; p.13 Glossary )*
- **[hardware-6]** Shift + Note opens Expanded View, which doubles the synth performance-pad area and lets you create patterns on all four drum tracks simultaneously. *(Circuit Tracks User Guide V3, p.11 Glossary 'Expanded View')*
- **[hardware-7]** Shift + Velocity toggles Fixed velocity (disabling pad velocity response), and Shift + Gate enters Micro Step editing where each step is subdivided into six micro steps. *(Circuit Tracks User Guide V3, p.11 Glossary 'Fixed' and 'Mic)*
- **[hardware-8]** Shift + Duplicate = Mutate (randomises steps), Shift + FX = Side Chain, Shift + Patterns = View Lock, Shift + Projects = Packs, and Shift + Save = Setup View. *(Circuit Tracks User Guide V3, p.12-14 Glossary; p.102 Setup )*
- **[hardware-9]** Setup View is entered by holding Shift and pressing Save, and is exited by pressing Play. *(Circuit Tracks User Guide V3, p.102 Setup View)*
- **[hardware-10]** Advanced Setup View is entered by holding Shift while powering the unit on and exited by pressing Play; in it the Note button toggles Easy Start/Mass Storage (green on / dim red off), Duplicate toggles MIDI Thru behaviour, and FX toggles the Master Compressor. *(Circuit Tracks User Guide V3, p.106 Advanced Setup View)*
- **[hardware-11]** Save Lock is toggled by holding both Shift and Save while powering the unit on; while active the Save button stays unlit and the setting persists across power cycles. *(Circuit Tracks User Guide V3, p.107 Save Lock)*
- **[hardware-12]** Holding Shift + Clear while powering on forces Circuit Tracks to load a blank Project (a corruption recovery gesture). *(Circuit Tracks User Guide V3, p.107 Project loading problems)*
- **[hardware-13]** Bootloader Mode is entered by powering off, holding the Scales, Preset and Note buttons, then powering on; it is exited by pressing Play. *(Circuit Tracks User Guide V3, p.108 Bootloader Mode)*
- **[hardware-14]** The rear panel carries full-size 5-pin DIN MIDI In, Out and Thru connectors (not TRS minijacks), and the Thru can be reconfigured in Advanced Setup View to act as a second MIDI Out. *(Circuit Tracks User Guide V3, p.18 Rear View item 4; p.106 M)*
- **[hardware-15]** Main audio outputs are two 1/4-inch TS jacks (L/Mono and R) with a maximum output level of +5.3 dBu; with nothing plugged into R, L/Mono carries a mono sum of L and R. *(Circuit Tracks User Guide V3, p.18 Rear View item 1)*
- **[hardware-16]** There are two external audio inputs (Inputs 1 and 2) on unbalanced 1/4-inch TS jacks at line level; they mix with internal sound, can be processed by the FX section and ducked by the drum tracks. *(Circuit Tracks User Guide V3, p.18 Rear View item 5; p.88 Mi)*
- **[hardware-17]** The Sync output is a 3.5 mm TRS jack delivering a 5 V analogue clock; the rate is set in Setup View to 1, 2, 4, 8 or 24 ppqn with a default of 2 ppqn, and swing is not applied to it. *(Circuit Tracks User Guide V3, p.18 item 2; p.105 Analogue cl)*
- **[hardware-18]** The headphone output is a 3.5 mm stereo socket; the main outputs stay active when headphones are inserted, and the amp drives +5 dBu into 150 ohm headphones. *(Circuit Tracks User Guide V3, p.18 Rear View item 3)*
- **[hardware-19]** The USB-C port provides power, charging and class-compliant USB-MIDI, but does NOT carry audio. *(Circuit Tracks User Guide V3, p.18 Rear View item 6)*
- **[hardware-20]** The internal Lithium-ion battery is non-removable and non-replaceable, gives up to 4 hours of operation, recharges in up to 4 hours, and triggers a red low-battery grid symbol when capacity drops below 15%. *(Circuit Tracks User Guide V3, p.9-10 Power Requirements / Us)*
- **[hardware-21]** The power switch is a soft on/off button requiring an approximately one-second press, with an integral LED that lights green while the internal battery is charging. *(Circuit Tracks User Guide V3, p.18 Rear View item 8; p.10)*
- **[hardware-22]** Factory default MIDI channels are Synth 1 = channel 1, Synth 2 = channel 2, MIDI 1 = channel 3, MIDI 2 = channel 4, and all four Drum tracks = channel 10; any track can be set to channels 1-15, with channel 16 reserved for the Project and no two tracks allowed on the same channel. *(Circuit Tracks User Guide V3, p.103 MIDI Channels)*
- **[hardware-23]** In Setup View, pads 25-32 form four coloured Rx/Tx toggle pairs: Note (green, pads 25/26), CC (orange, 27/28), Program Change (purple, 29/30) and Clock (pale blue, 31/32); all default to ON. *(Circuit Tracks User Guide V3, p.104 MIDI I/O)*
- **[hardware-24]** In Setup View, Pad 24 (lit white) toggles pad brightness, dimming the grid by approximately 50%, and the setting is retained through power-down. *(Circuit Tracks User Guide V3, p.103 Brightness)*
- **[hardware-25]** The internal tempo runs 40-240 BPM in integer steps with a default of 120 BPM, while when slaved to external MIDI clock it follows 30-300 BPM including fractional values; Tap Tempo (Shift + Tempo/Swing) needs at least three taps and averages the last five. *(Circuit Tracks User Guide V3, p.85-86 Tempo, External clock,)*
- **[hardware-26]** Swing has a range of 20 to 80 with a default of 50; values below 50 advance the even (off-beat) steps and values above 50 delay them, adjusted with Macro 2 in Tempo View. *(Circuit Tracks User Guide V3, p.86-87 Swing)*
- **[hardware-27]** The Click/metronome is toggled by Shift + Clear (Clear lights green when on, dim red when off) and its volume is set with Macro 5 in Tempo View. *(Circuit Tracks User Guide V3, p.87 Click track)*
- **[hardware-28]** The Play button lights bright green during playback and the Record button lights bright red in Record mode; the playback cursor is a white pad that turns red in Record mode. *(Circuit Tracks User Guide V3, p.12 Glossary Playback/Record;)*
- **[hardware-29]** The up/down arrow buttons in Note View shift a track's pitch by octave, up to 5 octaves up and 6 octaves down, independently per track. *(Circuit Tracks User Guide V3, p.17 item 15)*
- **[hardware-30]** Each synth track can load any of 128 patches (4 pages of 32), each drum track any of 64 samples (2 pages of 32), and each MIDI track any of 8 templates, all via the Preset button. *(Circuit Tracks User Guide V3, p.16 item 14; p.12-14 Glossary)*
- **[hardware-31]** The Scales button opens Scales View offering 16 musical scales plus transposition of the synth keyboard. *(Circuit Tracks User Guide V3, p.13 Glossary 'Scale View'; p.)*
- **[hardware-32]** The FX section provides 16 delay presets and 8 reverb presets with per-track send levels on the macros, plus a Master Compressor applied to the whole mix that is toggled by the FX button in Advanced Setup View. *(Circuit Tracks User Guide V3, p.90-92 FX Section; p.106 Mast)*
- **[hardware-33]** Side Chain View (Shift + FX) offers 7 side-chain presets per synth/MIDI-input track, letting a chosen drum track duck the synths or external inputs; side-chain is off by default. *(Circuit Tracks User Guide V3, p.93 Side Chains)*
- **[hardware-34]** Mixer View is an 8-channel mixer whose Row 1 pads are per-track mutes; by default the macros control track level (default 100, range 0-127) and pressing the down-arrow switches the macros to pan (white centre, blue left, pink right). *(Circuit Tracks User Guide V3, p.88-89 Mixer)*
- **[hardware-35]** Sticky Shift is enabled in Setup View by pressing Shift; once on (Shift lit bright green) a press of Shift latches until pressed again, avoiding held combos. *(Circuit Tracks User Guide V3, p.17 item 20)*
- **[hardware-36]** The Step Page button (1-16 / 17-32) sets whether a track's pattern is 16 or 32 steps, and its legend colour changes while running to indicate which half of a 32-step sequence is displayed. *(Circuit Tracks User Guide V3, p.16 item 8)*
- **[hardware-37]** Each track stores 8 patterns per Project, up to 64 Projects are held in internal memory, and up to 32 Packs can be exported to a microSD card. *(Circuit Tracks User Guide V3, p.12-13 Glossary Pattern memor)*
- **[hardware-38]** On boot the grid shows a ~5 second boot pattern, then pads change from pale red to bright green sequentially from top-left to bottom-right to indicate Pack loading. *(Circuit Tracks User Guide V3, p.19 Powering the unit on)*
- **[hardware-39]** The supplied AC adaptor is 5 V DC, 2 A with interchangeable slide-in plug heads and a Type-A USB output; the box also includes a 1.5 m USB-A to USB-C cable. *(Circuit Tracks User Guide V3, p.7 What's In The Box; p.9 Usi)*
- **[hardware-40]** The rear panel includes a Kensington MiniSaver security slot. *(Circuit Tracks User Guide V3, p.18 Rear View item 9)*
- **[hardware-41]** Scenes are one of 16 memories to which patterns/pattern-chains are assigned; the manual's Scene glossary entry indicates they are accessed by holding Shift while Mixer View is selected, and the Mixer View lower rows show the Scene pads. *(Circuit Tracks User Guide V3, p.13 Glossary 'Scene'; p.88 Mi)*
- **[hardware-42]** Save requires two presses to complete (first press flashes Save, second stores to the last-used Project slot); pressing any other button after the first press aborts the save. *(Circuit Tracks User Guide V3, p.96 Saving Projects to new sl)*
- **[hardware-43]** When saving, a Project pad colour can be chosen from a palette of 14 colours by rotating Macro 1 after the first Save press. *(Circuit Tracks User Guide V3, p.96 Changing Project Colours)*

### Sequencing & arrangement (`sequencing`)

- **[sequencing-1]** Each Project on Circuit Tracks holds 8 Patterns per track, across all 8 tracks (2 synth, 2 MIDI, 4 drum). *(Circuit Tracks User Guide v3, p73)*
- **[sequencing-2]** Live-recorded synth notes are not committed to the pattern until the Record button (13) is pressed; pressing Record again stops recording. Record is momentary/latching — holding it longer than ~half a second drops out of record on release. *(Circuit Tracks User Guide v3, p35-36)*
- **[sequencing-3]** Non-quantised recording is toggled by holding Shift + Record (Record is legended 'Rec Quantise'); pressing Shift shows the state: Record lit green = quantised, red = non-quantised. *(Circuit Tracks User Guide v3, p37)*
- **[sequencing-4]** There are 6 micro steps (ticks) between adjacent pattern steps; one tick equals 1/6 of a step. *(Circuit Tracks User Guide v3, p37, p48)*
- **[sequencing-5]** Macro knob automation is recorded by turning a Macro while in Record mode (LED turns red); you must exit Record before the sequence loops or the newly recorded automation is overwritten by the current knob position. *(Circuit Tracks User Guide v3, p36-37)*
- **[sequencing-6]** Macro automation for a specific step can be written while stopped: in Note View press Record, hold the step pad, then turn the Macro. *(Circuit Tracks User Guide v3, p37)*
- **[sequencing-7]** Automation for a Macro is cleared by holding Clear and turning that knob at least 20% of its rotation; this clears the automation for that Macro across the whole Pattern, not just the current step. *(Circuit Tracks User Guide v3, p37)*
- **[sequencing-8]** In Note View the top two grid rows are the 16-step pattern display and the bottom two rows are the synth keyboard; steps containing notes are lit bright blue. *(Circuit Tracks User Guide v3, p38)*
- **[sequencing-9]** To insert a note manually, hold the step pad and press the keyboard note; Record mode is not required and multiple notes can be stacked on one step. To delete a note, hold the step pad and press the unwanted keyboard pad. *(Circuit Tracks User Guide v3, p40)*
- **[sequencing-10]** Holding Clear and pressing a step pad clears all notes on that step across all octaves at once. Holding Duplicate, pressing a source step then a destination step copies a step's notes and all its attributes, overwriting the destination. *(Circuit Tracks User Guide v3, p40)*
- **[sequencing-11]** Velocity is edited in Velocity View (press Velocity, button 6). The display resolution is 16 increments of 8: 1 lit pad=8, up to 16 pads=127; live recording captures full 7-bit velocity (0-127). *(Circuit Tracks User Guide v3, p42-44)*
- **[sequencing-12]** Fixed Velocity is toggled with Shift + Velocity and sets velocity to a fixed value of 96 (12 pads); it is a global setting affecting all tracks and does not alter previously recorded notes. *(Circuit Tracks User Guide v3, p43)*
- **[sequencing-13]** Individual notes stacked on the same step can hold different velocity values (unless Fixed Velocity is active). *(Circuit Tracks User Guide v3, p44)*
- **[sequencing-14]** Gate is edited in Gate View (press Gate, button 6). Gate length is measured in steps and can be any value from 1/6 to 16 in increments of 1/6, giving 96 possible values; a gate of 16 sustains a note through an entire 16-step pattern. *(Circuit Tracks User Guide v3, p45)*
- **[sequencing-15]** Fractional gate values are set by repeatedly pressing the highest lit gate pad: each press subtracts 1/6 of a step (dimming the pad), and the 6th press reverts to the original integer value. *(Circuit Tracks User Guide v3, p46)*
- **[sequencing-16]** Probability View is the secondary view of Pattern Settings (button 7), opened by Shift + Pattern Settings or pressing Pattern Settings twice. It uses pads 17-24 as an 8-level meter with values 100%, 87.5%, 75%, 62.5%, 50%, 37.5%, 25%, 12.5%. *(Circuit Tracks User Guide v3, p47)*
- **[sequencing-17]** Probability is applied per step: all notes/hits at a step play together or not at all. Clearing steps/patterns/projects resets probability to 100%, and live-recording a new note to a step resets that step's probability to 100%. *(Circuit Tracks User Guide v3, p47-48)*
- **[sequencing-18]** Micro Step View is the secondary view of Gate (Shift + Gate, or press Gate twice); a note can be delayed by 0 to 5 ticks (1 tick = 1/6 step), and individual notes on a step (up to 6, shown left-to-right in entry order) can be nudged separately for triplets or strummed chords. *(Circuit Tracks User Guide v3, p48-50)*
- **[sequencing-19]** Tied/drone notes are created by selecting the step in Gate View, switching to Micro Step View, and pressing pad 24 to toggle tie-forward on/off; the gate must be set long enough to reach the next note. Tied notes appear orange (not red) in Note View when the step is held. *(Circuit Tracks User Guide v3, p51-52)*
- **[sequencing-20]** Default pattern length is 16 steps, doubled to 32 with the Step Page button (8, legended 1-16/17-32): blue = Page 1 (steps 1-16), orange = Page 2 (steps 17-32). *(Circuit Tracks User Guide v3, p75)*
- **[sequencing-21]** A pattern can be shorter than 16 steps, or any length up to a maximum of 32, by moving the start and end points in Pattern Settings View; start and end points are set independently and per track. *(Circuit Tracks User Guide v3, p53-54)*
- **[sequencing-22]** In Pattern Settings View the end point is moved by pressing a different step pad (default end = pad 16); the start point is moved by holding Shift while pressing the new start pad. Higher pads still holding data glow dim red. *(Circuit Tracks User Guide v3, p53-54)*
- **[sequencing-23]** Pattern play order is set with pads 29-32 in Pattern Settings View: 29 = Forwards (default), 30 = Reverse, 31 = Ping-pong, 32 = Random. *(Circuit Tracks User Guide v3, p55)*
- **[sequencing-24]** Per-track Pattern Sync rate is set on the third row of Pattern Settings View (pads 1-8): 1/4, 1/4T, 1/8, 1/8T, 1/16 (default, pad 5), 1/16T, 1/32, 1/32T, acting as a multiplier/divider of project BPM. *(Circuit Tracks User Guide v3, p55-56)*
- **[sequencing-25]** Mutate is triggered by holding Shift + Duplicate; it shuffles the existing notes/hits of the currently playing pattern to different steps (reassigning micro steps, gate, sample flips, probability and automation) without changing the count or the sounds, affects only the playing pattern, and cannot be undone. *(Circuit Tracks User Guide v3, p56)*
- **[sequencing-26]** Patterns View (button 10) has two pages selected by the up/down buttons (15): Page 1 = Patterns 1-4, Page 2 = Patterns 5-8, arranged vertically with 8 columns for the 8 tracks. *(Circuit Tracks User Guide v3, p73)*
- **[sequencing-27]** Selecting a different pattern during playback queues it to start when the current pattern finishes (queued pad flashes); holding Shift while selecting switches immediately, continuing from the corresponding step to preserve timing. *(Circuit Tracks User Guide v3, p74)*
- **[sequencing-28]** Pattern chains are created by holding the lowest-numbered pattern pad then pressing the highest; chained patterns must be numerically contiguous (e.g. 1-2-3-4, not 1-2-6). Up to 8 patterns chain to a maximum of 256 steps (8 x 32). *(Circuit Tracks User Guide v3, p76, p78)*
- **[sequencing-29]** Each track loops its own independent pattern chain; the longest chain defines the overall sequence length, and shorter-chained or single-pattern tracks repeat to fill it. *(Circuit Tracks User Guide v3, p78)*
- **[sequencing-30]** Patterns can be duplicated between two synth tracks, between synth and MIDI tracks, and between drum tracks, but a pattern cannot be copied between a synth/MIDI track and a drum track. *(Circuit Tracks User Guide v3, p75)*
- **[sequencing-31]** Holding Clear + Step Page reverts a pattern to 16 steps (steps 17-32 data preserved); holding Duplicate + Step Page extends to 32 steps and copies steps 1-16 into 17-32 including automation. *(Circuit Tracks User Guide v3, p75)*
- **[sequencing-32]** There are 16 Scenes, accessed in Mixer View (press Mixer); the two lower grid rows (pads 17-32) are the scene pads, with Scene 1 selected by default (pad 17 pulsing green). *(Circuit Tracks User Guide v3, p81)*
- **[sequencing-33]** A Scene is assigned by first defining the pattern chains per track in Patterns View, then in Mixer View holding Shift (scene pads turn dim gold) and pressing a scene pad (bright gold); on releasing Shift the saved scene pad turns bright white. Scenes let you overcome the contiguous-pattern chaining restriction. *(Circuit Tracks User Guide v3, p81-82, p84)*
- **[sequencing-34]** Scenes are chained by holding the first scene pad and pressing the last (intervening pads light green); chained scenes play in numerical order then repeat, forming a song arrangement. A queued scene flashes green and starts at the end of the currently playing Drum 1 pattern without losing sync. *(Circuit Tracks User Guide v3, p83-84)*
- **[sequencing-35]** Circuit Tracks has 64 internal Project memory slots; work is saved by pressing Save (19) twice, which overwrites the last-used slot unless a new slot pad is chosen in Projects View. Nothing is saved automatically. *(Circuit Tracks User Guide v3, p5, p22, p95-96)*
- **[sequencing-36]** When switching projects during playback, pressing a project pad queues it (only the current pattern, not a scene or chain, plays to its end); holding Shift while selecting switches immediately from the same step in the chain. *(Circuit Tracks User Guide v3, p95)*
- **[sequencing-37]** Each Circuit Tracks synth is 6-voice polyphonic, so up to six notes can be assigned to a single step. *(Circuit Tracks User Guide v3, p35, p6)*
- **[sequencing-38]** Drum hits are silent in Note View while the pattern is stopped; they can only be auditioned when stopped via Velocity View or Gate View, and the pattern must be running (Play) to hear them in Note View. *(Circuit Tracks User Guide v3, p64)*
- **[sequencing-39]** For drum tracks, each of the 6 micro steps can be toggled on/off (in Gate View, pads 17-22), allowing one step to retrigger a sample multiple times; offline drum hits default to the first micro step (on the beat). *(Circuit Tracks User Guide v3, p66-68)*
- **[sequencing-40]** View Lock (Shift + Patterns) freezes the step display on one pattern/page while another plays; it is not saved and defaults to inactive on power-on. *(Circuit Tracks User Guide v3, p80)*
- **[sequencing-41]** An entire synth or MIDI pattern can be transposed by holding Shift + the up/down octave buttons (15) in any step view. *(Circuit Tracks User Guide v3, p79)*

### Sound engine, FX & mixer (`sound`)

- **[sound-1]** Circuit Tracks has exactly two synth tracks, Synth 1 (violet pads) and Synth 2 (pale green pads), which operate identically apart from colour. *(Circuit Tracks User Guide v3, p27 'The Synths / Playing a Sy)*
- **[sound-2]** Each synth track is six-note polyphonic: up to six notes can be assigned to any single step if the patch is polyphonic. *(Circuit Tracks User Guide v3, p35 'Recording a synth pattern)*
- **[sound-3]** The synth engines are the Nova-family engines (dual-oscillator wavetable/virtual-analogue polysynth), the same engine family as the original Circuit. *(DJTechTools review, https://djtechtools.com/2021/05/27/revie, Sound On Sound review, https://www.soundonsound.com/reviews/)*
- **[sound-4]** Each synth has 128 factory patches, arranged as four pages of 32, opened by pressing the Preset button (Patch View). *(Circuit Tracks User Guide v3, p33 'Selecting Patches')*
- **[sound-5]** Pressing Preset with Synth 1 selected opens Patch View Page 1; with Synth 2 selected it opens Page 3; pages are navigated with the down/up arrow buttons. *(Circuit Tracks User Guide v3, p33)*
- **[sound-6]** Default patch is Patch 1 (Page 1 Pad 1) for Synth 1 and Patch 33 (Page 2 Pad 1) for Synth 2. *(Circuit Tracks User Guide v3, p33)*
- **[sound-7]** Patches audition on selection (Patch Preview), respecting current scale/root; holding Shift while pressing a patch pad disables preview. *(Circuit Tracks User Guide v3, p33-34)*
- **[sound-8]** Patches can be recalled externally via MIDI Program Change: default Channel 1 for Synth 1, Channel 2 for Synth 2. *(Circuit Tracks User Guide v3, p34 'External Patch Select')*
- **[sound-9]** There are eight endless-rotary macro knobs; each macro can tweak up to four patch parameters at once. *(Circuit Tracks User Guide v3, p34 'Exploring the Macros')*
- **[sound-10]** The eight macros' default panel labels are: 1 Oscillator, 2 Oscillator Mod, 3 Amp Envelope, 4 Filter Envelope, 5 Filter Frequency, 6 Resonance, 7 Modulation, 8 FX; these are only the primary function and patches can reassign them. *(Circuit Tracks User Guide v3, cover panel image and p34)*
- **[sound-11]** Deep synth editing (assigning any four parameters per knob with range/depth, building patches from scratch) is done in Novation Components' Synth Editor, not on the hardware; on-device sound design is limited to the eight macros. *(Circuit Tracks User Guide v3, p34 and Introduction p5, Sound On Sound review)*
- **[sound-12]** Up to 16 musical scales are available, set in Scales View by pressing the Scales button; only Chromatic contains more than eight notes (12). *(Circuit Tracks User Guide v3, p30-31 'Scales')*
- **[sound-13]** The 16 scales on pads 17-32 are: Natural Minor, Major, Dorian, Phrygian, Mixolydian, Melodic Minor (ascending), Harmonic Minor, Bebop Dorian, Blues, Minor Pentatonic, Hungarian Minor, Ukranian Dorian, Marva, Todi, Whole Tone, Chromatic. *(Circuit Tracks User Guide v3, p31 scale table)*
- **[sound-14]** The default root note is C (keynote Pad 9, lit darker blue); pressing a different keynote pad in Scales View transposes the keyboard, and keynote pads always show an octave from C to B. *(Circuit Tracks User Guide v3, p32 'Root note')*
- **[sound-15]** Changing scale or root note is non-destructive and can be done while a project is playing; notes absent from a new scale are intelligently remapped (usually a semitone) and revert when the original scale is restored. *(Circuit Tracks User Guide v3, p32-33)*
- **[sound-16]** In Note View the two lower rows are the synth keyboard and the upper row is one octave higher; the synth has a 10-octave total range accessed in octave pairs via the down/up arrows; Chromatic scale yields only a one-octave keyboard. *(Circuit Tracks User Guide v3, p28, p31)*
- **[sound-17]** Expanded Note View (Shift + Note; pads turn gold) removes the step display and adds the next two higher octaves for a four-octave playing surface. *(Circuit Tracks User Guide v3, p28-29 'Expanded Note View')*
- **[sound-18]** There are four independent drum tracks (Drum 1-4), each a discrete sequencer track, and each can use any one of 64 pre-loaded samples. *(Circuit Tracks User Guide v3, p60, p62 'Selecting Samples')*
- **[sound-19]** Drum samples appear as four pages of 16 in Note View, or two pages of 32 in Preset View (opened by pressing the track button then Preset). *(Circuit Tracks User Guide v3, p60, p62)*
- **[sound-20]** Default sample allocation: Drum 1 = Kick 1 (Page1 slot1), Drum 2 = Snare 1 (slot3), Drum 3 = Closed hi-hat 1 (slot5), Drum 4 = Additional percussion 1 (slot9); each page is a kit with slots 1-2 kicks, 3-4 snares, 5-6 closed hats, 7-8 open hats, 9-12 percussion, 13-16 melodic. *(Circuit Tracks User Guide v3, p60)*
- **[sound-21]** A quick tap on a drum sample pad changes the track's active sample; a long press plays the sample without reassigning the active sample. *(Circuit Tracks User Guide v3, p61)*
- **[sound-22]** Sample Flip assigns different samples per step: press-and-hold a sample pad (turns red) then press step pads (turn red); flipped steps light pink in the pattern display versus bright blue for normal hits, and it can be done independently per drum track. *(Circuit Tracks User Guide v3, p62-63 'Sample Flip')*
- **[sound-23]** On drum tracks only the even macros are active: Macro 2 = Pitch, Macro 4 = Decay envelope time, Macro 6 = Distortion, Macro 8 = EQ. *(Circuit Tracks User Guide v3, p63 'Using the Macros for drum)*
- **[sound-24]** Expanded Drum View (Shift + Note) turns pads 29-32 into live triggers for Drums 1-4 simultaneously, disabling all other pads. *(Circuit Tracks User Guide v3, p61 'Expanded Drum View')*
- **[sound-25]** The FX section provides 16 delay presets and 8 reverb presets; only one delay and one reverb preset can be active globally, but send amounts are set independently per track with the macros. *(Circuit Tracks User Guide v3, p90-92 'FX Section')*
- **[sound-26]** In FX View delay presets are on the peach pads of Rows 1-2 (pads 1-16, increasing complexity), reverb presets on the cream pads of Row 3 (pads 17-24, increasing reverb time); all delays are BPM-synced. *(Circuit Tracks User Guide v3, p90)*
- **[sound-27]** The 8 reverb presets are: Small Chamber, Small Room 1, Small Room 2, Large Room, Hall, Large Hall, Hall long reflection, Large Hall long reflection. *(Circuit Tracks User Guide v3, p91 reverb table)*
- **[sound-28]** The 16 delay presets include Slapback Fast/Slow, 32nd Triplets, 32nd, 16th Triplets, 16th, 16th Ping Pong, 16th Ping Pong Swung, 8th Triplets, 8th dotted Ping Pong, 8th, 8th Ping Pong, 8th Ping Pong Swung, 4th Triplets, 4th dotted Ping Pong Swung, 4th Triplets Ping Pong Wide. *(Circuit Tracks User Guide v3, p92 delay table)*
- **[sound-29]** A master compressor is applied to the whole mix by default and is not adjustable; it is only toggled on/off via the FX button in Setup/Advanced Setup View. *(Circuit Tracks User Guide v3, p92 'Master Compressor', p106)*
- **[sound-30]** Side Chain View is opened with Shift + FX; it offers seven side-chain presets per source and is OFF by default on both synths and both MIDI tracks. *(Circuit Tracks User Guide v3, p93 'Side Chains')*
- **[sound-31]** Side-chain lets the hits of a chosen drum track duck the audio level of a synth track or external audio input; Page 1 covers Synth 1/2, Page 2 covers the external inputs (MIDI 1/2); Pad 1 in each row is OFF (red), pads 2-8 are the 7 presets, and top-row pads 5-8 select which drum (1-4) is the trigger. *(Circuit Tracks User Guide v3, p93-94)*
- **[sound-32]** Side-chain ducking continues even if the trigger drum's Mixer level is zero, but muting that drum in Mixer View disables side-chain triggering. *(Circuit Tracks User Guide v3, p94)*
- **[sound-33]** The Master Filter knob filters the entire output (all six internal tracks plus both external inputs); it has a centre detent (no filtering, LED dim white), anticlockwise = low-pass, clockwise = high-pass, LED pale blue when active. *(Circuit Tracks User Guide v3, p94 'The Filter Knob')*
- **[sound-34]** Mixer View (press Mixer) provides an eight-channel mixer with default track level 100 (range 0-127); Row 1 pads are per-track Mute buttons; there is no Solo function. *(Circuit Tracks User Guide v3, p88 'Mixer')*
- **[sound-35]** In Mixer View the macros default to level control (macros 3 and 4 controlling external Inputs 1 and 2); pressing the down arrow switches the macros to pan control (centre = white LED, left = blue, right = pink), and both level and pan are automatable. *(Circuit Tracks User Guide v3, p88-89 'Input Level control' a)*
- **[sound-36]** Main audio outputs are two 1/4-inch TS jacks (L/Mono and R); with no plug in R, L/Mono carries a mono sum; max output +5.3 dBu. Inputs 1 and 2 are two 1/4-inch TS unbalanced line-level inputs. *(Circuit Tracks User Guide v3, p18 'Rear view')*
- **[sound-37]** The USB-C port carries power and MIDI (class-compliant) but does NOT carry audio; recording into a DAW must use the analogue outputs. *(Circuit Tracks User Guide v3, p18 'Rear view')*
- **[sound-38]** The headphone output stays active alongside the main outputs when plugged in, and drives +5 dBu into 150-ohm headphones; a 3.5mm Sync out supplies a 5V analogue clock at a default 2 pulses per quarter note. *(Circuit Tracks User Guide v3, p18 'Rear view')*

### MIDI & live performance (`midi-performance`)

- **[midi-performance-1]** Circuit Tracks has exactly two dedicated MIDI tracks (MIDI 1 and MIDI 2) that drive external gear and support all the same sequencer functions as the synth tracks but have no internal sound engine. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-2]** Factory-default MIDI channels are Synth 1 = Ch 1, Synth 2 = Ch 2, MIDI 1 = Ch 3, MIDI 2 = Ch 4, and all four Drum tracks share Ch 10. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-3]** MIDI channel 16 is reserved for the Project (global project-level CCs and project program-change) and cannot be assigned to a track; tracks may be reassigned only to channels 1-15, and no two tracks may share a channel. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-4]** Setup View is entered by holding Shift and pressing Save, and exited by pressing Play; MIDI channel assignment, clock Rx/Tx, and analogue sync rate are all set there. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-5]** Circuit Tracks stores eight MIDI templates; you enter Template View by selecting a MIDI track and pressing the Preset button, and the eight templates appear as the top row of blue pads (selected pad lights white). *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-6]** Each MIDI track can use a different template, and by default all eight templates are identical, mapping the eight Macro knobs to CC1, CC2, CC5, CC11, CC12, CC13, CC71 and CC74 respectively. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-7]** MIDI templates can only be created/edited/backed-up in Novation Components, where you set each control's start and end value (anticlockwise/clockwise limits) and choose unipolar or bipolar polarity; polarity affects only the LED behaviour, not the transmitted MIDI data. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-8]** Recorded MIDI-template CC automation is transmitted to both the MIDI Out DIN and the USB port, unlike parameter automation on other tracks which is sent to USB only. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-9]** On a MIDI track the Macro knobs in Mixer/FX View control the two rear-panel analogue audio Inputs (level, pan, reverb/delay sends), not MIDI; the recommended setup is sending MIDI out to an external synth and routing that synth's audio back into Inputs 1 and 2. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-10]** The internal tempo range is 40-240 BPM (default 120) and internal tempo is integer-only, adjusted with Macro 1 in Tempo View; when slaved to external clock CT follows any rate from 30-300 BPM including fractional tempos. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-11]** Tap Tempo is done by holding Shift and tapping the Tempo/Swing button; it needs at least three taps and then averages the last five taps. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-12]** Swing is adjusted with Macro 2 in Tempo View over a range of 20 to 80 (default 50), affecting the timing of even-numbered off-beat steps. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-13]** When Clock Rx is OFF the unit uses internal clock only; when Clock Rx is ON it is in AUTO mode and locks to a valid external MIDI clock at MIDI In or USB, falling back to internal if none is present. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-14]** When Clock Tx is ON, Circuit Tracks acts as clock master and transmits MIDI Clock out of both the USB and MIDI Out connectors. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-15]** Rx and Tx can be toggled independently for four data categories via Setup View pads 25-32: Note (green), CC (orange), Program Change (purple) and Clock (pale blue); all default to ON. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-16]** If Circuit Tracks is slaved and the external clock stops or goes out of range, it stops playing and displays SYN until Play is pressed. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-17]** The rear-panel analogue Sync Out emits a 5 V pulse at a selectable rate of 1, 2, 4, 8 or 24 ppqn (default 2 ppqn), and Swing is not applied to this analogue clock output. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-18]** Circuit Tracks does not support Ableton Link natively; synchronisation is via MIDI clock (as master or slave) or analogue sync only. *(fael-downloads-prod.focusrite.com, soundonsound.com)*
- **[midi-performance-19]** Program Change on Ch 16 with value 0-63 changes the whole Project instantly, while value 64-127 queues the Project change to a pattern boundary. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-20]** By default, selecting a new pattern while playing queues it so the current pattern finishes first (its pad flashes fast); holding Shift while selecting switches immediately but continues at the equivalent step for timing continuity. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-21]** Circuit Tracks has 16 Scene pads on the Mixer page, each storing a snapshot of the currently-playing patterns/chains; a queued Scene flashes green and takes effect at the end of the currently-playing Drum 1 pattern without losing sync. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-22]** Mute is performed in Mixer View (button 11) using Row-1 pads (one per track, dims when muted); there is no dedicated Solo function. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-23]** When a track is muted, its sequencer step pads become inactive and can instead be used to play that track's notes/chords or drum hits live in real time over the unmuted tracks. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-24]** The dedicated Master Filter knob is a DJ-style filter over the entire output including both external audio inputs, with a centre detent for no filtering; anticlockwise is low-pass and clockwise is high-pass. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-25]** The FX View (button 12) provides 16 delay presets and 8 reverb presets with per-track send amounts set by the Macro knobs, and delay time is synced to the project BPM. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-26]** Scale and root note (16 scales) are set in Scales View (button 9) and can both be changed during playback; changing the keynote transposes existing sequenced notes non-destructively, substituting out-of-scale notes by about a semitone. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-27]** Pressing Play while the sequencer is running restarts the pattern from Step 1 by default; holding Shift while pressing Play instead continues from the step where it was stopped. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-28]** The metronome/click is toggled with Shift + Clear (quarter-note tick on all outputs) and its level is set with Macro 5 in Tempo View. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-29]** Main outputs are two 1/4-inch TS jacks (L/Mono, R) at a maximum line level of +5.3 dBu; with nothing plugged into the R socket, L/Mono carries a summed mono mix. *(fael-downloads-prod.focusrite.com, support.novationmusic.com)*
- **[midi-performance-30]** The USB-C port carries MIDI, power and firmware only and does not carry audio, so audio to a PA or amp must come from the 1/4-inch jack outputs. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-31]** The MIDI Thru port can be reconfigured in Advanced Setup View (hold Shift while powering on) via the Duplicate button to act as a second MIDI Out, allowing control of two external devices that lack their own thru ports. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-32]** Master-filter frequency is controllable over MIDI as CC74 on Ch 16 (0-63 low-pass, 64 off, 65-127 high-pass) and its resonance as CC71 on Ch 16. *(fael-downloads-prod.focusrite.com)*
- **[midi-performance-33]** Circuit Tracks has no focus/master-channel mode for external MIDI control, so each MIDI destination must be addressed on its own channel, which the Sound on Sound review notes as a workflow limitation. *(soundonsound.com)*

### Community knowledge, workflow & ecosystem (`community`)

- **[community-1]** loopop's video 'Circuit TRACKS vs Circuit OG' (Ziv Eliraz) is the most-cited full tutorial/review for Circuit Tracks and is chapter-marked covering sequencing, sample flip, scales, micro steps, probability, mutate, ratchets, automation, MIDI, sidechain, view lock and scenes. *(loopopmusic.com, youtube.com)*
- **[community-2]** Novation's official 'Circuit Tracks - Introduction' video (YouTube 0To9D9RhlXs) plus their YouTube series are the vendor-baseline tutorials for Tracks. *(youtube.com)*
- **[community-3]** Saving requires pressing Save twice: the first press flashes Save and pulses the last-used Project pad white; the second press commits, overwriting the Project you loaded from. *(manualslib.com, userguides.novationmusic.com)*
- **[community-4]** To save to a new slot instead of overwriting, after the first Save press you press a different Project pad in Projects view; other pads darken and the chosen pad flashes green for a couple of seconds. *(manualslib.com, userguides.novationmusic.com)*
- **[community-5]** A Save can be aborted after the first Save press by pressing any other button. *(userguides.novationmusic.com)*
- **[community-6]** Circuit Tracks has no undo function; the community workaround is to Save before risky edits and Duplicate a pattern to an empty slot before running Mutate. *(deavid.wordpress.com, soundonsound.com)*
- **[community-8]** Novation warns not to remove the microSD card during a Save or Load operation, as it can lose/corrupt saved work. *(userguides.novationmusic.com)*
- **[community-9]** Each of the 8 tracks has 8 pattern slots (paged 1-4 then 5-8); patterns default to 16 steps and expand to 32 steps. *(djtechtools.com, soundonsound.com)*
- **[community-10]** Pattern chains are made by holding the start pattern and pressing the end pattern; the maximum chain is 8 patterns x 32 steps = 256 steps. *(musicradar.com, soundonsound.com)*
- **[community-11]** Circuit Tracks has a dedicated Scene system: 16 scene pads inside the Mixer view store snapshots of the currently-playing patterns/chains and can be chained into song sections. *(soundonsound.com)*
- **[community-12]** There are 64 Project slots per pack (double the original Circuit's 32). *(soundonsound.com)*
- **[community-13]** Clear works by holding Clear (lights bright red) then tapping a step pad to delete all notes on that step for the selected track; Clear also removes macro automation, patterns and projects. *(manualslib.com)*
- **[community-14]** Duplicate works as copy/paste: hold Duplicate (bright green), tap the source step (turns green, its notes turn red), then tap destination step(s). *(manualslib.com)*
- **[community-15]** View Lock is engaged by holding Shift and pressing the Patterns/View Lock button, freezing the top 16 step pads so one pattern can be edited while another plays. *(manualslib.com)*
- **[community-16]** Note, Velocity, Gate and Probability views have dedicated grid modes for per-step editing; Probability is the Shift function of the Pattern Settings button. *(soundonsound.com)*
- **[community-17]** Each sequencer step subdivides into 6 micro-steps for ratchets, strums and triplet/straight feel; with Record Quantise disabled, live-recorded notes land on micro-steps. *(soundonsound.com)*
- **[community-18]** Mutate destructively alters the currently selected pattern in subtle ways; the recommended practice is to Duplicate the pattern first to preserve the original. *(soundonsound.com)*
- **[community-19]** Sample flipping (a different drum sample triggered on each step via automation) is the main community workaround for having only 4 drum voices. *(soundonsound.com)*
- **[community-20]** A hidden global compressor (simple on/off, no adjustable parameters) is enabled via the Advanced Setup menu, reached by holding Shift while powering the unit on. *(musicradar.com, soundonsound.com)*
- **[community-21]** Samples are loaded via Novation Components; all imported audio is converted to 48kHz mono 16-bit on the device. *(support.novationmusic.com, userguides.novationmusic.com)*
- **[community-22]** After firmware 1.1.5, no single sample can exceed 98.3 seconds and total sample time per pack is 196.6 seconds. *(soundonsound.com, synthanatomy.com)*
- **[community-23]** Each pack contains 64 samples, 64 projects and 128 synth patches; internal memory holds one pack, and a microSD card holds 31 more for 32 total. *(soundonsound.com, userguides.novationmusic.com)*
- **[community-24]** The Components editor has no iOS support (Android/Chrome/desktop only), a noted limitation for tablet users. *(soundonsound.com)*
- **[community-25]** Isotonik Studios runs a Circuit Tracks patch/sample store including a free 'Big City Dream' 12-preset pack; other free/paid sources include Novation Components, SoundGhost and Nu-Trix. *(isotonikstudios.com, soundghost.net)*
- **[community-26]** Scales apply globally per project (not per pattern or per track), limiting key changes within a song - a repeated owner criticism. *(deavid.wordpress.com)*
- **[community-27]** MIDI channel configuration is global rather than per-project, an owner-reported limitation. *(deavid.wordpress.com)*
- **[community-28]** Drum-track pitch is a continuous knob with no note quantization, making reliable melodic/pitched sample playback impractical. *(deavid.wordpress.com, soundonsound.com)*
- **[community-29]** There is no multitrack or USB audio export; to capture stems you must solo-cue and record each track through the analog line out into an interface. *(deavid.wordpress.com, djtechtools.com)*
- **[community-30]** FX are menu-selected (16 delay types, 8 reverb types) with per-track send-only control and no direct real-time control of time/feedback/depth. *(djtechtools.com)*
- **[community-31]** Sidechain ducking is available with the trigger source selectable from a drum track, and a DJ-style master Filter knob is on the master output. *(djtechtools.com, musicradar.com)*
- **[community-32]** Circuit Tracks runs on an internal rechargeable battery for up to about 4 hours and can be powered from a USB battery bank during performance. *(djtechtools.com, musicradar.com)*
- **[community-33]** For live sync, Circuit Tracks can receive MIDI clock via MIDI In or USB, its MIDI Thru port can act as a second MIDI Out, and it has an analog sync/pulse out to drive Volcas and modular gear. *(musicradar.com)*
- **[community-35]** The Mixer view is the live-performance cockpit, combining the 16 scene launchers, per-track mutes, levels and pan. *(soundonsound.com)*
- **[community-36]** Track color coding on the device is purple = Synth 1, green = Synth 2, teal = MIDI 1, orange = MIDI 2. *(djtechtools.com)*
- **[community-37]** Circuit Tracks has exactly 8 tracks: 2 polyphonic Nova-engine synths, 4 sample-based drum tracks, and 2 dedicated external-MIDI sequencer tracks - a fixed allocation that cannot be reassigned. *(soundonsound.com)*
- **[community-38]** With only 8 patterns per track and 16 scenes, owners report self-contained songs practically top out around 3-4 minutes and feel repetitive. *(deavid.wordpress.com)*
- **[community-39]** r/novationcircuit and the Elektronauts 'Novation Circuit Rhythm and Circuit Tracks' thread are the main community forums for tips and troubleshooting. *(elektronauts.com)*
- **[community-40]** The lack of any screen is the most-cited beginner adjustment: scale names, patch names and knob values are invisible, making settings a memory exercise. *(deavid.wordpress.com, soundonsound.com)*
