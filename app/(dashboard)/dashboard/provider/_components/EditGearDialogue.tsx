"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Category, Gear } from "@/types";

import { updateGearAction } from "../_actions/update-gear.action";
import GearForm from "./GearForm";

interface Props {
  gear: Gear;
  categories: Category[];
}

export default function EditGearDialog({ gear, categories }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Edit Gear</DialogTitle>
        </DialogHeader>

        <GearForm
          categories={categories}
          action={updateGearAction}
          submitText="Update Gear"
          defaultValues={{
            id: gear.id,
            categoryId: gear.categoryId,
            name: gear.name,
            description: gear.description,
            brand: gear.brand,
            condition: gear.condition,
            rentalPricePerDay: gear.rentalPricePerDay,
            quantity: gear.quantity,
            availableQuantity: gear.availableQuantity,
            imageUrl: gear.imageUrl,
          }}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
