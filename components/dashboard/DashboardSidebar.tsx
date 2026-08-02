import { User } from "@/types";
import DashboardLogo from "./DashboardLogo";
import DashboardNav from "./DashboardNav";
import DashboardUser from "./DashboardUser";

interface Props {
  user: User;
}

export default function DashboardSidebar({
  user,
}: Props) {
  return (
    <aside className="flex h-full w-72 flex-col border-r bg-background">
      <DashboardLogo />

      <DashboardNav role={user.role} />

      <DashboardUser user={user} />
    </aside>
  );
}