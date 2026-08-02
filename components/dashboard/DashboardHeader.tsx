// import { User } from "@/types";
// import LogoutButton from "../auth/LogoutButton";

// interface Props {
//   user: User;
// }

// export default function DashboardHeader({
//   user,
// }: Props) {
//   return (
//     <header className="flex h-16 items-center justify-between border-b bg-background px-6">
//       <div>
//         <h1 className="text-lg font-semibold">
//           Dashboard
//         </h1>
//       </div>

//       <div className="flex items-center gap-4">
//     <div className="text-right">
//       <p className="font-medium">{user?.name}</p>

//       <p className="text-sm text-muted-foreground">
//         {user?.email}
//       </p>
//     </div>

//     <LogoutButton />
//   </div>
//     </header>
//   );
// }

"use client";

import { User } from "@/types";
import DashboardMobileSidebar from "./DashboardMobileSidebar";
import DashboardUserDropdown from "./DashboardUserDropdown";

interface Props {
  user: User;
}

export default function DashboardHeader({
  user,
}: Props) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-3">
        <DashboardMobileSidebar user={user} />

        <h1 className="text-lg font-semibold">
          Dashboard
        </h1>
      </div>

      <DashboardUserDropdown user={user} />
    </header>
  );
}