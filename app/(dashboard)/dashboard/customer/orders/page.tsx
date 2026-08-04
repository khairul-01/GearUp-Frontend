import { rentalService } from "@/services/rental.service";

import CustomerRentalTable from "../_components/CustomerRentalTable";

import EmptyState from "@/components/dashboard/cards/EmptyState";

export default async function CustomerOrdersPage() {
  const response =
    await rentalService.getAll();

  const rentals = response.data;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          My Orders
        </h1>

        <p className="text-muted-foreground">
          View all your rental orders.
        </p>
      </div>

      {rentals.length === 0 ? (
        <EmptyState
          title="No rental orders"
          description="Rent some gear to see your orders."
        />
      ) : (
        <CustomerRentalTable rentals={rentals} />
      )}
    </div>
  );
}