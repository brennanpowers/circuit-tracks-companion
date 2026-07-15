/**
 * 1-to-1 top-panel geometry for the Circuit Tracks, transcribed from the
 * official User Guide v3 "Top View" photograph (p15). Coordinates are in a
 * 730×645 device-local space (photo coords minus the page offset).
 *
 * `control` maps each element to its entry in panel-controls.json for the
 * interactive detail card. Elements are individually addressable by `id`
 * for lesson highlights (e.g. "macro-5", "record", "synth-1").
 */

export interface Knob {
  kind: 'knob';
  id: string;
  cx: number;
  cy: number;
  r: number;
  label: string;
  /** one-sentence layman description of this exact control */
  plain: string;
  control: string;
}

export interface Button {
  kind: 'button';
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  /** Shift / secondary legend printed on or above the button */
  sub?: string;
  /** one-sentence layman description of this exact control */
  plain: string;
  control: string;
  /** track colour custom property for the 8 track buttons */
  color?: string;
}

export interface Zone {
  kind: 'zone';
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  /** one-sentence layman description of this exact control */
  plain: string;
  control: string;
}

export type PanelElement = Knob | Button | Zone;

export const VIEWBOX = '0 0 730 645';

const FN_Y = 245;
const FN_H = 24;
const TRACK_Y = 285;
const TRACK_H = 50;
const GRID_X = 115;
const GRID_Y = 355;
const GRID_W = 505;
const GRID_H = 250;

