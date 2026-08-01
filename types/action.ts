// types/action.ts

export interface ActionState<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errorDetails?: Record<string, string[]>;
}

export const INITIAL_ACTION_STATE: ActionState = {
  success: false,
  message: "",
};