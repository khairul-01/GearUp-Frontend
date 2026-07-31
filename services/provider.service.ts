import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { CreateGearPayload, UpdateGearPayload, UpdateRentalStatusPayload } from "@/types";

export const providerService = {
  createGear(
    payload: CreateGearPayload,
    token: string
  ) {
    return apiClient(
      API_ENDPOINTS.PROVIDER.CREATE_GEAR,
      {
        method: "POST",
        body: JSON.stringify(payload),
        token,
      }
    );
  },

  updateGear(
    id: string,
    payload: UpdateGearPayload,
    token: string
  ) {
    return apiClient(
      API_ENDPOINTS.PROVIDER.UPDATE_GEAR(id),
      {
        method: "PUT",
        body: JSON.stringify(payload),
        token,
      }
    );
  },

  deleteGear(
    id: string,
    token: string
  ) {
    return apiClient(
      API_ENDPOINTS.PROVIDER.DELETE_GEAR(id),
      {
        method: "DELETE",
        token,
      }
    );
  },

  getOrders(token: string) {
    return apiClient(
      API_ENDPOINTS.PROVIDER.GET_ORDERS,
      {
        token,
      }
    );
  },

  updateOrderStatus(
    id: string,
    payload: UpdateRentalStatusPayload,
    token: string
  ) {
    return apiClient(
      API_ENDPOINTS.PROVIDER.UPDATE_ORDER(id),
      {
        method: "PATCH",
        body: JSON.stringify(payload),
        token,
      }
    );
  },
};