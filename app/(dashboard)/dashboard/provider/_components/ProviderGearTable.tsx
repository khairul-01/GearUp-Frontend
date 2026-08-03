import Link from "next/link";

import { Category, Gear } from "@/types";

import { Button } from "@/components/ui/button";

import DeleteGearDialog from "./DeleteGearDialog";
import EditGearDialog from "./EditGearDialogue";

interface Props {
  gears: Gear[];
  categories: Category[];
}

export default function ProviderGearTable({
  gears,
  categories,
}: Props) {
  return (
    <div className="rounded-xl border">
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-xl font-semibold">My Gear</h2>

        <Button asChild>
          <Link href="/dashboard/provider/gear/new">Add Gear</Link>
        </Button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Name</th>

            <th className="text-left">Price</th>

            <th className="text-left">Available</th>

            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {gears.map((gear) => (
            <tr key={gear.id} className="border-b">
              <td className="p-4">{gear.name}</td>

              <td>৳{gear.rentalPricePerDay}</td>

              <td>{gear.availableQuantity}</td>

              {/* <td className="space-x-2">

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

              </td> */}
              <td className="p-2 text-right">
                <div className="flex justify-end gap-2">
                  <EditGearDialog gear={gear} categories={categories} />

                  <DeleteGearDialog gearId={gear.id} gearName={gear.name} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
