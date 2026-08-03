import { Rental } from "@/types";

interface Props {
  rental: Rental;
}

export default function PaymentSummary({
  rental,
}: Props) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-5 text-xl font-semibold">
        Rental Summary
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Gear</span>
          <span>{rental.gearItem.name}</span>
        </div>

        <div className="flex justify-between">
          <span>Quantity</span>
          <span>{rental.quantity}</span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>
          <span>{rental.status}</span>
        </div>

        <div className="flex justify-between">
          <span>Rental Period</span>

          <span>
            {new Date(
              rental.rentalStartDate
            ).toLocaleDateString()}
            {" - "}
            {new Date(
              rental.rentalEndDate
            ).toLocaleDateString()}
          </span>
        </div>

        <div className="flex justify-between border-t pt-4 text-xl font-bold">
          <span>Total</span>

          <span>
            ৳ {rental.totalAmount}
          </span>
        </div>

      </div>
    </div>
  );
}