"use server";

import { ROUTES } from "@/constants";
import { gearSchema } from "@/schemas/provider.schema";
import { providerService } from "@/services/provider.service";
import { ActionState } from "@/types/action";
import { redirect } from "next/navigation";

export async function createGearAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const values = {
    categoryId: String(
      formData.get("categoryId")
    ),

    name: String(
      formData.get("name")
    ),

    description: String(
      formData.get("description")
    ),

    brand: String(
      formData.get("brand")
    ),

    condition: String(
      formData.get("condition")
    ),

    rentalPricePerDay:
      formData.get(
        "rentalPricePerDay"
      ),

    quantity:
      formData.get("quantity"),

    imageUrl: String(
      formData.get("imageUrl")
    ),
  };

  const validated =
    gearSchema.safeParse(values);

  if (!validated.success) {
    return {
      success: false,
      message: "Validation failed",
      errorDetails:
        validated.error.flatten()
          .fieldErrors,
    };
  }

  try {
    await providerService.createGear(
      validated.data
    );
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed",
    };
  }

  redirect(
    ROUTES.DASHBOARD.PROVIDER
  );
}