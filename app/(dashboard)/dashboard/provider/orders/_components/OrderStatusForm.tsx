// "use client";

// import { useActionState } from "react";

// import { Button } from "@/components/ui/button";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { ActionState } from "@/types/action";
// import { Rental } from "@/types";

// import { updateOrderAction } from "../_actions/update-order.action";

// const initialState: ActionState = {
//   success: false,
//   message: "",
// };

//  const nextStatuses: Record<Rental["status"], Rental["status"][]> = {
//       PLACED: ["CONFIRMED"],
//       CONFIRMED: [],
//       PAID: ["RETURNED"],
//       PICKED_UP: ["RETURNED"],
//       RETURNED: [],
//       CANCELLED: [],
//     };

// interface Props {
//   order: Rental;
// }

// export default function OrderStatusForm({
//   order,
// }: Props) {
//   const [state, formAction, pending] =
//     useActionState(
//       updateOrderAction,
//       initialState
//     );

//   return (
//     <form
//       action={formAction}
//       className="flex gap-2"
//     >
//       <input
//         type="hidden"
//         name="id"
//         value={order.id}
//       />

//       <Select
//         name="status"
//         defaultValue={order.status}
//       >
//         <SelectTrigger className="w-44">
//           <SelectValue />
//         </SelectTrigger>

//         <SelectContent>
//           {nextStatuses[order.status].map((status) => (
//           <SelectItem key={status} value={status}>
//             {status}
//           </SelectItem>
//         ))}
//         </SelectContent>
//       </Select>

//       <Button
//         size="sm"
//         disabled={pending}
//       >
//         Save
//       </Button>
//     </form>
//   );
// }

"use client";

import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

import { Rental } from "@/types";

import { ActionState } from "@/types/action";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateOrderAction } from "../_actions/update-order.action";

const initialState: ActionState = {
  success: false,
  message: "",
};

const nextStatuses: Record<
  Rental["status"],
  Rental["status"][]
> = {
  PLACED: ["CONFIRMED"],
  CONFIRMED: [],
  PAID: ["RETURNED"],
  PICKED_UP: ["RETURNED"],
  RETURNED: [],
  CANCELLED: [],
};

interface Props {
  order: Rental;
}

export default function OrderStatusForm({
  order,
}: Props) {
  const [status, setStatus] =
    useState(order.status);

  const [state, formAction, pending] =
    useActionState(
      updateOrderAction,
      initialState
    );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  const options =
    nextStatuses[order.status];

  if (options.length === 0) {
    return (
      <Button
        size="sm"
        disabled
      >
        No Action Available
      </Button>
    );
  }

  return (
    <form action={formAction}>
      <input
        type="hidden"
        name="id"
        value={order.id}
      />

      <input
        type="hidden"
        name="status"
        value={status}
      />

      <div className="flex gap-2">
        <Select
          value={status}
          onValueChange={(value) =>
            setStatus(
              value as Rental["status"]
            )
          }
        >
          <SelectTrigger className="w-44">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            {options.map((item) => (
              <SelectItem
                key={item}
                value={item}
              >
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          size="sm"
          disabled={pending}
        >
          Save
        </Button>
      </div>
    </form>
  );
}