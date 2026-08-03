"use client";

import { useActionState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Textarea,
} from "@/components/ui/textarea";

import { createCategoryAction } from "../_actions/create-category.action";
import { INITIAL_ACTION_STATE } from "@/types/action";

export default function CategoryForm() {
  const [state, action, pending] =
    useActionState(
      createCategoryAction,
      INITIAL_ACTION_STATE
    );

  return (
    <form
      action={action}
      className="space-y-5 max-w-xl"
    >
      <div>
        <label>Name</label>

        <Input name="name" />

        {state.errorDetails?.name && (
          <p className="text-sm text-red-500">
            {state.errorDetails.name[0]}
          </p>
        )}
      </div>

      <div>
        <label>Description</label>

        <Textarea
          name="description"
        />

        {state.errorDetails
          ?.description && (
          <p className="text-sm text-red-500">
            {
              state.errorDetails
                .description[0]
            }
          </p>
        )}
      </div>

      <Button disabled={pending}>
        {pending
          ? "Creating..."
          : "Create Category"}
      </Button>
    </form>
  );
}