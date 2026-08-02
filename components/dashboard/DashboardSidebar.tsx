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
    <aside className="hidden w-72 border-r bg-background lg:flex lg:flex-col">
      <DashboardLogo />

      <DashboardNav role={user.role} />

      <DashboardUser user={user} />
    </aside>
  );
}