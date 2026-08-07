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
import ThemeToggle from "../layout/ThemeToggle";

interface Props {
  user: User;
}

export default function DashboardHeader({ user }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <DashboardMobileSidebar user={user} />

          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">Welcome back,</h1>

            <p className="text-sm text-muted-foreground">{user.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <DashboardUserDropdown user={user} />
        </div>
      </div>
    </header>
    // <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-background px-6">
    //   <div className="flex items-center gap-3">
    //     <DashboardMobileSidebar user={user} />

    //     <h1 className="text-lg font-semibold">
    //       Dashboard
    //     </h1>
    //   </div>

    //   <DashboardUserDropdown user={user} />
    // </header>
  );
}
