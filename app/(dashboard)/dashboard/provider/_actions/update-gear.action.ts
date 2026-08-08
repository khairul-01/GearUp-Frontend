"use server";

import { revalidatePath } from "next/cache";

import { providerService } from "@/services/provider.service";
import { ActionState } from "@/types/action";

export async function updateGearAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const id = String(formData.get("id"));

  const imageUrlValue = formData.get("imageUrl");

  const payload = {
    categoryId: String(formData.get("categoryId")),
    name: String(formData.get("name")),
    description: String(formData.get("description")),
    brand: String(formData.get("brand")),
    condition: String(formData.get("condition")) as "NEW" | "USED",
    rentalPricePerDay: Number(formData.get("rentalPricePerDay")),
    quantity: Number(formData.get("quantity")),
    // availableQuantity: Number(formData.get("availableQuantity")),
    imageUrl:
    imageUrlValue &&
    String(imageUrlValue).trim() !== ""
      ? String(imageUrlValue)
      : undefined,
  };

  console.log("update gear payload","id: ", id, "payload", payload, "update gear payload");

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