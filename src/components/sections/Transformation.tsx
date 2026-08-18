import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export function Transformation() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0a0a0a] text-zinc-100 overflow-hidden z-0 border-t border-zinc-800">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* ANTES */}
          <FadeIn className="bg-[#121212] border border-red-500/20 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
            <h3 className="text-2xl font-extrabold text-red-400 mb-8 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-lg">✕</span>
              ANTES
            </h3>
            
            <ul className="space-y-6">
              {[
                '"O que eu posto hoje?"',
                'Apenas Foto + preço.',
                'Cliente visualiza e some.',
                'Vendas espalhadas e desorganizadas.',
                'Clientes devendo sem você saber.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span className="text-zinc-400 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* DEPOIS */}
          <FadeIn delay={0.2} className="bg-gradient-to-b from-green-500/5 to-[#121212] border border-green-500/30 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(34,197,94,0.05)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
            <h3 className="text-2xl font-extrabold text-green-400 mb-8 uppercase tracking-widest flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-lg">✓</span>
              DEPOIS
            </h3>
            
            <ul className="space-y-6">
              {[
                'Roteiro pronto.',
                'Conteúdo organizado.',
                'Mensagens para continuar conversas.',
                'Vitrine digital.',
                'Controle das vendas.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  <span className="text-zinc-100 font-bold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
