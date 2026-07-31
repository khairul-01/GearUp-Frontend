import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { ApiResponse, Gear } from "@/types";

export const gearService = {
  getGear() {
    return apiClient<ApiResponse<Gear[]>>(
      API_ENDPOINTS.GEAR.GET_ALL
    );
  },

  getGearById(id: string) {
    return apiClient<ApiResponse<Gear>>(
      API_ENDPOINTS.GEAR.GET_BY_ID(id)
    );
  },
};