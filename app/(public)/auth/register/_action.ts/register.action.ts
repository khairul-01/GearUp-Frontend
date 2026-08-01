"use server";

import { ROUTES } from "@/constants";
import { registerSchema } from "@/schemas/auth.schema";
import { authService } from "@/services/auth.service";
import { ActionState } from "@/types/action";
import { redirect } from "next/navigation";

export async function registerAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const values = {
    name: String(formData.get("name")),
    email: String(formData.get("email")),
    phone: String(formData.get("phone")),
    password: String(formData.get("password")),
    role: String(formData.get("role")),
  };

  const validated = registerSchema.safeParse(values);

  if (!validated.success) {
    return {
      success: false,
      message: "Validation failed.",
      errorDetails:
        validated.error.flatten().fieldErrors,
    };
  }

  try {
    await authService.register(validated.data);

    redirect(ROUTES.LOGIN);
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Registration failed.",
    };
  }
}