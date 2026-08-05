import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">

      <h1 className="mb-10 text-center text-5xl font-bold">
        Contact Us
      </h1>

      <div className="grid gap-10 md:grid-cols-2">

        <div className="space-y-6">

          <div>
            <h2 className="font-semibold">Email</h2>
            <p>support@gearup.com</p>
          </div>

          <div>
            <h2 className="font-semibold">Phone</h2>
            <p>+8801700000000</p>
          </div>

          <div>
            <h2 className="font-semibold">Address</h2>
            <p>Dhaka, Bangladesh</p>
          </div>

        </div>

        <form className="space-y-5">

          <Input placeholder="Name" />

          <Input placeholder="Email" />

          <Textarea
            placeholder="Message"
            className="min-h-40"
          />

          <Button className="w-full">
            Send Message
          </Button>

        </form>

      </div>
    </main>
  );
}