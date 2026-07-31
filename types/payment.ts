// adf: {
//             "id": "b3c2dcc6-88a8-410c-a49a-65103dfc6a51",
//             "customerId": "9f7b8c47-cab2-4349-b91b-a17b7e4582f1",
//             "gearItemId": "ea60f7f8-10f1-4fa7-a9c6-aa1fa992c18e",
//             "quantity": 2,
//             "rentalStartDate": "2026-08-01T00:00:00.000Z",
//             "rentalEndDate": "2026-08-05T00:00:00.000Z",
//             "totalAmount": 5600,
//             "status": "RETURNED",
//             "createdAt": "2026-07-11T11:35:47.254Z",
//             "updatedAt": "2026-07-15T14:17:21.265Z",
//             "gearItem": {
//                 "id": "ea60f7f8-10f1-4fa7-a9c6-aa1fa992c18e",
//                 "providerId": "31f94804-1478-49a9-8734-b6001553ffc4",
//                 "categoryId": "b679d7ae-cead-49d9-8ae1-821fd10d5508",
//                 "name": "Mountain Bike XTR Pro",
//                 "description": "Professional mountain bike suitable for off-road adventures.",
//                 "brand": "Trek",
//                 "condition": "NEW",
//                 "rentalPricePerDay": 700,
//                 "quantity": 8,
//                 "availableQuantity": 4,
//                 "imageUrl": "https://example.com/images/bike.jpg",
//                 "isAvailable": true,
//                 "createdAt": "2026-07-09T17:53:29.551Z",
//                 "updatedAt": "2026-07-15T14:17:21.589Z",
//                 "category": {
//                     "id": "b679d7ae-cead-49d9-8ae1-821fd10d5508",
//                     "name": "Cycling",
//                     "description": "Bicycles, helmets, cycling shoes and accessories.",
//                     "isActive": true,
//                     "createdAt": "2026-07-09T14:17:54.619Z",
//                     "updatedAt": "2026-07-09T14:17:54.619Z"
//                 },
//                 "provider": {
//                     "id": "31f94804-1478-49a9-8734-b6001553ffc4",
//                     "name": "Hasan Mahmud",
//                     "email": "hasan.rental@example.com",
//                     "phone": "+8801912345678"
//                 }
//             }
//         }

import { Gear } from "./gear";


// types/payment.ts

export interface Payment {
    id: string;
    customerId: string;
    gearItemId: string;
    quantity: number;
    rentalStartDate: string;
    rentalEndDate: string;
    totalAmount: number;
    status:
        | "PENDING"
        | "COMPLETED"
        | "FAILED"
        | "CANCELLED";
    createdAt: string;
    updatedAt: string;
    gearItem: Gear;
    provider: {
        id: string;
        name: string;
        email: string;
        phone: string;
    };
}

// CreatePaymentPayload
// {
//   "rentalOrderId": "2d67a5f0-f268-4b22-920c-b2a4c9c1869c"
// }

export interface CreatePaymentPayload {
    rentalOrderId: string;
}