import { USER_ROLE } from "@/constants";
import { Boxes, CreditCard, LayoutDashboard, Package, ShoppingBag, Users } from "lucide-react";

export const dashboardLinks = {
  [USER_ROLE.CUSTOMER]: [
    {
      title: "Dashboard",
      href: "/dashboard/customer",
      icon: LayoutDashboard,
    },
    {
      title: "Orders",
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
      icon: Package,
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
  ],
};