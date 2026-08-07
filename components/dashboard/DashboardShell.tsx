"use client";

import { User } from "@/types";

import { ReactNode } from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

interface Props {
  user: User;
  children: ReactNode;
}

export default function DashboardShell({
  user,
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden border-r bg-background lg:block">
          <DashboardSidebar user={user} />
        </aside>

        {/* Main */}
        <div className="flex min-h-screen flex-1 flex-col">
          <DashboardHeader user={user} />

          <main className="flex-1 overflow-y-auto">
            <div className="mx-auto w-full max-w-7xl p-2 sm:p-4 lg:p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}