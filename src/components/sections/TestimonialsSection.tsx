import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import Image from 'next/image';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mariana S.",
      role: "Revendedora de Semijoias",
      content: "Eu passava horas tentando montar um roteiro no Canva e nunca saía nada bom. Agora eu só copio e colo, e o visual fica incrível.",
      image: "/profile_mariana.png"
    },
    {
      name: "Camila F.",
      role: "Revendedora de Cosméticos",
      content: "O Anti-Vácuo é sensacional. Eu tinha várias clientes que paravam de responder no WhatsApp depois que eu passava o preço. Agora sei exatamente o que falar para retomar a conversa.",
      image: "/profile_camila.png"
    },
    {
      name: "Juliana R.",
      role: "Moda Feminina",
      content: "A organização da planilha me salvou. Nunca mais vendi fiado para quem já estava devendo. O sistema é muito prático e direto ao ponto.",
      image: "/profile_juliana.png"
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#121212] text-zinc-100 overflow-hidden z-0">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-4">
            Veja por dentro antes de comprar
          </h2>
          <p className="text-lg text-zinc-400 font-medium">
            (E veja o que outras revendedoras estão achando da estrutura)
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <FadeIn key={idx} delay={0.1 * idx} className="bg-[#1a1a1a] border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors flex flex-col justify-between shadow-lg">
              <div className="mb-6">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 font-medium text-lg leading-relaxed italic">
                  &quot;{t.content}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-700">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-100">{t.name}</h4>
                  <p className="text-sm text-zinc-500 font-medium">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
