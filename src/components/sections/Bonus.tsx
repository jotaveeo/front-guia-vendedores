import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Gift, FileText, MessageSquare, Calendar, LayoutList, ListChecks, Smartphone } from 'lucide-react';

export function Bonus() {
  const bonuses = [
    { title: "365 Roteiros de Stories Prontos", icon: <Smartphone className="w-8 h-8" />, value: "R$ 97,00" },
    { title: "20 mensagens prontas para WhatsApp (Anti-Vacuo)", icon: <MessageSquare className="w-8 h-8" />, value: "R$ 47,00" },
    { title: "Planilha Anti-Fiado", icon: <FileText className="w-8 h-8" />, value: "R$ 47,00" },
    { title: "Calendário semanal de conteúdo", icon: <Calendar className="w-8 h-8" />, value: "R$ 27,00" },
    { title: "Checklist do Instagram profissional", icon: <ListChecks className="w-8 h-8" />, value: "R$ 27,00" },
    { title: "Checklist de Vendas Profissionais", icon: <LayoutList className="w-8 h-8" />, value: "R$ 27,00" },
    { title: "Roteiro para criar sua vitrine digital", icon: <Gift className="w-8 h-8" />, value: "R$ 47,00" },
    { title: "O Calendário Anual (365 Dias de Stories Prontos)", icon: <Calendar className="w-8 h-8" />, value: "R$ 97,00" },
    { title: "365 Dias de Ideias para Stories", icon: <Smartphone className="w-8 h-8" />, value: "R$ 97,00" },
    { title: "Guia de Edição no Canva", icon: <LayoutList className="w-8 h-8" />, value: "R$ 47,00" },
    { title: "Vitrine Express", icon: <LayoutList className="w-8 h-8" />, value: "R$ 47,00" },
  ];

  return (
    <Section>
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
          O que você recebe
        </h2>
        <p className="text-lg md:text-xl font-medium text-foreground/80">
          Além do Produto principal, você recebe 7 materiais práticos para acelerar sua organização.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2 lg:col-span-3 bg-primary text-primary-foreground flex flex-col md:flex-row gap-8 items-center border-4 border-foreground shadow-[8px_8px_0_0_#1a1a1a]">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-foreground text-background flex-shrink-0 flex items-center justify-center rounded-xl border-4 border-foreground relative overflow-hidden">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '8px 8px' }}></div>
             <Image src="/logo-500x500.webp" alt="Produto Principal" width={500} height={500} className="w-full h-full object-contain p-2 z-10" />
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-foreground text-background font-bold text-sm rounded-full mb-4">PRODUTO PRINCIPAL</span>
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4">O Produto Prático</h3>
            <p className="text-lg md:text-xl font-bold opacity-90">Como organizar suas vendas pelo WhatsApp e Instagram.</p>
          </div>
        </Card>

        {bonuses.map((bonus, idx) => (
          <Card key={idx} className="flex flex-col items-center justify-between text-center gap-4 border-2 border-foreground shadow-[4px_4px_0_0_#1a1a1a] h-full">
            <div className="flex flex-col items-center">
              <span className="px-3 py-1 bg-primary text-primary-foreground font-bold text-xs rounded-full border-2 border-foreground mb-2">BÔNUS 0{idx + 1}</span>
              <div className="text-foreground my-2">
                {bonus.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{bonus.title}</h4>
            </div>
            <div className="mt-auto pt-4 border-t-2 border-foreground/10 w-full flex flex-col items-center">
              <span className="line-through text-foreground/50 font-bold text-sm">De {bonus.value}</span>
              <span className="text-green-600 font-extrabold text-lg uppercase tracking-wide">Por Grátis</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
