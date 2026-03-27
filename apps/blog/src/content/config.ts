import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    readingTime: z.number().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { blog };
