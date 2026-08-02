import { PackageOpen } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="flex h-72 flex-col items-center justify-center rounded-xl border border-dashed">
      <PackageOpen className="mb-4 h-12 w-12 text-muted-foreground" />

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-center text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}