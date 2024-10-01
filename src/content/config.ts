import { defineCollection, z } from 'astro:content';
const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		author: z.string(),
		pubDate: z.date(),
		image: z.string(),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	blog: blogCollection,
};