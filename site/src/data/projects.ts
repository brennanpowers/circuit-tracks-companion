/** Course project metadata. ids match the course collection's `project` enum. */
export interface CourseProject {
  id: 'start-here' | 'first-groove' | 'a-full-track' | 'jam-toolkit' | 'textures';
  number: number;
  title: string;
  tagline: string;
  /** CSS custom property name for the project accent colour */
  color: string;
  deliverable: string;
}

export const PROJECTS: CourseProject[] = [
  {
    id: 'start-here',
    number: 0,
    title: 'Start Here',
    tagline: 'Setup, orientation, and your first ten-minute groove.',
    color: '--track-aqua',
    deliverable: 'A configured, backed-up device you can already play with.',
  },
  {
    id: 'first-groove',
    number: 1,
    title: 'First Groove',
    tagline: 'Drums first: steps, velocity, probability, sample flips.',
    color: '--track-orange',
    deliverable: 'A saved beat with groove, dynamics, and variation.',
  },
  {
    id: 'a-full-track',
    number: 2,
    title: 'A Full Track',
    tagline: 'Bass, chords, FX, automation — arranged into a finished piece.',
    color: '--track-violet',
    deliverable: 'A complete house/techno track built from scratch.',
  },
  {
    id: 'jam-toolkit',
    number: 3,
    title: 'The Jam Toolkit',
    tagline: 'Bring it to the room: tempo, key changes, performance moves.',
    color: '--track-green',
    deliverable: 'A jam-night-ready session and a preflight checklist.',
  },
  {
    id: 'textures',
    number: 4,
    title: 'Textures',
    tagline: 'Your own sounds and samples; slow, generative, ambient worlds.',
    color: '--track-blue',
    deliverable: 'An ambient piece using patches and samples you made.',
  },
];
