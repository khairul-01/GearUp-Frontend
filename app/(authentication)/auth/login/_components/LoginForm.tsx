"use client";

import { useActionState, useState } from "react";
import { loginAction } from "../_actions/login.action";
import { initialLoginActionState } from "../_types/login-state";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  // const [showPassword, setShowPassword] = useState(false);

  const [state, formAction, pending] = useActionState(
    loginAction,
    initialLoginActionState,
  );

  return (
    <form action={formAction} className="space-y-6">
      {state.message && !state.success && (
        <Alert variant="destructive">
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label>Email</Label>

        <Input 
        type="email" 
        name="email" 
        placeholder="name@example.com" 
        autoComplete="email"
        />

        {state.errorDetails?.email && (
          <p className="text-sm text-destructive">
            {state.errorDetails.email[0]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Password</Label>

        <div className="relative">
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />

          {/* <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button> */}
        </div>

        {state.errorDetails?.password && (
          <p className="text-sm text-destructive">
            {state.errorDetails.password[0]}
          </p>
        )}
      </div>

      <Button className="w-full" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing In...
          </>
        ) : (
          "Sign In"
        )}
      </Button>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/register"
          className="font-medium text-primary hover:underline"
        >
          Register
        </Link>
      </div>
    </form>
  );
}
