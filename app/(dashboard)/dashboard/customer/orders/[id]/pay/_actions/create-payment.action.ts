// "use server";

// import { createPaymentSchema } from "@/schemas/payment.schema";
// import { paymentService } from "@/services/payment.service";
// import { Payment } from "@/types";
// import { ActionState } from "@/types/action";

// export async function createPaymentAction(
//   prevState: ActionState<Payment>,
//   formData: FormData
// ): Promise<ActionState<Payment>> {
//   const payload = {
//     rentalOrderId: String(
//       formData.get("rentalOrderId")
//     ),
//   };

//   const validated =
//     createPaymentSchema.safeParse(payload);

//   if (!validated.success) {
//     return {
//       success: false,
//       message: "Validation failed",
//       errorDetails:
//         validated.error.flatten()
//           .fieldErrors,
//     };
//   }

//   try {
//     const response =
//       await paymentService.create(
//         validated.data
//       );

//     return {
//       success: true,
//       message: response.message,
//       data: response.data,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message:
//         error instanceof Error
//           ? error.message
//           : "Payment failed",
//     };
//   }
// }

"use server";

import { paymentService } from "@/services/payment.service";
import { Payment } from "@/types";
import { ActionState } from "@/types/action";


export async function createPaymentAction(
  _: ActionState<Payment>,
  formData: FormData
): Promise<ActionState<Payment>> {
  try {
    const rentalOrderId = String(
      formData.get("rentalOrderId")
    );

    const response =
      await paymentService.create({
        rentalOrderId,
      });

    return {
      success: true,
      message: response.message,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Payment failed",
    };
  }
}