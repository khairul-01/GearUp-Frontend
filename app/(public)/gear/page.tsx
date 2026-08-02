import { getGearAction } from "./_actions/get-gear.action";
import GearToolbar from "./_components/GearToolbar";
import GearGrid from "./_components/GearGrid";
import AppPagination from "@/components/shared/AppPagination";

import { GearSearchParams } from "./_types/search-params";

export default async function GearPage({
  searchParams,
}: {
  searchParams: Promise<GearSearchParams>;
}) {
  const params = await searchParams;

  const response = await getGearAction(params);

  return (
    <>
      <section className="mb-8">
        <h1 className="text-4xl font-bold">
          Browse Gear
        </h1>

        <p className="mt-2 text-muted-foreground">
          Find the perfect sports and outdoor gear.
        </p>
      </section>

      <GearToolbar />

      <GearGrid gears={response.data} />

      {response.meta && (
        <AppPagination
          page={response.meta.page}
          limit={response.meta.limit}
          total={response.meta.total}
        />
      )}
    </>
  );
}