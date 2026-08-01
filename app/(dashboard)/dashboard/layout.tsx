import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
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
    <div className="min-h-screen flex bg-muted/30">
      <DashboardSidebar user={user} />

      <div className="flex-1">
        <DashboardHeader user={user} />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}