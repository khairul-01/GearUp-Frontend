import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { ApiResponse, CreatePaymentPayload, Payment } from "@/types";

export const paymentService = {
  createPayment(
    payload: CreatePaymentPayload,
    token: string
  ) {
    return apiClient<ApiResponse<{ url: string }>>(
      API_ENDPOINTS.PAYMENT.CREATE,
      {
        method: "POST",
        body: JSON.stringify(payload),
        token,
      }
    );
  },

  getPayments(token: string) {
    return apiClient<ApiResponse<Payment[]>>(
      API_ENDPOINTS.PAYMENT.GET_ALL,
      {
        token,
      }
    );
  },

  getPaymentById(
    id: string,
    token: string
  ) {
    return apiClient<ApiResponse<Payment>>(
      API_ENDPOINTS.PAYMENT.GET_BY_ID(id),
      {
        token,
      }
    );
  },
};