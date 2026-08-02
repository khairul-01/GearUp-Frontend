"use client";

import { usePathname } from "next/navigation";
import { dashboardLinks } from "./dashboard-links";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  role: string;
}

export default function DashboardNav({
  role,
}: Props) {
  const pathname = usePathname();

  const links = dashboardLinks[role] ?? [];

  return (
    <nav className="flex-1 space-y-1 p-4">
      {links.map((link) => {
        const Icon = link.icon;

        const active =
          pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors",

              active
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            )}
          >
            <Icon className="h-5 w-5" />

            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}