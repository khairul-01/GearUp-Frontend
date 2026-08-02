"use client";

import { Button } from "@/components/ui/button";

interface Props {
  pending?: boolean;
}

export default function PayButton({
  pending,
}: Props) {
  return (
    <Button
      className="w-full"
      disabled={pending}
    >
      {pending
        ? "Redirecting..."
        : "Proceed to Payment"}
    </Button>
  );
}