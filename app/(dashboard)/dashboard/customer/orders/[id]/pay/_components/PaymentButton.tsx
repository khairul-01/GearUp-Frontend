"use client";

import { useActionState, useEffect } from "react";

import { Button } from "@/components/ui/button";

import { createPaymentAction } from "../_actions/create-payment.action";
import { ActionState } from "@/types/action";
import { Payment } from "@/types";
import { toast } from "sonner";

const initialState: ActionState<Payment> = {
  success: false,
  message: "",
};

interface Props {
  rentalId: string;
}

export default function PaymentButton({ rentalId }: Props) {
  const [state, formAction, pending] = useActionState<
    ActionState<Payment>,
    FormData
  >(createPaymentAction, initialState);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      if (state.data?.checkoutUrl) {
        window.location.href = state.data.checkoutUrl;
      }
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="rentalOrderId" value={rentalId} />

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Redirecting..." : "Proceed to Payment"}
      </Button>
    </form>
  );
}
