import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p>Page not found.</p>

      <Button asChild>
        <Link href="/">
          Go Home
        </Link>
      </Button>
    </div>
  );
}