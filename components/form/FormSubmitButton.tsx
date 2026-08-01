"use client";

import { Loader2 } from "lucide-react";

interface Props {
  text: string;
  pending: boolean;
}

export default function FormSubmitButton({
  text,
  pending,
}: Props) {
  return (
    <button
      disabled={pending}
      className="flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground disabled:opacity-60"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </button>
  );
}