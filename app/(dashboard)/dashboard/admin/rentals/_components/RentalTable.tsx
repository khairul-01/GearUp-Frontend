import { Rental } from "@/types";
import OrderStatusBadge from "../../../provider/orders/_components/OderStatusBadge";
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
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">
              Customer
            </th>

            <th>Gear</th>

            <th>Provider</th>

            <th>Amount</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {rentals.map((rental) => (
            <tr
              key={rental.id}
              className="border-t"
            >
              <td className="p-3">
                {rental.customer.name}
              </td>

              <td>
                {rental.gearItem.name}
              </td>

              <td>
                {rental.gearItem.provider?.name}
              </td>

              <td>
                ৳
                {rental.totalAmount}
              </td>

              <td>
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