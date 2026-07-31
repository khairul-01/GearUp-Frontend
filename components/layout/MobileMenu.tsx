"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { authNavigation, guestNavigation } from "@/config/navigation";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                >
                    <Menu className="size-5" />
                </Button>
        </SheetTrigger>

        <SheetContent side="left">
            <div className="mt-8 px-4 flex flex-col gap-5">
                {guestNavigation.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}>
                            {item.title}
                        </Link>
                ))}

                <hr/>

                {authNavigation.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}>
                            {item.title}
                        </Link>
                ))}
            </div>
        </SheetContent>
    </Sheet>
  );
}
