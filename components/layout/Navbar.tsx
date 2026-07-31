import { authNavigation, guestNavigation } from "@/config/navigation";
import Logo from "../shared/Logo";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {guestNavigation.map((item) => (
            <NavItem 
            key={item.href}
            {...item}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {authNavigation.map((item) => (
            <NavItem 
            key={item.href}
            {...item}
            />
          ))}
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}