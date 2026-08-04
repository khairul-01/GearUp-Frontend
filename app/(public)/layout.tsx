import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-8rem)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <Footer />

      {/* <Navbar />

      <main className="min-h-screen">
        {children}
      </main>

      <Footer /> */}
    </>
  );
}