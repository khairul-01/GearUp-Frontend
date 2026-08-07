import { User } from "@/types";
import UpdateUserStatusDialog from "./UpdateUserStatusDialog";

interface Props {
  users: User[];
}

export default function UsersTable({ users }: Props) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-card shadow-sm">
      <table className="min-w-[900px] w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left border-l">Name</th>

            <th className="p-3 text-left border-l">Email</th>

            <th className="p-3 text-left border-l">Phone</th>

            <th className="p-3 text-left border-l">Role</th>

            <th className="p-3 text-left border-l">Status</th>

            <th className="p-3 text-left border-l">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-3 border-l">{user.name}</td>

              <td className="p-3 border-l">{user.email}</td>

              <td className="p-3 border-l">{user.phone}</td>

              <td className="p-3 border-l">{user.role}</td>
              <td className="p-3 border-l">{user.status}</td>
              <td className="p-3 border-l">
                <UpdateUserStatusDialog 
                id={user.id} 
                status={user.status} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
