import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const course = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/course' }),
  schema: z.object({
    title: z.string(),
    project: z.enum(['start-here', 'first-groove', 'a-full-track', 'jam-toolkit', 'textures']),
    order: z.number(),
    minutes: z.number(),
    goal: z.string(),
  }),
});

// Guide files carry no frontmatter; no schema needed — content is the payload.
const reference = defineCollection({
  loader: glob({ pattern: ['*.md', '!README.md'], base: '../guide' }),
});

export const collections = { course, reference };
