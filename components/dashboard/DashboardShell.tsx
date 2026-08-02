"use client";

import { User } from "@/types";
import { ReactNode } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

interface Props {
  user: User;
  children: ReactNode;
}

export default function DashboardShell({ user, children }: Props) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <div className="hidden lg:block">
        <DashboardSidebar user={user} />
      </div>

      <div className="flex flex-1 flex-col">
        <DashboardHeader user={user} />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
