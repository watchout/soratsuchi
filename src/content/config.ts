import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    endDate: z.string().optional(),
    location: z.string(),
    status: z.enum(['募集中', '準備中', '満席', '終了']),
    price: z.string().optional(),
    target: z.string().optional(),
    formUrl: z.string().url().optional(),
    image: z.string().optional(),
  }),
});

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { events, journal };
