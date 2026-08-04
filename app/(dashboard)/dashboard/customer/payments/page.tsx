import EmptyState from "@/components/dashboard/cards/EmptyState";

import { paymentService } from "@/services/payment.service";
import PaymentTable from "./_components/PaymentTable";

export default async function CustomerPaymentsPage() {
  const response =
    await paymentService.getMyPayments();

  const payments = response.data;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Payment History
        </h1>

        <p className="text-muted-foreground">
          View all your payments.
        </p>
      </div>

      {payments.length === 0 ? (
        <EmptyState
          title="No payments yet"
          description="Your completed payments will appear here."
        />
      ) : (
        <PaymentTable payments={payments} />
      )}
    </div>
  );
}