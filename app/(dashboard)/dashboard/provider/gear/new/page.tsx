import GearForm from "../../_components/GearForm";
import { createGearAction } from "../../_actions/create-gear.action";
import { categoryService } from "@/services/category.service";

export default async function NewGearPage() {
  const response =
    await categoryService.getAll();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Add Gear
      </h1>

      <GearForm
        categories={response.data}
        action={createGearAction}
        submitText="Create Gear"
      />
    </div>
  );
}