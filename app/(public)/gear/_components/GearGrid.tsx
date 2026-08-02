import { Gear } from "@/types";
import GearCard from "./GearCard";

interface Props {
  gears: Gear[];
}

export default function GearGrid({
  gears,
}: Props) {
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