import { Gear } from "@/types";

interface Props {
  gears: Gear[];
}

export default function ProviderStats({
  gears,
}: Props) {
  const available =
    gears.filter((g) => g.isAvailable).length;

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-xl border p-6">
        <p>Total Gear</p>

        <h2 className="mt-2 text-3xl font-bold">
          {gears.length}
        </h2>
      </div>

      <div className="rounded-xl border p-6">
        <p>Available</p>

        <h2 className="mt-2 text-3xl font-bold">
          {available}
        </h2>
      </div>

      <div className="rounded-xl border p-6">
        <p>Unavailable</p>

        <h2 className="mt-2 text-3xl font-bold">
          {gears.length - available}
        </h2>
      </div>

    </div>
  );
}