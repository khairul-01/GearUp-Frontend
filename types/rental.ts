//  {
//                 "id": "1d674550-5810-431e-a1da-8f0c2aded81a",
//                 "customerId": "9f7b8c47-cab2-4349-b91b-a17b7e4582f1",
//                 "gearItemId": "e89c29e1-f2a9-4496-8f59-ca9bd1714514",
//                 "quantity": 2,
//                 "rentalStartDate": "2026-08-01T00:00:00.000Z",
//                 "rentalEndDate": "2026-08-05T00:00:00.000Z",
//                 "totalAmount": 2800,
//                 "status": "PAID",
//                 "createdAt": "2026-07-10T15:18:46.926Z",
//                 "updatedAt": "2026-07-10T15:18:46.926Z",
//                 "gearItem": {
//                     "id": "e89c29e1-f2a9-4496-8f59-ca9bd1714514",
//                     "providerId": "31f94804-1478-49a9-8734-b6001553ffc4",
//                     "categoryId": "d2550c09-3faf-462e-8d98-6816f904f006",
//                     "name": "4 Person Camping Tent",
//                     "description": "Waterproof family camping tent with ventilation windows.",
//                     "brand": "Coleman",
//                     "condition": "NEW",
//                     "rentalPricePerDay": 350,
//                     "quantity": 10,
//                     "availableQuantity": 4,
//                     "imageUrl": null,
//                     "isAvailable": true,
//                     "createdAt": "2026-07-09T18:19:57.508Z",
//                     "updatedAt": "2026-07-11T11:33:00.472Z",
//                     "category": {
//                         "id": "d2550c09-3faf-462e-8d98-6816f904f006",
//                         "name": "Camping",
//                         "description": "Camping and outdoor equipment",
//                         "isActive": true,
//                         "createdAt": "2026-07-09T14:13:37.338Z",
//                         "updatedAt": "2026-07-09T14:13:37.338Z"
//                     },
//                     "provider": {
//                         "id": "31f94804-1478-49a9-8734-b6001553ffc4",
//                         "name": "Hasan Mahmud",
//                         "email": "hasan.rental@example.com",
//                         "phone": "+8801912345678"
//                     }
//                 },
//                 "payment": null
//             },

// types/rental.ts

import { Gear } from "./gear";
import { User } from "./user";

export interface Rental {
  id: string;
  customerId: string;
  gearItemId: string;
  quantity: number;
  rentalStartDate: string;
  rentalEndDate: string;
  totalAmount: number;
  status:
    | "PLACED"
    | "CONFIRMED"
    | "PAID"
    | "PICKED_UP"
    | "RETURNED"
    | "CANCELLED";

  createdAt: string;

  updatedAt: string;
  gearItem: Gear;
  provider: User;
}