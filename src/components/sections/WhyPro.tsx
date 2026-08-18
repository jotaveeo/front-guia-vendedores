import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export function WhyPro() {
  return (
    <section className="relative w-full py-20 bg-[#0a0a0a] text-zinc-100 overflow-hidden z-0">
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full z-10 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 text-zinc-100">
            Qual é a diferença?
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch text-left">
          <FadeIn delay={0.1} className="flex-1 bg-[#121212] border border-zinc-800 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl">
            <h3 className="text-xl font-extrabold text-zinc-300 mb-4 uppercase tracking-widest">
              Se você só precisa de conteúdo...
            </h3>
            <div className="text-2xl font-black text-zinc-100 mb-4 bg-zinc-800 px-4 py-2 rounded-lg">ESSENCIAL</div>
            <p className="text-zinc-400 font-medium">
              Você recebe os materiais fundamentais para saber o que postar.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex-1 bg-gradient-to-b from-green-500/10 to-[#121212] border border-green-500/30 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_0_30px_rgba(34,197,94,0.1)] relative">
            <h3 className="text-xl font-extrabold text-green-400 mb-4 uppercase tracking-widest">
              Se você quer estruturar sua operação...
            </h3>
            <div className="text-2xl font-black text-green-400 mb-4 bg-green-500/20 px-4 py-2 rounded-lg">PRO</div>
            <p className="text-zinc-300 font-medium">
              Você recebe conteúdo + visual + WhatsApp + organização + vitrine + estratégia.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-12 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-zinc-100 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-lg leading-relaxed">
            O Essencial ajuda você a <span className="text-zinc-400">postar</span>.<br/>
            O PRO ajuda você a <span className="text-green-400">estruturar a venda</span>.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
