import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export function Modules() {
  const modules = [
    { title: "01 — 365 Dias de Ideias para Stories", desc: "Nunca mais comece o dia pensando no que postar." },
    { title: "02 — 2.000 Templates Canva", desc: "Tenha modelos visuais para adaptar e publicar." },
    { title: "03 — Operação Vendedora", desc: "Aprenda a transformar uma postagem em uma oportunidade de venda." },
    { title: "04 — Anti-Vácuo do WhatsApp", desc: "Tenha mensagens para continuar conversas e fazer follow-up." },
    { title: "05 — Vitrine Express", desc: "Apresente seus produtos de forma organizada." },
    { title: "06 — Planilha Anti-Fiado", desc: "Controle clientes, vendas e valores pendentes." },
    { title: "07 — Revendedora Digital", desc: "Organize sua presença e operação no digital." },
    { title: "08 — A Ilusão da Postagem", desc: "Entenda por que simplesmente postar não significa vender." },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0a0a0a] text-zinc-100 overflow-hidden z-0">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400">
            O que você recebe
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {modules.map((mod, idx) => (
            <FadeIn key={idx} delay={0.05 * idx} className="bg-[#121212] border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-zinc-100 mb-2">
                  {mod.title}
                </h3>
                <p className="text-zinc-400 font-medium">
                  {mod.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
