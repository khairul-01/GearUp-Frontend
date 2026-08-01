import { USER_ROLE } from "@/constants";
import { User } from "@/types";
import Link from "next/link";

interface Props {
  user: User;
}

export default function DashboardSidebar({
  user,
}: Props) {
  return (
    <aside className="w-64 border-r bg-background">
      <div className="p-6">
        <h2 className="text-xl font-bold">
          GearUp
        </h2>

        <p className="text-sm text-muted-foreground">
          {user.name}
        </p>
      </div>

      <nav className="space-y-2 px-4">
        {user.role === USER_ROLE.CUSTOMER && (
          <>
            <Link
              href="/dashboard/customer"
              className="block rounded-md px-3 py-2 hover:bg-muted"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/customer/orders"
              className="block rounded-md px-3 py-2 hover:bg-muted"
            >
              Orders
            </Link>

            <Link
              href="/dashboard/customer/payments"
              className="block rounded-md px-3 py-2 hover:bg-muted"
            >
              Payments
            </Link>
          </>
        )}

        {user.role === USER_ROLE.PROVIDER && (
          <>
            <Link
              href="/dashboard/provider"
              className="block rounded-md px-3 py-2 hover:bg-muted"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/provider/gear"
              className="block rounded-md px-3 py-2 hover:bg-muted"
            >
              My Gear
            </Link>

            <Link
              href="/dashboard/provider/orders"
              className="block rounded-md px-3 py-2 hover:bg-muted"
            >
              Orders
            </Link>
          </>
        )}

        {user.role === USER_ROLE.ADMIN && (
          <>
            <Link
              href="/dashboard/admin"
              className="block rounded-md px-3 py-2 hover:bg-muted"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/admin/users"
              className="block rounded-md px-3 py-2 hover:bg-muted"
            >
              Users
            </Link>

            <Link
              href="/dashboard/admin/rentals"
              className="block rounded-md px-3 py-2 hover:bg-muted"
            >
              Rentals
            </Link>
          </>
        )}
      </nav>
    </aside>
  );
}