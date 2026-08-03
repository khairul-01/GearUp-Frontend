import {
  BadgeCheck,
  CreditCard,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Providers",
    description:
      "Every provider is verified to ensure quality and reliability.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Pay safely using trusted payment gateways.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Equipment",
    description:
      "Well-maintained gear for every adventure.",
  },
  {
    icon: Truck,
    title: "Flexible Rentals",
    description:
      "Rent for a day, weekend, or longer as needed.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">
          Why Choose GearUp?
        </h2>

        <p className="mt-3 text-muted-foreground">
          Everything you need for a hassle-free rental experience.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-xl border p-6"
            >
              <Icon className="mb-4 h-10 w-10 text-primary" />

              <h3 className="mb-2 text-lg font-semibold">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}