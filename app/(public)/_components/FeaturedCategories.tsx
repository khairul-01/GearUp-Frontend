import { categoryService } from "@/services/category.service";
import Link from "next/link";

// const categories = [
//   "Cycling",
//   "Camping",
//   "Fitness",
//   "Water Sports",
// ];

export default async function FeaturedCategories() {
  // get categories from backend 
  const categories = await categoryService.getAll();
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">
          Browse by Category
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.data.map((category) => (
          <Link
            key={category.id}
            href={`/gear?categoryId=${category.id}`}
            className="rounded-xl border p-10 text-center transition hover:border-primary"
          >
            <h3 className="text-xl font-semibold">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}