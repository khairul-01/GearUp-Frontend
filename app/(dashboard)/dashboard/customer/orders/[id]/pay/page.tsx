import { notFound } from "next/navigation";

import { rentalService } from "@/services/rental.service";

import PaymentSummary from "./_components/PaymentSummary";
import PaymentButton from "./_components/PaymentButton";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PaymentPage({
  params,
}: Props) {
  const { id } = await params;

  const response = await rentalService
    .getById(id)
    .catch(() => null);

  if (!response) {
    notFound();
  }

  const rental = response.data;

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <h1 className="text-3xl font-bold">
        Checkout
      </h1>

      <PaymentSummary rental={rental} />

      <PaymentButton rentalId={rental.id} />
    </div>
  );
}