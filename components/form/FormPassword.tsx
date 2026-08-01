"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
}

export default function FormPassword<
  T extends FieldValues
>({
  label,
  name,
  register,
  error,
}: Props<T>) {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <label>{label}</label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register(name)}
          className="w-full rounded-md border px-3 py-2 pr-10"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-3"
        >
          {show ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}