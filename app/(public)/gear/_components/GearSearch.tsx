"use client";

import { useEffect, useState } from "react";
import { useUpdateSearchParams } from "../_hooks/use-update-search-params";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";

export default function GearSearch() {
  const { searchParams, update } =
    useUpdateSearchParams();

  const [value, setValue] = useState(
    searchParams.get("search") ?? ""
  );

  const debounced = useDebounce(value);

  useEffect(() => {
    update("search", debounced);
  }, [debounced, update]);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

      <Input
        className="pl-9"
        placeholder="Search gear..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);

          update("search", e.target.value);
        }}
      />
    </div>
  );
}