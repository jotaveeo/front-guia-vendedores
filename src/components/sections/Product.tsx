import React from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { Copy, Clock, Zap } from 'lucide-react';

export function Product() {
  const features = [
    {
      icon: <Copy className="w-6 h-6 text-amber-400" />,
      title: "Copia e Cola",
      desc: "Não precisa de criatividade. São 365 roteiros validados, prontos para você apenas copiar, colar e vender."
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      title: "15 Minutos por Dia",
      desc: "Pare de perder horas. Em menos de 15 minutos você executa a estratégia do dia e fica livre para cuidar da loja."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Roteiros Cíclicos e Testados",
      desc: "Um sistema desenhado para gerar picos de vendas contínuos o ano inteiro, sem saturar sua audiência."
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#0a0a0a] text-zinc-100 overflow-hidden z-0">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-amber-500/5 blur-[60px] md:blur-[150px] will-change-transform transform-gpu rounded-full pointer-events-none -z-10" />

      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full z-10">
        <FadeIn className="flex flex-col items-center">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
              Apresentando a Operação Vendedora
            </h2>
            <p className="text-xl md:text-2xl font-bold text-amber-500">
              Copia, Cola e Vende
            </p>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto mt-6">
              Um sistema de vendas pronto para revendedoras que querem saber exatamente o que postar, o que falar e como continuar a conversa com uma cliente — sem precisar passar horas criando conteúdo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagem do Produto */}
            <div className="relative w-full rounded-3xl flex items-center justify-center group">
              <Image
                src="/mockap-celular.webp"
                alt="Mockup do Pacote Operação Vendedora"
                width={800}
                height={800}
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full max-w-lg h-auto object-contain drop-shadow-2xl md:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Features */}
            <div className="flex flex-col gap-10">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-[0_0_20px_rgba(251,191,36,0.03)] flex items-center justify-center shrink-0 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-2 pt-1">
                    <h3 className="text-xl font-bold text-zinc-100">{item.title}</h3>
                    <p className="text-zinc-400 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
