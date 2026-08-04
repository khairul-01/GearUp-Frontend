// "use client";

// import { Menu } from "lucide-react";
// import { Button } from "../ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
// import { authNavigation, guestNavigation } from "@/config/navigation";
// import Link from "next/link";

// export default function MobileMenu() {
//   return (
//     <Sheet>
//         <SheetTrigger asChild>
//             <Button
//                 size="icon"
//                 variant="ghost"
//                 className="md:hidden"
//                 >
//                     <Menu className="size-5" />
//                 </Button>
//         </SheetTrigger>

//         <SheetContent side="left">
//             <div className="mt-8 px-4 flex flex-col gap-5">
//                 {guestNavigation.map((item) => (
//                     <Link
//                         key={item.href}
//                         href={item.href}>
//                             {item.title}
//                         </Link>
//                 ))}

//                 <hr/>

//                 {authNavigation.map((item) => (
//                     <Link
//                         key={item.href}
//                         href={item.href}>
//                             {item.title}
//                         </Link>
//                 ))}
//             </div>
//         </SheetContent>
//     </Sheet>
//   );
// }

"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

import { User } from "@/types";

import { ROUTES, USER_ROLE } from "@/constants";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Props {
  user: User | null;
}

export default function MobileMenu({ user }: Props) {
  const dashboard =
    user?.role === USER_ROLE.ADMIN
      ? ROUTES.DASHBOARD.ADMIN
      : user?.role === USER_ROLE.PROVIDER
        ? ROUTES.DASHBOARD.PROVIDER
        : ROUTES.DASHBOARD.CUSTOMER;

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-72">
          <SheetHeader>
            <SheetTitle>GearUp</SheetTitle>
          </SheetHeader>

          <div className="mt-8 flex flex-col gap-4">

            <SheetClose asChild>
              <Link href="/">Home</Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/gear">Browse Gear</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/about">About</Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/contact">Contact</Link>
            </SheetClose>

            {user ? (
              <>
                <hr />

                <p className="text-sm text-muted-foreground">{user.name}</p>

                <Link href={dashboard}>Dashboard</Link>

                <Link href="/profile">Profile</Link>

                <Link href="/logout">Logout</Link>
              </>
            ) : (
              <>
                <hr />

                <Button asChild>
                  <Link href={ROUTES.LOGIN}>Login</Link>
                </Button>

                <Button asChild variant="outline">
                  <Link href={ROUTES.REGISTER}>Register</Link>
                </Button>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
