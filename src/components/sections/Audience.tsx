import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Check, X } from 'lucide-react';

export function Audience() {
  const isFor = [
    "Você vende pelo WhatsApp",
    "Usa Instagram ou Stories para divulgar",
    "Trabalha com cosméticos, perfumes, roupas, semijoias ou produtos diversos",
    "Já possui clientes",
    "Quer organizar melhor seus pedidos",
    "Quer parecer mais profissional no digital",
    "Quer parar de depender exclusivamente da memória e das conversas do WhatsApp"
  ];

  const notFor = [
    "Você procura uma fórmula de enriquecimento rápido",
    "Espera que um e-book faça as vendas por você",
    "Já possui uma operação digital altamente estruturada",
    "Procura um curso avançado de tráfego pago"
  ];

  return (
    <Section variant="muted" className="border-y-4 border-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="border-4 border-foreground shadow-[8px_8px_0_0_#1a1a1a]">
          <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
            Esse material é para você se...
          </h3>
          <ul className="flex flex-col gap-4">
            {isFor.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <div className="mt-1 bg-primary text-primary-foreground rounded-full p-1 border-2 border-foreground flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="border-4 border-foreground shadow-[8px_8px_0_0_#1a1a1a] bg-foreground text-background">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-background">
            Esse material provavelmente não é para você se...
          </h3>
          <ul className="flex flex-col gap-4">
            {notFor.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <div className="mt-1 bg-red-500 text-white rounded-full p-1 border-2 border-background flex-shrink-0">
                  <X className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg opacity-90 text-background">{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
