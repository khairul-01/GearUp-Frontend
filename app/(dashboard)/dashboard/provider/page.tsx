import StatCard from "@/components/dashboard/cards/StatCard";
import StatsGrid from "@/components/dashboard/cards/StatsGrid";
import { providerService } from "@/services/provider.service";
import { Boxes, DollarSign, ShoppingBag, Truck } from "lucide-react";
import ProviderStats from "./_components/ProviderStats";
import ProviderGearTable from "./_components/ProviderGearTable";

export default async function ProviderDashboardPage() {
  const [gearResponse, orderResponse] =
      await Promise.all([
         providerService.getMyGear(),
         providerService.getOrders(),
      ]);

   const gears = gearResponse.data;
   const orders = orderResponse.data;
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

      <div className="space-y-8">

       <ProviderStats gears={gears} />
       <ProviderGearTable gears={gears} />

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