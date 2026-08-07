import { providerService } from "@/services/provider.service";
import ProviderOrdersTable from "./_components/ProviderOrdersTable";

export default async function ProviderOrdersPage() {
  const response = await providerService.getOrders();

  return (
    <div className="space-y-6">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Incoming Orders</h1>

        <p className="text-muted-foreground">
          Manage customer rental requests and update order statuses.
        </p>
      </div>

      <ProviderOrdersTable orders={response.data} />
    </div>
  );
}

// import { providerService } from "@/services/provider.service";
// import OrderStatusForm from "./_components/OrderStatusForm";

// export default async function ProviderOrdersPage() {
//   const response =
//     await providerService.getOrders();

//   const orders = response.data;
// // console.log(orders, "orders")
//   return (
//     <div className="space-y-8">
//       <h1 className="text-3xl font-bold">
//         Provider Orders
//       </h1>

//       <div className="overflow-x-auto rounded-xl border">
//         <table className="w-full">
//           <thead>
//             <tr className="border-b bg-muted">
//               <th className="p-4 text-left">
//                 Customer
//               </th>

//               <th className="text-left">
//                 Gear
//               </th>

//               <th className="text-left">
//                 Quantity
//               </th>

//               <th className="text-left">
//                 Rental
//               </th>

//               <th className="text-left">
//                 Status
//               </th>

//               <th className="p-4 text-center">
//                 Action
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {orders.map((order) => (
//               <tr
//                 key={order.id}
//                 className="border-b"
//               >
//                 <td className="p-4">
//                   {order.customer.name}
//                 </td>

//                 <td>
//                   {order.gearItem.name}
//                 </td>

//                 <td>
//                   {order.quantity}
//                 </td>

//                 <td>
//                   {new Date(
//                     order.rentalStartDate
//                   ).toLocaleDateString()}
//                 </td>

//                 <td>{order.status}</td>

//                 <td className="p-4">
//                   <OrderStatusForm
//                     order={order}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
