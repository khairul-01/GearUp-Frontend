import { Badge } from "@/components/ui/badge";
import { Gear } from "@/types";

export default function GearInfo({
  gear,
}: {
  gear: Gear;
}) {
  return (
    <div className="space-y-6">
      <div>
        <Badge>
          {gear.category.name}
        </Badge>

        <h1 className="mt-3 text-4xl font-bold">
          {gear.name}
        </h1>

        <p className="mt-2 text-muted-foreground">
          {gear.brand}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 rounded-xl border p-5">
        <Info
          title="Condition"
          value={gear.condition}
        />

        <Info
          title="Available"
          value={String(
            gear.availableQuantity
          )}
        />

        <Info
          title="Reviews"
          value={String(
            gear.totalReviews
          )}
        />

        <Info
          title="Rating"
          value={`${gear.averageRating}/5`}
        />
      </div>

      <div>
        <p className="text-muted-foreground">
          Description
        </p>

        <p className="mt-2 leading-7">
          {gear.description}
        </p>
      </div>

      <h2 className="text-4xl font-bold text-primary">
        ${gear.rentalPricePerDay}
        <span className="text-base font-normal">
          /day
        </span>
      </h2>
    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <p className="font-semibold">
        {value}
      </p>
    </div>
  );
}