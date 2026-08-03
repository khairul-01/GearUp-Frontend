"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="space-y-4 rounded-lg border border-red-300 p-6">
      <h2 className="text-xl font-bold text-red-600">
        Failed to load orders
      </h2>

      <p>{error.message}</p>

      <button
        onClick={reset}
        className="rounded bg-primary px-4 py-2 text-primary-foreground"
      >
        Try Again
      </button>
    </div>
  );
}