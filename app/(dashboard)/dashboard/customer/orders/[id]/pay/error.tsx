"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-2xl font-bold">
        Unable to load payment page
      </h2>

      <Button onClick={reset}>
        Try Again
      </Button>
    </div>
  );
}