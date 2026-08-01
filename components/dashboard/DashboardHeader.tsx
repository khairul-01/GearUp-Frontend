import { User } from "@/types";

interface Props {
  user: User;
}

export default function DashboardHeader({
  user,
}: Props) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div>
        <h1 className="text-lg font-semibold">
          Dashboard
        </h1>
      </div>

      <div className="text-right">
        <p className="font-medium">
          {user.name}
        </p>

        <p className="text-sm text-muted-foreground">
          {user.email}
        </p>
      </div>
    </header>
  );
}