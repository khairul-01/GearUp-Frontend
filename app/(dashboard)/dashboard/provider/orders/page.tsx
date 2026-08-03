import { providerService } from "@/services/provider.service";
import ProviderOrdersTable from "./_components/ProviderOrdersTable";

export default async function ProviderOrdersPage() {
  const response = await providerService.getOrders();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Incoming Orders
      </h1>

      <ProviderOrdersTable
        orders={response.data}
      />
    </div>
  );
}