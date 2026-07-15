import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { remarkGuideLinks } from './src/lib/guide-links.ts';

export default defineConfig({
  site: 'https://brennanpowers.github.io',
  base: '/circuit-tracks-companion',
  integrations: [mdx()],
  markdown: { remarkPlugins: [remarkGuideLinks] },
  vite: { plugins: [tailwindcss()] },
});
