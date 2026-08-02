import { useTransition } from "react";
import { Button } from "../ui/button";
import { logoutAction } from "@/app/_action/logout.action";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const [pending, startTransition] = useTransition();

  return (
    <Button
      variant="outline"
      size="sm"
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          await logoutAction();
        })
      }
    >
      <LogOut className="mr-2 h-4 w-4" />

      {pending ? "Signing out..." : "Logout"}
    </Button>
  );
}