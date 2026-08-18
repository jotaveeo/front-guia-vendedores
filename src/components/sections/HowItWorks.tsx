import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export function HowItWorks() {
  const steps = [
    { num: "01", title: "ESCOLHA", desc: "Selecione o roteiro ou mensagem ideal." },
    { num: "02", title: "COPIE", desc: "Copie o texto validado do nosso material." },
    { num: "03", title: "PERSONALIZE", desc: "Adicione as fotos e o preço da sua loja." },
    { num: "04", title: "PUBLIQUE", desc: "Poste nos Stories ou envie no WhatsApp." },
    { num: "05", title: "CONVERSE", desc: "Use os scripts para responder as clientes." },
    { num: "06", title: "CONDUZA A VENDA", desc: "Guie a cliente até o fechamento." },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#121212] text-zinc-100 overflow-hidden z-0">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100">
            Como Funciona
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <div className="relative pt-12 p-8 bg-[#0a0a0a] border border-zinc-800 rounded-3xl shadow-lg text-center hover:border-zinc-700 transition-colors h-full">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500/10 text-green-500 rounded-full border border-green-500/30 flex items-center justify-center font-black text-xl shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-extrabold mb-4 text-zinc-100">{step.title}</h3>
                <p className="font-medium text-zinc-400 text-base">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
