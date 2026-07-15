/** Display metadata for the 12 guide sections (ids = guide filename stems). */
export const REFERENCE_SECTIONS = [
  { id: '01-orientation', title: 'Orientation', blurb: 'Panel map, signal flow, how the buttons think' },
  { id: '02-data-model', title: 'The data model', blurb: 'Packs, projects, patterns — and what saves when' },
  { id: '03-synth-tracks', title: 'Synth tracks', blurb: 'Patches, macros, and the 16 scales' },
  { id: '04-drum-tracks', title: 'Drum tracks', blurb: 'Samples, sample flip, drum macros' },
  { id: '05-midi-tracks', title: 'MIDI tracks', blurb: 'Templates, channels, external gear' },
  { id: '06-sequencing', title: 'Sequencing deep dive', blurb: 'Gate, velocity, probability, micro steps, Mutate' },
  { id: '07-patterns-scenes-arrangement', title: 'Patterns & Scenes', blurb: 'Chains, scenes, and song arrangement' },
  { id: '08-fx-mixer-sidechain', title: 'FX, mixer & side-chain', blurb: 'Sends, ducking, master section, automation' },
  { id: '09-live-performance', title: 'Live performance', blurb: 'The jam-session playbook' },
  { id: '10-components', title: 'Components & storage', blurb: 'Samples, patches, backups, firmware' },
  { id: '11-shortcuts', title: 'Shortcuts', blurb: 'Every combo in four tables' },
  { id: '12-pitfalls-faq', title: 'Pitfalls & FAQ', blurb: 'Beginner traps, limitations, troubleshooting' },
] as const;
