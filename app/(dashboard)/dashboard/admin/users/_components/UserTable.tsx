import { User } from "@/types";
import UpdateUserStatusDialog from "./UpdateUserStatusDialog";

interface Props {
  users: User[];
}

export default function UsersTable({ users }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">Name</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Role</th>

            <th>Status</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-3">{user.name}</td>

              <td>{user.email}</td>

              <td>{user.phone}</td>

              <td>{user.role}</td>
              <td>{user.status}</td>
              <td >
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
