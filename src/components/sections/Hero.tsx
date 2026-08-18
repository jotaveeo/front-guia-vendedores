"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-[#0a0a0a] text-zinc-50 overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 z-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-green-500/10 blur-[60px] md:blur-[120px] will-change-transform transform-gpu rounded-full pointer-events-none -z-10" />

      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full z-10 flex flex-col items-center text-center">
        <FadeIn className="flex flex-col items-center gap-6 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-50 to-zinc-400 max-w-4xl drop-shadow-sm uppercase">
            Pare de perder horas pensando no que postar para {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-600">
            vender.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl text-pretty font-medium mt-4">
            Tenha roteiros, ideias e mensagens prontas para usar nos Stories e no WhatsApp — mesmo que você não seja boa com conteúdo ou não tenha tempo para criar tudo do zero.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 md:gap-4 font-bold text-xs md:text-sm text-green-500 tracking-widest uppercase bg-green-500/10 px-6 py-3 rounded-full border border-green-500/20">
            <span>Escolha</span>
            <span className="text-zinc-600">→</span>
            <span>Copie</span>
            <span className="text-zinc-600">→</span>
            <span>Personalize</span>
            <span className="text-zinc-600">→</span>
            <span>Publique</span>
            <span className="text-zinc-600">→</span>
            <span>Converse</span>
            <span className="text-zinc-600">→</span>
            <span className="text-green-400">Venda</span>
          </div>

          <div className="w-full max-w-lg md:max-w-2xl mt-10 relative group mx-auto">
            <div className="relative rounded-xl flex items-center justify-center overflow-visible">
              <Image
                src="/capa_produto.webp"
                alt="Capa do Produto Operação Vendedora"
                width={700}
                height={700}
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 w-full">
            <Button
              size="lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 md:px-14 py-4 md:py-6 text-base md:text-xl font-extrabold bg-green-500 hover:bg-green-400 text-zinc-950 border-0 shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] rounded-full transition-all duration-300 hover:scale-105 uppercase tracking-wide"
            >
              QUERO COMEÇAR A VENDER
            </Button>
            <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Acesso imediato • Pagamento seguro • Garantia de 7 dias</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
