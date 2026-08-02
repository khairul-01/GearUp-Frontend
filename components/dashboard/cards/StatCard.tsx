import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  description,
}: Props) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-6">
        <div className="space-y2">
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="text-3xl font-bold">
            {value}
          </h2>

          {description && (
            <p className="text-xs text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className="rounded-full bg-primary/10 p-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}