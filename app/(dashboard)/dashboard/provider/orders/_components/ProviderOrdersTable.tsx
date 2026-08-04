import { Rental } from "@/types";
import OrderStatusBadge from "./OderStatusBadge";
import OrderStatusForm from "./OrderStatusForm";

interface Props {
  orders: Rental[];
}

export default function ProviderOrdersTable({
  orders,
}: Props) {
  if (!orders.length) {
    return (
      <p className="text-muted-foreground">
        No orders found.
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

            <th className="text-left">
              Gear
            </th>

            <th className="text-left">
              Quantity
            </th>

            <th className="text-left">
              Rental
            </th>

            <th className="text-left">
              Amount
            </th>

            <th className="text-left">
              Status
            </th>

            <th className="text-left">
              Update
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-t"
            >
              <td className="p-3">
                <div className="font-medium">
                  {order.customer.name}
                </div>

                <div className="text-xs text-muted-foreground">
                  {order.customer.email}
                </div>
              </td>

              <td>
                {order.gearItem.name}
              </td>

              <td>
                {order.quantity}
              </td>

              <td>
                {new Date(
                  order.rentalStartDate
                ).toLocaleDateString()}

                <br />

                {new Date(
                  order.rentalEndDate
                ).toLocaleDateString()}
              </td>

              <td>
                ৳{order.totalAmount}
              </td>

              <td>
                <OrderStatusBadge
                  status={order.status}
                />
              </td>

              <td>
                <OrderStatusForm
                  order={order}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}