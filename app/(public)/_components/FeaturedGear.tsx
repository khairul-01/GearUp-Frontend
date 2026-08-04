import { gearService } from "@/services/gear.service";
import GearGrid from "../gear/_components/GearGrid";


export default async function FeaturedGear() {
  const response =
    await gearService.getAll({
        
    });

  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Featured Gear
        </h2>
      </div>

      <GearGrid gears={response.data.slice(0, 4)} />
    </section>
  );
}