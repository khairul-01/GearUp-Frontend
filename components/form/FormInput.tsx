"use client";

import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
  disabled?: boolean;
}

export default function FormInput<T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  disabled,
}: FormInputProps<T>) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
        className="w-full rounded-md border px-3 py-2 outline-none transition focus:ring-2"
      />

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
