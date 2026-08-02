import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-96 w-full rounded-xl" />

      <Skeleton className="h-10 w-72" />

      <Skeleton className="h-40 w-full" />
    </div>
  );
}