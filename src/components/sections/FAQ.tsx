'use client';
import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    { q: "O material é físico?", a: "Não. É um produto digital." },
    { q: "Preciso entender de tecnologia?", a: "Não. O conteúdo foi pensado para pessoas que não são especialistas em tecnologia." },
    { q: "Serve apenas para quem vende cosméticos?", a: "Não. O método pode ser aplicado a cosméticos, perfumes, roupas, semijoias, acessórios e outros produtos vendidos pelas redes sociais." },
    { q: "Preciso ter um CNPJ?", a: "Não é necessário para utilizar o material." },
    { q: "Preciso ter uma loja virtual?", a: "Não. O material mostra como organizar sua operação mesmo utilizando principalmente WhatsApp e Instagram." },
    { q: "Posso acessar pelo celular?", a: "Sim." },
    { q: "Quando recebo?", a: "Após a confirmação do pagamento, o acesso é disponibilizado digitalmente conforme as condições da plataforma de checkout." }
  ];

  return (
    <Section variant="muted" className="border-y-4 border-foreground">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-foreground mb-12">
          Perguntas Frequentes
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-card border-2 border-foreground rounded-xl shadow-[4px_4px_0_0_#1a1a1a] overflow-hidden transition-all">
              <button 
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left font-extrabold text-lg text-foreground focus:outline-none"
              >
                {faq.q}
                {open === idx ? <ChevronUp className="w-6 h-6 text-primary" /> : <ChevronDown className="w-6 h-6 text-foreground/50" />}
              </button>
              {open === idx && (
                <div className="px-6 pb-6 pt-0 font-bold text-foreground/80 text-lg">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
