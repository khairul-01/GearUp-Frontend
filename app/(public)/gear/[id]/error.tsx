"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-4 py-20">
      <h2 className="text-2xl font-semibold">
        Failed to load gear
      </h2>

      <Button onClick={reset}>
        Retry
      </Button>
    </div>
  );
}