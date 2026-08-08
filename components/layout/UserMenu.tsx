"use client";

import Link from "next/link";

import { User } from "@/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { logoutAction } from "@/app/(authentication)/_action/logout.action";

interface Props {
  user: User;
}

export default function UserMenu({
  user,
}: Props) {
  const dashboard =
    user.role === "ADMIN"
      ? "/dashboard/admin"
      : user.role === "PROVIDER"
      ? "/dashboard/provider"
      : "/dashboard/customer";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={dashboard}>
            Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/profile">
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          {/* <Link href="/logout">
            Logout
          </Link> */}
          {/* make logout with action */}
          <form action={logoutAction} >
            <button type="submit">Logout</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}