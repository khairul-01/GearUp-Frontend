import DashboardShell from "@/components/dashboard/DashboardShell";
import { getCurrentUser } from "@/services/auth/get-current-user";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <DashboardShell user={user}>
      {children}
    </DashboardShell>
  );
}