"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUpdateSearchParams } from "../_hooks/use-update-search-params";

export default function GearSort() {
  const { update } =
    useUpdateSearchParams();

  return (
    <Select
      onValueChange={(value) => {
        const [sortBy, sortOrder] =
          value.split("|");

        update("sortBy", sortBy);

        update(
          "sortOrder",
          sortOrder
        );
      }}
    >
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="createdAt|desc">
          Newest
        </SelectItem>

        <SelectItem value="rentalPricePerDay|asc">
          Price Low → High
        </SelectItem>

        <SelectItem value="rentalPricePerDay|desc">
          Price High → Low
        </SelectItem>

        <SelectItem value="name|asc">
          Name A-Z
        </SelectItem>
      </SelectContent>
    </Select>
  );
}