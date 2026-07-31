// constants/roles.ts

export const USER_ROLE = {
  CUSTOMER: "CUSTOMER",

  PROVIDER: "PROVIDER",

  ADMIN: "ADMIN",
} as const;

export type UserRole =
  (typeof USER_ROLE)[keyof typeof USER_ROLE];