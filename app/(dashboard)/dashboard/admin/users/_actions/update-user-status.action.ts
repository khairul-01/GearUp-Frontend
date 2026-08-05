"use server";

import { revalidatePath } from "next/cache";

import { adminService } from "@/services/admin.service";

import { ActionState } from "@/types/action";

export async function updateUserStatusAction(
  _: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const id = String(formData.get("id"));

    const status = String(
      formData.get("status")
    ) as "ACTIVE" | "SUSPENDED";

    await adminService.updateUserStatus(
      id,
      status
    );

    revalidatePath("/dashboard/admin/users");

    return {
      success: true,
      message: "User updated successfully",
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