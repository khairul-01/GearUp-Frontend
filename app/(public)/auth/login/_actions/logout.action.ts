"use server";

import { ROUTES } from "@/constants";
import { clearAuthCookies } from "@/lib/cookies";
import { redirect } from "next/navigation";

export async function logoutAction() {
    // Clear the authentication cookies
    await clearAuthCookies();

    redirect(ROUTES.LOGIN);
}