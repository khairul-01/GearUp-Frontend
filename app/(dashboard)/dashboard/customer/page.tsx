import EmptyState from "@/components/dashboard/cards/EmptyState";
import StatCard from "@/components/dashboard/cards/StatCard";
import StatsGrid from "@/components/dashboard/cards/StatsGrid";
import { paymentService } from "@/services/payment.service";
import { rentalService } from "@/services/rental.service";
import { CreditCard, Package, ShoppingCart, Star } from "lucide-react";
import CustomerRentalTable from "./_components/CustomerRentalTable";

export default async function CustomerDashboardPage() {
  const [rentalsResponse, paymentsResponse] = await Promise.all([
    rentalService.getAll(),
    paymentService.getMyPayments(),
  ]);

  const rentals = rentalsResponse.data;

  const payments = paymentsResponse.data;

  const activeRentals = rentals.filter(
    (rental) =>
      rental.status === "CONFIRMED" ||
      rental.status === "PAID" ||
      rental.status === "PICKED_UP",
  );

  const completedPayments = payments.filter(
    (payment) => payment.status === "COMPLETED",
  );

  const totalPaid = completedPayments.reduce(
    (sum, payment) => sum + Number(payment.amount),
    0,
  );
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Customer Dashboard</h1>

        <p className="text-muted-foreground">Welcome back.</p>
      </div>

      <StatsGrid>
        <StatCard
          title="Total Orders"
          value={rentals.length}
          icon={ShoppingCart}
        />

        <StatCard
          title="Active Rentals"
          value={activeRentals.length}
          icon={Package}
        />

        <StatCard
          title="Payments"
          value={`৳${totalPaid.toFixed(2)}`}
          icon={CreditCard}
        />

        <StatCard title="Reviews" value={0} icon={Star} />
      </StatsGrid>

      {/* <EmptyState
        title="No rental orders"
        description="Your rental history will appear here."
      /> */}

      {rentals.length === 0 ? (
        <EmptyState
          title="No rental orders"
          description="Your rental history will appear here."
        />
      ) : (
        <CustomerRentalTable rentals={rentals} />
      )}
      
    </div>
  );
}
