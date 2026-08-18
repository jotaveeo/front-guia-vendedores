import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export function Problem() {
  const problems = [
    {
      title: "1. POSTAR",
      desc: "Você perde tempo pensando no que postar."
    },
    {
      title: "2. VENDER",
      desc: "A cliente pergunta o preço e depois desaparece."
    },
    {
      title: "3. RECEBER",
      desc: "Você vende, mas perde o controle de quem ainda precisa pagar."
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#121212] text-zinc-100 overflow-hidden z-0 border-t border-zinc-800">
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full z-10 flex flex-col items-center">
        <FadeIn className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight mb-16 text-zinc-100">
            Você trabalha muito para vender pouco.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
            {problems.map((prob, idx) => (
              <div 
                key={idx} 
                className="flex flex-col gap-3 p-8 rounded-2xl bg-[#1a1a1a] border border-zinc-800 hover:border-zinc-700 transition-all text-center"
              >
                <h3 className="text-red-500 font-extrabold tracking-widest uppercase text-sm">{prob.title}</h3>
                <p className="text-lg text-zinc-300 font-medium">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-green-500/10 border border-green-500/20 px-8 py-4 rounded-full">
            <p className="text-green-400 font-bold text-lg md:text-xl text-center">
              A Operação Vendedora foi criada para atacar essas três etapas.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
