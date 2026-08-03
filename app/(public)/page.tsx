import CTA from "./_components/CTA";
import FeaturedCategories from "./_components/FeaturedCategories";
import FeaturedGear from "./_components/FeaturedGear";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import Testimonials from "./_components/Testimonial";
import WhyChooseUs from "./_components/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="space-y-24 pb-20">
      <section className="bg-muted/30 py-20">
        <Hero />      
      </section>

      <section className="bg-muted/30 py-20">
        <FeaturedCategories />       
      </section>
      
      <section className="bg-muted/30 py-20">
        <FeaturedGear />      
      </section>
      
      <section className="bg-muted/30 py-20">
        <HowItWorks />      
      </section>
      
      <section className="bg-muted/30 py-20">
        <WhyChooseUs />      
      </section>
      
      <section className="bg-muted/30 py-20">
        <Testimonials />      
      </section>
      
      <section className="bg-muted/30 py-20">
        <CTA />      
      </section>
        
    </main>
  );
}
