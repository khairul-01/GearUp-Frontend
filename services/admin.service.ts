import { apiClient } from "@/lib/api-client";
import { API_ENDPOINTS } from "@/constants";
import {
  ApiResponse,
  User,
  Gear,
  Rental,
  Category,
} from "@/types";

export const adminService = {
  getUsers() {
    return apiClient<ApiResponse<User[]>>(
      API_ENDPOINTS.ADMIN.GET_USERS,
      {
        method: "GET",
        requireAuth: true,
      }
    );
  },

  // update user status
  updateUserStatus(
    userId: string,
    status: "ACTIVE" | "INACTIVE"
  ) {
    return apiClient<ApiResponse<User>>(
      API_ENDPOINTS.ADMIN.UPDATE_USER(userId),
      {
        method: "PATCH",
        requireAuth: true,
        body: JSON.stringify({ status }),
      }
    );
  },

  getGear() {
    return apiClient<ApiResponse<Gear[]>>(
      API_ENDPOINTS.ADMIN.GET_GEAR,
      {
        method: "GET",
        requireAuth: true,
      }
    );
  },

  getRentals() {
    return apiClient<ApiResponse<Rental[]>>(
      API_ENDPOINTS.ADMIN.GET_RENTALS,
      {
        method: "GET",
        requireAuth: true,
      }
    );
  },

  createCategory(data: {
    name: string;
    description: string;
  }) {
    return apiClient<ApiResponse<Category>>(
      API_ENDPOINTS.ADMIN.CREATE_CATEGORY,
      {
        method: "POST",
        requireAuth: true,
        body: JSON.stringify(data),
      }
    );
  },
};