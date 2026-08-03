import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { ApiResponse, CreateGearPayload, Gear, Rental, UpdateGearPayload, UpdateRentalStatusPayload } from "@/types";

export const providerService = {
  // GET /api/provider/gear
  getMyGear() {
    return apiClient<ApiResponse<Gear[]>>(
      API_ENDPOINTS.PROVIDER.GET_MY_GEAR,
      {
        method: "GET",
        requireAuth: true,
      }
    );
  },

  // POST /api/provider/gear
  createGear(payload: CreateGearPayload) {
    return apiClient<ApiResponse<Gear>>(
      API_ENDPOINTS.PROVIDER.CREATE_GEAR,
      {
        method: "POST",
        requireAuth: true,
        body: JSON.stringify(payload),
      }
    );
  },

  // PUT /api/provider/gear/:id
  updateGear(
    id: string,
    payload: UpdateGearPayload
  ) {
    return apiClient<ApiResponse<Gear>>(
      API_ENDPOINTS.PROVIDER.UPDATE_GEAR(id),
      {
        method: "PUT",
        requireAuth: true,
        body: JSON.stringify(payload),
      }
    );
  },

  // DELETE /api/provider/gear/:id
  deleteGear(id: string) {
    return apiClient<ApiResponse<null>>(
      API_ENDPOINTS.PROVIDER.DELETE_GEAR(id),
      {
        method: "DELETE",
        requireAuth: true,
      }
    );
  },

  // GET /api/provider/orders
  getOrders() {
    return apiClient<ApiResponse<Rental[]>>(
      API_ENDPOINTS.PROVIDER.GET_ORDERS,
      {
        method: "GET",
        requireAuth: true,
      }
    );
  },

  // PATCH /api/provider/orders/:id
  updateOrder(
    id: string,
    payload: UpdateRentalStatusPayload
  ) {
    return apiClient<ApiResponse<Rental>>(
      API_ENDPOINTS.PROVIDER.UPDATE_ORDER(id),
      {
        method: "PATCH",
        requireAuth: true,
        body: JSON.stringify(payload),
      }
    );
  },
};