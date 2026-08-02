import Image from "next/image";

interface Props {
  image: string | null;
  name: string;
}

export default function GearGallery({
  image,
  name,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border">
      <div className="relative aspect-square">
        <Image
          src={
            image ??
            "/images/placeholder.png"
          }
          alt={name}
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}