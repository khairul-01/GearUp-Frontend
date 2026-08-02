import { Card } from "@/components/ui/card";

interface Props {
  provider: {
    name: string;
    email: string;
    phone: string;
  };
}

export default function ProviderCard({
  provider,
}: Props) {
  return (
    <Card className="p-6">
      <h2 className="mb-4 text-lg font-semibold">
        Provider
      </h2>

      <div className="space-y-2">
        <p>{provider.name}</p>

        <p>{provider.email}</p>

        <p>{provider.phone}</p>
      </div>
    </Card>
  );
}