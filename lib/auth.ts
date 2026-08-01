import { COOKIES } from "@/constants";
import { cookies } from "next/headers";

export async function setAuthCookies(accessToken: string, refreshToken: string) {
    const cookieStore = await cookies();

    cookieStore.set(COOKIES.ACCESS_TOKEN, accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });

    cookieStore.set(COOKIES.REFRESH_TOKEN, refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
    });
}

export async function clearAuthCookies() {
    const cookieStore = await cookies();
    
    cookieStore.delete(COOKIES.ACCESS_TOKEN);
    cookieStore.delete(COOKIES.REFRESH_TOKEN);
}