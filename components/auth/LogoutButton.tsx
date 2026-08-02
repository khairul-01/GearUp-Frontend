"use client";

import { useTransition } from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { logoutAction } from "@/app/_action/logout.action";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const [pending, startTransition] =
    useTransition();

  return (
    <DropdownMenuItem
      onClick={() =>
        startTransition(async () => {
          await logoutAction();
        })
      }
      disabled={pending}
    >
      <LogOut className="mr-2 h-4 w-4" />

      {pending
        ? "Signing out..."
        : "Logout"}
    </DropdownMenuItem>
  );
}