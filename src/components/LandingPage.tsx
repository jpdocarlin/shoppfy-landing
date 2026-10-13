import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Comparison } from "@/components/Comparison";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { DEFAULT_CHECKOUT, type CheckoutLinks } from "@/lib/affiliates";

export function LandingPage({ checkout = DEFAULT_CHECKOUT }: { checkout?: CheckoutLinks }) {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Comparison />
        <Testimonials />
        <Pricing monthlyHref={checkout.monthly} lifetimeHref={checkout.lifetime} />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
