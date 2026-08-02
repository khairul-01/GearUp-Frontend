import { User } from "@/types";

interface Props {
  user: User;
}

export default function DashboardUser({
  user,
}: Props) {
  return (
    <div className="border-t p-5">
      <div className="space-y-1">
        <p className="font-semibold">
          {user.name}
        </p>

        <p className="text-sm text-muted-foreground">
          {user.email}
        </p>

        <p className="text-xs uppercase tracking-wider text-primary">
          {user.role}
        </p>
      </div>
    </div>
  );
}