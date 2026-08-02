import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container py-10">
      <Skeleton className="mb-8 h-10 w-60" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map(
          (_, index) => (
            <Skeleton
              key={index}
              className="h-80"
            />
          )
        )}
      </div>
    </section>
  );
}