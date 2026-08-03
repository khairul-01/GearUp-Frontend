import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function PaymentSuccessPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center text-center">
      <div className="mb-6 text-6xl">✅</div>

      <h1 className="text-3xl font-bold">
        Payment Successful
      </h1>

      <p className="mt-3 text-muted-foreground">
        Thank you! Your payment has been completed successfully.
      </p>

      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/dashboard/customer">
            My Dashboard
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/gear">
            Continue Browsing
          </Link>
        </Button>
      </div>
    </div>
  );
}