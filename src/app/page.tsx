import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Problem = dynamic(() => import("@/components/sections/Problem").then(m => m.Problem));
const Product = dynamic(() => import("@/components/sections/Product").then(m => m.Product));
const Carousel = dynamic(() => import("@/components/sections/Carousel").then(m => m.Carousel));
const Modules = dynamic(() => import("@/components/sections/Modules").then(m => m.Modules));
const Bonus = dynamic(() => import("@/components/sections/Bonus").then(m => m.Bonus));
const Audience = dynamic(() => import("@/components/sections/Audience").then(m => m.Audience));
const Transformation = dynamic(() => import("@/components/sections/Transformation").then(m => m.Transformation));
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks").then(m => m.HowItWorks));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then(m => m.TestimonialsSection));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(m => m.Pricing));
const Guarantee = dynamic(() => import("@/components/sections/Guarantee").then(m => m.Guarantee));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => m.FAQ));
const Upsell = dynamic(() => import("@/components/sections/Upsell").then(m => m.Upsell));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA").then(m => m.FinalCTA));
const Footer = dynamic(() => import("@/components/sections/Footer").then(m => m.Footer));
const SalesPopup = dynamic(() => import("@/components/ui/SalesPopup").then(m => m.SalesPopup));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <Problem />
      <Product />
      <Carousel />
      {/* <Modules /> */}
      <Bonus />
      <Audience />
      <Transformation />
      <HowItWorks />
      <TestimonialsSection />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Upsell />
      <FinalCTA />
      <Footer />
      <SalesPopup />
    </main>
  );
}
