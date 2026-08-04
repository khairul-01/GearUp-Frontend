import { Badge } from "@/components/ui/badge";

import { Rental } from "@/types";

interface Props {
  rental: Rental;
}

export default function RentalTimeline({
  rental,
}: Props) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Current Status
      </h2>

      <Badge className="text-sm">
        {rental.status}
      </Badge>
    </div>
  );
}