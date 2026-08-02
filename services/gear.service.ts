import { GearSearchParams } from "@/app/(public)/gear/_types/search-params";
import { API_ENDPOINTS } from "@/constants";
import { apiClient } from "@/lib/api-client";
import { ApiResponse, Gear } from "@/types";
import { Key } from "lucide-react";

export const gearService = {
  async getAll(params?: GearSearchParams) {
    const query = new URLSearchParams();

    Object.entries(params ?? {}).forEach(([Key, value]) => {
      if (value !== undefined && value !== null) {
        query.set(Key, String(value));
      } 
    })

    const url =
      `${API_ENDPOINTS.GEAR.GET_ALL}?${query.toString()}`;

    return apiClient<ApiResponse<Gear[]>>(url);
  },

  async getById(id: string) {
    return apiClient<ApiResponse<Gear>>(
      API_ENDPOINTS.GEAR.GET_BY_ID(id)
    );
  },
};