import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome Back"
      description="Login to continue renting sports gear."
    >
      <LoginForm />
    </AuthCard>
  );
}