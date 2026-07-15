import { defineCollection, z } from 'astro:content';
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

const reference = defineCollection({
  loader: glob({ pattern: ['*.md', '!README.md'], base: '../guide' }),
  schema: z.object({}).passthrough(),
});

export const collections = { course, reference };
