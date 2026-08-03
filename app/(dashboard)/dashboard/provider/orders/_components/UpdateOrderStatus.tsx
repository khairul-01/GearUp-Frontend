"use client";

import { useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Rental } from "@/types";

import { updateOrderAction } from "../_actions/update-order.action";

interface Props {
  order: Rental;
}

export default function UpdateOrderStatus({
  order,
}: Props) {
  const [pending, startTransition] =
    useTransition();

  return (
    <Select
      defaultValue={order.status}
      disabled={pending}
      onValueChange={(value) =>
        startTransition(() =>
          updateOrderAction(
            order.id,
            value
          )
        )
      }
    >
      <SelectTrigger className="w-44">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="PLACED">
          PLACED
        </SelectItem>

        <SelectItem value="CONFIRMED">
          CONFIRMED
        </SelectItem>

        <SelectItem value="PAID">
          PAID
        </SelectItem>

        <SelectItem value="PICKED_UP">
          PICKED UP
        </SelectItem>

        <SelectItem value="RETURNED">
          RETURNED
        </SelectItem>

        <SelectItem value="CANCELLED">
          CANCELLED
        </SelectItem>
      </SelectContent>
    </Select>
  );
}