/**
 * 1-to-1 rear-panel geometry for the Circuit Tracks, transcribed from the
 * official User Guide v3 "Rear view" photograph (p18). Local space 730×150.
 * Left→right on the device: Kensington · power · USB-C · microSD ·
 * MIDI (Thru, Out, In) · Sync · Outputs (R, L/Mono) · phones · Inputs (2, 1).
 */

export interface RearJack {
  kind: 'jack';
  id: string;
  cx: number;
  cy: number;
  r: number;
  label: string;
  plain: string;
}

export interface RearPort {
  kind: 'port';
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  plain: string;
}

export type RearElement = RearJack | RearPort;

export const REAR_VIEWBOX = '0 0 730 150';

export const REAR: RearElement[] = [
  { kind: 'port', id: 'kensington', x: 40, y: 32, w: 26, h: 12, label: 'Lock',
    plain: 'Kensington slot for securing the device to furniture.' },
  { kind: 'jack', id: 'power', cx: 56, cy: 88, r: 13, label: 'Power',
    plain: 'Hold about one second to switch on or off. The LED glows green while the battery charges.' },
  { kind: 'port', id: 'usb-c', x: 88, y: 62, w: 32, h: 16, label: 'USB-C',
    plain: 'Power, charging, and MIDI to a computer. Audio never travels over USB.' },
  { kind: 'port', id: 'microsd', x: 134, y: 63, w: 34, h: 14, label: 'microSD',
    plain: 'Pack storage — 31 extra packs of projects, patches, and samples (Class 10+, FAT32). Never remove it during a save or load.' },
  { kind: 'jack', id: 'midi-thru', cx: 215, cy: 80, r: 22, label: 'Thru',
    plain: 'Passes MIDI In straight through to more gear — or becomes a second Out (Advanced Setup View).' },
  { kind: 'jack', id: 'midi-out', cx: 273, cy: 80, r: 22, label: 'Out',
    plain: 'MIDI out — your two MIDI tracks and the clock drive external gear from here.' },
  { kind: 'jack', id: 'midi-in', cx: 331, cy: 80, r: 22, label: 'In',
    plain: 'MIDI in — external clock, controllers, and DAW notes arrive here.' },
  { kind: 'jack', id: 'sync-out', cx: 378, cy: 66, r: 9, label: 'Sync',
    plain: 'Analog clock pulses (3.5 mm) for Volcas and modular — default 2 per beat. Swing never reaches this jack.' },
  { kind: 'jack', id: 'out-r', cx: 420, cy: 80, r: 16, label: 'R',
    plain: 'Main output, right side (1/4-inch, unbalanced, line level).' },
  { kind: 'jack', id: 'out-l-mono', cx: 464, cy: 80, r: 16, label: 'L/Mono',
    plain: 'Main output, left — used alone it carries the whole mix summed to mono. This is the jack for a mono PA.' },
  { kind: 'jack', id: 'phones', cx: 506, cy: 66, r: 9, label: 'Phones',
    plain: 'Headphones (3.5 mm) — mirrors the main outputs; there is no separate cue mix.' },
  { kind: 'jack', id: 'input-2', cx: 566, cy: 80, r: 16, label: '2',
    plain: 'External audio input 2 — line level in, mixable, effectable, duckable.' },
  { kind: 'jack', id: 'input-1', cx: 610, cy: 80, r: 16, label: '1',
    plain: 'External audio input 1 — return an external synth here to mix, effect, and side-chain it.' },
];

/** group labels drawn under jack clusters, as printed on the device */
export const REAR_GROUPS = [
  { label: 'MIDI', x: 273, y: 128 },
  { label: 'Outputs', x: 442, y: 128 },
  { label: 'Inputs', x: 588, y: 128 },
];

export const REAR_ALIASES: Record<string, string[]> = {
  midi: ['midi-in', 'midi-out', 'midi-thru'],
  outputs: ['out-l-mono', 'out-r'],
  inputs: ['input-1', 'input-2'],
};

export function resolveRearHighlights(ids: string[]): Set<string> {
  const out = new Set<string>();
  for (const id of ids) {
    if (REAR_ALIASES[id]) REAR_ALIASES[id].forEach((x) => out.add(x));
    else out.add(id);
  }
  return out;
}
