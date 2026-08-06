"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Menu,
  Package,
  Info,
  Phone,
  LayoutDashboard,
  UserCircle,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";

import { User } from "@/types";
import { ROUTES, USER_ROLE } from "@/constants";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { logoutAction } from "@/app/_action/logout.action";
import ThemeToggle from "./ThemeToggle";

interface Props {
  user: User | null;
}

export default function MobileMenu({ user }: Props) {
  const pathname = usePathname();

  const dashboard =
    user?.role === USER_ROLE.ADMIN
      ? ROUTES.DASHBOARD.ADMIN
      : user?.role === USER_ROLE.PROVIDER
        ? ROUTES.DASHBOARD.PROVIDER
        : ROUTES.DASHBOARD.CUSTOMER;

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "/gear",
      label: "Browse Gear",
      icon: Package,
    },
    {
      href: "/about",
      label: "About",
      icon: Info,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: Phone,
    },
  ];

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-80 p-0">
          <SheetHeader className="border-b p-6">
            <SheetTitle className="text-left text-2xl font-bold">
              GearUp
            </SheetTitle>
          </SheetHeader>

          <div className="flex h-full flex-col">
            {/* Main Navigation */}

            <div className="space-y-1 p-4">
              {navItems.map((item) => {
                const Icon = item.icon;

                const active = pathname === item.href;

                return (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-muted ${
                        active ? "bg-primary text-primary-foreground" : ""
                      }`}
                    >
                      <Icon className="h-5 w-5" />

                      {item.label}
                    </Link>
                  </SheetClose>
                );
              })}
            </div>

            <div className="mx-4 border-t" />

            {/* User Section */}

            {user ? (
              <>
                <div className="space-y-4 p-4">
                  <div>
                    <h4 className="font-semibold">{user.name}</h4>

                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>

                  <SheetClose asChild>
                    <Link
                      href={dashboard}
                      className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-muted"
                    >
                      <LayoutDashboard className="h-5 w-5" />
                      Dashboard
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="/dashboard/profile"
                      className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-muted"
                    >
                      <UserCircle className="h-5 w-5" />
                      Profile
                    </Link>
                  </SheetClose>
                </div>

                <div className="mt-auto border-t p-4">
                  <form action={logoutAction}>
                    <Button variant="destructive" className="w-full">
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="mt-auto border-t space-y-3 p-4">
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <Link href={ROUTES.LOGIN}>
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Link>
                  </Button>
                </SheetClose>

                <SheetClose asChild>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={ROUTES.REGISTER}>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Register
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <div className="border-t p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Theme</span>

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
