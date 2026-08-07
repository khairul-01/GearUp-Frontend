import { Rental } from "@/types";
import OrderStatusForm from "./OrderStatusForm";
import OrderStatusBadge from "./OrderStatusBadge";

interface Props {
  order: Rental;
}

export default function ProviderOrderCard({
  order,
}: Props) {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm space-y-4">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="font-semibold">
            {order.customer.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {order.customer.email}
          </p>
        </div>

        <OrderStatusBadge
          status={order.status}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">

        <div>
          <p className="text-muted-foreground">
            Gear
          </p>

          <p>{order.gearItem.name}</p>
        </div>

        <div>
          <p className="text-muted-foreground">
            Quantity
          </p>

          <p>{order.quantity}</p>
        </div>

        <div>
          <p className="text-muted-foreground">
            Amount
          </p>

          <p>৳{order.totalAmount}</p>
        </div>

        <div>
          <p className="text-muted-foreground">
            Rental
          </p>

          <p>
            {new Date(
              order.rentalStartDate
            ).toLocaleDateString()}
          </p>
        </div>

      </div>

      <OrderStatusForm
        order={order}
      />

    </div>
  );
}