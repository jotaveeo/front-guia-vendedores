import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export function FinalCTA() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#121212] text-zinc-100 overflow-hidden z-0 border-t border-zinc-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-green-500/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full z-10 text-center">
        <FadeIn className="flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-50 mb-6 uppercase">
            Pare de começar do zero todos os dias.
          </h2>

          <p className="text-xl md:text-2xl text-zinc-300 mb-10 font-medium max-w-2xl leading-relaxed">
            Seus produtos já estão aí.<br/>
            Agora você precisa saber o que dizer, quando publicar e como continuar a conversa.
            <br/><br/>
            <strong className="text-green-400 font-extrabold">Escolha a versão que faz sentido para você.</strong>
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full justify-center">
            <a
              href="https://pay.cakto.com.br/z7475c6_1028186"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 rounded-full transition-all flex items-center justify-center uppercase shadow-lg hover:scale-105"
            >
              COMEÇAR COM R$ 19,90
            </a>
            <a
              href="https://pay.cakto.com.br/pf4uh7i"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-extrabold bg-green-500 hover:bg-green-400 text-zinc-950 rounded-full transition-all flex items-center justify-center uppercase shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:shadow-[0_0_50px_rgba(34,197,94,0.4)] hover:scale-105"
            >
              QUERO O PRO POR R$ 47
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
