import StatCard from "@/components/dashboard/cards/StatCard";
import StatsGrid from "@/components/dashboard/cards/StatsGrid";
import { providerService } from "@/services/provider.service";
import { Boxes, DollarSign, ShoppingBag, Truck } from "lucide-react";
import ProviderStats from "./_components/ProviderStats";
import ProviderGearTable from "./_components/ProviderGearTable";
import { categoryService } from "@/services/category.service";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function ProviderDashboardPage() {
  const [gearResponse, orderResponse, categoryResponse] = await Promise.all([
    providerService.getMyGear(),
    providerService.getOrders(),
    categoryService.getAll(),
  ]);

  const gears = gearResponse.data;
  const orders = orderResponse.data;
  const categories = categoryResponse.data;
  // revenue
  // solve problem orders.reduce is not function
  if (!Array.isArray(orders)) {
    console.error("Expected an array for orders");
    return null;
  }
  const revenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  // pending orders
  const pendingOrders = orders.filter(
    (order) => order.status === "PLACED"
  ).length;
  // active rentals
  const activeRentals = orders.filter(
    (order) => order.status === "PICKED_UP"
  ).length;
  // available gear

  const available =
    gears.filter((g) => g.isAvailable).length;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Provider Dashboard</h1>

      <StatsGrid>
        <StatCard title="Total Gear" value={gears.length} icon={Boxes} />

        <StatCard title="Available Gear" value={available} icon={Boxes} />

        <StatCard title="Pending Orders" value={pendingOrders} icon={ShoppingBag} />

        <StatCard title="Active Rentals" value={activeRentals} icon={Truck} />

        <StatCard title="Revenue" value={`$${revenue.toFixed(2)}`} icon={DollarSign} />
      </StatsGrid>

      <div className="space-y-8">
        <Button asChild>
          <Link href="/dashboard/provider/gear">Manage Gear</Link>
        </Button>
      </div>
    </div>
  );
}

// import { providerService } from "@/services/provider.service";
// import ProviderStats from "./_components/ProviderStats";
// import ProviderGearTable from "./_components/ProviderGearTable";

// export default async function ProviderDashboard() {
//   const response =
//     await providerService.getMyGear();

//   const gears = response.data;

//   return (
//     <div className="space-y-8">

//       <ProviderStats gears={gears} />

//       <ProviderGearTable gears={gears} />

//     </div>
//   );
// }
