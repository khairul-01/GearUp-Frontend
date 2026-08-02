import StatCard from "@/components/dashboard/cards/StatCard";
import StatsGrid from "@/components/dashboard/cards/StatsGrid";
import { Boxes, DollarSign, ShoppingBag, Truck } from "lucide-react";

export default function ProviderDashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Provider Dashboard
      </h1>

      <StatsGrid>
        <StatCard
          title="Total Gear"
          value={0}
          icon={Boxes}
        />

        <StatCard
          title="Pending Orders"
          value={0}
          icon={ShoppingBag}
        />

        <StatCard
          title="Active Rentals"
          value={0}
          icon={Truck}
        />

        <StatCard
          title="Revenue"
          value="$0"
          icon={DollarSign}
        />
      </StatsGrid>
    </div>
  );
}