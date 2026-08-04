// services/payment.service.ts

import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";

import {
  ApiResponse,
  Payment,
  CreatePaymentPayload,
} from "@/types";

export const paymentService = {
  createPayment(payload: CreatePaymentPayload) {
    return apiClient<ApiResponse<Payment>>(
      API_ENDPOINTS.PAYMENT.CREATE,
      {
        method: "POST",
        requireAuth: true,
        body: JSON.stringify(payload),
      }
    );
  },

  getMyPayments() {
    return apiClient<ApiResponse<Payment[]>>(
      API_ENDPOINTS.PAYMENT.GET_ALL,
      {
        requireAuth: true,
      }
    );
  },

  getPayment(id: string) {
    return apiClient<ApiResponse<Payment>>(
      API_ENDPOINTS.PAYMENT.GET_BY_ID(id),
      {
        requireAuth: true,
      }
    );
  },
};