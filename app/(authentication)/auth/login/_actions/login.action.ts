"use server";

import { ROUTES, USER_ROLE } from "@/constants";
import { saveAuthTokens } from "@/lib/cookies";
import { loginSchema } from "@/schemas/auth.schema";
import { authService } from "@/services/auth.service";
import { ActionState } from "@/types/action";
import { redirect } from "next/navigation";


export async function loginAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const values = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const validated = loginSchema.safeParse(values);

  if (!validated.success) {
    return {
      success: false,
      message: "Validation Failed",
      errorDetails: validated.error.flatten().fieldErrors,
    };
  }

  let role: string;

  try {
    const response = await authService.login(validated.data);

    await saveAuthTokens(
      response.data.accessToken,
      response.data.refreshToken
    );

    role = response.data.user.role;
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Login Failed",
    };
  }

  switch (role) {
    case USER_ROLE.CUSTOMER:
      redirect(ROUTES.DASHBOARD.CUSTOMER);

    case USER_ROLE.PROVIDER:
      redirect(ROUTES.DASHBOARD.PROVIDER);

    case USER_ROLE.ADMIN:
      redirect(ROUTES.DASHBOARD.ADMIN);

    default:
      redirect(ROUTES.LOGIN);
  }
}