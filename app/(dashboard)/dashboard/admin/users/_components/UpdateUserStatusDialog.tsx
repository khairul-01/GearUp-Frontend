"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { updateUserStatusAction } from "../_actions/update-user-status.action";

const initialState = {
  success: false,
  message: "",
};

export default function UpdateUserStatusDialog({
  id,
  status,
}: {
  id: string;
  status: "ACTIVE" | "SUSPENDED";
}) {
  const [state, formAction] =
    useActionState(
      updateUserStatusAction,
      initialState
    );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          Update
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Update User
          </DialogTitle>
        </DialogHeader>

        <form
          action={formAction}
          className="space-y-4"
        >
          <input
            type="hidden"
            name="id"
            value={id}
          />

          <Select
            name="status"
            defaultValue={status}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="ACTIVE">
                ACTIVE
              </SelectItem>

              <SelectItem value="SUSPENDED">
                SUSPENDED
              </SelectItem>
            </SelectContent>
          </Select>

          <Button className="w-full">
            Save
          </Button>

          {state.message && (
            <p className="text-sm">
              {state.message}
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}