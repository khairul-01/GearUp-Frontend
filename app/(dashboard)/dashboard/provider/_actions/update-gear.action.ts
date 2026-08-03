"use server";

import { revalidatePath } from "next/cache";

import { providerService } from "@/services/provider.service";
import { ActionState } from "@/types/action";

export async function updateGearAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const id = String(formData.get("id"));

  const payload = {
    name: String(formData.get("name")),
    description: String(formData.get("description")),
    brand: String(formData.get("brand")),
    categoryId: String(formData.get("categoryId")),
    condition: String(formData.get("condition")) as "NEW" | "USED",
    rentalPricePerDay: Number(formData.get("rentalPricePerDay")),
    quantity: Number(formData.get("quantity")),
    availableQuantity: Number(formData.get("availableQuantity")),
    imageUrl: String(formData.get("imageUrl") || ""),
  };

  try {
    await providerService.updateGear(
      id,
      payload
    );

    revalidatePath(
      "/dashboard/provider"
    );

    revalidatePath(
      "/dashboard/provider/gear"
    );

    return {
      success: true,
      message: "Gear updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Update failed",
    };
  }
}