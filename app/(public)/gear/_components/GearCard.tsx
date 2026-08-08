import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gear } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  gear: Gear;
}

export default function GearCard({ gear }: Props) {
  const image = gear.imageUrl || "/images/placeholder.png";
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={gear.name}
          fill
          sizes="(max-width:640px) 100vw,
                  (max-width:1024px) 50vw,
                  33vw"
          className="object-cover"
        />
      </div>

      <div className="space-y-3 p-5">
        <Badge>{gear.category.name}</Badge>

        <h2 className="line-clamp-1 text-lg font-semibold">{gear.name}</h2>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {gear.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-bold text-primary">
            ${gear.rentalPricePerDay}/day
          </span>

          <Link href={`/gear/${gear.id}`}>
            <Button size="sm">View</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
