import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Gift, FileText, MessageSquare, Calendar, LayoutList, ListChecks, Smartphone } from 'lucide-react';

export function Bonus() {
  const bonuses = [
    { title: "30 ideias de Stories para revendedoras", icon: <Smartphone className="w-8 h-8" /> },
    { title: "20 mensagens prontas para WhatsApp", icon: <MessageSquare className="w-8 h-8" /> },
    { title: "Planilha simples de pedidos e pagamentos", icon: <FileText className="w-8 h-8" /> },
    { title: "Calendário semanal de conteúdo", icon: <Calendar className="w-8 h-8" /> },
    { title: "Checklist do Instagram profissional", icon: <ListChecks className="w-8 h-8" /> },
    { title: "Checklist de Vendas Profissionais", icon: <LayoutList className="w-8 h-8" /> },
    { title: "Roteiro para criar sua vitrine digital", icon: <Gift className="w-8 h-8" /> },
  ];

  return (
    <Section>
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
          O que você recebe
        </h2>
        <p className="text-lg md:text-xl font-medium text-foreground/80">
          Além do guia principal, você recebe 7 materiais práticos para acelerar sua organização.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2 lg:col-span-3 bg-primary text-primary-foreground flex flex-col md:flex-row gap-8 items-center border-4 border-foreground shadow-[8px_8px_0_0_#1a1a1a]">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-foreground text-background flex-shrink-0 flex items-center justify-center rounded-xl border-4 border-foreground relative overflow-hidden">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '8px 8px' }}></div>
             <FileText className="w-16 h-16 md:w-24 md:h-24 z-10" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-foreground text-background font-bold text-sm rounded-full mb-4">PRODUTO PRINCIPAL</span>
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4">O Guia Prático</h3>
            <p className="text-lg md:text-xl font-bold opacity-90">Como organizar suas vendas pelo WhatsApp e Instagram.</p>
          </div>
        </Card>

        {bonuses.map((bonus, idx) => (
          <Card key={idx} className="flex flex-col items-center text-center gap-4 border-2 border-foreground shadow-[4px_4px_0_0_#1a1a1a]">
            <span className="px-3 py-1 bg-primary text-primary-foreground font-bold text-xs rounded-full border-2 border-foreground">BÔNUS 0{idx + 1}</span>
            <div className="text-foreground my-2">
              {bonus.icon}
            </div>
            <h4 className="font-bold text-lg">{bonus.title}</h4>
          </Card>
        ))}
      </div>
    </Section>
  );
}
