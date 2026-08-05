// lib/api-client.ts

import { COOKIES } from "@/constants";
import { ApiError } from "@/types";
import { cookies } from "next/headers";

const BASE_URL = process.env.BACKEND_API_URL!;

type ApiClientOptions = RequestInit & {
  requireAuth?: boolean;
};

export async function apiClient<T>(
  endpoint: string,
  options: ApiClientOptions = {},
): Promise<T> {
  const { requireAuth = false, headers, ...rest } = options;

  const requestHeaders = new Headers(headers);

  requestHeaders.set("Content-Type", "application/json");

  requestHeaders.set("Accept", "application/json");

  if (requireAuth) {
    const cookieStore = await cookies();

    const token = cookieStore.get(COOKIES.ACCESS_TOKEN)?.value;

    if (token) {
      requestHeaders.set("Authorization", `Bearer ${token}`);
    }
  }

  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 15000);

  try {
    let response: Response;

    try {
      response = await fetch(`${BASE_URL}${endpoint}`, {
        ...rest,
        cache: "no-store",
        headers: requestHeaders,
        signal: controller.signal,
      });
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 800));

      response = await fetch(`${BASE_URL}${endpoint}`, {
        ...rest,
        cache: "no-store",
        headers: requestHeaders,
        signal: controller.signal,
      });
    }

    clearTimeout(timeout);

    let result: ApiError | T | null = null;

    try {
      result = await response.json();
    } catch {
      result = null;
    }

    if (!response.ok) {
      const errorMessage =
        typeof result === "object" &&
        result !== null &&
        "message" in result &&
        typeof result.message === "string"
          ? result.message
          : `Request failed (${response.status})`;

      throw new Error(errorMessage);
    }

    return result as T;
  } catch (error) {
    clearTimeout(timeout);

    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Request timed out. Please try again.");
    }

    if (error instanceof TypeError) {
      throw new Error(
        "Unable to connect to the server. Please check your internet connection.",
      );
    }

    throw error;
  }
}
