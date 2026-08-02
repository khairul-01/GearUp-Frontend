import RegisterForm from "./_components/RegisterForm";

export default function RegisterPage() {
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