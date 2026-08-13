"use client";

import React from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { Lock, ShieldCheck, Check } from "lucide-react";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative w-full py-20 md:py-32 bg-[#0a0a0a] text-zinc-100 overflow-hidden z-0"
    >
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-green-500/5 blur-[60px] md:blur-[150px] will-change-transform transform-gpu rounded-full pointer-events-none -z-10" />

      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400">
            Escolha o Pacote Ideal para Sua Loja
          </h2>
          <p className="text-lg md:text-xl font-medium text-zinc-400">
            Libere seu acesso agora com garantia incondicional de 7 dias e
            pagamento 100% seguro.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano Básico */}
          <FadeIn
            delay={0.1}
            className="flex flex-col h-full bg-[#121212] border border-zinc-800 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-zinc-700 transition-colors"
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 bg-zinc-900 border border-zinc-700/50 text-zinc-300 font-bold text-xs uppercase tracking-widest rounded-full mb-6">
                PACOTE BÁSICO
              </span>
              <h3 className="text-2xl font-extrabold text-zinc-100 mb-2">
                Operação Vendedora
              </h3>
              <p className="text-zinc-400 font-medium text-sm h-10">
                O sistema essencial para acabar com o vácuo.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-[29px] font-medium text-zinc-500 line-through">
                  De R$ 97
                </span>
                <span className="text-4xl md:text-5xl font-extrabold text-zinc-100">
                  R$ 19
                </span>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">
                  365 Roteiros de Stories Prontos
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">
                  Modelos de Copia e Cola
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">
                  Acesso imediato
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-300 font-medium">
                  Ideias para Stories
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full text-lg py-6 font-bold bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700/50 rounded-full transition-all"
            >
              <a
                href="https://pay.cakto.com.br/z7475c6_1028186"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
                onClick={() => {
                  if (
                    typeof window !== "undefined" &&
                    typeof (window as any).fbq === "function"
                  ) {
                    (window as any).fbq("track", "InitiateCheckout", {
                      content_name: "Pacote Básico",
                      value: 19.0,
                      currency: "BRL",
                    });
                  }
                }}
              >
                QUERO O PACOTE BÁSICO
              </a>
            </Button>
          </FadeIn>

          {/* Plano Premium */}
          <FadeIn
            delay={0.2}
            className="relative flex flex-col h-full bg-gradient-to-b from-zinc-900 to-[#121212] border-2 border-green-500/50 rounded-3xl p-8 shadow-[0_0_50px_rgba(34,197,94,0.1)] hover:border-green-500 transition-colors"
          >
            {/* Tag Recomendado */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 text-zinc-950 font-extrabold text-xs uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)]">
              Mais Vendido
            </div>

            <div className="mb-8 mt-2">
              <span className="inline-block px-4 py-1.5 bg-green-500/10 border border-green-500/20 text-green-400 font-bold text-xs uppercase tracking-widest rounded-full mb-6">
                OFERTA COMPLETA
              </span>
              <h3 className="text-2xl font-extrabold text-zinc-100 mb-2">
                Kit Revendedora Premium
              </h3>
              <p className="text-zinc-400 font-medium text-sm h-10">
                O material mais completo com todos os bônus incluídos.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-[29px] font-medium text-zinc-500 line-through">
                  De R$ 197
                </span>
                <span className="text-4xl md:text-5xl font-extrabold text-green-400">
                  R$ 47
                </span>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">
                  365 Roteiros de Stories Prontos
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">
                  20 mensagens prontas para WhatsApp (Anti-Vacuo)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">
                  Planilha Anti-Fiado
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">
                  Calendário semanal de conteúdo
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">
                  Checklist do Instagram profissional
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">
                  Checklist de Vendas Profissionais
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">
                  Roteiro para criar sua vitrine digital
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">
                  O Calendário Anual (365 Dias de Stories Prontos)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">
                  365 Dias de Ideias para Stories
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">
                  Guia de Edição no Canva
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-bold">Vitrine Express</span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full text-lg py-6 font-extrabold bg-green-500 hover:bg-green-400 text-zinc-950 border-0 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] rounded-full transition-all hover:scale-[1.02] uppercase"
            >
              <a
                href="https://pay.cakto.com.br/3ce7ort"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
                onClick={() => {
                  if (
                    typeof window !== "undefined" &&
                    typeof (window as any).fbq === "function"
                  ) {
                    (window as any).fbq("track", "InitiateCheckout", {
                      content_name: "Kit Revendedora Premium",
                      value: 47.0,
                      currency: "BRL",
                    });
                  }
                }}
              >
                QUERO O PACOTE PREMIUM
              </a>
            </Button>
          </FadeIn>
        </div>

        {/* Garantia e Segurança */}
        <FadeIn
          delay={0.3}
          className="mt-12 flex flex-col items-center gap-6 text-center max-w-xl mx-auto"
        >
          <div className="flex items-center gap-4 text-zinc-400 font-medium text-sm">
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-green-500" /> Compra Segura
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-500" /> Garantia de 7
              Dias
            </span>
          </div>
          <p className="text-xs text-zinc-600">
            Você tem 7 dias de garantia incondicional. Se não gostar do
            material, basta nos enviar um e-mail e devolveremos 100% do seu
            dinheiro. Sem letras miúdas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
