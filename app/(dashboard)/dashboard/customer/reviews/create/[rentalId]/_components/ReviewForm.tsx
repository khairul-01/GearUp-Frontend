"use client";

import { useActionState, useEffect, useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";

import RatingInput from "./RatingInput";

import { ActionState } from "@/types/action";
import { Review } from "@/types/review";
import { createReviewAction } from "../_action/create-review.action";

const initialState: ActionState<Review> = {
  success: false,
  message: "",
};

interface Props {
  rentalOrderId: string;
}

export default function ReviewForm({ rentalOrderId }: Props) {
  const [rating, setRating] = useState(5);

  const [state, formAction, pending] = useActionState(
    createReviewAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      // after success, move to the customer dashboard

      window.location.href = "/dashboard/customer";
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-6">
      <input type="hidden" name="rentalOrderId" value={rentalOrderId} />

      <input type="hidden" name="rating" value={rating} />

      <RatingInput value={rating} onChange={setRating} />

      <Textarea name="comment" placeholder="Write your review..." />

      <Button disabled={pending} type="submit">
        Submit Review
      </Button>
    </form>
  );
}
