// import Link from "next/link";

// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="mx-auto max-w-7xl px-4 py-24">
//       <div className="grid items-center gap-12 lg:grid-cols-2">
//         <div className="space-y-6">
//           <h1 className="text-5xl font-extrabold leading-tight">
//             Rent Premium Outdoor &
//             <span className="text-primary"> Sports Gear</span>
//           </h1>

//           <p className="text-lg text-muted-foreground">
//             Discover quality bicycles, camping equipment, fitness gear and more.
//             Save money by renting instead of buying.
//           </p>

//           <div className="flex gap-4">
//             <Button asChild size="lg">
//               <Link href="/gear">Browse Gear</Link>
//             </Button>

//             <Button asChild variant="outline" size="lg">
//               <Link href="/auth/register">Become a Provider</Link>
//             </Button>
//           </div>
//         </div>

//         <div className="rounded-3xl bg-muted p-12 text-center">
//           <Image
//             src="https://uwm.edu/urec/wp-content/uploads/sites/659/2023/11/Untitled-e1700690190308-1024x683.png"
//             alt="Outdoor gear"
//             width={700}
//             height={500}
//             className="rounded-3xl object-cover"
//             priority
//             loading="eager"
//             sizes="(max-width:768px) 100vw, 700px"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="grid items-center gap-10 py-10 md:grid-cols-2 md:py-16 px-4">
      <div className="space-y-6">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            GearUp Rental
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Rent Premium Outdoor & Sports Gear
          </h1>

          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            Discover quality bicycles, camping equipment, fitness gear and
            more. Save money by renting instead of buying.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/gear">Browse Gear</Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/auth/register">Become a Provider</Link>
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-muted">
        <Image
          src="https://uwm.edu/urec/wp-content/uploads/sites/659/2023/11/Untitled-e1700690190308-1024x683.png"
          alt="Outdoor gear"
          width={700}
          height={500}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}