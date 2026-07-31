import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { UpdateUserPayload } from "@/types";

export const adminService = {
  getUsers(token: string) {
    return apiClient(
      API_ENDPOINTS.ADMIN.GET_USERS,
      {
        token,
      }
    );
  },

  updateUser(
    id: string,
    payload: UpdateUserPayload,
    token: string
  ) {
    return apiClient(
      API_ENDPOINTS.ADMIN.UPDATE_USER(id),
      {
        method: "PATCH",
        body: JSON.stringify(payload),
        token,
      }
    );
  },

  getGear(token: string) {
    return apiClient(
      API_ENDPOINTS.ADMIN.GET_GEAR,
      {
        token,
      }
    );
  },

  getRentals(token: string) {
    return apiClient(
      API_ENDPOINTS.ADMIN.GET_RENTALS,
      {
        token,
      }
    );
  },

  createCategory(
    payload: { name: string },
    token: string
  ) {
    return apiClient(
      API_ENDPOINTS.ADMIN.CREATE_CATEGORY,
      {
        method: "POST",
        body: JSON.stringify(payload),
        token,
      }
    );
  },
};