import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { CreateReviewPayload } from "@/types";

export const reviewService = {
  createReview(
    payload: CreateReviewPayload,
    token: string
  ) {
    return apiClient(
      API_ENDPOINTS.REVIEW.CREATE,
      {
        method: "POST",
        body: JSON.stringify(payload),
        token,
      }
    );
  },
};