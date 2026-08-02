// types/pagination.ts

export interface PaginationMeta {
  page: number;

  limit: number;

  total: number;
}

export interface PaginatedResponse<T> {
  success: boolean;

  statusCode: number;

  message: string;

  meta: PaginationMeta;

  data: T[];
}