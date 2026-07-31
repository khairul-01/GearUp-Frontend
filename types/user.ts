import { UserRole } from "@/constants";

// "user": {
//             "id": "9f7b8c47-cab2-4349-b91b-a17b7e4582f1",
//             "name": "John Doe",
//             "email": "john.doe@gmail.com",
//             "phone": "01700000001",
//             "profileImage": null,
//             "role": "CUSTOMER",
//             "status": "ACTIVE",
//             "createdAt": "2026-07-09T13:51:14.060Z",
//             "updatedAt": "2026-07-09T13:51:14.060Z"
//         }
    
export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    profileImage: string | null;
    role: UserRole;
    status: "ACTIVE" | "INACTIVE";
    createdAt: string;
    updatedAt: string;
};

// // UpdateUserPayload
// {
//   "status": "ACTIVE"
// }

export interface UpdateUserPayload {
    status?: "ACTIVE" | "INACTIVE";
}
