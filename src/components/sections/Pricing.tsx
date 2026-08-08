import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Lock, ShieldCheck } from "lucide-react";

export function Pricing() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl border-4 border-foreground shadow-[12px_12px_0_0_#1a1a1a]">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Comece hoje por <br />
          <span className="text-5xl md:text-7xl block mt-4">R$ 19,90</span>
        </h2>

        <p className="text-xl font-bold opacity-90 mb-8">
          Material 100% digital. Acesso imediato.
        </p>

        <Button
          size="lg"
          className="w-full text-lg md:text-xl py-6 bg-foreground text-background border-2 border-foreground hover:bg-foreground/90 shadow-none hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#F5F5F0]"
        >
          <a href="https://pay.cakto.com.br/z7475c6_1028186">QUERO O GUIA COMPLETO</a>
        </Button>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-sm font-bold opacity-80">
          <span className="flex items-center gap-2">
            <Lock className="w-4 h-4" /> Pagamento seguro
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Acesso digital
          </span>
        </div>
      </div>
    </Section>
  );
}
