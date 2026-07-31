"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  title: string;
};

export default function NavItem({ href, title }: Props) {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-primary ${
        isActive ? "font-semibold text-primary" : "text-muted-foreground"
      }`}
    >
      {title}
    </Link>
  );
}
