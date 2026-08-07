import { Rental } from "@/types";
import OrderStatusBadge from "../../../provider/orders/_components/OrderStatusBadge";
interface Props {
  rentals: Rental[];
}

export default function RentalsTable({
  rentals,
}: Props) {
  if (!rentals.length) {
    return (
      <p className="text-muted-foreground">
        No rentals found.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
      <table className="min-w-[900px] w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left border-l">
              Customer
            </th>

            <th className="p-3 text-left border-l">Gear</th>

            <th className="p-3 text-left border-l">Provider</th>

            <th className="p-3 text-left border-l">Amount</th>

            <th className="p-3 text-left border-l">Status</th>
          </tr>
        </thead>

        <tbody>
          {rentals.map((rental) => (
            <tr
              key={rental.id}
              className="border-t"
            >
              <td className="p-3 border-l">
                {rental.customer.name}
              </td>

              <td className="p-3 border-l">
                {rental.gearItem.name}
              </td>

              <td className="p-3 border-l">
                {rental.gearItem.provider?.name}
              </td>

              <td className="p-3 border-l">
                ৳
                {rental.totalAmount}
              </td>

              <td className="p-3 border-l">
                <OrderStatusBadge
                  status={rental.status}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}