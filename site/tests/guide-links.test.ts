import { describe, it, expect } from 'vitest';
import { rewriteGuideHref } from '../src/lib/guide-links';

const B = '/circuit-tracks-companion';

describe('rewriteGuideHref', () => {
  it('maps guide section links to reference routes', () => {
    expect(rewriteGuideHref('06-sequencing.md', B)).toBe(`${B}/reference/06-sequencing/`);
  });

  it('handles ./ prefixed links', () => {
    expect(rewriteGuideHref('./03-synth-tracks.md', B)).toBe(`${B}/reference/03-synth-tracks/`);
  });

  it('preserves anchors', () => {
    expect(rewriteGuideHref('02-data-model.md#saving', B)).toBe(
      `${B}/reference/02-data-model/#saving`,
    );
  });

  it('maps README.md to reference index', () => {
    expect(rewriteGuideHref('README.md', B)).toBe(`${B}/reference/`);
  });

  it('ignores research links', () => {
    expect(rewriteGuideHref('../research/dossier.md', B)).toBeNull();
  });

  it('ignores external and local-anchor links', () => {
    expect(rewriteGuideHref('https://example.com', B)).toBeNull();
    expect(rewriteGuideHref('#local', B)).toBeNull();
  });
});
