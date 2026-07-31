// types/auth.ts

import { User } from "./user";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  phone?: string;
  password: string;
  role: "CUSTOMER" | "PROVIDER";
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}