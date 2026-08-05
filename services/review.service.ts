import { API_ENDPOINTS } from "@/constants/api-endpoints";
import { apiClient } from "@/lib/api-client";

import { ApiResponse } from "@/types/api";
import {
  CreateReviewPayload,
  Review,
} from "@/types/review";

export const reviewService = {
  create(payload: CreateReviewPayload) {
    return apiClient<ApiResponse<Review>>(
      API_ENDPOINTS.REVIEW.CREATE,
      {
        method: "POST",
        requireAuth: true,
        body: JSON.stringify(payload),
      }
    );
  },
};