import { redirect } from "next/navigation";

import { USER_ROLE, ROUTES } from "@/constants";

import { getCurrentUser } from "@/services/auth/get-current-user";

export default async function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user =
    await getCurrentUser();

  if (!user) {
    redirect(ROUTES.LOGIN);
  }

  if (
    user.role !== USER_ROLE.CUSTOMER
  ) {
    redirect("/");
  }

  return children;
}