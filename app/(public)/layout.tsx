import Container from "@/components/layout/Container";
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

       <main className="flex-1 py-8">
        <Container>
          {children}
        </Container>
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