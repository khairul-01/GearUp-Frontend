interface Props {
  status: string;
}

export default function OrderStatusBadge({
  status,
}: Props) {
  const colors: Record<string, string> = {
    PLACED:
      "bg-gray-100 text-gray-700",

    CONFIRMED:
      "bg-blue-100 text-blue-700",

    PAID:
      "bg-green-100 text-green-700",

    PICKED_UP:
      "bg-yellow-100 text-yellow-700",

    RETURNED:
      "bg-emerald-100 text-emerald-700",

    CANCELLED:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}