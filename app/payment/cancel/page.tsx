import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentCancelPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center text-center">
      <div className="mb-6 text-6xl">❌</div>

      <h1 className="text-3xl font-bold">
        Payment Cancelled
      </h1>

      <p className="mt-3 text-muted-foreground">
        Your payment was cancelled. You can try again whenever you're ready.
      </p>

      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/dashboard/customer">
            Back to Dashboard
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/gear">
            Browse Gear
          </Link>
        </Button>
      </div>
    </div>
  );
}