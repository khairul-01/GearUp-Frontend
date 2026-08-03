import { notFound } from "next/navigation";
import { getGearByIdAction } from "./_actions/get-gear-action";
import GearGallery from "./_components/GearGallery";
import GearInfo from "./_components/GearInfo";
import ProviderCard from "./_components/ProviderCard";
import RentCard from "./_components/RentCard";

export default async function GearDetails({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const response = await getGearByIdAction(id);

  if (!response) {
    notFound();
  }

  const gear = response.data;

  return (
    // <div className="space-y-10">
    //   <section className="grid gap-10 lg:grid-cols-3">
    //     <div className="lg:col-span-2 space-y-10">
    //       <GearGallery image={gear.imageUrl} name={gear.name} />

    //       <GearInfo gear={gear} />

    //       <ProviderCard provider={gear.provider} />
    //     </div>

    //     <aside>
    //       <RentCard
    //         gearId={gear.id}
    //         rentalPricePerDay={gear.rentalPricePerDay}
    //         availableQuantity={gear.availableQuantity}
    //       />
    //     </aside>
    //   </section>

    //   {/* <ProviderCard provider={gear.provider} /> */}
    // </div>
    <div className="grid gap-10 lg:grid-cols-3">
      <div className="space-y-8 lg:col-span-2">
        <GearGallery image={gear.imageUrl} name={gear.name} />

        <GearInfo gear={gear} />

        <ProviderCard provider={gear.provider} />
      </div>

      <RentCard
        gearId={gear.id}
        rentalPricePerDay={gear.rentalPricePerDay}
        availableQuantity={gear.availableQuantity}
      />
    </div>
  );
}
