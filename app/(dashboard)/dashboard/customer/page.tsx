import EmptyState from "@/components/dashboard/cards/EmptyState";
import StatCard from "@/components/dashboard/cards/StatCard";
import StatsGrid from "@/components/dashboard/cards/StatsGrid";
import { CreditCard, Package, ShoppingCart, Star } from "lucide-react";

export default function CustomerDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Customer Dashboard
        </h1>

        <p className="text-muted-foreground">
          Welcome back.
        </p>
      </div>

      <StatsGrid>
        <StatCard
          title="Total Orders"
          value={0}
          icon={ShoppingCart}
        />

        <StatCard
          title="Active Rentals"
          value={0}
          icon={Package}
        />

        <StatCard
          title="Payments"
          value="$0"
          icon={CreditCard}
        />

        <StatCard
          title="Reviews"
          value={0}
          icon={Star}
        />
      </StatsGrid>

      <EmptyState
        title="No rental orders"
        description="Your rental history will appear here."
      />
    </div>
  );
}