/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-16 space-y-20">

      <section className="text-center">
        <h1 className="text-5xl font-bold">
          About GearUp
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
          GearUp is a rental marketplace where customers can rent outdoor,
          sports, and adventure equipment from trusted providers.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-3">

        <div className="rounded-xl border p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>

          <p>
            Make premium outdoor gear affordable and accessible.
          </p>
        </div>

        <div className="rounded-xl border p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Our Vision
          </h2>

          <p>
            Become Bangladesh's largest gear rental platform.
          </p>
        </div>

        <div className="rounded-xl border p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Us
          </h2>

          <p>
            Verified providers, secure payment, affordable pricing and quality gear.
          </p>
        </div>

      </section>
    </main>
  );
}