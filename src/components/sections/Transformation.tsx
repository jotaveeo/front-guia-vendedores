import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function Transformation() {
  const before = [
    "Catálogo espalhado",
    "Stories improvisados",
    "Pedidos perdidos em conversas",
    "Cobrança manual",
    "Clientes esquecidos",
    "Informações espalhadas"
  ];

  const after = [
    "Produtos organizados",
    "Comunicação mais profissional",
    "Processo de venda mais claro",
    "Clientes melhor organizados",
    "Pedidos registrados",
    "Rotina mais previsível"
  ];

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
          O impacto na sua rotina
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground text-background w-16 h-16 rounded-full items-center justify-center font-black z-10 border-4 border-background text-2xl">
          VS
        </div>

        <Card className="border-4 border-foreground border-dashed bg-foreground/5 shadow-none">
          <h3 className="text-2xl font-extrabold text-foreground mb-6 opacity-60 uppercase text-center">Antes</h3>
          <ul className="flex flex-col gap-4">
            {before.map((item, idx) => (
              <li key={idx} className="font-bold text-lg text-foreground/60 text-center line-through decoration-2">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="border-4 border-foreground shadow-[8px_8px_0_0_#1a1a1a] bg-primary text-primary-foreground">
          <h3 className="text-2xl font-extrabold mb-6 uppercase text-center">Depois</h3>
          <ul className="flex flex-col gap-4">
            {after.map((item, idx) => (
              <li key={idx} className="font-bold text-xl text-center">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
