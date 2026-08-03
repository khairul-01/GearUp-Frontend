"use server";

import { redirect } from "next/navigation";

import { adminService } from "@/services/admin.service";
import { categorySchema } from "@/schemas/category.schema";

import { ROUTES } from "@/constants";
import { ActionState } from "@/types/action";
export async function createCategoryAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const values = {
    name: String(formData.get("name")),
    description: String(
      formData.get("description")
    ),
  };

  const validated =
    categorySchema.safeParse(values);

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
    await adminService.createCategory(
      validated.data
    );
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Category creation failed",
    };
  }

  redirect(
    ROUTES.DASHBOARD.ADMIN
  );
}