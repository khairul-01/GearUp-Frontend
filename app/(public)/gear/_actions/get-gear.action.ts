"use server";

import { gearService } from "@/services/gear.service";
import { GearSearchParams } from "../_types/search-params";

export async function getGearAction(
  params?: GearSearchParams
) {
  try {
    return await gearService.getAll(params);
  } catch {
    return {
      data: [],
      meta: {
        page: 1,
        limit: 12,
        total: 0,
      },
    };
  }
}