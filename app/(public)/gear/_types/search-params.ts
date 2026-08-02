export interface GearSearchParams {
  search?: string;

  page?: string;

  limit?: string;

  minPrice?: string;

  maxPrice?: string;

  available?: string;

  sortBy?: string;

  sortOrder?: "asc" | "desc";

  categoryId?: string;

  brand?: string;
}