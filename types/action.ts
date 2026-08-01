export interface ActionState <T = null> {
    success: boolean;
    message: string;
    data?: T;
    errorDetails?: Record<string, string[]>;    
}