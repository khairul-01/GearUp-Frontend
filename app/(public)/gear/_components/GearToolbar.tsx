import GearSearch from "./GearSearch";
import GearSort from "./GearSort";

export default function GearToolbar() {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <GearSearch />

      <GearSort />
    </div>
  );
}