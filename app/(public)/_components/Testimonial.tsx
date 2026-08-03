const testimonials = [
  {
    name: "Ayesha Rahman",
    review:
      "Booking was simple and the equipment was in excellent condition.",
  },
  {
    name: "Sabbir Hasan",
    review:
      "Great prices and helpful providers. Highly recommended!",
  },
  {
    name: "Nusrat Jahan",
    review:
      "Perfect platform for weekend camping trips.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border p-6"
          >
            <p className="mb-6 italic text-muted-foreground">
              {item.review}
            </p>

            <h4 className="font-semibold">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}