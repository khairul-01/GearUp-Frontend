import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { ApiResponse, CreateRentalPayload, Rental } from "@/types";

export const rentalService = {
  createRental(
    payload: CreateRentalPayload,
    token: string
  ) {
    return apiClient<ApiResponse<Rental>>(
      API_ENDPOINTS.RENTAL.CREATE,
      {
        method: "POST",
        body: JSON.stringify(payload),
        token,
      }
    );
  },

  getRentals(token: string) {
    return apiClient<ApiResponse<Rental[]>>(
      API_ENDPOINTS.RENTAL.GET_ALL,
      {
        token,
      }
    );
  },

  getRentalById(
    id: string,
    token: string
  ) {
    return apiClient<ApiResponse<Rental>>(
      API_ENDPOINTS.RENTAL.GET_BY_ID(id),
      {
        token,
      }
    );
  },
};