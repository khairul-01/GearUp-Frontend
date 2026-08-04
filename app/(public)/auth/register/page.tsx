import { redirect } from "next/navigation";
import RegisterForm from "./_components/RegisterForm";
import { getCurrentUser } from "@/services/auth/get-current-user";

export default async function RegisterPage() {
  // give permission to be as a provider
  const user = await getCurrentUser();
  // check if user is already a provider by role checking
  if (user?.role === "PROVIDER") {
    redirect("/");
  }
  return (
    <section className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-md items-center px-4">
      <div className="w-full rounded-xl border bg-card p-6 shadow-sm">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="text-muted-foreground">
            Rent sports gear in minutes.
          </p>
        </div>

        <RegisterForm />
      </div>
    </section>
  );
}