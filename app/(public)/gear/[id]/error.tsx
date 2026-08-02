"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="py-24 text-center">
      <h2 className="mb-6 text-2xl font-semibold">
        Failed to load gear.
      </h2>

      <Button onClick={reset}>
        Try Again
      </Button>
    </div>
  );
}