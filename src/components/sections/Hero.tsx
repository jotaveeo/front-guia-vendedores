"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Play, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-[#0a0a0a] text-zinc-50 overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 z-0">
      {/* Background neon glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xl h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full z-10 flex flex-col items-center text-center">
        <FadeIn className="flex flex-col items-center gap-6 w-full">
 

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-50 to-zinc-400 max-w-4xl drop-shadow-sm uppercase">
            365 OFERTAS PRONTAS QUE VÃO TRANSFORMAR A SUA FORMA DE POSTAR E
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-green-600">
              ACABAR COM O VÁCUO DOS CLIENTES
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl text-pretty font-medium mt-2">
            Pare de perder tempo tentando adivinhar o que postar. Tenha o ano
            inteiro de Stories e Ofertas prontas para a sua loja lucrar.
          </p>

          {/* Imagem do Produto */}
          <div className="w-full max-w-lg md:max-w-2xl mt-10 relative group mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-zinc-800 to-amber-500/20 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition duration-700 group-hover:duration-200" />
            <div className="relative rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-visible">
              <img
                src="/capa_produto.png"
                alt="Capa do Produto Operação Vendedora"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 w-full">
            <Button
              size="lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 md:px-14 py-4 md:py-6 text-base md:text-xl font-extrabold bg-green-500 hover:bg-green-400 text-zinc-950 border-0 shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] rounded-full transition-all duration-300 hover:scale-105 uppercase tracking-wide"
            >
              QUERO MEU PRODUTO AGORA NA PROMOÇÃO
            </Button>
            <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Pagamento 100% Seguro e Acesso Imediato</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
