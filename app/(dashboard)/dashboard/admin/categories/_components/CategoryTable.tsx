import EmptyState from "@/components/common/EmptyState";
import { Category } from "@/types";

interface Props {
  categories: Category[];
}

export default function CategoryTable({ categories }: Props) {
  if (!categories.length) {
    return (
      <EmptyState
        title="No Categories"
        description="Create your first category."
      />
    );
  }
  return (
    <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
      <table className="min-w-[900px] w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left border-l">Name</th>

            <th className="p-4 border-l">Description</th>

            <th className="p-4 border-l">Total Gear</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-b">
              <td className="p-4 font-medium border-l">{category.name}</td>

              <td className="p-4 border-l">{category.description}</td>

              <td className="p-4 border-l">{category.gearItemCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
