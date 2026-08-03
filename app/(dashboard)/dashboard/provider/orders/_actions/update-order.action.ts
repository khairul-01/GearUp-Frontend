"use server";

import { revalidatePath } from "next/cache";

import { providerService } from "@/services/provider.service";

export async function updateOrderAction(
  id: string,
  status: string
) {
  await providerService.updateOrder(id, {
    status: status as
      | "PLACED"
      | "CONFIRMED"
      | "PAID"
      | "PICKED_UP"
      | "RETURNED"
      | "CANCELLED",
  });

  revalidatePath(
    "/dashboard/provider/orders"
  );
}