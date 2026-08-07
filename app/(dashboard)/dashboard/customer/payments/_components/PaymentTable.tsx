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
    <div className="overflow-x-auto rounded-xl border shadow-sm">
      <table className="min-w-[900px] w-full">
        <thead className="border-b">
          <tr>
            <th className="p-4 text-left border-l">
              Gear
            </th>

            <th className="text-left p-2 border-l">
              Amount
            </th>

            <th className="text-left p-2 border-l">
              Method
            </th>

            <th className="text-left p-2 border-l">
              Status
            </th>

            <th className="text-left p-2 border-l">
              Paid At
            </th>

            <th className="text-right p-2 border-l">
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
              <td className="p-4 border-l">
                {
                  payment.rentalOrder
                    .gearItem.name
                }
              </td>

              <td className="p-2 border-l">
                ৳{payment.amount}
              </td>

              <td className="p-2 border-l">
                {payment.method}
              </td>

              <td className="p-2 border-l">
                <Badge>
                  {payment.status}
                </Badge>
              </td>

              <td className="p-2 border-l">
                {payment.paidAt
                  ? new Date(
                      payment.paidAt
                    ).toLocaleDateString()
                  : "-"}
              </td>

              <td className="text-right p-3 border-l">
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