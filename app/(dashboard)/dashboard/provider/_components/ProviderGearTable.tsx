import Link from "next/link";

import { Category, Gear } from "@/types";

import { Button } from "@/components/ui/button";

import DeleteGearDialog from "./DeleteGearDialog";
import EditGearDialog from "./EditGearDialogue";

interface Props {
  gears: Gear[];
  categories: Category[];
}

export default function ProviderGearTable({ gears, categories }: Props) {
  return (
    <div className="rounded-xl border">
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-xl font-semibold">My Gear</h2>

        <Button asChild>
          <Link href="/dashboard/provider/gear/new">Add Gear</Link>
        </Button>
      </div>

      <div className="overflow-x-auto rounded-xl border shadow-sm">
        <table className="min-w-[900px] w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left border-l">Name</th>

              <th className="text-left p-2 border-l">Price</th>

              <th className="text-left p-2 border-l">Available</th>

              <th className="p-4 text-right border-l">Actions</th>
            </tr>
          </thead>

          <tbody>
            {gears.map((gear) => (
              <tr key={gear.id} className="border-b">
                <td className="p-4 border-l">{gear.name}</td>

                <td className="p-2 border-l">৳{gear.rentalPricePerDay}</td>

                <td className="p-2 border-l">{gear.availableQuantity}</td>

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
                <td className="p-4 border-l text-right">
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
    </div>
  );
}
