import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/services/auth/get-current-user";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return (
    <>
      <Navbar />

      <div className="flex-1 py-6">
        <Container>
          <main className="grid min-h-screen lg:grid-cols-2">
            <section className="hidden bg-primary text-primary-foreground lg:flex lg:flex-col lg:justify-center lg:px-16">
              <h1 className="text-5xl font-bold">GearUp</h1>

              <p className="mt-6 max-w-md text-lg opacity-90">
                Rent quality outdoor and sports gear with ease. Discover
                equipment from trusted providers across the platform.
              </p>
            </section>

            <section className="flex items-center justify-center px-4 py-10">
              <div className="w-full max-w-md">{children}</div>
            </section>
          </main>
        </Container>
      </div>

      <Footer />
    </>
  );
}
