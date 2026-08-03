"use client";

import { useActionState } from "react";

import { Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Category, CreateGearPayload } from "@/types";
import { ActionState } from "@/types/action";

const initialState: ActionState = {
  success: false,
  message: "",
};

interface Props {
  categories: Category[];

  defaultValues?: Partial<CreateGearPayload>;

  action: (state: ActionState, formData: FormData) => Promise<ActionState>;

  submitText?: string;
}

export default function GearForm({
  categories,
  defaultValues,
  action,
  submitText = "Save",
}: Props) {
  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-6">
      {!state.success && state.message && (
        <p className="text-red-500">{state.message}</p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label>Name</Label>

          <Input name="name" defaultValue={defaultValues?.name} />

          {state.errorDetails?.name && (
            <p className="text-sm text-red-500">{state.errorDetails.name[0]}</p>
          )}
        </div>

        <div>
          <Label>Brand</Label>

          <Input name="brand" defaultValue={defaultValues?.brand} />
        </div>
      </div>

      <div>
        <Label>Description</Label>

        <textarea
          name="description"
          defaultValue={defaultValues?.description}
          className="min-h-36 w-full rounded-md border p-3"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label>Image URL</Label>

          <Input name="imageUrl" defaultValue={defaultValues?.imageUrl ?? ""} />
        </div>

        <div>
          <Label>Rental Price / Day</Label>

          <Input
            type="number"
            name="rentalPricePerDay"
            defaultValue={defaultValues?.rentalPricePerDay}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <Label>Quantity</Label>

          <Input
            type="number"
            name="quantity"
            defaultValue={defaultValues?.quantity}
          />
        </div>

        <div>
          <Label>Condition</Label>

          <Select name="condition" defaultValue={defaultValues?.condition}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="NEW">NEW</SelectItem>

              <SelectItem value="USED">USED</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Category</Label>

          <Select name="categoryId" defaultValue={defaultValues?.categoryId}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Saving...
          </>
        ) : (
          submitText
        )}
      </Button>
    </form>
  );
}
