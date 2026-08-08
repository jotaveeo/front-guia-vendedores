import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Product } from "@/components/sections/Product";
import { Modules } from "@/components/sections/Modules";
import { Bonus } from "@/components/sections/Bonus";
import { Audience } from "@/components/sections/Audience";
import { Transformation } from "@/components/sections/Transformation";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { Upsell } from "@/components/sections/Upsell";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { SalesPopup } from "@/components/ui/SalesPopup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <Problem />
      <Product />
      <Modules />
      <Bonus />
      <Audience />
      <Transformation />
      <HowItWorks />
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
