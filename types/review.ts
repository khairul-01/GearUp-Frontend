// types/review.ts

// types/review.ts

// {
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

export interface Review {
    id: string;
    customerId: string;
    gearItemId: string;
    rating: number;
    comment: string;
    createdAt: string;
    updatedAt: string;
    customer: {
        id: string;
        name: string;
    };
}
