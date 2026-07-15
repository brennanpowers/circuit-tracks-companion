import type { Link, Root } from 'mdast';
import { visit } from 'unist-util-visit';

/**
 * Rewrite an intra-guide markdown href (e.g. "06-sequencing.md#gate") to its
 * site route under /reference/. Returns null when the href is not an
 * intra-guide link (external, anchor-only, research/, non-md).
 */
export function rewriteGuideHref(href: string, base: string): string | null {
  if (/^(https?:)?\/\//.test(href) || href.startsWith('#') || href.startsWith('mailto:')) {
    return null;
  }
  const m = href.match(/^(?:\.\/)?(README|\d\d-[a-z0-9-]+)\.md(#.*)?$/);
  if (!m) return null;
  const [, stem, anchor = ''] = m;
  const path = stem === 'README' ? 'reference/' : `reference/${stem}/`;
  return `${base.replace(/\/$/, '')}/${path}${anchor}`;
}

/**
 * Remark plugin: applies rewriteGuideHref to every link in guide/ files (the
 * reference collection) and course lessons — both may link to reference
 * sections using plain `NN-slug.md` hrefs. Other site pages are untouched.
 */
export function remarkGuideLinks() {
  return (tree: Root, file: { path?: string; history?: string[] }) => {
    const path = file.path ?? file.history?.[0] ?? '';
    if (!/[/\\]guide[/\\]/.test(path) && !/[/\\]content[/\\]course[/\\]/.test(path)) return;
    const base = process.env.SITE_BASE ?? '/circuit-tracks-companion';
    visit(tree, 'link', (node: Link) => {
      const out = rewriteGuideHref(node.url, base);
      if (out) node.url = out;
    });
  };
}
