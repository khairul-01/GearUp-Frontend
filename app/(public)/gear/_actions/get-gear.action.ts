"use server";

import { gearService } from "@/services/gear.service";
import { GearSearchParams } from "../_types/search-params";

export async function getGearAction(
  params?: GearSearchParams
) {
  try {
    const response = await gearService.getAll(params);

    return response.data;
  } catch {
    return [];
  }
}