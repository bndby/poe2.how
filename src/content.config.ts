// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
// import { glob } from "astro/loaders";

// 3. Define your collection(s)
const classes = defineCollection({
  // loader: glob({ pattern: "*.md", base: "./content" }),
  schema: z.object({
    Title: z.string().optional(),
    Strength: z.number().optional(),
    Dexterity: z.number().optional(),
    Intelligence: z.number().optional(),
    Weapon: z.string().optional(),
    Trait: z.string().optional(),
    Icon: z.string().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
  classes,
};
