# 9. Live performance — the jam-session playbook

Everything here is built from verified mechanics in sections 1–8; where a line is
advice rather than device fact, it reads as advice.

## Before you leave the house

- **Charge it** (~4 h battery) or pack a USB battery bank — both work for a set.
- **Engage Save Lock** if you won't need to save mid-jam: power on holding
  `Shift + Save`. No elbow can destroy your projects. (It persists until toggled off
  the same way.)
- **Sound:** outputs are unbalanced 1/4″ TS at up to +5.3 dBu — line level into a DI
  box, mixer channel, or amp's return. **Mono PA? Use L/Mono alone** — it auto-sums
  the mix when R is unplugged. Headphones (3.5 mm) stay live alongside the mains, but
  note there's no separate cue mix — phones mirror the mains.
- Set your project's tempo and key at home; save versions to spare slots as
  checkpoints ("save as" = first Save press, then another project pad).

## Locking in with the band

Playing with humans, no clock involved:

- **Tap tempo:** hold `Shift`, tap `Tempo/Swing` to the drummer (≥3 taps; averages
  the last 5). Integer BPM only — close enough for a jam.
- **Nudge by ear:** there's no beat-nudge, so restart cleanly instead: stop, then
  `Play` on the drummer's downbeat (starts at step 1). `Shift + Play` resumes
  mid-pattern when *you're* the timekeeper.

Playing with synced gear:

- **Tracks as master:** Clock Tx on → clock leaves USB + DIN Out; analog Sync Out
  runs Volcas/modular (default 2 ppqn — match your gear; **swing won't reach the
  analog clock**, so swung Tracks + straight Volca is by design, not a bug).
- **Tracks as slave:** Clock Rx auto-locks to incoming clock (fractional BPM fine).
  If the master dies mid-song, Tracks stops and shows **SYN** — press `Play` to carry
  on internally at the saved tempo.
- MIDI Thru can become a second Out (Advanced Setup) for two-synth rigs. No Ableton
  Link exists — plan around MIDI/analog clock.

## Staying in key with everyone else

One global scale + root covers both synths *and* both MIDI tracks:

- Band moves from Am to Dm? Scales View, tap the new **root** — every sequenced
  pattern transposes live, non-destructively.
- Mode colour shifts (Dorian → Phrygian…) are one pad each; wrong-scale notes get
  substituted, and **revert** when you switch back, so audition fearlessly.
- Register jumps: `Shift + ▼/▲` transposes the current pattern by octave.
- Playing lead over the band from the pads: everything you touch is in-scale by
  construction. Think scale degrees, not physical positions.

## The performance surface, ranked

What to actually touch mid-jam, roughly in order of confidence required:

1. **Mutes (Mixer View row 1).** Build-ups and drops for free. Fw 1.2 stores mute
   states in Scenes.
2. **The muted-track trick:** a muted track's step pads become live pads — solo over
   the groove on a muted synth, or finger-drum on a muted drum track, without
   touching the sequence.
3. **Master Filter.** LP sweep into a drop, HP to thin the mix under a soloist.
   Centre detent = home.
4. **FX send macros** (FX View): throw a snare into the hall, dub-delay a synth stab
   — sends are per-track, so one track can swim while the rest stay dry.
5. **Macro rides** on synths (filter/resonance/envelope) and drums (pitch/decay) —
   in Record mode these write automation, so tweak *outside* Record unless you mean
   to keep it.
6. **Probability** on hats/percussion for self-varying grooves.
7. **Mutate** (`Shift + Duplicate`) as a re-roll — duplicate the pattern to a spare
   slot first; there is no undo.
8. **Queued pattern/scene switching:** taps land on musical boundaries by design
   (patterns at pattern-end, scenes at Drum 1's pattern-end). `Shift` + pad when you
   need it *now*.

## Song mode on the fly

Scenes are your setlist: sections on scene pads 1–16, launched by tap (queued, in
sync) or chained hold-first-press-last for a hands-free arrangement — all from Mixer
View, which also holds your mutes. Long-press view buttons to *peek* (e.g. check BPM)
without leaving the cockpit; **Sticky Shift** (Setup View) if one-handed combos beat
holding Shift while your other hand plays.

## Don't do these live

- Don't `Clear` anything you love — it's immediate and permanent.
- Don't switch projects with unsaved changes — queued or not, unsaved work is gone.
- Don't pull the microSD during save/load.
- Don't expect the click on stage: it ticks on **all outputs** — the audience hears
  your metronome.
- Don't panic at a hung boot: `Shift + Clear` power-on loads a blank project.

## Sources

Mechanics: sections 1–8 (User Guide v3 p9–10, p18, p30–33, p73–96, p102–107).
Dossier: `midi-performance-10–18, 20–28`, `hardware-11, 15, 17–18, 25–26`,
`official-13–15, 30`, `sequencing-25, 27, 36`, `community-6, 8, 32–33, 35`;
dossier B (MIDI; Setup, storage, workflow & safeguards).
