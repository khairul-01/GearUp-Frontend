import { notFound } from "next/navigation";

import { rentalService } from "@/services/rental.service";
import RentalSummary from "./_components/RentalSummary";
import RentalTimeline from "./_components/RentalTimeline";
import RentalActions from "./_components/RentalAction";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CustomerOrderDetailsPage({
  params,
}: Props) {
  const { id } = await params;
  let rental;

  try {
    const response = await rentalService.getById(id);
    rental = response.data;
  } catch {
    notFound();
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Rental Details</h1>

      <RentalSummary rental={rental} />

      <RentalTimeline rental={rental} />

      <RentalActions rental={rental} />
    </div>
  );
}