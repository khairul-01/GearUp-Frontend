import { notFound } from "next/navigation";
import { getGearByIdAction } from "./_actions/get-gear-action";
import GearGallery from "./_components/GearGallery";
import GearInfo from "./_components/GearInfo";
import ProviderCard from "./_components/ProviderCard";

export default async function GearDetails({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const response =
    await getGearByIdAction(id);

  if (!response) {
    notFound();
  }

  const gear = response.data;

  return (
    <div className="space-y-10">
      <section className="grid gap-10 lg:grid-cols-2">
        <GearGallery
          image={gear.imageUrl}
          name={gear.name}
        />

        <GearInfo gear={gear} />
      </section>

      <ProviderCard
        provider={gear.provider}
      />
    </div>
  );
}