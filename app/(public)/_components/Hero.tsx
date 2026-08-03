import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Rent Premium Outdoor &
            <span className="text-primary"> Sports Gear</span>
          </h1>

          <p className="text-lg text-muted-foreground">
            Discover quality bicycles, camping equipment, fitness gear and more.
            Save money by renting instead of buying.
          </p>

          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/gear">Browse Gear</Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/auth/register">Become a Provider</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-3xl bg-muted p-12 text-center">
          <Image
            src="/images/image.png"
            alt="Outdoor gear"
            width={700}
            height={500}
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
