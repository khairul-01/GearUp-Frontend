import CategoryForm from "./_components/CategoryForm";

export default function CategoryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Create Category
      </h1>

      <CategoryForm />
    </div>
  );
}