import Link from "next/link";

import { Gear } from "@/types";

import { Button } from "@/components/ui/button";

interface Props {
  gears: Gear[];
}

export default function ProviderGearTable({
  gears,
}: Props) {
  return (
    <div className="rounded-xl border">

      <div className="flex items-center justify-between border-b p-6">

        <h2 className="text-xl font-semibold">
          My Gear
        </h2>

        <Button asChild>
          <Link href="/dashboard/provider/gear/new">
            Add Gear
          </Link>
        </Button>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="p-4 text-left">
              Name
            </th>

            <th className="text-left">
              Price
            </th>

            <th className="text-left">
              Available
            </th>

            <th />

          </tr>

        </thead>

        <tbody>

          {gears.map((gear) => (
            <tr
              key={gear.id}
              className="border-b"
            >
              <td className="p-4">
                {gear.name}
              </td>

              <td>
                ৳
                {gear.rentalPricePerDay}
              </td>

              <td>
                {gear.availableQuantity}
              </td>

              <td className="space-x-2">

                <Button
                  asChild
                  size="sm"
                >
                  <Link
                    href={`/dashboard/provider/gear/${gear.id}`}
                  >
                    Edit
                  </Link>
                </Button>

              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}