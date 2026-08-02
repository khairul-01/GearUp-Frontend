"use client";

import { User } from "@/types";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import DashboardSidebar from "./DashboardSidebar";

interface Props {
  user: User;
}

export default function DashboardMobileSidebar({
  user,
}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-72 p-0"
      >
        <DashboardSidebar user={user} />
      </SheetContent>
    </Sheet>
  );
}