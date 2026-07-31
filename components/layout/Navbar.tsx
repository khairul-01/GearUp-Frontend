import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          GearUp
        </Link>

        <div className="flex items-center gap-5">
          <Link href="/gear">Gear</Link>

          <Link href="/auth/login">
            Login
          </Link>

          <Link href="/auth/register">
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}