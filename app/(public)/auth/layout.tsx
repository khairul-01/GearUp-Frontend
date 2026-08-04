// import { getCurrentUser } from "@/services/auth/get-current-user";
// import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  // const user = await getCurrentUser();

  // if (user) {
  //   redirect("/");
  // }
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/20 px-4">
      {children}
    </main>
  );
}
