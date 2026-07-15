# Round 1 research notes — angle: official

*Raw researcher output (Opus). Immutable — corrections go in dossier.md.*

## Field notes — Circuit Tracks, from the official Novation User Guide (v3 EN PDF, © 2020 Focusrite)

All facts below are drawn from the **official Circuit Tracks User Guide** (the Focusrite-hosted v3 English PDF, mirrored byte-identical at Kraft Music) unless flagged otherwise. The guide is explicitly and only about Circuit Tracks, so device confusion with the original Circuit / Rhythm is not a risk for these items. I extracted the PDF to text and read every operational chapter.

### Track architecture (the thing that defines Tracks)
Eight tracks total, always in this fixed order left-to-right on the Track buttons: **Synth 1, Synth 2, MIDI 1, MIDI 2, Drum 1, Drum 2, Drum 3, Drum 4.** Two synth tracks (internal 6-voice-polyphonic engine), two MIDI tracks (no internal sound — they sequence external gear over 5-pin MIDI/USB), four sample-based drum tracks. Pressing any Track button always jumps to Note View for that track. Colour coding is consistent everywhere: Synth 1 = violet, Synth 2 = pale green.

### The grid and the "two rows / two rows" logic
32 velocity-sensitive RGB pads in a 4×8 matrix. In synth/MIDI Note View the **top two rows (pads 1–16) are the 16-step pattern display**, and the **bottom two rows (17–32) are the keyboard**. Pad 32 (top of lower octave) equals pad 17 (bottom of upper octave). To play two octaves ascending you go pads 25→32 then 18→24. Full synth range is 10 octaves via the ↑/↓ (J/K) octave buttons; each track's octave is set independently.

### Expanded views (Shift+Note)
`Shift + Note` = **Expanded Note View** (Note button turns gold). For synths it removes the pattern display and gives a 4-octave keyboard. For drums it becomes **Expanded Drum View**: all pads disabled except 29–32, which become four live pads (one per drum track) so you can play/record all four drums at once. Pressing Note again toggles back. This is the guide's stated preferred way to record synths and to lay a full kit down fast.

### Scales (huge for a theory-literate player)
`Scales` button opens Scales View. **16 scales**, selected on pads 17–32: 17 Natural Minor, 18 Major, 19 Dorian, 20 Phrygian, 21 Mixolydian, 22 Melodic Minor (ascending), 23 Harmonic Minor, 24 Bebop Dorian, 25 Blues, 26 Minor Pentatonic, 27 Hungarian Minor, 28 Ukrainian Dorian, 29 Marva, 30 Todi, 31 Whole Tone, 32 Chromatic. Root note is set on the top-two-row "keynote selection" pads (pads 9–16 are white notes C–B, pads 2/3/5/6/7 are the black notes; pads 1,4,8,16 disabled). Default root = C (middle C). Only Chromatic has 12 notes and it collapses the keyboard to one octave (two in Expanded). **Scale and root apply to BOTH synth tracks AND both MIDI tracks simultaneously** — one global key. Changing scale on an existing pattern is non-destructive: out-of-scale notes snap to nearest scale note but revert if you switch back. External MIDI notes also snap to scale (use Chromatic to avoid "wrong notes"). The guide explicitly pitches "you don't need theory — record a line then audition scales."

### Patches, Presets, samples (exact counts)
`Preset` button opens Preset/Patch View for the selected track. **Synth: 128 patches** arranged as 4 pages of 32 (J/K pages). Synth 1 defaults to Preset View page 1, Synth 2 to page 3. Patch 1 = Synth 1 default; Patch 33 = Synth 2 default. Patch Preview auditions the sound respecting current scale/root; `Shift`+pad disables preview (for live use). Factory projects load Synth 1 monophonic (bass) and Synth 2 polyphonic (keys). **MIDI: 8 templates** per track (top row of blue pads). **Drums: 64 samples** per track, shown as 4 pages of 16 in Note View or 2 pages of 32 in Preset View. Default sample map per kit page: slots 1–2 kicks, 3–4 snares, 5–6 closed hats, 7–8 open hats, 9–12 percussion, 13–16 melodic. Default track assignments: Drum1=slot1 (Kick1), Drum2=slot3 (Snare1), Drum3=slot5 (Closed hat1), Drum4=slot9 (Perc1).

