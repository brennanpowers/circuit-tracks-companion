// Dev-only: renders panel-geometry.ts to a standalone SVG for visual
// verification against the manual's Top View photo. Not shipped.
import { writeFileSync } from 'node:fs';
import { PANEL, PADS, VIEWBOX } from '../src/data/panel-geometry.ts';

const S = [];
S.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${VIEWBOX}" width="1460" height="1290">`);
S.push(`<rect x="2" y="2" width="726" height="641" rx="18" fill="#1c1f24" stroke="#555"/>`);
S.push(`<text x="50" y="38" fill="#cfd3d9" font-size="17" font-weight="800" letter-spacing="2" font-family="Helvetica">CIRCUIT<tspan font-weight="300"> TRACKS</tspan></text>`);
S.push(`<rect x="632" y="479" width="58" height="132" rx="8" fill="none" stroke="#3a4150"/>`);
for (const p of PADS)
  S.push(`<rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" rx="6" fill="#3a4150"/>`);
for (const el of PANEL) {
  if (el.kind === 'knob') {
    S.push(`<circle cx="${el.cx}" cy="${el.cy}" r="${el.r}" fill="#14161a" stroke="#4a5160" stroke-width="1.5"/>`);
    S.push(`<line x1="${el.cx}" y1="${el.cy - el.r + 6}" x2="${el.cx}" y2="${el.cy - el.r / 2}" stroke="#aab2bf" stroke-width="2.5"/>`);
    if (el.id.startsWith('macro')) S.push(`<circle cx="${el.cx}" cy="${el.cy + el.r + 5}" r="2.5" fill="#c65fd6"/>`);
    S.push(`<text x="${el.cx}" y="${el.cy + el.r + 16}" fill="#9aa2ae" font-size="9.5" text-anchor="middle" font-family="Helvetica">${el.label}</text>`);
  } else if (el.kind === 'zone') {
    S.push(`<rect x="${el.x}" y="${el.y}" width="${el.w}" height="${el.h}" rx="8" fill="none" stroke="#666" stroke-dasharray="4 3"/>`);
  } else {
    S.push(`<rect x="${el.x}" y="${el.y}" width="${el.w}" height="${el.h}" rx="5" fill="#14161a" stroke="#4a5160"/>`);
    const glyphStyle = el.id === 'record' ? ' fill="#e05555" font-size="17"' : el.id === 'play' ? ' fill="#58c471" font-size="13"' : '';
    const lines = el.label.split('\n');
    lines.forEach((line, i) => {
      const y = el.y + (el.sub && el.h > 30 ? el.h / 2 - 4 : el.h / 2) + (i - (lines.length - 1) / 2) * 11 + 3.5;
      const baseStyle = glyphStyle || ' fill="#c8cdd5" font-size="10"';
      S.push(`<text x="${el.x + el.w / 2}" y="${y}" text-anchor="middle" font-family="Helvetica"${baseStyle}>${line.replace('&','&amp;')}</text>`);
    });
    if (el.sub) {
      // small function-row buttons legend ABOVE (as on the device); tall buttons INSIDE at the bottom
      const subY = el.h <= 30 ? el.y - 4 : el.y + el.h - 7;
      S.push(`<text x="${el.x + el.w / 2}" y="${subY}" fill="#88919c" font-size="7.5" text-anchor="middle" font-family="Helvetica">${el.sub}</text>`);
    }
  }
}
S.push('</svg>');
writeFileSync('/tmp/panel-check.svg', S.join('\n'));
console.log('wrote /tmp/panel-check.svg');
