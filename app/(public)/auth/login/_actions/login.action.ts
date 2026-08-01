"use server";

import { ROUTES } from "@/constants";
import { saveAuthCookies } from "@/lib/cookies";
import { loginSchema } from "@/schemas/auth.schema";
import { authService } from "@/services/auth.service";
import { LoginPayload } from "@/types";
import { ActionState } from "@/types/action";
import { redirect } from "next/navigation";

// import { loginSchema } from "@/schemas/auth.schema";
// import { LoginActionState } from "../_types/login-state";
// import { authService } from "@/services/auth.service";
// import { saveAuthCookies } from "@/lib/cookies";
// import { redirect } from "next/navigation";

// export async function loginAction(
//   prevState: LoginActionState,
//   formData: FormData,
// ): Promise<LoginActionState> {
//   const value = {
//     email: String(formData.get("email")),
//     password: String(formData.get("password")),
//   };

//   const parsed = loginSchema.safeParse(value);

//     if (!parsed.success) {
//         return {
//             success: false,
//             message: "Validation failed",
//             errorDetails: parsed.error.flatten().fieldErrors,
//             data: undefined,
//         }
//     }

//     try {
//         // Perform the login logic here
//         const response = await authService.login(parsed.data);

//         await saveAuthCookies(response.data.accessToken, response.data.refreshToken);

//         const role = response.data.user.role;

//         if (role === "CUSTOMER") {
//             redirect("/dashboard/customer");
//         }
//         if (role === "PROVIDER") {
//             redirect("/dashboard/provider");
//         }

//         redirect("/dashboard/admin");
//     } catch (error) {
//         return {
//             success: false,
//             message: error instanceof Error ? error.message : "Login failed.",
//         };
//     }
// }

export async function loginAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const values: LoginPayload = {
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

  try {
    const response = await authService.login(validated.data);

    await saveAuthCookies(
      response.data.accessToken,

      response.data.refreshToken,
    );

    const role = response.data.user.role;

    switch (role) {
      case "CUSTOMER":
        redirect(ROUTES.DASHBOARD.CUSTOMER);

      case "PROVIDER":
        redirect(ROUTES.DASHBOARD.PROVIDER);

      default:
        redirect(ROUTES.DASHBOARD.ADMIN);
    }
  } catch (error) {
    return {
      success: false,

      message: error instanceof Error ? error.message : "Login Failed",
    };
  }
}
