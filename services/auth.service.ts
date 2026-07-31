import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { ApiResponse, LoginPayload, LoginResponse, RegisterPayload, User } from "@/types";

export const authService = {
  register(payload: RegisterPayload) {
    return apiClient<ApiResponse<User>>(
      API_ENDPOINTS.AUTH.REGISTER,
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
  },

  login(payload: LoginPayload) {
    return apiClient<ApiResponse<LoginResponse>>(
      API_ENDPOINTS.AUTH.LOGIN,
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
  },

  getCurrentUser(token: string) {
    return apiClient<ApiResponse<User>>(
      API_ENDPOINTS.AUTH.ME,
      {
        method: "GET",
        token,
      }
    );
  },
};