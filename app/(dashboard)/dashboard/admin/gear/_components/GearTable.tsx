import Image from "next/image";

import { Gear } from "@/types";

interface Props {
  gears: Gear[];
}

export default function GearTable({
  gears,
}: Props) {
  if (!gears.length) {
    return (
      <p className="text-muted-foreground">
        No gear found.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border bg-card shadow-sm">
      <table className="min-w-[900px] w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">
              Image
            </th>

            <th className="p-3 border-l">Name</th>

            <th className="p-3 border-l">Category</th>

            <th className="p-3 border-l">Provider</th>

            <th className="p-3 border-l">Price</th>

            <th className="p-3 border-l">Available</th>
          </tr>
        </thead>

        <tbody>
          {gears.map((gear) => (
            <tr
              key={gear.id}
              className="border-t"
            >
              <td className="p-3 border-l">
                <Image
                  src={
                    gear.imageUrl ||
                    "/images/placeholder.png"
                  }
                  alt={gear.name}
                  width={60}
                  height={60}
                  className="rounded-md object-cover"
                />
              </td>

              <td className="p-3 border-l">
                {gear.name}
              </td>

              <td className="p-3 border-l">
                {gear.category.name}
              </td>

              <td className="p-3 border-l">
                {gear.provider.name}
              </td>

              <td className="p-3 border-l">
                ৳
                {gear.rentalPricePerDay}
              </td>

              <td className="p-3 border-l">
                {gear.availableQuantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}