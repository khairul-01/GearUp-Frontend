// import { authNavigation, guestNavigation } from "@/config/navigation";
// import Logo from "../shared/Logo";
// import NavItem from "./NavItem";
// import MobileMenu from "./MobileMenu";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
//         <Logo />

//         <nav className="hidden items-center gap-8 md:flex">
//           {guestNavigation.map((item) => (
//             <NavItem
//             key={item.href}
//             {...item}
//             />
//           ))}
//         </nav>

//         <div className="hidden items-center gap-3 md:flex">
//           {authNavigation.map((item) => (
//             <NavItem
//             key={item.href}
//             {...item}
//             />
//           ))}
//         </div>

//         <MobileMenu />
//       </div>
//     </header>
//   );
// }

import Link from "next/link";

import { ROUTES } from "@/constants";

import { getCurrentUser } from "@/services/auth/get-current-user";

import MobileMenu from "./MobileMenu";

import { Button } from "@/components/ui/button";
import UserMenu from "./UserMenu";
import NavLinks from "./NavItem";
import Container from "./Container";
import { Mountain } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 shadow-sm backdrop-blur supports-backdrop-filter:bg-background/70">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" 
          className="flex items-center gap-2">
            <Mountain className="h-7 w-7 text-primary" />

            <span className="text-2xl font-bold tracking-tight">GearUp</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLinks />
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />

            {user ? (
              <UserMenu user={user} />
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href={ROUTES.LOGIN}>Login</Link>
                </Button>

                <Button asChild>
                  <Link href={ROUTES.REGISTER}>Register</Link>
                </Button>
              </>
            )}
          </div>

          <MobileMenu user={user} />
        </div>
      </Container>
      {/* <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-2xl font-bold text-primary"
        >
          GearUp
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLinks />
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <UserMenu user={user} />
          ) : (
            <>
              <Button
                variant="ghost"
                asChild
              >
                <Link href={ROUTES.LOGIN}>
                  Login
                </Link>
              </Button>

              <Button asChild>
                <Link href={ROUTES.REGISTER}>
                  Register
                </Link>
              </Button>
            </>
          )}
        </div>

        <MobileMenu user={user} />
      </div> */}
    </header>
  );
}
