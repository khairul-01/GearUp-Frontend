import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold">GearUp</h2>

            <p className="mt-4 text-sm text-muted-foreground leading-6">
              Rent premium outdoor and sports gear from trusted providers.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-2">
              <Link href="/">Home</Link>

              <Link href="/gear">Gear</Link>

              <Link href="/about">About</Link>

              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Dashboard */}

          <div>
            <h3 className="mb-4 font-semibold">Dashboard</h3>

            <div className="flex flex-col gap-2">
              <Link href="/dashboard/customer">Customer</Link>

              <Link href="/dashboard/provider">Provider</Link>

              <Link href="/dashboard/admin">Admin</Link>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Dhaka, Bangladesh</p>

              <p>support@gearup.com</p>

              <p>+880 1700 000000</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © 2026 GearUp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
