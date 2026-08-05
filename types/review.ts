export interface Review {
  id: string;
  customerId: string;
  gearItemId: string;

  rating: number;
  comment?: string;

  createdAt: string;
  updatedAt: string;

  customer: {
    id: string;
    name: string;
  };

  gearItem: {
    id: string;
    name: string;
    brand: string;
  };
}

export interface CreateReviewPayload {
  rentalOrderId: string;
  rating: number;
  comment?: string;
}