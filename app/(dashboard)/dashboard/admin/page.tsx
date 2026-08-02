import StatCard from "@/components/dashboard/cards/StatCard";
import StatsGrid from "@/components/dashboard/cards/StatsGrid";
import { Boxes, ShoppingBag, Users, Wallet } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <StatsGrid>
        <StatCard
          title="Users"
          value={0}
          icon={Users}
        />

        <StatCard
          title="Gear"
          value={0}
          icon={Boxes}
        />

        <StatCard
          title="Rentals"
          value={0}
          icon={ShoppingBag}
        />

        <StatCard
          title="Revenue"
          value="$0"
          icon={Wallet}
        />
      </StatsGrid>
    </div>
  );
}