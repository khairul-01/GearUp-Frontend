import { adminService } from "@/services/admin.service";
import StatsGrid from "@/components/dashboard/cards/StatsGrid";
import StatCard from "@/components/dashboard/cards/StatCard";

import {
  Users,
  Boxes,
  ShoppingBag,
} from "lucide-react";

export default async function AdminDashboard() {
  const [
    users,
    gear,
    rentals,
  ] = await Promise.all([
    adminService.getUsers(),
    adminService.getGear(),
    adminService.getRentals(),
  ]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <StatsGrid>
        <StatCard
          title="Users"
          value={users.data.length}
          icon={Users}
        />

        <StatCard
          title="Gear"
          value={gear.data.length}
          icon={Boxes}
        />

        <StatCard
          title="Rentals"
          value={rentals.data.length}
          icon={ShoppingBag}
        />
      </StatsGrid>
    </div>
  );
}