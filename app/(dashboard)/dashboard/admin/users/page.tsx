import { adminService } from "@/services/admin.service";
import UsersTable from "./_components/UserTable";

export default async function UsersPage() {
  const response =
    await adminService.getUsers();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Users
      </h1>

      <UsersTable
        users={response.data}
      />
    </div>
  );
}