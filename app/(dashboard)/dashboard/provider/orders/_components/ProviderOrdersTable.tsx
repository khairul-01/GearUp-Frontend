import { Rental } from "@/types";
import OrderStatusForm from "./OrderStatusForm";
import OrderStatusBadge from "./OrderStatusBadge";
import EmptyState from "@/components/common/EmptyState";
import ProviderOrderCard from "./ProviderOrderCard";

interface Props {
  orders: Rental[];
}

export default function ProviderOrdersTable({ orders }: Props) {
  if (!orders.length) {
    return (
      <EmptyState
        title="No Incoming Orders"
        description="Customer rental requests will appear here."
      />
    );
  }
  console.log(orders, "provider order table");
  return (
    <div>
      <div className="hidden md:block overflow-hidden rounded-xl border bg-background shadow-sm">
        <table className=" min-w-[900px] w-full">
          <thead className="bg-muted sticky top-0">
            <tr className="border-b hover:bg-muted/40 transition-colors">
              <th className="p-3 text-left border-l">Customer</th>

              <th className="text-left p-3 border-l">Gear</th>

              <th className="text-left p-3 border-l">Quantity</th>

              <th className="text-left p-3 border-l">Rental</th>

              <th className="text-left p-3 border-l">Amount</th>

              <th className="text-left p-3 border-l">Status</th>

              <th className="text-left p-3 border-l">Update</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="p-3 border-l">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                      {order.customer.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-medium">{order.customer.name}</p>

                      <p className="text-sm text-muted-foreground">
                        {order.customer.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="p-3 border-l">{order.gearItem.name}</td>

                <td className="p-3 border-l">{order.quantity}</td>

                <td className="p-3 border-l">
                  <div className="space-y-1 text-sm">
                    <p>
                      {new Date(order.rentalStartDate).toLocaleDateString()}
                    </p>

                    <p className="text-muted-foreground">to</p>

                    <p>{new Date(order.rentalEndDate).toLocaleDateString()}</p>
                  </div>
                </td>

                <td className="p-3 border-l ">
                  ৳{order.totalAmount}
                </td>

                <td className="p-3 border-l">
                  <OrderStatusBadge status={order.status} />
                </td>

                <td className="p-3 border-l">
                  <OrderStatusForm order={order} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      <div className="space-y-4 md:hidden">
          {orders.map((order) => (
            <ProviderOrderCard key={order.id} order={order} />
          ))}
        </div>
    </div>
  );
}
