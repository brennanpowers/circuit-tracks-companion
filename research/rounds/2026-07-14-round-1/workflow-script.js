export const meta = {
  name: 'circuit-tracks-deep-research',
  description: 'Multi-angle, adversarially verified research on the Novation Circuit Tracks using Opus agents',
  phases: [
    { title: 'Search', detail: 'six parallel research angles (official docs + community)', model: 'opus' },
    { title: 'Verify', detail: 'three adversarial lenses per angle', model: 'opus' },
  ],
}

const SCOPE_WARNING = `CRITICAL SCOPE RULE: You are researching ONLY the Novation Circuit Tracks (released 2020, two synth tracks + two MIDI tracks + four drum sample tracks). It is a DIFFERENT device from the original Novation Circuit (2015, two synth + four drum, no MIDI tracks, no screen labels) and from the Novation Circuit Rhythm (sampler-focused sibling). Tutorials, manuals, and forum posts constantly blur these three devices. For every fact you record, confirm the source is explicitly about Circuit Tracks. If a claim comes from original-Circuit or Rhythm material, either discard it or mark it clearly as "NEEDS TRACKS CONFIRMATION". Never silently assume feature parity between the three devices.`

const AUDIENCE = `Audience context for relevance: a musician who plays bass/guitar and knows chord/scale/mode theory, but is a complete beginner with synths and grooveboxes. They want screen-free music creation at home and to bring the device to jam sessions with other live musicians. Prioritize operational, hands-on knowledge over marketing copy.`

const ANGLES = [
  { key: 'official', focus: `Official Novation documentation: the Circuit Tracks User Guide (find and read the official PDF from Novation's downloads site or a faithful mirror), Novation support/knowledge-base articles, firmware release history and what each firmware version added (especially 1.2 and later), Novation Components (components.novationmusic.com) capabilities for Circuit Tracks: sample management, pack management, patch editing, project backup, firmware updates. Record the canonical URLs for the user guide, downloads page, Components, and getting-started resources.` },
  { key: 'hardware', focus: `Complete hardware and panel map of the Circuit Tracks: every button, the 32-pad grid and what it shows in each mode, the 8 macro knobs, master filter knob, the function buttons (Note, Gate, Velocity, Probability, Micro Nudge, Pattern Settings, Mutate, Duplicate, Clear, Shift, Save, Sessions, Patterns, Scenes, Mixer, FX, Record, Play, Preset, Sample, Tempo/Swing, etc.), all Shift-combinations and hidden gestures/shortcuts, connectivity (MIDI in/out/thru on DIN or TRS adapters?, sync out?, audio outs, headphone, USB-C, battery life and charging), what the pad colors/brightness communicate.` },
  { key: 'sequencing', focus: `Sequencing and arrangement on the Circuit Tracks: entering notes live-record vs step entry; step editing; per-step gate length, velocity, probability, micro nudge; tie/drone notes; Mutate; pattern length (16 vs 32 steps, and shorter lengths?); per-track pattern sync rates / playback speed; pattern chaining (how many patterns per track, how to chain); Scenes (how many, how to assign patterns, how to queue and chain scenes for song arrangement); recording knob automation into patterns (per-step and live); clearing/overwriting automation; Save behavior and what is/isn't saved automatically; sessions/projects (how many slots, switching live).` },
  { key: 'sound', focus: `Sound engine of the Circuit Tracks: the two polyphonic synth tracks (what synth engine underlies them — Nova-heritage?, polyphony count, how patches are selected on-grid, the 8 macro knobs per patch, editing depth on-device vs in Components' synth editor); scales and keys (how many scales, setting root, how scale mode changes the grid); the four drum tracks (sample selection, how the 4 tracks map to sample slots, sample flip per step, drum macros for tuning/decay/etc.); FX section (delay and reverb send levels per track, the types/presets of delay and reverb); the master filter knob behavior; side-chain feature (what ducks what, how to enable); the mixer view (level, pan, mute/solo?); audio output routing.` },
  { key: 'midi-performance', focus: `MIDI and live performance with the Circuit Tracks: the two dedicated MIDI tracks (what they sequence, MIDI templates, editing templates in Components, CC control via macro knobs); MIDI channels used by each track; clock sync in/out, Ableton Link?; using Circuit Tracks as a master clock or slave with other gear; performance techniques for jamming with live musicians (tempo/swing adjustment, live pattern switching timing/quantization, mute/solo workflow, filter and FX as performance tools, transposing or changing key live mid-jam, stopping/starting cleanly); latency/audio considerations when plugging into a PA or amp at a jam.` },
  { key: 'community', focus: `Community knowledge for the Circuit Tracks: the most-recommended tutorials and channels specifically for Tracks (Novation's official video series, loopop's review/tutorial, other respected walkthroughs); beginner pitfalls and gotchas repeatedly reported on r/novationcircuit and forums (e.g., save behavior surprises, pattern-vs-project confusion, accidental clears, macro knobs vs saved state); workflow tips and hidden tricks power users share; the sample/pack ecosystem (where to get packs, how packs work, limits on sample memory/length); common criticisms and hardware/software limitations to be aware of; how people use Tracks in live band contexts.` },
]

