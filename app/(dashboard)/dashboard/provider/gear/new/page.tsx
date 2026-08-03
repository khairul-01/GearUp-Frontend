import GearForm from "../../_components/GearForm";
import { createGearAction } from "../../_actions/create-gear.action";
import { categoryService } from "@/services/category.service";

export default async function NewGearPage() {
  let categories;

  try {
    const response =
      await categoryService.getAll();

    categories = response.data;
  } catch (error) {
    return (
      <div className="rounded-lg border border-red-300 bg-red-50 p-6">
        <h2 className="text-lg font-semibold text-red-700">
          Failed to load categories
        </h2>

        <p className="mt-2 text-sm text-red-600">
          {error instanceof Error
            ? error.message
            : "Unexpected error"}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Add Gear
      </h1>

      <GearForm
        categories={categories}
        action={createGearAction}
        submitText="Create Gear"
      />
    </div>
  );
}