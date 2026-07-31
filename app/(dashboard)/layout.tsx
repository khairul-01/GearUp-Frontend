type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <section className="flex min-h-screen">
      Dashboard Sidebar

      <main className="flex-1">
        {children}
      </main>
    </section>
  );
}