import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Check, X } from 'lucide-react';

export function Audience() {
  const target = [
    "Trabalha com revenda;",
    "Vende moda, beleza, cosméticos, semijoias etc.;",
    "Usa Instagram ou WhatsApp para vender;",
    "Perde tempo pensando no que postar;",
    "Quer uma estrutura pronta para trabalhar seu conteúdo."
  ];

  const notFor = [
    "Procura dinheiro fácil;",
    "Não pretende divulgar seus produtos;",
    "Espera que um PDF venda sozinho;",
    "Não quer conversar com clientes."
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#121212] text-zinc-100 overflow-hidden z-0">
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Para Quem É */}
          <FadeIn className="bg-[#1a1a1a] border border-green-500/20 rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-zinc-100 mb-8">
              É para você se:
            </h3>
            <ul className="space-y-5">
              {target.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-zinc-300 font-medium text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Para Quem Não É */}
          <FadeIn delay={0.2} className="bg-[#1a1a1a] border border-red-500/20 rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-3xl font-extrabold text-zinc-100 mb-8">
              Não é para você se:
            </h3>
            <ul className="space-y-5">
              {notFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 shrink-0" />
                  <span className="text-zinc-400 font-medium text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
