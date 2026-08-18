import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="relative w-full py-20 bg-[#0a0a0a] text-zinc-100 overflow-hidden z-0 border-y border-zinc-800">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-green-500/5 blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full z-10 text-center flex flex-col items-center">
        <FadeIn className="flex flex-col items-center">
          <div className="w-20 h-20 bg-zinc-900 border border-green-500/30 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
            <ShieldCheck className="w-10 h-10 text-green-500" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-6">
            Experimente por 7 dias.
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
            Acesse o material, conheça a estrutura e veja se a <strong className="text-zinc-200">Operação Vendedora</strong> faz sentido para sua rotina. Garantia de 7 dias conforme os termos da oferta.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
