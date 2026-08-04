// "use server";

// import { revalidatePath } from "next/cache";

// import { providerService } from "@/services/provider.service";

// export async function updateOrderAction(
//   id: string,
//   status: string
// ) {
//   await providerService.updateOrder(id, {
//     status: status as
//       | "PLACED"
//       | "CONFIRMED"
//       | "PAID"
//       | "PICKED_UP"
//       | "RETURNED"
//       | "CANCELLED",
//   });

//   revalidatePath(
//     "/dashboard/provider/orders"
//   );
// }


"use server";

import { revalidatePath } from "next/cache";

import { providerService } from "@/services/provider.service";

import { ActionState } from "@/types/action";

export async function updateOrderAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    const id = String(
      formData.get("id")
    );

    const status = String(
      formData.get("status")
    );

    await providerService.updateOrder(id, {
    status: status as
      | "PLACED"
      | "CONFIRMED"
      | "PAID"
      | "PICKED_UP"
      | "RETURNED"
      | "CANCELLED",
  });

    revalidatePath(
      "/dashboard/provider/orders"
    );

    return {
      success: true,
      message: "Updated successfully",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Update failed",
    };
  }
}