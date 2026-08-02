import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { ApiResponse, Category } from "@/types";

export const categoryService = {
  async getAll() {
    return apiClient<ApiResponse<Category[]>>(API_ENDPOINTS.CATEGORY.GET_ALL);
  },
};
