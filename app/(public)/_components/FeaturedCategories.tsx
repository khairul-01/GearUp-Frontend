import Link from "next/link";

const categories = [
  "Cycling",
  "Camping",
  "Fitness",
  "Water Sports",
];

export default function FeaturedCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">
          Browse by Category
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category}
            href="/gear"
            className="rounded-xl border p-10 text-center transition hover:border-primary"
          >
            <h3 className="text-xl font-semibold">
              {category}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}