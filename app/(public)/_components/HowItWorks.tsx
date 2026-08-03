const steps = [
  {
    title: "Browse",
    description: "Find the equipment you need.",
  },
  {
    title: "Book",
    description: "Choose your rental dates.",
  },
  {
    title: "Pay",
    description: "Secure online payment.",
  },
  {
    title: "Enjoy",
    description: "Pick up and start your adventure.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <h2 className="mb-10 text-center text-3xl font-bold">
        How It Works
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-xl border p-6 text-center"
          >
            <div className="mb-4 text-3xl font-bold text-primary">
              {index + 1}
            </div>

            <h3 className="mb-2 font-semibold">
              {step.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}