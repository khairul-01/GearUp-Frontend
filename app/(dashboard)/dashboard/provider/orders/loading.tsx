import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-4">

      <Skeleton className="h-10 w-56" />

      {[...Array(6)].map((_, i) => (
        <Skeleton
          key={i}
          className="h-24 w-full rounded-xl"
        />
      ))}

    </div>
  );
}