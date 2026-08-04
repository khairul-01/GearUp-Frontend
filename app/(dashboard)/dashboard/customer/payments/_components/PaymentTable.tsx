import Link from "next/link";

import { Payment } from "@/types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  payments: Payment[];
}

export default function PaymentTable({
  payments,
}: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full">
        <thead className="border-b">
          <tr>
            <th className="p-4 text-left">
              Gear
            </th>

            <th className="text-left">
              Amount
            </th>

            <th className="text-left">
              Method
            </th>

            <th className="text-left">
              Status
            </th>

            <th className="text-left">
              Paid At
            </th>

            <th className="text-right">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment.id}
              className="border-b"
            >
              <td className="p-4">
                {
                  payment.rentalOrder
                    .gearItem.name
                }
              </td>

              <td>
                ৳{payment.amount}
              </td>

              <td>
                {payment.method}
              </td>

              <td>
                <Badge>
                  {payment.status}
                </Badge>
              </td>

              <td>
                {payment.paidAt
                  ? new Date(
                      payment.paidAt
                    ).toLocaleDateString()
                  : "-"}
              </td>

              <td className="text-right">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                >
                  <Link
                    href={`/dashboard/customer/orders/${payment.rentalOrderId}`}
                  >
                    View Order
                  </Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}