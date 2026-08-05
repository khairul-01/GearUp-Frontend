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
    <div className="rounded-xl border">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Name</th>

            <th>Description</th>

            <th>Total Gear</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="border-b">
              <td className="p-4 font-medium">{category.name}</td>

              <td>{category.description}</td>

              <td>{category.gearItemCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
