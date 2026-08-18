import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export function Process() {
  const steps = [
    "ATRAIR",
    "APRESENTAR",
    "CONVERSAR",
    "FAZER FOLLOW-UP",
    "FECHAR",
    "RECEBER"
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0a0a0a] text-zinc-100 overflow-hidden z-0">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 mb-6">
            O problema não é postar.<br/>É não ter um processo.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-4 w-full">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-[#121212] border border-zinc-800 px-6 py-3 rounded-xl font-bold text-zinc-100 text-sm md:text-base whitespace-nowrap shadow-lg">
                  {step}
                </div>
                {idx < steps.length - 1 && (
                  <div className="text-green-500 font-bold hidden md:block">→</div>
                )}
                {idx < steps.length - 1 && (
                  <div className="text-green-500 font-bold md:hidden">↓</div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-16 text-center bg-zinc-900 border border-zinc-800 p-8 rounded-3xl w-full">
            <p className="text-lg md:text-xl text-zinc-300 font-medium">
              A <strong className="text-green-400">Operação Vendedora</strong> organiza essas etapas em materiais prontos para você executar sem precisar começar do zero.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
