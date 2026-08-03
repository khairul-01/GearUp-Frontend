import { z } from "zod";

export const gearSchema = z.object({
  categoryId: z.string().min(1),

  name: z.string().min(2),

  description: z.string().min(10),

  brand: z.string().min(2),

  condition: z.enum([
    "NEW",
    "USED",
  ]),

  rentalPricePerDay: z.coerce
    .number()
    .positive(),

  quantity: z.coerce
    .number()
    .int()
    .positive(),


  availableQuantity: z.coerce
    .number()
    .int()
    .nonnegative(),

  imageUrl: z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().url().optional()
)
});