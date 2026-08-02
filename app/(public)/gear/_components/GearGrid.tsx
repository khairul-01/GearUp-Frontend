import { Gear } from "@/types";

import GearCard from "./GearCard";

interface Props {
  gears: Gear[];
}

export default function GearGrid({
  gears,
}: Props) {
  if (!gears.length) {
    return (
      <div className="flex h-72 items-center justify-center rounded-xl border">
        <p className="text-muted-foreground">
          No gear found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {gears.map((gear) => (
        <GearCard
          key={gear.id}
          gear={gear}
        />
      ))}
    </div>
  );
}