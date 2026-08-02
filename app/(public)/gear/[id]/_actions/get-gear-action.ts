"use server";

import { gearService } from "@/services/gear.service";

export async function getGearByIdAction(
  id: string
) {
  try {
    return await gearService.getById(id);
  } catch {
    return null;
  }
}