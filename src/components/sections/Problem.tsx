import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { XCircle } from 'lucide-react';

export function Problem() {
  const problems = [
    "Perde horas tentando criar artes no Canva e sai tudo amador.",
    "Posta foto do catálogo e ninguém responde.",
    "As clientes perguntam o preço, você responde e elas somem."
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#121212] text-zinc-100 overflow-hidden z-0">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full z-10 flex flex-col items-center">
        <FadeIn className="flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-tight mb-12 text-zinc-100 drop-shadow-sm">
            Você trabalha o dia inteiro para ficar no <span className="text-red-500">vácuo?</span>
          </h2>

          <div className="flex flex-col gap-6 w-full max-w-3xl">
            {problems.map((text, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-5 p-6 md:p-8 rounded-2xl bg-[#1a1a1a] border border-zinc-800/80 shadow-lg hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300"
              >
                <XCircle className="w-8 h-8 text-red-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
