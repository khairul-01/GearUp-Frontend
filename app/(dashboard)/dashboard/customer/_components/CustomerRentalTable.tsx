import Link from "next/link";

import { Rental } from "@/types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface Props {
  rentals: Rental[];
}

export default function CustomerRentalTable({ rentals }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-background shadow-sm">
      <table className="min-w-[900px] w-full">
        <thead className="bg-muted/50">
          <tr>
            <th className="p-4 text-left border-l">Gear</th>
            <th className="p-4 text-left border-l">Provider</th>
            <th className="p-4 text-left border-l">Rental Date</th>
            <th className="p-4 text-center border-l">Quantity</th>
            <th className="p-4 text-right border-l">Amount</th>
            <th className="p-4 text-center border-l">Status</th>
            <th className="p-4 text-right border-l">Action</th>
          </tr>
        </thead>

        <tbody>
          {rentals.map((rental) => (
            <tr key={rental.id} className="border-t">
              <td className="p-4 font-medium border-l">{rental.gearItem.name}</td>

              <td className="p-4 border-l">{rental.gearItem?.provider?.name}</td>

              <td className="p-4 border-l">
                {new Date(rental.rentalStartDate).toLocaleDateString()}
              </td>

              <td className="p-4 text-center border-l">{rental.quantity}</td>

              <td className="p-4 text-right border-l">৳{rental.totalAmount}</td>

              <td className="p-4 text-center border-l">
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

              <td className="p-4 text-right border-l">
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

                      {rental.review ? (
                        <Button variant="secondary" size="sm" disabled>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Reviewed {rental.review.rating} Stars
                        </Button>
                      ) : (
                        <Button size="sm" asChild>
                          <Link
                            href={`/dashboard/customer/reviews/create/${rental.id}`}
                          >
                            Review
                          </Link>
                        </Button>
                      )}
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
