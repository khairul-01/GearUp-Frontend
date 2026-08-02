import z from "zod";

export const rentalSchema = z
  .object({
    gearItemId: z.string(),

    quantity: z
      .number()
      .min(1),

    rentalStartDate: z.string(),

    rentalEndDate: z.string(),
  })
  .refine(
    (data) =>
      new Date(data.rentalEndDate) >
      new Date(data.rentalStartDate),
    {
      path: ["rentalEndDate"],

      message:
        "End date must be after start date",
    }
  );