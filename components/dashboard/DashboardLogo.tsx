import Link from "next/link";

export default function DashboardLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 border-b px-6 py-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
        G
      </div>

      <div>
        <h2 className="text-lg font-bold">GearUp</h2>

        <p className="text-xs text-muted-foreground">Rental Platform</p>
      </div>
    </Link>
  );
}
