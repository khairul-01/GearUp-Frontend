// {
//             "id": "2c4d658f-a5e6-45cc-9d29-6175d36f4cbc",
//             "rentalOrderId": "b3c2dcc6-88a8-410c-a49a-65103dfc6a51",
//             "transactionId": "pi_3Ts1R0C7qtcuk5Fr0w2NuUGh",
//             "checkoutSessionId": "cs_test_a1ACgqHYBuMCtGGcWTkiiTBEi465ouIU042GjNlIYJ2fomqlHtdVX6TUDG",
//             "checkoutUrl": "https://checkout.stripe.com/c/pay/cs_test_a1ACgqHYBuMCtGGcWTkiiTBEi465ouIU042GjNlIYJ2fomqlHtdVX6TUDG#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdicGRmZGhqaWBTZHdsZGtxJz8nZmprcXdqaScpJ2R1bE5gfCc%2FJ3VuWnFgdnFaMDRRdWpsUEYydHFmcG4wQ3dNX1YzMTY1M0hjMzx0dUNNRjZJZGBmZmFoMURsNW9xUGQ0NXJmczZJTFUzVHxBQlZ1RkFDTHB0cnJAfUNhfXB3Z09kVnN2c0c1NTd8a102Rml9JyknY3dqaFZgd3Ngdyc%2FcXdwYCknZ2RmbmJ3anBrYUZqaWp3Jz8nJmNjY2NjYycpJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
//             "amount": "5600",
//             "provider": "STRIPE",
//             "method": "CARD",
//             "status": "COMPLETED",
//             "paidAt": "2026-07-11T13:59:20.467Z",
//             "createdAt": "2026-07-11T13:38:22.283Z",
//             "updatedAt": "2026-07-11T13:59:20.486Z",
//             "rentalOrder": {
//                 "id": "b3c2dcc6-88a8-410c-a49a-65103dfc6a51",
//                 "customerId": "9f7b8c47-cab2-4349-b91b-a17b7e4582f1",
//                 "gearItemId": "ea60f7f8-10f1-4fa7-a9c6-aa1fa992c18e",
//                 "quantity": 2,
//                 "rentalStartDate": "2026-08-01T00:00:00.000Z",
//                 "rentalEndDate": "2026-08-05T00:00:00.000Z",
//                 "totalAmount": 5600,
//                 "status": "RETURNED",
//                 "createdAt": "2026-07-11T11:35:47.254Z",
//                 "updatedAt": "2026-07-15T14:17:21.265Z",
//                 "gearItem": {
//                     "id": "ea60f7f8-10f1-4fa7-a9c6-aa1fa992c18e",
//                     "providerId": "31f94804-1478-49a9-8734-b6001553ffc4",
//                     "categoryId": "b679d7ae-cead-49d9-8ae1-821fd10d5508",
//                     "name": "Mountain Bike XTR Pro",
//                     "description": "Professional mountain bike suitable for off-road adventures.",
//                     "brand": "Trek",
//                     "condition": "NEW",
//                     "rentalPricePerDay": 700,
//                     "quantity": 8,
//                     "availableQuantity": 4,
//                     "imageUrl": "https://example.com/images/bike.jpg",
//                     "isAvailable": true,
//                     "createdAt": "2026-07-09T17:53:29.551Z",
//                     "updatedAt": "2026-07-15T14:17:21.589Z",
//                     "category": {
//                         "id": "b679d7ae-cead-49d9-8ae1-821fd10d5508",
//                         "name": "Cycling",
//                         "description": "Bicycles, helmets, cycling shoes and accessories.",
//                         "isActive": true,
//                         "createdAt": "2026-07-09T14:17:54.619Z",
//                         "updatedAt": "2026-07-09T14:17:54.619Z"
//                     }
//                 }
//             }
//         },

// CreatePaymentPayload
// {
//   "rentalOrderId": "2d67a5f0-f268-4b22-920c-b2a4c9c1869c"
// }

// types/payment.ts

import { Rental } from "./rental";

export interface Payment {
    id: string;
    rentalOrderId: string;
    transactionId: string;
    checkoutSessionId: string;
    checkoutUrl: string;
    amount: string;
    provider: "STRIPE" | "PAYPAL";
    method: "CARD" | "BANK_TRANSFER";
    status: "PENDING" | "COMPLETED" | "FAILED";
    paidAt: string | null;
    createdAt: string;
    updatedAt: string;
    rentalOrder: Rental;
}

export interface CreatePaymentPayload {
    rentalOrderId: string;
}