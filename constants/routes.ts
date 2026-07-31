// constants/routes.ts

export const ROUTES = {
  HOME: "/",

  GEAR: "/gear",

  LOGIN: "/auth/login",

  REGISTER: "/auth/register",

  PAYMENT_SUCCESS: "/payment/success",

  PAYMENT_CANCEL: "/payment/cancel",

  DASHBOARD: {
    CUSTOMER: "/dashboard/customer",

    PROVIDER: "/dashboard/provider",

    ADMIN: "/dashboard/admin",
  },
} as const;