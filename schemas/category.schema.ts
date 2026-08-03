// schemas/category.schema.ts

import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .min(2, "Category name is required"),

  description: z
    .string()
    .min(5, "Description is required"),
});

export type CategorySchema = z.infer<
  typeof categorySchema
>;