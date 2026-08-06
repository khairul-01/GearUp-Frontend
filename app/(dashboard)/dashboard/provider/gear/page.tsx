import { providerService } from "@/services/provider.service";
import { categoryService } from "@/services/category.service";

import ProviderGearTable from "../_components/ProviderGearTable";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function ProviderGearPage() {
  const [gearResponse, categoryResponse] =
    await Promise.all([
      providerService.getMyGear(),
      categoryService.getAll(),
    ]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
          Manage Gear
        </h1>
      {/* <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Manage Gear
        </h1>

        <Button asChild>
          <Link href="/dashboard/provider/gear/new">
            Add Gear
          </Link>
        </Button>
      </div> */}

      <ProviderGearTable
        gears={gearResponse.data}
        categories={categoryResponse.data}
      />
    </div>
  );
}