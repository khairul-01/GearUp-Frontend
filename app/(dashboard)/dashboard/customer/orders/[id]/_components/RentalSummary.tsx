import { Rental } from "@/types";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  rental: Rental;
}

export default function RentalSummary({
  rental,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Order Information
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <p className="font-medium">
            Gear
          </p>

          <p>{rental.gearItem.name}</p>
        </div>

        <div>
          <p className="font-medium">
            Provider
          </p>

          <p>{rental.gearItem.provider.name}</p>
        </div>

        <div>
          <p className="font-medium">
            Quantity
          </p>

          <p>{rental.quantity}</p>
        </div>

        <div>
          <p className="font-medium">
            Total Amount
          </p>

          <p>
            ৳{rental.totalAmount}
          </p>
        </div>

        <div>
          <p className="font-medium">
            Rental Start
          </p>

          <p>
            {new Date(
              rental.rentalStartDate
            ).toLocaleDateString()}
          </p>
        </div>

        <div>
          <p className="font-medium">
            Rental End
          </p>

          <p>
            {new Date(
              rental.rentalEndDate
            ).toLocaleDateString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}