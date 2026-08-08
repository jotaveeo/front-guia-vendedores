import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Smartphone, MessageCircle, Clock, Search, FileText, AlertCircle } from 'lucide-react';

export function Problem() {
  const problems = [
    { icon: <Smartphone />, text: "Tirar print do catálogo para mandar para as clientes" },
    { icon: <MessageCircle />, text: "Responder as mesmas perguntas no WhatsApp o dia todo" },
    { icon: <Search />, text: "Procurar uma conversa antiga para descobrir um pedido" },
    { icon: <AlertCircle />, text: "Esquecer quem ainda precisa pagar ou já pagou" },
    { icon: <Clock />, text: "Não saber quais clientes estão há muito tempo sem comprar" },
    { icon: <FileText />, text: "Colocar preço manualmente em dezenas de imagens" },
  ];

  return (
    <Section variant="muted" className="border-y-4 border-foreground">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
          Se você vende pelas redes sociais, provavelmente já passou por isso...
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {problems.map((problem, idx) => (
          <Card key={idx} className="flex flex-col gap-4 border-2 border-foreground shadow-[4px_4px_0_0_#1a1a1a]">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center border-2 border-foreground">
              {problem.icon}
            </div>
            <p className="font-bold text-foreground text-lg leading-snug">
              {problem.text}
            </p>
          </Card>
        ))}
      </div>

      <div className="text-center bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl border-4 border-foreground shadow-[8px_8px_0_0_#1a1a1a]">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
          Você não precisa trabalhar mais.
        </h3>
        <p className="text-xl md:text-2xl font-bold opacity-90">
          Precisa organizar melhor o que já faz.
        </p>
      </div>
    </Section>
  );
}
