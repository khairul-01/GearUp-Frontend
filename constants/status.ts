// constants/status.ts

export const USER_STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

export const RENTAL_STATUS = {
  PLACED: "PLACED",

  CONFIRMED: "CONFIRMED",

  PAID: "PAID",

  PICKED_UP: "PICKED_UP",

  RETURNED: "RETURNED",

  CANCELLED: "CANCELLED",
} as const;