export const PANEL: PanelElement[] = [
  // ── Knob section ────────────────────────────────────────────────
  { kind: 'knob', id: 'master-volume', cx: 70, cy: 95, r: 28, label: 'Master Volume', plain: "How loud the whole device is — the knob to grab when someone says \u201cturn it down\u201d.", control: 'volume' },
  // Macros: evens on the upper row, odds on the lower row (staggered)
  { kind: 'knob', id: 'macro-2', cx: 205, cy: 98, r: 27, label: '2 Oscillator Mod', plain: "Macro 2 — on synths, oscillator modulation (wobble/movement in the raw tone). On drums: sample pitch (tune the kick).", control: 'macros' },
  { kind: 'knob', id: 'macro-4', cx: 337, cy: 98, r: 27, label: '4 Filter Envelope', plain: "Macro 4 — on synths, the filter envelope (a bark or bloom of brightness per note). On drums: decay — how long each hit rings.", control: 'macros' },
  { kind: 'knob', id: 'macro-6', cx: 467, cy: 98, r: 27, label: '6 Resonance', plain: "Macro 6 — resonance: a whistling emphasis right at the brightness point. On drums: distortion/grit.", control: 'macros' },
  { kind: 'knob', id: 'macro-8', cx: 598, cy: 98, r: 27, label: '8 FX', plain: "Macro 8 — the patch's built-in effect amount (chorus, drive, etc.). On drums: EQ tilt (darker/brighter).", control: 'macros' },
  { kind: 'knob', id: 'macro-1', cx: 143, cy: 172, r: 27, label: '1 Oscillator', plain: "Macro 1 — on synths, usually the oscillator's basic character (the raw wave you start from).", control: 'macros' },
  { kind: 'knob', id: 'macro-3', cx: 273, cy: 172, r: 27, label: '3 Amp Envelope', plain: "Macro 3 — on synths, the amp envelope: how the note starts and fades (plucky vs swelling).", control: 'macros' },
  { kind: 'knob', id: 'macro-5', cx: 403, cy: 172, r: 27, label: '5 Filter Frequency', plain: "Macro 5 — on synths, brightness (filter cutoff): the single most-touched synth knob. Does nothing on drums.", control: 'macros' },
  { kind: 'knob', id: 'macro-7', cx: 533, cy: 172, r: 27, label: '7 Modulation', plain: "Macro 7 — modulation: adds motion (vibrato/wobble, patch-dependent).", control: 'macros' },
  { kind: 'knob', id: 'master-filter', cx: 665, cy: 182, r: 28, label: 'Master Filter', plain: "The big performance knob. Centre click = off; turn left to muffle the whole mix, right to thin it out. Always live.", control: 'filter' },

  // ── Function button row ─────────────────────────────────────────
  { kind: 'button', id: 'scales', x: 50, y: FN_Y, w: 46, h: FN_H, label: 'Scales', plain: "Pick the key and scale for the whole project — the pads then only play in-key notes.", control: 'scales' },
  { kind: 'button', id: 'down-arrow', x: 115, y: FN_Y, w: 52, h: FN_H, label: '▼', plain: "Down arrow — shifts the keyboard an octave down (and turns pages in some views; in Mixer it flips knobs to pan).", control: 'arrows' },
  { kind: 'button', id: 'up-arrow', x: 175, y: FN_Y, w: 52, h: FN_H, label: '▲', plain: "Up arrow — shifts the keyboard an octave up (and turns pages in some views).", control: 'arrows' },
  { kind: 'button', id: 'step-page', x: 240, y: FN_Y, w: 52, h: FN_H, label: '1-16\n17-32', plain: "Doubles a 16-step pattern to 32 steps; at 32 it flips which half you're viewing. Hold Clear + press it to go back to 16.", control: 'step-page' },
  { kind: 'button', id: 'tempo-swing', x: 305, y: FN_Y, w: 54, h: FN_H, label: 'Tempo\nSwing', sub: 'Tap', plain: "Tempo View: knob 1 sets speed (BPM), knob 2 sets swing (shuffle feel). Hold Shift and tap it to tap-tempo.", control: 'tempo' },
  { kind: 'button', id: 'clear', x: 372, y: FN_Y, w: 52, h: FN_H, label: 'Clear', sub: 'Click', plain: "The eraser. Hold it and tap a step or pattern — or turn a knob — to delete, instantly and permanently. No undo.", control: 'clear' },
  { kind: 'button', id: 'duplicate', x: 437, y: FN_Y, w: 54, h: FN_H, label: 'Duplicate', sub: 'Mutate', plain: "Copy-and-paste for steps and patterns. With Shift: Mutate — shuffles the playing pattern like dice.", control: 'duplicate' },
  { kind: 'button', id: 'save', x: 504, y: FN_Y, w: 46, h: FN_H, label: 'Save', plain: "Saves your project — press it twice on purpose. Nothing ever saves by itself.", control: 'save' },
  { kind: 'button', id: 'projects', x: 562, y: FN_Y, w: 54, h: FN_H, label: 'Projects', sub: 'Packs', plain: "Your song list: 64 slots to load and save projects. With Shift: Packs on the memory card.", control: 'projects' },
  { kind: 'button', id: 'shift', x: 637, y: FN_Y, w: 48, h: FN_H, label: 'Shift', plain: "The \u201csecond function\u201d key — hold it and most buttons do their small-print job.", control: 'shift' },

  // ── Track button row (Preset left, Patterns right) ──────────────
  { kind: 'button', id: 'preset', x: 50, y: TRACK_Y, w: 46, h: TRACK_H, label: 'Preset', plain: "Sound picker for the current track: synth patches, drum samples, or MIDI templates.", control: 'preset' },
  { kind: 'button', id: 'synth-1', x: 113, y: TRACK_Y, w: 58, h: TRACK_H, label: 'Synth 1', plain: "Track button: Synth 1 (violet) — melodic track one, usually the bassline.", control: 'tracks', color: '--track-violet' },
  { kind: 'button', id: 'synth-2', x: 177, y: TRACK_Y, w: 58, h: TRACK_H, label: 'Synth 2', plain: "Track button: Synth 2 (pale green) — melodic track two, usually chords and leads.", control: 'tracks', color: '--track-green' },
  { kind: 'button', id: 'midi-1', x: 241, y: TRACK_Y, w: 58, h: TRACK_H, label: 'MIDI 1', plain: "Track button: MIDI 1 (blue) — sequences an external synth; silent by itself.", control: 'tracks', color: '--track-blue' },
  { kind: 'button', id: 'midi-2', x: 305, y: TRACK_Y, w: 58, h: TRACK_H, label: 'MIDI 2', plain: "Track button: MIDI 2 (pink) — a second external-gear track; silent by itself.", control: 'tracks', color: '--track-pink' },
  { kind: 'button', id: 'drum-1', x: 369, y: TRACK_Y, w: 58, h: TRACK_H, label: 'Drum 1', plain: "Track button: Drum 1 (orange) — usually the kick.", control: 'tracks', color: '--track-orange' },
  { kind: 'button', id: 'drum-2', x: 433, y: TRACK_Y, w: 58, h: TRACK_H, label: 'Drum 2', plain: "Track button: Drum 2 (yellow) — usually the snare.", control: 'tracks', color: '--track-yellow' },
  { kind: 'button', id: 'drum-3', x: 497, y: TRACK_Y, w: 58, h: TRACK_H, label: 'Drum 3', plain: "Track button: Drum 3 (purple) — usually closed hats.", control: 'tracks', color: '--track-purple' },
  { kind: 'button', id: 'drum-4', x: 561, y: TRACK_Y, w: 58, h: TRACK_H, label: 'Drum 4', plain: "Track button: Drum 4 (aqua) — usually percussion or texture.", control: 'tracks', color: '--track-aqua' },
  { kind: 'button', id: 'patterns', x: 637, y: TRACK_Y, w: 48, h: TRACK_H, label: 'Patterns', sub: 'View Lock', plain: "Shows each track's 8 pattern slots — tap to queue, chain them for longer sections. With Shift: View Lock.", control: 'patterns' },

  // ── Step-edit buttons, left column ──────────────────────────────
  { kind: 'button', id: 'note', x: 40, y: 355, w: 60, h: 57, label: 'Note', sub: 'Expand', plain: "Note View — the main playing/step view. With Shift: Expanded view (bigger keyboard / four live drum pads).", control: 'note' },
  { kind: 'button', id: 'velocity', x: 40, y: 418, w: 60, h: 57, label: 'Velocity', sub: 'Fixed', plain: "How hard each step hits (loud/quiet per step). With Shift: fixed-force mode.", control: 'velocity' },
  { kind: 'button', id: 'gate', x: 40, y: 481, w: 60, h: 57, label: 'Gate', sub: 'Micro Step', plain: "How long each step's note holds. With Shift: Micro Steps — timing between the gridlines (rolls, strums).", control: 'gate' },
  { kind: 'button', id: 'pattern-settings', x: 40, y: 544, w: 60, h: 61, label: 'Pattern\nSettings', sub: 'Probability', plain: "Pattern length, direction, and speed for this track. Press again for Probability — per-step dice.", control: 'pattern-settings' },

  // ── The grid ────────────────────────────────────────────────────
  { kind: 'zone', id: 'grid', x: GRID_X, y: GRID_Y, w: GRID_W, h: GRID_H, label: '32-pad grid', plain: "The 32 pads — what they mean depends on the view: steps on top + keyboard below (synths), steps + sample bank (drums), mutes + scenes (Mixer).", control: 'grid' },

  // ── Right column ────────────────────────────────────────────────
  { kind: 'button', id: 'mixer', x: 637, y: 355, w: 48, h: 55, label: 'Mixer', plain: "The mixing desk: track volumes, pan, mutes — and the 16 scene pads live here too.", control: 'mixer' },
  { kind: 'button', id: 'fx', x: 637, y: 420, w: 48, h: 55, label: 'FX', sub: 'Side Chain', plain: "Reverb and delay: pick one of each, then set how much every track sends into them. With Shift: Side Chain (the pumping effect).", control: 'fx' },
  { kind: 'button', id: 'record', x: 637, y: 485, w: 48, h: 55, label: '●', sub: 'Rec Quantise', plain: "Red = recording. Whatever you play (notes or knob moves) lands in the pattern. Hold Shift: quantise on/off.", control: 'record' },
  { kind: 'button', id: 'play', x: 637, y: 550, w: 48, h: 55, label: '▶', plain: "Start/stop. From stopped it restarts at step 1 — hold Shift to continue where you left off.", control: 'play' },
];