### Macros (8 endless encoders)
Eight endless rotary encoders with RGB LEDs; function is view-dependent. On synths, each of the 128 patches maps up to 4 params per macro. **On drums only the even macros (2, 4, 6, 8) are active**: Macro 2 = Pitch, Macro 4 = Decay envelope time, Macro 6 = Distortion, Macro 8 = EQ. In Mixer View macros = volume/pan; in FX View macros = reverb OR delay send per track. Macro moves are recordable automation (LED turns red when recording). To delete a macro's automation: hold `Clear` and turn that knob ≥20% (LED confirms red) — clears it for the whole pattern.

### Recording & step editing
`Record` (red) is live record; has momentary/latching behaviour (>½ sec hold = punch out on release). `Shift+Record` = **Rec Quantise toggle** (non-quantised record uses 6 micro-steps between steps; press Shift to check — green=quantised, red=non-quantised). Six-note polyphony per step on synths. **Manual note entry needs no Record mode**: hold a step pad + press a keyboard pad to add a note; hold step pad + press keyboard pad to delete. `Clear` + step pad wipes all notes on that step. `Shift+Play` continues from the stopped step instead of restarting at step 1. Step buttons group = Note / Velocity / Gate / Probability (Probability is `Shift+Pattern Settings`). Micro step = `Shift+Gate`. Velocity range and gate (gate 1–16 = how many steps a note sustains). Fixed velocity = `Shift+Velocity`.

### Patterns, chaining, scenes, sessions
**8 patterns per track** (2 pages of 4 in Patterns View, J/K to page). Default pattern length 16 steps; `Step Page` button (1-16/17-32) extends to **32 steps** (dim blue ≤16; bright blue page1 / orange page2 when 32). `Clear`+Step Page reverts to 16 (data on 17–32 preserved). `Duplicate`+Step Page copies steps 1–16 to 17–32. Pattern chains must be **contiguous**: hold lowest pattern pad, press highest. Four chained 32-step patterns = 128 steps. Queued pattern switch is default (waits for pattern end); `Shift`+pattern pad switches immediately keeping position. Duplicate can copy patterns between synth↔synth, synth↔MIDI, drum↔drum, but **NOT synth/MIDI↔drum**. **Scenes: 16**, living on the lower two rows of **Mixer View**. Assign by holding `Shift` in Mixer View and pressing a Scene pad (pads go gold). Scenes store the pattern chains of all tracks; scenes chain the same way (hold first, press last) and let you sequence non-contiguous patterns (the workaround for the contiguity rule). Queued scene switches happen at the end of the Drum 1 pattern. **Projects: up to 64** project memories per Pack. `Save` must be pressed twice; in Projects View you can redirect the second press to a new slot. 14-colour palette per project (Macro 1 scrolls colour after first Save press).

### Tempo, swing, sync, click
Internal tempo **40–240 BPM, integer only**, default 120; set with Macro 1 in Tempo View (`Tempo/Swing` button). Grid shows BPM as big digits. External MIDI clock (USB or MIDI In) auto-slaves, accepts fractional **30–300 BPM**, shows "SYN" in red. Tap Tempo = `Shift`+tap Tempo/Swing (needs ≥3 taps, averages last 5). **Swing range 20–80, default 50**, Macro 2; swings even steps. **Click track: `Shift+Clear`** toggles it (green=on); Macro 5 in Tempo View sets click volume; click is global and not saved on power-off (level IS saved). Analogue Sync Out (3.5mm TRS, 5V) default 2 ppqn, selectable 1/2/4/8/24 ppqn in Setup View. Swing is not applied to the sync output.

