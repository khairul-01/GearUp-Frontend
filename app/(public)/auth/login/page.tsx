import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "./_components/LoginForm";
import { getCurrentUser } from "@/services/auth/get-current-user";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }
  return (
    <AuthCard
      title="Welcome Back"
      description="Login to continue renting sports gear."
    >
      <LoginForm />
    </AuthCard>
  );
}
