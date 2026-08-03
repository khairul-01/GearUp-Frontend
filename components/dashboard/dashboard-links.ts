import { USER_ROLE } from "@/constants";
import { Boxes, CreditCard, LayoutDashboard, PackagePlus, ShoppingBag, Users } from "lucide-react";

export interface DashboardLink {
  title: string;
  href: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}

export const dashboardLinks: Record<
  string,
  DashboardLink[]
> = {
  [USER_ROLE.CUSTOMER]: [
    {
      title: "Dashboard",
      href: "/dashboard/customer",
      icon: LayoutDashboard,
    },
    {
      title: "My Orders",
      href: "/dashboard/customer/orders",
      icon: ShoppingBag,
    },
    {
      title: "Payments",
      href: "/dashboard/customer/payments",
      icon: CreditCard,
    },
  ],

  [USER_ROLE.PROVIDER]: [
    {
      title: "Dashboard",
      href: "/dashboard/provider",
      icon: LayoutDashboard,
    },
    {
      title: "My Gear",
      href: "/dashboard/provider/gear",
      icon: PackagePlus,
    },
    {
      title: "Orders",
      href: "/dashboard/provider/orders",
      icon: ShoppingBag,
    },
  ],

  [USER_ROLE.ADMIN]: [
    {
      title: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/dashboard/admin/users",
      icon: Users,
    },
    {
      title: "Gear",
      href: "/dashboard/admin/gear",
      icon: Boxes,
    },
    {
      title: "Rentals",
      href: "/dashboard/admin/rentals",
      icon: ShoppingBag,
    },
    // link for catergory management
    {
      title: "Categories",
      href: "/dashboard/admin/categories",
      icon: Boxes,
    },
  ],
};