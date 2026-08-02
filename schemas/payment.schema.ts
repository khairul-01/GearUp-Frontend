import { z } from "zod";

export const createPaymentSchema =
  z.object({
    rentalOrderId: z.string().min(1),
  });