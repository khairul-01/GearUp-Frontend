import { User } from "@/types";

export interface RegisterActionState {
  success: boolean;
  message: string;
  data?: User;
  errorDetails?: Record<string, string[]>;
}

export const initialRegisterActionState: RegisterActionState =
{
  success: false,
  message: "",
};