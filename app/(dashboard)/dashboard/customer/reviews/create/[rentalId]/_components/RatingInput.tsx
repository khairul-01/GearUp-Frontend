"use client";

import { Star } from "lucide-react";

interface Props {
  value: number;
  onChange(value: number): void;
}

export default function RatingInput({
  value,
  onChange,
}: Props) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          onClick={() =>
            onChange(star)
          }
          className={`h-7 w-7 cursor-pointer ${
            star <= value
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}