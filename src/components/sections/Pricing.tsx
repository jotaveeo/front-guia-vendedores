"use client";

import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative w-full py-20 md:py-32 bg-[#121212] text-zinc-100 overflow-hidden z-0"
    >
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-green-500/5 blur-[60px] md:blur-[150px] will-change-transform transform-gpu rounded-full pointer-events-none -z-10" />

      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-zinc-100">
            Escolha como você quer começar.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Essencial */}
          <FadeIn
            delay={0.1}
            className="flex flex-col h-full bg-[#1a1a1a] border border-zinc-800 rounded-3xl p-8 shadow-xl"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold text-zinc-100 mb-2 uppercase tracking-widest">
                Essencial
              </h3>
              <p className="text-zinc-400 font-medium text-sm h-10">
                Para quem quer resolver principalmente o problema de conteúdo.
              </p>

              <div className="mt-6">
                <span className="text-4xl md:text-5xl font-extrabold text-zinc-100">
                  R$ 19,90
                </span>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 mb-8 border-t border-zinc-800 pt-8">
              <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Inclui:</span>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">365 Dias de Ideias</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">Operação Vendedora</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">Modelos Copia & Cola</span>
              </div>
            </div>

            <a
              href="https://pay.cakto.com.br/z7475c6_1028186"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg py-5 px-8 font-bold bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 rounded-full transition-all inline-flex items-center justify-center uppercase"
            >
              QUERO O ESSENCIAL
            </a>
          </FadeIn>

          {/* PRO */}
          <FadeIn
            delay={0.2}
            className="relative flex flex-col h-full bg-gradient-to-b from-zinc-900 to-[#0a0a0a] border border-green-500/50 rounded-3xl p-8 shadow-[0_0_40px_rgba(34,197,94,0.1)]"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 text-zinc-950 font-extrabold text-xs uppercase tracking-widest rounded-full">
              Recomendado
            </div>

            <div className="mb-8 mt-2">
              <h3 className="text-2xl font-extrabold text-green-400 mb-2 uppercase tracking-widest">
                Operação Vendedora PRO
              </h3>
              <p className="text-zinc-400 font-medium text-sm h-10">
                Para quem quer o sistema completo.
              </p>

              <div className="mt-6">
                <span className="text-4xl md:text-5xl font-extrabold text-green-400">
                  R$ 47
                </span>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 mb-8 border-t border-zinc-800 pt-8">
              <span className="text-sm font-bold text-green-500/80 uppercase tracking-widest mb-2">Inclui:</span>
              <div className="flex items-start gap-3 mb-2">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">Tudo do Essencial</span>
              </div>
              <div className="w-full h-px bg-zinc-800/50 my-1" />
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500/70 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">2.000 Templates Canva</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500/70 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">Anti-Vácuo WhatsApp</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500/70 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">Planilha Anti-Fiado</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500/70 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">Vitrine Express</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500/70 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">Revendedora Digital</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500/70 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">A Ilusão da Postagem</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500/70 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">Método complementar</span>
              </div>
            </div>

            <a
              href="https://pay.cakto.com.br/pf4uh7i"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg py-5 px-8 font-extrabold bg-green-500 hover:bg-green-400 text-zinc-950 rounded-full transition-all hover:scale-[1.02] inline-flex items-center justify-center uppercase shadow-[0_0_30px_rgba(34,197,94,0.2)]"
            >
              QUERO O PRO
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="text-xl md:text-2xl font-bold text-zinc-300">
            <span className="text-green-400">+ R$ 27,10</span> para desbloquear todos os materiais.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
