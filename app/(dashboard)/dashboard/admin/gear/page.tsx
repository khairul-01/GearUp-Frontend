import { adminService } from "@/services/admin.service";
import GearTable from "./_components/GearTable";
export default async function AdminGearPage() {
  const response = await adminService.getGear();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        All Gear
      </h1>

      <GearTable gears={response.data} />
    </div>
  );
}