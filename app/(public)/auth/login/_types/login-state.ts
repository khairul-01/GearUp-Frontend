import { User } from "@/types";

export interface LoginActionState {
    success: boolean;
    message: string;
    data?: {
        accessToken: string;
        refreshToken: string;
        user: User;
    };
    errorDetails?: Record<string, string[]>;
}

export const initialLoginActionState: LoginActionState = {
    success: false,
    message: "",
    data: undefined,
    errorDetails: undefined,
}