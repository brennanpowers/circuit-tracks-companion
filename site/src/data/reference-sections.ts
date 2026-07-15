/** Display metadata for the 12 guide sections (ids = guide filename stems).
 *  `controls`/`view` drive the highlight diagram atop each reference page. */
export const REFERENCE_SECTIONS = [
  { id: '01-orientation', title: 'Orientation', blurb: 'Panel map, signal flow, how the buttons think', controls: ['grid', 'macros', 'master-filter', 'tracks', 'shift'], view: 'top' as const },
  { id: '02-data-model', title: 'The data model', blurb: 'Packs, projects, patterns — and what saves when', controls: ['save', 'projects', 'shift', 'clear'], view: 'top' as const },
  { id: '03-synth-tracks', title: 'Synth tracks', blurb: 'Patches, macros, and the 16 scales', controls: ['synth-1', 'synth-2', 'scales', 'preset', 'arrows'], view: 'top' as const },
  { id: '04-drum-tracks', title: 'Drum tracks', blurb: 'Samples, sample flip, drum macros', controls: ['drums', 'macro-2', 'macro-4', 'macro-6', 'macro-8'], view: 'top' as const },
  { id: '05-midi-tracks', title: 'MIDI tracks', blurb: 'Templates, channels, external gear', controls: ['midi-1', 'midi-2', 'preset'], view: 'top' as const },
  { id: '06-sequencing', title: 'Sequencing deep dive', blurb: 'Gate, velocity, probability, micro steps, Mutate', controls: ['note', 'velocity', 'gate', 'pattern-settings', 'record'], view: 'top' as const },
  { id: '07-patterns-scenes-arrangement', title: 'Patterns & Scenes', blurb: 'Chains, scenes, and song arrangement', controls: ['patterns', 'step-page', 'pattern-settings', 'mixer'], view: 'top' as const },
  { id: '08-fx-mixer-sidechain', title: 'FX, mixer & side-chain', blurb: 'Sends, ducking, master section, automation', controls: ['fx', 'mixer', 'master-filter', 'master-volume', 'shift'], view: 'top' as const },
  { id: '09-live-performance', title: 'Live performance', blurb: 'The jam-session playbook', controls: ['mixer', 'master-filter', 'fx', 'scales', 'tempo-swing', 'play'], view: 'top' as const },
  { id: '10-components', title: 'Components & storage', blurb: 'Samples, patches, backups, firmware', controls: ['usb-c', 'microsd', 'power'], view: 'rear' as const },
  { id: '11-shortcuts', title: 'Shortcuts', blurb: 'Every combo in four tables', controls: ['shift', 'clear', 'duplicate', 'save'], view: 'top' as const },
  { id: '12-pitfalls-faq', title: 'Pitfalls & FAQ', blurb: 'Beginner traps, limitations, troubleshooting', controls: [] as string[], view: 'top' as const },
] as const;
