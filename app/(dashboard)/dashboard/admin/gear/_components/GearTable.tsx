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

            <th>Name</th>

            <th>Category</th>

            <th>Provider</th>

            <th>Price</th>

            <th>Available</th>
          </tr>
        </thead>

        <tbody>
          {gears.map((gear) => (
            <tr
              key={gear.id}
              className="border-t"
            >
              <td className="p-3">
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

              <td>{gear.name}</td>

              <td>
                {gear.category.name}
              </td>

              <td>
                {gear.provider.name}
              </td>

              <td>
                ৳
                {gear.rentalPricePerDay}
              </td>

              <td>
                {gear.availableQuantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}