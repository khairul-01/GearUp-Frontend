import { Rental } from "@/types";

interface Props {
  rental: Rental;
}

export default function PaymentSummary({
  rental,
}: Props) {
  return (
    <div className="rounded-lg border p-6 space-y-3">
      <h2 className="text-xl font-semibold">
        Rental Summary
      </h2>

      <div className="flex justify-between">
        <span>Gear</span>

        <span>{rental.gearItem.name}</span>
      </div>

      <div className="flex justify-between">
        <span>Quantity</span>

        <span>{rental.quantity}</span>
      </div>

      <div className="flex justify-between">
        <span>Rental Period</span>

        <span>
          {rental.rentalStartDate} -{" "}
          {rental.rentalEndDate}
        </span>
      </div>

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>

        <span>
          ${rental.totalAmount}
        </span>
      </div>
    </div>
  );
}