"use client";

import { useActionState, useState } from "react";

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
import { Textarea } from "@/components/ui/textarea";

const initialState: ActionState = {
  success: false,
  message: "",
};

type GearFormValues = Partial<CreateGearPayload> & {
  id?: string;
  availableQuantity?: number;
};

interface Props {
  categories: Category[];

  defaultValues?: GearFormValues;

  action: (state: ActionState, formData: FormData) => Promise<ActionState>;

  submitText?: string;

  onSuccess?: () => void;
}

export default function GearForm({
  categories,
  defaultValues,
  action,
  submitText = "Save",
}: Props) {
  const [state, formAction, pending] = useActionState(action, initialState);

  const [categoryId, setCategoryId] = useState(defaultValues?.categoryId ?? "");

  const [condition, setCondition] = useState(defaultValues?.condition ?? "NEW");

  return (
    <form action={formAction} className="space-y-6">

      {!state.success && state.message && (
        <p className="text-red-500">{state.message}</p>
      )}

      {defaultValues?.id && (
        <input type="hidden" name="id" value={defaultValues.id} />
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

        <Textarea
          name="description"
          defaultValue={defaultValues?.description}
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
          <Label>Available Quantity</Label>

          <Input
            type="number"
            name="availableQuantity"
            defaultValue={defaultValues?.availableQuantity}
          />
        </div>

        <div>
          <Label>Condition</Label>

          <Select
            value={condition}
            onValueChange={(value) => setCondition(value as "NEW" | "USED")}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="NEW">NEW</SelectItem>

              <SelectItem value="USED">USED</SelectItem>
            </SelectContent>
          </Select>

          <input type="hidden" name="condition" value={condition} />
        </div>

        <div>
          <Label>Category</Label>

          <Select value={categoryId} onValueChange={setCategoryId}>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>

            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <input type="hidden" name="categoryId" value={categoryId} />
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
