"use client";

import { ActionState } from "@/types/action";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Rental } from "@/types";
import { createRentalAction } from "../_actions/create-rental.action";

const initialState: ActionState<Rental> = {
  success: false,
  message: "",
};

interface Props {
  gearId: string;
  rentalPricePerDay: number;
  availableQuantity: number;
}

export default function RentCard({
  gearId,
  rentalPricePerDay,
  availableQuantity,
}: Props) {
  const router = useRouter();

  const [state, formAction, pending] =
    useActionState(createRentalAction, initialState);

  const [quantity, setQuantity] = useState(1);

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    console.log(state);
}, [state]);

  useEffect(() => {
    if (state.success && state.data) {
      router.push(
        `/dashboard/customer/orders/${state.data.id}/pay`
      );
    }
  }, [state, router]);

  const totalPrice = useMemo(() => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const diff =
      end.getTime() - start.getTime();

    const days = Math.max(
      1,
      Math.ceil(diff / (1000 * 60 * 60 * 24))
    );

    return (
      days *
      quantity *
      rentalPricePerDay
    );
  }, [
    quantity,
    startDate,
    endDate,
    rentalPricePerDay,
  ]);

  return (
    <Card className="sticky top-24 space-y-6 p-6">
      <h2 className="text-2xl font-semibold">
        Rent This Gear
      </h2>

      <form action={formAction} className="space-y-5">
        <input
          type="hidden"
          name="gearItemId"
          value={gearId}
        />

        <div className="space-y-2">
          <Label>Rental Start Date</Label>

          <Input
            type="date"
            name="rentalStartDate"
            value={startDate}
            min={
              new Date()
                .toISOString()
                .split("T")[0]
            }
            onChange={(e) =>
              setStartDate(e.target.value)
            }
          />

          {state.errorDetails?.rentalStartDate && (
            <p className="text-sm text-destructive">
              {
                state.errorDetails
                  .rentalStartDate[0]
              }
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Rental End Date</Label>

          <Input
            type="date"
            name="rentalEndDate"
            value={endDate}
            min={
              startDate ||
              new Date()
                .toISOString()
                .split("T")[0]
            }
            onChange={(e) =>
              setEndDate(e.target.value)
            }
          />

          {state.errorDetails?.rentalEndDate && (
            <p className="text-sm text-destructive">
              {
                state.errorDetails
                  .rentalEndDate[0]
              }
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Quantity</Label>

          <Input
            type="number"
            name="quantity"
            value={quantity}
            min={1}
            max={availableQuantity}
            onChange={(e) =>
              setQuantity(
                Number(e.target.value)
              )
            }
          />

          <p className="text-xs text-muted-foreground">
            Available:{" "}
            {availableQuantity}
          </p>

          {state.errorDetails?.quantity && (
            <p className="text-sm text-destructive">
              {
                state.errorDetails
                  .quantity[0]
              }
            </p>
          )}
        </div>

        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm text-muted-foreground">
            Estimated Total
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            ৳ {totalPrice}
          </h3>
        </div>

        {state.message &&
          !state.success && (
            <p className="text-sm text-destructive">
              {state.message}
            </p>
          )}

        <Button
          type="submit"
          className="w-full"
          disabled={pending}
        >
          {pending
            ? "Creating Rental..."
            : "Rent Now"}
        </Button>
      </form>
    </Card>
  );
}