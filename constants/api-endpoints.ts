// constants/api-endpoints.ts

export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    ME: "/api/auth/me",
  },

  GEAR: {
    GET_ALL: "/api/gear",
    GET_BY_ID: (id: string) => `/api/gear/${id}`,
  },

  CATEGORY: {
    GET_ALL: "/api/categories",
    CREATE: "/api/admin/categories",
  },

  RENTAL: {
    CREATE: "/api/rentals",
    GET_ALL: "/api/rentals",
    GET_BY_ID: (id: string) => `/api/rentals/${id}`,
  },

  PAYMENT: {
    CREATE: "/api/payments/create",
    CONFIRM: "/api/payments/confirm",
    GET_ALL: "/api/payments",
    GET_BY_ID: (id: string) => `/api/payments/${id}`,
  },

  REVIEW: {
    CREATE: "/api/reviews",
  },

  PROVIDER: {
    CREATE_GEAR: "/api/provider/gear",

    UPDATE_GEAR: (id: string) =>
      `/api/provider/gear/${id}`,

    DELETE_GEAR: (id: string) =>
      `/api/provider/gear/${id}`,

    GET_ORDERS: "/api/provider/orders",

    UPDATE_ORDER: (id: string) =>
      `/api/provider/orders/${id}`,
  },

  ADMIN: {
    GET_USERS: "/api/admin/users",

    UPDATE_USER: (id: string) =>
      `/api/admin/users/${id}`,

    GET_GEAR: "/api/admin/gear",

    GET_RENTALS: "/api/admin/rentals",

    CREATE_CATEGORY: "/api/admin/categories",
  },
} as const;