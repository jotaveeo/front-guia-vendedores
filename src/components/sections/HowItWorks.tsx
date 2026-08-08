import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function HowItWorks() {
  const steps = [
    { num: "01", title: "COMPRE", desc: "Acesse o material imediatamente após a confirmação." },
    { num: "02", title: "APLIQUE", desc: "Use os checklists, modelos e orientações na sua rotina." },
    { num: "03", title: "ORGANIZE", desc: "Comece a transformar sua presença digital em uma operação profissional." },
  ];

  return (
    <Section variant="muted" className="border-y-4 border-foreground">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
          Como funciona
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <Card key={idx} className="relative pt-12 border-2 border-foreground shadow-[4px_4px_0_0_#1a1a1a] text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-xl border-2 border-foreground flex items-center justify-center font-black text-xl shadow-[2px_2px_0_0_#1a1a1a]">
              {step.num}
            </div>
            <h3 className="text-2xl font-extrabold mb-4 text-foreground">{step.title}</h3>
            <p className="font-bold text-foreground/80 text-lg">{step.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
