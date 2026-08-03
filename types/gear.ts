// "data": {
//         "id": "e89c29e1-f2a9-4496-8f59-ca9bd1714514",
//         "providerId": "31f94804-1478-49a9-8734-b6001553ffc4",
//         "categoryId": "d2550c09-3faf-462e-8d98-6816f904f006",
//         "name": "4 Person Camping Tent",
//         "description": "Waterproof family camping tent with ventilation windows.",
//         "brand": "Coleman",
//         "condition": "NEW",
//         "rentalPricePerDay": 350,
//         "quantity": 10,
//         "availableQuantity": 4,
//         "imageUrl": null,
//         "isAvailable": true,
//         "createdAt": "2026-07-09T18:19:57.508Z",
//         "updatedAt": "2026-07-11T11:33:00.472Z",
//         "category": {
//             "id": "d2550c09-3faf-462e-8d98-6816f904f006",
//             "name": "Camping",
//             "description": "Camping and outdoor equipment",
//             "isActive": true,
//             "createdAt": "2026-07-09T14:13:37.338Z",
//             "updatedAt": "2026-07-09T14:13:37.338Z"
//         },
//         "provider": {
//             "id": "31f94804-1478-49a9-8734-b6001553ffc4",
//             "name": "Hasan Mahmud",
//             "email": "hasan.rental@example.com",
//             "phone": "+8801912345678"
//         },
//         "reviews": [
//             {
//                 "id": "b9eeeb98-c200-4ad6-971d-1c85bada0bec",
//                 "customerId": "9f7b8c47-cab2-4349-b91b-a17b7e4582f1",
//                 "gearItemId": "e89c29e1-f2a9-4496-8f59-ca9bd1714514",
//                 "rating": 5,
//                 "comment": "Very good quality bike. Smooth riding experience.",
//                 "createdAt": "2026-07-11T16:12:05.967Z",
//                 "updatedAt": "2026-07-11T16:12:05.967Z",
//                 "customer": {
//                     "id": "9f7b8c47-cab2-4349-b91b-a17b7e4582f1",
//                     "name": "John Doe"
//                 }
//             }
//         ],
//         "totalReviews": 1,
//         "averageRating": 5
//     }


// types/gear.ts

import { Category } from "./category";
import { Review } from "./review";

export interface Gear {
    id: string;
    providerId: string;
    categoryId: string;
    name: string;
    description: string;
    brand: string;
    condition: "NEW" | "USED";
    rentalPricePerDay: number;
    quantity: number;
    availableQuantity: number;
    imageUrl: string | null;
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
    category: Category;
    provider: {
        id: string;
        name: string;
        email: string;
        phone: string;
    };
    reviews: Review[];
    totalReviews: number;
    averageRating: number;
}

// CreateGearPayload
// {
//   "categoryId": "d2550c09-3faf-462e-8d98-6816f904f006",
//   "name": "5 Person Camping Tent",
//   "description": "Waterproof 5 family camping tent with ventilation windows.",
//   "brand": "Coleman",
//   "condition": "NEW",
//   "rentalPricePerDay": 350,
//   "quantity": 10
// }

export interface CreateGearPayload {
    categoryId: string;
    name: string;
    description: string;
    brand: string;
    condition: "NEW" | "USED";
    rentalPricePerDay: number;
    quantity: number;
    imageUrl?: string;
}

// UpdateGearPayload

export interface UpdateGearPayload {
    name?: string;
    description?: string;
    brand?: string;
    condition?: "NEW" | "USED";
    rentalPricePerDay?: number;
    quantity?: number;
    availableQuantity?: number;
    isAvailable?: boolean;
    imageUrl?: string;
}