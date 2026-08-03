interface Props {
  title: string;
  description?: string;
}

export default function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-lg border py-16 text-center">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}