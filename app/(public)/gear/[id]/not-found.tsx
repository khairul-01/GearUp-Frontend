import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="mb-4 text-4xl font-bold">
        Gear Not Found
      </h1>

      <Button asChild>
        <Link href="/gear">
          Browse Gear
        </Link>
      </Button>
    </div>
  );
}