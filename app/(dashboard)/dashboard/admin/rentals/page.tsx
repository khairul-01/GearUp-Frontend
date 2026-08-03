import { adminService } from "@/services/admin.service";
import RentalsTable from "./_components/RentalTable";
export default async function AdminRentalsPage() {
  const response =
    await adminService.getRentals();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Rental Orders
      </h1>

      <RentalsTable
        rentals={response.data}
      />
    </div>
  );
}