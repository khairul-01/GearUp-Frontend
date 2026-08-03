"use server";

import { rentalSchema } from "@/schemas/rental.schema";
import { rentalService } from "@/services/rental.service";
import { Rental } from "@/types";
import { ActionState } from "@/types/action";

export async function createRentalAction(
  _: ActionState,
  formData: FormData
): Promise<ActionState<Rental>> {
  const payload = {
    gearItemId: String(
      formData.get("gearItemId")
    ),

    quantity: Number(
      formData.get("quantity")
    ),

    rentalStartDate: String(
      formData.get("rentalStartDate")
    ),

    rentalEndDate: String(
      formData.get("rentalEndDate")
    ),
  };

  const validated =
    rentalSchema.safeParse(payload);

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
    const response =
      await rentalService.create(
        validated.data
      );
      console.log(response, "current rental action response")

    return {
      success: true,

      message: response.message,

      data: response.data,
    };
  } catch (error) {
    return {
      success: false,

      message:
        error instanceof Error
          ? error.message
          : "Rental failed",
    };
  }
}

