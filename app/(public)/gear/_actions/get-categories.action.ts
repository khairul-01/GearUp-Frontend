"use server";

import { categoryService } from "@/services/category.service";

export async function getCategoriesAction() {
  try {
    const response =
      await categoryService.getAll();

    return response.data;
  } catch {
    return [];
  }
}