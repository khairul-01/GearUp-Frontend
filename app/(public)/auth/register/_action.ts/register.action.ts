"use server";

import { ROUTES } from "@/constants";
import { registerSchema } from "@/schemas/auth.schema";
import { authService } from "@/services/auth.service";
import { RegisterPayload } from "@/types";
import { ActionState } from "@/types/action";
import { redirect } from "next/navigation";

export async function registerAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const values: RegisterPayload = {
    name: String(formData.get("name")),

    email: String(formData.get("email")),

    phone: String(formData.get("phone")),

    password: String(formData.get("password")),

    role: formData.get("role") as
      | "CUSTOMER"
      | "PROVIDER",
  };

  const validated =
    registerSchema.safeParse(values);

  if (!validated.success) {
    return {
      success: false,

      message: "Validation Failed",

      errorDetails:
        validated.error.flatten().fieldErrors,
    };
  }

  try {
    await authService.register(validated.data);
  } catch (error) {
    return {
      success: false,

      message:
        error instanceof Error
          ? error.message
          : "Registration Failed",
    };
  }

  redirect(ROUTES.LOGIN);
}