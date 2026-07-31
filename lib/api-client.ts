// lib/api-client.ts

const BASE_URL = process.env.BACKEND_API_URL!;

type ApiClientOptions = RequestInit & {
  token?: string;
};

export async function apiClient<T>(
  endpoint: string,
  options: ApiClientOptions = {}
): Promise<T> {
  const { token, headers, ...rest } = options;

  const response = await fetch(
  `${BASE_URL}${endpoint}`,
  {
    ...rest,

    cache: "no-store",

    headers: {
      "Content-Type": "application/json",

      ...(token && {
        Authorization: `Bearer ${token}`,
      }),

      ...headers,
    },
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