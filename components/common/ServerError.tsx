interface Props {
  message: string;
}

export default function ServerError({
  message,
}: Props) {
  return (
    <div className="rounded-lg border border-destructive bg-destructive/10 p-6">
      <h2 className="text-lg font-semibold text-destructive">
        Something went wrong
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        {message}
      </p>
    </div>
  );
}