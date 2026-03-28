import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { SocialProofBar } from "@/components/landing/social-proof-bar";
import { Problem } from "@/components/landing/problem";
import { Solution } from "@/components/landing/solution";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Testimonials } from "@/components/landing/testimonials";
import { PricingSection } from "@/components/landing/pricing-section";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Testimonials />
        <PricingSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
