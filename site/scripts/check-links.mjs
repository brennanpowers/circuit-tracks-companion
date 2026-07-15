import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';

const DIST = resolve('dist');
const BASE = '/circuit-tracks-companion';

const htmlFiles = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.html')) htmlFiles.push(p);
  }
})(DIST);

const broken = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/(?:href|src)="([^"#?]+)[^"]*"/g)) {
    if (/^(https?:|mailto:|data:|\/\/)/.test(href)) continue;
    const target = href.startsWith(BASE) ? href.slice(BASE.length) : href;
    let fsPath = target.startsWith('/') ? join(DIST, target) : join(dirname(file), target);
    if (fsPath.endsWith('/')) fsPath = join(fsPath, 'index.html');
    if (
      !existsSync(fsPath) &&
      !existsSync(fsPath + '.html') &&
      !existsSync(join(fsPath, 'index.html'))
    ) {
      broken.push(`${file.replace(DIST, '')} -> ${href}`);
    }
  }
}

if (broken.length) {
  console.error('BROKEN LINKS:\n' + broken.join('\n'));
  process.exit(1);
}
console.log(`OK: ${htmlFiles.length} pages, no broken internal links`);
