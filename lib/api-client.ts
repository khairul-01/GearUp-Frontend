// lib/api-client.ts

import { cookies } from "next/headers";

const BASE_URL = process.env.BACKEND_API_URL!;

type ApiClientOptions = RequestInit & {
  requireAuth?: boolean;
};

export async function apiClient<T>(
  endpoint: string,
  options: ApiClientOptions = {}
): Promise<T> {
  const {
    requireAuth = false,
    headers,
    ...rest
  } = options;

  const requestHeaders = new Headers(headers);

  requestHeaders.set(
    "Content-Type",
    "application/json"
  );

  if (requireAuth) {
    const cookieStore = await cookies();

    const token = cookieStore
      .get("accessToken")
      ?.value;

    if (token) {
      requestHeaders.set(
        "Authorization",
        `Bearer ${token}`
      );
    }
  }

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      ...rest,
      cache: "no-store",
      headers: requestHeaders,
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.message ??
        "Unexpected server error."
    );
  }

  return result;
}