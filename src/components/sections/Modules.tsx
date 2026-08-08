import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Check } from 'lucide-react';

export function Modules() {
  const modules = [
    "Como adaptar sua venda do catálogo físico para o digital",
    "Como transformar o Instagram em uma vitrine",
    "Como utilizar melhor os Stories",
    "Como organizar o WhatsApp para vender",
    "Como organizar clientes e pedidos",
    "Como controlar pagamentos e entregas",
    "Como melhorar o pós-venda",
    "Como criar conteúdo sem passar horas no Canva",
    "Como criar uma vitrine digital",
    "O que vale a pena automatizar primeiro"
  ];

  return (
    <Section variant="muted" className="border-y-4 border-foreground">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
          O que você vai aprender
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((mod, idx) => (
          <Card key={idx} className="flex gap-4 items-start border-2 border-foreground shadow-[4px_4px_0_0_#1a1a1a]">
            <div className="mt-1 bg-primary text-primary-foreground rounded-full p-1 border-2 border-foreground">
              <Check className="w-5 h-5" />
            </div>
            <p className="font-bold text-foreground text-lg leading-snug">
              {mod}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
