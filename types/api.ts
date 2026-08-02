// types/api.ts

export interface ApiMeta {
  page: number;
  limit: number;
  total: number;
}

export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;

  data: T;

  meta?: ApiMeta;
}

export interface ApiError {
  success: boolean;
  statusCode: number;
  message: string;
  errorDetails?: string | Record<string, string[]>;
  name?: string;
}
