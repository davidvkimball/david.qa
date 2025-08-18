import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string().nullish(), // Allows null/undefined
      date: z
        .union([z.string(), z.date()]) // Accept string or Date
        .transform((val, ctx) => {
          if (val instanceof Date) return val; // If already a Date, use it
          if (!val) return null; // Handle empty or null
          const parsed = new Date(val);
          if (isNaN(parsed.getTime())) {
            return null; // Gracefully handle invalid dates
          }
          return parsed;
        })
        .nullish(), // Result is Date | null
      image: z.string().optional(),
    }),
});

const about = defineCollection({
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  schema: z.object({}),
});

export const collections = { posts, about };