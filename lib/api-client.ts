const API_BASE_URL = `${process.env.BACKEND_API_URL}/api`;

export async function apiClient<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message ?? "Request failed");
  }

  return result;
}