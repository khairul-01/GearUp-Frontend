import { cookies } from "next/headers";

import { COOKIES } from "@/constants";

export async function setAccessToken(token: string) {
  const cookieStore = await cookies();

  cookieStore.set(COOKIES.ACCESS_TOKEN, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
}

export async function setRefreshToken(token: string) {
  const cookieStore = await cookies();

  cookieStore.set(COOKIES.REFRESH_TOKEN, token, {
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

export async function saveAuthTokens(
  accessToken: string,
  refreshToken: string
) {
  await setAccessToken(accessToken);
  await setRefreshToken(refreshToken);
}

export async function getAccessToken() {
  const cookieStore = await cookies();

  return cookieStore.get(COOKIES.ACCESS_TOKEN)?.value;
}

export async function getRefreshToken() {
  const cookieStore = await cookies();

  return cookieStore.get(COOKIES.REFRESH_TOKEN)?.value;
}