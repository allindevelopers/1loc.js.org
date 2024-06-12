import { z, defineCollection } from 'astro:content';

const linesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    category: z.string(),
    created: z.string(),
    title: z.string(),
    updated: z.string().optional(),
    contributors: z.array(z.string()).optional(),
    description: z.string().optional(),
    openGraphCover: z.string().optional(),
    tags: z.string().optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  'lines': linesCollection,
};