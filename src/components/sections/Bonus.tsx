import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { FileText, LayoutTemplate, Gift } from 'lucide-react';

export function Bonus() {
  const bonuses = [
    { title: "Planilha Anti-Fiado", icon: <FileText className="w-10 h-10 text-amber-500" />, desc: "Controle absoluto de quem te deve para você não perder dinheiro e manter a saúde financeira do seu negócio em dia." },
    { title: "Templates Premium", icon: <LayoutTemplate className="w-10 h-10 text-amber-500" />, desc: "Templates de alta conversão prontos para usar no seu perfil, trazendo um ar profissional para sua loja imediatamente." },
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-zinc-950 text-zinc-100 overflow-hidden z-0">
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full z-10">
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-sm uppercase tracking-widest mb-6">
            <Gift className="w-4 h-4" /> Bônus Exclusivos
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">
            E não para por aí...
          </h2>
          <p className="text-lg md:text-xl font-medium text-zinc-400">
            Garantindo seu acesso hoje, você também leva estes 2 bônus essenciais totalmente de graça.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bonuses.map((bonus, idx) => (
             <FadeIn key={idx} delay={0.1 * (idx + 1)} className="bg-[#121212] border border-amber-500/20 rounded-3xl p-8 hover:border-amber-500/40 transition-colors shadow-lg relative overflow-hidden group">
               <div className="absolute -top-6 -right-6 p-6 opacity-5 group-hover:opacity-10 transition-opacity scale-150">
                  {bonus.icon}
               </div>
               <div className="mb-6 inline-block p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  {bonus.icon}
               </div>
               <div className="mb-4">
                 <span className="inline-block px-3 py-1 bg-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-full">
                    BÔNUS 0{idx + 1}
                 </span>
               </div>
               <h3 className="text-2xl font-extrabold text-zinc-100 mb-4">{bonus.title}</h3>
               <p className="text-zinc-400 font-medium mb-8 leading-relaxed">{bonus.desc}</p>
               
               <div className="mt-auto pt-6 border-t border-zinc-800 flex items-center justify-between">
                 <span className="text-zinc-500 font-medium line-through">De R$ 47,00</span>
                 <span className="text-amber-400 font-extrabold text-lg uppercase">GRÁTIS</span>
               </div>
             </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
