import AppPagination from "@/components/shared/AppPagination";
import { getGearAction } from "./_actions/get-gear.action";
import GearGrid from "./_components/GearGrid";
import GearToolbar from "./_components/GearToolbar";
import { GearSearchParams } from "./_types/search-params";

export default async function GearPage({
  searchParams,
}: {
  searchParams: Promise<GearSearchParams>;
}) {
  const params = await searchParams;

  const response = await getGearAction(params);

  const gears = response.data;

  const meta = response.meta;

  return (
    <section className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Browse Gear</h1>

        <p className="text-muted-foreground">Find your next adventure.</p>
      </div>

      <GearToolbar />

      <GearGrid gears={gears} />

      <AppPagination
        page={meta.page}
        limit={meta.limit}
        total={meta.total}
      />
    </section>
  );
}
