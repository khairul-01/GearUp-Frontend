"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { Loader2 } from "lucide-react";

import { initialRegisterActionState } from "../_types/register-state";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerAction } from "../_action.ts/register.action";

export default function RegisterForm() {
  // const [showPassword, setShowPassword] =
  //   useState(false);

  const [role, setRole] = useState("CUSTOMER");

  const [state, formAction, pending] =
    useActionState(
      registerAction,
      initialRegisterActionState
    );

  return (
    <form action={formAction} className="space-y-5">
      {state.message && !state.success && (
        <Alert variant="destructive">
          <AlertDescription>
            {state.message}
          </AlertDescription>
        </Alert>
      )}

      {/* Name */}

      <div className="space-y-2">
        <Label>Name</Label>

        <Input
          name="name"
          placeholder="John Doe"
        />

        {state.errorDetails?.name && (
          <p className="text-sm text-destructive">
            {state.errorDetails.name[0]}
          </p>
        )}
      </div>

      {/* Email */}

      <div className="space-y-2">
        <Label>Email</Label>

        <Input
          type="email"
          name="email"
          placeholder="john@gmail.com"
        />

        {state.errorDetails?.email && (
          <p className="text-sm text-destructive">
            {state.errorDetails.email[0]}
          </p>
        )}
      </div>

      {/* Phone */}

      <div className="space-y-2">
        <Label>Phone</Label>

        <Input
          name="phone"
          placeholder="+8801XXXXXXXXX"
        />

        {state.errorDetails?.phone && (
          <p className="text-sm text-destructive">
            {state.errorDetails.phone[0]}
          </p>
        )}
      </div>

      {/* Password */}

      <div className="space-y-2">
        <Label>Password</Label>

        <div className="relative">
          <Input
            type="password"
            name="password"
            placeholder="Create a password"
          />

          {/* <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-3 top-3"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button> */}
        </div>

        {state.errorDetails?.password && (
          <p className="text-sm text-destructive">
            {state.errorDetails.password[0]}
          </p>
        )}
      </div>

      {/* Role */}

      <div className="space-y-3">
        <Label>Choose Role</Label>

        <div className="grid grid-cols-2 gap-3">
          <label className="flex cursor-pointer items-center gap-2 rounded-lg border p-3">
            <input
              type="radio"
              name="role"
              value="CUSTOMER"
              checked={role === "CUSTOMER"}
              onChange={() =>
                setRole("CUSTOMER")
              }
            />

            Customer
          </label>

          <label className="flex cursor-pointer items-center gap-2 rounded-lg border p-3">
            <input
              type="radio"
              name="role"
              value="PROVIDER"
              checked={role === "PROVIDER"}
              onChange={() =>
                setRole("PROVIDER")
              }
            />

            Provider
          </label>
        </div>
      </div>

      <Button
        className="w-full"
        disabled={pending}
      >
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating Account...
          </>
        ) : (
          "Create Account"
        )}
      </Button>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-primary hover:underline"
        >
          Login
        </Link>
      </div>
    </form>
  );
}