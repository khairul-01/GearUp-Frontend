import Link from "next/link";

import { Rental } from "@/types";

import { Button } from "@/components/ui/button";

interface Props {
  rental: Rental;
}

export default function RentalActions({
  rental,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {rental.status === "PLACED" && (
        <Button asChild>
          <Link
            href={`/dashboard/customer/orders/${rental.id}/pay`}
          >
            Complete Payment
          </Link>
        </Button>
      )}

      <Button
        variant="outline"
        asChild
      >
        <Link href="/dashboard/customer">
          Back
        </Link>
      </Button>
    </div>
  );
}