import Link from "next/link";

import { Rental } from "@/types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  rentals: Rental[];
}

export default function CustomerRentalTable({ rentals }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-background">
      <table className="w-full">
        <thead className="bg-muted/50">
          <tr>
            <th className="p-4 text-left">Gear</th>
            <th className="p-4 text-left">Provider</th>
            <th className="p-4 text-left">Rental Date</th>
            <th className="p-4 text-center">Quantity</th>
            <th className="p-4 text-right">Amount</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {rentals.map((rental) => (
            <tr key={rental.id} className="border-t">
              <td className="p-4 font-medium">{rental.gearItem.name}</td>

              <td className="p-4">{rental.gearItem?.provider?.name}</td>

              <td className="p-4">
                {new Date(rental.rentalStartDate).toLocaleDateString()}
              </td>

              <td className="p-4 text-center">{rental.quantity}</td>

              <td className="p-4 text-right">৳{rental.totalAmount}</td>

              <td className="p-4 text-center">
                <Badge
                  variant={
                    rental.status === "RETURNED"
                      ? "default"
                      : rental.status === "CANCELLED"
                        ? "destructive"
                        : rental.status === "PAID"
                          ? "default"
                          : "secondary"
                  }
                >
                  {rental.status.replace("_", " ")}
                </Badge>
              </td>

              <td className="p-4 text-right">
                <div className="flex justify-end gap-2">
                  {rental.status === "PLACED" && (
                    <Badge variant="secondary">Waiting Confirmation</Badge>
                  )}

                  {rental.status === "CONFIRMED" && (
                    <Button asChild size="sm">
                      <Link
                        href={`/dashboard/customer/orders/${rental.id}/pay`}
                      >
                        Pay Now
                      </Link>
                    </Button>
                  )}

                  {rental.status === "PAID" && <Badge>Payment Complete</Badge>}

                  {rental.status === "PICKED_UP" && (
                    <Badge>Gear Picked Up</Badge>
                  )}

                  {rental.status === "RETURNED" && (
                    <>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/customer/orders/${rental.id}`}>
                          View
                        </Link>
                      </Button>

                      <Button size="sm" asChild>
                        <Link
                          href={`/dashboard/customer/reviews/create/${rental.id}`}
                        >
                          Review
                        </Link>
                      </Button>
                    </>
                  )}

                  {rental.status === "CANCELLED" && (
                    <Badge variant="destructive">Cancelled</Badge>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
