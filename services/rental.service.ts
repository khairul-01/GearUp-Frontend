import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { ApiResponse, CreateRentalPayload, Rental } from "@/types";

export const rentalService = {
  create(payload: CreateRentalPayload) {
    return apiClient<ApiResponse<Rental>>(
      API_ENDPOINTS.RENTAL.CREATE,
      {
        method: "POST",

        requireAuth: true,

        body: JSON.stringify(payload),
      }
    );
  },

  getAll() {
    return apiClient<ApiResponse<Rental[]>>(
      API_ENDPOINTS.RENTAL.GET_ALL,
      {
        requireAuth: true,
      }
    );
  },

  getById(id: string) {
    return apiClient<ApiResponse<Rental>>(
      API_ENDPOINTS.RENTAL.GET_BY_ID(id),
      {
        requireAuth: true,
      }
    );
  },
};