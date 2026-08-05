"use server";

import { revalidatePath } from "next/cache";

import { reviewService } from "@/services/review.service";

import { ActionState } from "@/types/action";
import { Review } from "@/types/review";

export async function createReviewAction(
  _: ActionState<Review>,
  formData: FormData
): Promise<ActionState<Review>> {
  try {
    const response =
      await reviewService.create({
        rentalOrderId: String(
          formData.get("rentalOrderId")
        ),
        rating: Number(
          formData.get("rating")
        ),
        comment: String(
          formData.get("comment")
        ),
      });

    revalidatePath("/gear");

    revalidatePath(
      "/dashboard/customer/orders"
    );

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
          : "Review failed",
    };
  }
}