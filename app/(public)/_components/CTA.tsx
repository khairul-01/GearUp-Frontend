import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
        <h2 className="mb-4 text-4xl font-bold">
          Ready for Your Next Adventure?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl">
          Browse thousands of rental items from trusted providers and start exploring today.
        </p>

        <div className="flex justify-center gap-4">
          <Button
            asChild
            variant="secondary"
            size="lg"
          >
            <Link href="/gear">
              Browse Gear
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
          >
            <Link href="/auth/register">
              Become a Provider
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}