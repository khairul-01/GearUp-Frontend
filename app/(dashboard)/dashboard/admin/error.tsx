"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="rounded-lg border border-destructive p-6">
      <h2 className="text-xl font-bold">
        Something went wrong
      </h2>

      <p className="mt-2">
        {error.message}
      </p>

      <Button
        className="mt-4"
        onClick={reset}
      >
        Try Again
      </Button>
    </div>
  );
}