import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Problem = dynamic(() => import("@/components/sections/Problem").then(m => m.Problem));
const Process = dynamic(() => import("@/components/sections/Process").then(m => m.Process));
const Carousel = dynamic(() => import("@/components/sections/Carousel").then(m => m.Carousel));
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks").then(m => m.HowItWorks));
const Modules = dynamic(() => import("@/components/sections/Modules").then(m => m.Modules));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(m => m.Pricing));
const WhyPro = dynamic(() => import("@/components/sections/WhyPro").then(m => m.WhyPro));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then(m => m.TestimonialsSection));
const Transformation = dynamic(() => import("@/components/sections/Transformation").then(m => m.Transformation));
const Audience = dynamic(() => import("@/components/sections/Audience").then(m => m.Audience));
const Guarantee = dynamic(() => import("@/components/sections/Guarantee").then(m => m.Guarantee));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => m.FAQ));
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA").then(m => m.FinalCTA));
const Footer = dynamic(() => import("@/components/sections/Footer").then(m => m.Footer));
const SalesPopup = dynamic(() => import("@/components/ui/SalesPopup").then(m => m.SalesPopup));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <Problem />
      <Process />
      <Carousel />
      <HowItWorks />
      <Modules />
      <Pricing />
      <WhyPro />
      <TestimonialsSection />
      <Transformation />
      <Audience />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <SalesPopup />
    </main>
  );
}
