import React from "react";
import { Section } from "@/components/ui/Section";
import { Shield } from "lucide-react";

export function Guarantee() {
  return (
    <Section className="pb-8">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-background border-4 border-foreground p-8 md:p-10 rounded-2xl shadow-[8px_8px_0_0_#1a1a1a]">
        <div className="w-24 h-24 bg-primary text-primary-foreground flex items-center justify-center rounded-full border-4 border-foreground flex-shrink-0">
          <Shield className="w-12 h-12" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
            Risco Zero
          </h3>
          <p className="text-lg text-foreground/80 font-bold leading-relaxed">
            Você tem 7 dias de garantia incondicional. Se você acessar o
            material e achar que não te ajudou a organizar suas vendas, basta
            enviar um email e devolveremos 100% do valor pago.
          </p>
        </div>
      </div>
    </Section>
  );
}
