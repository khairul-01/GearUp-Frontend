import { categoryService } from "@/services/category.service";
import CategoryForm from "./_components/CategoryForm";
import CategoryTable from "./_components/CategoryTable";

export default async function CategoryPage() {
  const response = await categoryService.getAll();
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-between">
        <h1 className="text-3xl font-bold">Create Category</h1>

        <CategoryForm />
      </div>

      <div className=" mt-6">
        <h1 className="text-3xl font-bold">Categories</h1>
      </div>
        <CategoryTable categories={response.data} />
    </div>
  );
}
