import { authService } from "../auth.service";

export async function getCurrentUser() {
  try {
    const response =
      await authService.me();

    return response.data;
  } catch {
    return null;
  }
}