### FX, sidechain, master filter
`FX` opens FX View. **8 reverb presets** (Small Chamber→Large Hall long reflection) on row 3 (cream pads); **16 delay presets** (Slapback→dotted ping-pong, all tempo-synced) on rows 1–2 (peach pads). Only one reverb + one delay preset globally, but send level is per-track via the 8 macros. **Sidechain = `Shift+FX`**: 7 presets per synth/MIDI track, choose which of Drum 1–4 is the trigger. Drums duck the synths/external inputs. Sidechain keeps ducking even at zero mixer level, but muting the trigger drum disables it. **Master Filter knob** (large, centre-detent): LP when turned CCW from centre, HP when CW; always active on the entire mix + audio inputs. Master Compressor is toggled in Advanced Setup View (FX button).

### MIDI tracks specifics
MIDI tracks behave like synth tracks for sequencing but output note + CC to external gear. Default template macros send CC 1, 2, 5, 11, 12, 13, 71, 74 (all 8 default templates identical). Macro automation on MIDI tracks is sent to BOTH MIDI Out DIN and USB (other tracks' automation goes USB only). In Mixer/FX views the MIDI-track macros control the two rear **audio inputs** (the intended workflow: MIDI out to external synth, audio back into inputs, mix/FX/sidechain it like an internal track). Both mono ¼" TS inputs; stereo ¼" TS outputs; separate headphone out.

### Connectivity / power
Full-size 5-pin MIDI **In, Out and Thru** (Thru can be set to mirror Out in Advanced Setup). USB-C (MIDI class-compliant, also DC power/charging — **carries no audio**). microSD slot. Built-in rechargeable battery, ~4 hours. Power button needs ~1 sec long-press.

### Packs & microSD
A Pack = everything on the device: all 64 projects + 128 patches + 64 samples. Internal memory holds one Pack; **microSD adds 31 more (32 total)**. Packs View = `Shift+Projects` (only accessible with a card inserted). Prime a pack (pulses), press Play to load. Cards must be **Class 10 minimum, FAT32**. Packs can only be deleted via Components, not on-device.

### Components (the companion app — official capabilities list)
Novation Components (components.novationmusic.com) can: download content, create/edit synth patches (full synth engine editor), load your own samples, edit MIDI templates (control range + uni/bipolar LED), back up projects, load packs, and update firmware. Requires a Web-MIDI browser (Chrome or Opera recommended); a standalone app exists after product registration; Windows users should install the Novation driver.

### Firmware history (from Components/support + reviewer sources)
- **1.1.5 (April 2021):** tripled sample time — pack sample memory 60s → **196.6s per pack**, max single sample **98.3s**; reduced voice stealing in synth patches; added **sticky Shift** toggle in Setup View. (synthanatomy/synthtopia — Tracks-specific.)
- **1.2 (15 Dec 2022, latest official):** **save mute states to Scenes** (store muted tracks with a scene, so no empty patterns needed to arrange). (novationmusic.com official article.) This is the newest officially documented firmware; a "1.2.1" build number appears only in a third-party reverse-engineering gist and is not officially documented — treat as unconfirmed.

### Hidden/boot combos worth memorising for a screen-free player
- **Setup View:** `Shift+Save` (MIDI channels, clock rx/tx, sync rate, brightness pad 24). Exit with Play.
- **Advanced Setup View:** hold `Shift` while powering on (Easy Start/Mass-Storage toggle via Note, MIDI Thru behaviour via Duplicate, Master Compressor via FX).
- **Save Lock:** hold `Shift+Save` while powering on (protects a live set; persists across power cycles).
- **Force blank project (recovery):** hold `Shift+Clear` while powering on.
- **Bootloader Mode (check firmware / recover):** power off, hold **Scales + Preset + Note**, power on. Synth 1/2 pads show firmware version as binary pad patterns. Exit with Play. "Engineering mode only — use with Novation support."

Default MIDI channels: Synth1=1, Synth2=2, MIDI1=3, MIDI2=4, Drums 1–4=10 (all four share ch10). Channel 16 reserved for the Project. All tracks reassignable to ch 1–15; no two on the same channel. MIDI Note/CC/PGM/Clock each have independent Rx/Tx toggles (pads 25–32), all ON by default.

A separate **Circuit Tracks Programmer's Reference Guide** (downloadable) covers full MIDI implementation, PGM patch recall, and drum CC-on-channel-10 sample recall.
