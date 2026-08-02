import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { ApiResponse, CreatePaymentPayload, Payment } from "@/types";

export const paymentService = {
  create(payload: CreatePaymentPayload) {
    return apiClient<ApiResponse<Payment>>(
      API_ENDPOINTS.PAYMENT.CREATE,
      {
        method: "POST",
        requireAuth: true,
        body: JSON.stringify(payload),
      }
    );
  },

  getAll() {
    return apiClient<ApiResponse<Payment[]>>(
      API_ENDPOINTS.PAYMENT.GET_ALL,
      {
        requireAuth: true,
      }
    );
  },

  getById(id: string) {
    return apiClient<ApiResponse<Payment>>(
      API_ENDPOINTS.PAYMENT.GET_BY_ID(id),
      {
        requireAuth: true,
      }
    );
  },
};