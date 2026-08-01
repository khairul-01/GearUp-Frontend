import AuthCard from "@/components/auth/AuthCard";
import RegisterForm from "./_components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthCard
      title="Create Account"
      description="Create your GearUp account."
    >
      <RegisterForm />
    </AuthCard>
  );
}