"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

interface Props {
  gearId: string;

  pricePerDay: number;

  availableQuantity: number;
}

export default function RentCard({
  gearId,
  pricePerDay,
  availableQuantity,
}: Props) {
  const [quantity, setQuantity] =
    useState(1);

  const [start, setStart] =
    useState("");

  const [end, setEnd] =
    useState("");

  const total = useMemo(() => {
    if (!start || !end) return 0;

    const startDate = new Date(start);

    const endDate = new Date(end);

    const days = Math.max(
      1,
      Math.ceil(
        (endDate.getTime() -
          startDate.getTime()) /
          (1000 *
            60 *
            60 *
            24)
      )
    );

    return (
      days *
      quantity *
      pricePerDay
    );
  }, [
    start,
    end,
    quantity,
    pricePerDay,
  ]);

  return (
    <Card className="space-y-5 p-6">
      <h2 className="text-xl font-semibold">
        Rent This Gear
      </h2>

      <Input
        type="date"
        value={start}
        onChange={(e) =>
          setStart(e.target.value)
        }
      />

      <Input
        type="date"
        value={end}
        onChange={(e) =>
          setEnd(e.target.value)
        }
      />

      <Input
        type="number"
        min={1}
        max={availableQuantity}
        value={quantity}
        onChange={(e) =>
          setQuantity(
            Number(e.target.value)
          )
        }
      />

      <div className="rounded-lg bg-muted p-4">
        <p>Total Price</p>

        <h3 className="text-3xl font-bold">
          ${total}
        </h3>
      </div>

      <Button
        className="w-full"
        disabled={
          !start ||
          !end ||
          quantity < 1
        }
      >
        Rent Now
      </Button>
    </Card>
  );
}