const CLAIMS_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['notes', 'claims', 'keySources'],
  properties: {
    notes: { type: 'string', description: 'Detailed prose research notes for this angle, 1000-2500 words, operational and specific (button combos, counts, ranges, menu-free gestures). Markdown allowed.' },
    claims: {
      type: 'array', minItems: 15, maxItems: 45,
      items: {
        type: 'object', additionalProperties: false,
        required: ['id', 'claim', 'sources', 'confidence'],
        properties: {
          id: { type: 'string', description: 'Sequential id like hardware-1, hardware-2' },
          claim: { type: 'string', description: 'One falsifiable, specific factual claim about Circuit Tracks operation' },
          sources: { type: 'array', items: { type: 'string' }, description: 'URLs or precise source names supporting this claim' },
          confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
          tracksConfirmed: { type: 'boolean', description: 'true only if the source is explicitly about Circuit Tracks, not original Circuit or Rhythm' },
        },
      },
    },
    keySources: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['url', 'what'], properties: { url: { type: 'string' }, what: { type: 'string' } } } },
  },
}

const VERDICT_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['verdicts', 'overallNotes'],
  properties: {
    verdicts: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        required: ['id', 'verdict', 'note'],
        properties: {
          id: { type: 'string' },
          verdict: { type: 'string', enum: ['confirmed', 'refuted', 'wrong-device', 'unverifiable'] },
          note: { type: 'string', description: 'Evidence for the verdict; if refuted or wrong-device, state the correct fact with source' },
        },
      },
    },
    overallNotes: { type: 'string', description: 'Anything important the claims MISSED for this angle, corrections, and better sources found' },
  },
}

const LENSES = [
  { key: 'manual', prompt: 'OFFICIAL-MANUAL CROSS-CHECK: Locate and read the official Novation Circuit Tracks User Guide (downloads.novationmusic.com or novationmusic.com support; a faithful mirror like manualslib is acceptable if the official PDF resists fetching) and relevant official support articles. Check each claim against official documentation. Mark confirmed only when official docs support it.' },
  { key: 'device', prompt: 'DEVICE-CONFUSION AUDIT: Your sole job is catching cross-device contamination. For each claim, determine whether it is actually true of the Circuit TRACKS specifically, or whether it describes the original Novation Circuit (2015) or Circuit Rhythm. Search for device-specific evidence. Mark wrong-device wherever the fact belongs to a sibling device or the feature differs on Tracks (e.g., different button names, counts, or behaviors).' },
  { key: 'skeptic', prompt: 'SKEPTICAL REFUTER: Assume each claim is wrong until you find independent evidence. Re-search each claim independently (different queries than an original researcher would use — forum threads, video transcripts, review deep-dives). Actively hunt for counter-evidence, version-dependent behavior (firmware differences), and overstated specifics (wrong counts, wrong button combos). Refute anything you cannot independently support.' },
]

phase('Search')
log('Fanning out 6 Opus research angles on the Circuit Tracks')

const results = await pipeline(
  ANGLES,
  (a) => agent(
    `${SCOPE_WARNING}\n\n${AUDIENCE}\n\nResearch this angle in depth using WebSearch and WebFetch (load them via ToolSearch if needed). Angle "${a.key}":\n${a.focus}\n\nMethod: run several distinct searches; fetch and actually read the best 4-8 sources (prefer official Novation material first, then loopop/established reviewers, then forums/reddit for tips and pitfalls). Prefix every claim id with "${a.key}-". Record precise, falsifiable claims — button combos, exact counts, exact behaviors — not vague summaries. Your notes field should read like field notes for someone writing a device manual.`,
    { label: `search:${a.key}`, phase: 'Search', schema: CLAIMS_SCHEMA, model: 'opus' }
  ),
  (res, a) => {
    if (!res) return null
    return parallel(LENSES.map(lens => () =>
      agent(
        `${SCOPE_WARNING}\n\n${lens.prompt}\n\nYou are verifying research claims about the Novation Circuit Tracks for the angle "${a.key}". Use WebSearch and WebFetch (load via ToolSearch if needed). Return a verdict for EVERY claim id listed below. In overallNotes, list important facts for this angle that the claims missed entirely.\n\nCLAIMS:\n${JSON.stringify(res.claims, null, 2)}`,
        { label: `verify:${a.key}:${lens.key}`, phase: 'Verify', schema: VERDICT_SCHEMA, model: 'opus', effort: 'high' }
      )
    )).then(vs => ({ angle: a.key, research: res, verification: LENSES.map((l, i) => ({ lens: l.key, result: vs[i] })).filter(v => v.result) }))
  }
)

const done = results.filter(Boolean)
log(`Research complete: ${done.length}/6 angles with verification`)
return { angles: done }