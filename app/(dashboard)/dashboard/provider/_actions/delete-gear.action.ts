"use server";

import { revalidatePath } from "next/cache";

import { providerService } from "@/services/provider.service";

export async function deleteGearAction(
  id: string
) {
  await providerService.deleteGear(id);

  revalidatePath(
    "/dashboard/provider"
  );

  revalidatePath(
    "/dashboard/provider/gear"
  );
}