/** Decorative pad positions inside the grid zone (4 rows × 8 cols). */
export const PADS = Array.from({ length: 32 }, (_, i) => {
  const col = i % 8;
  const row = Math.floor(i / 8);
  return {
    x: GRID_X + 6 + col * 62.5,
    y: GRID_Y + 6 + row * 61.5,
    w: 55,
    h: 54,
  };
});

/** ids usable in <PanelHighlight> — every element id plus these aliases. */
export const ALIASES: Record<string, string[]> = {
  macros: ['macro-1', 'macro-2', 'macro-3', 'macro-4', 'macro-5', 'macro-6', 'macro-7', 'macro-8'],
  tracks: ['synth-1', 'synth-2', 'midi-1', 'midi-2', 'drum-1', 'drum-2', 'drum-3', 'drum-4'],
  drums: ['drum-1', 'drum-2', 'drum-3', 'drum-4'],
  synths: ['synth-1', 'synth-2'],
  arrows: ['down-arrow', 'up-arrow'],
  'step-buttons': ['note', 'velocity', 'gate', 'pattern-settings'],
  transport: ['record', 'play'],
};

export function resolveHighlights(ids: string[]): Set<string> {
  const out = new Set<string>();
  for (const id of ids) {
    if (ALIASES[id]) ALIASES[id].forEach((x) => out.add(x));
    else out.add(id);
  }
  return out;
}
