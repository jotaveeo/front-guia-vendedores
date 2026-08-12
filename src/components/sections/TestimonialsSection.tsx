"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Eu passava horas tentando montar artes no Canva e na hora de postar ninguém respondia. Copiei o roteiro de escassez da semana 2 e vendi 5 peças na mesma tarde. O formato é genial.",
    name: "Mariana Silva",
    niche: "Semijoias",
  },
  {
    id: 2,
    text: "A planilha anti-fiado pagou o produto no primeiro dia. Eu tinha R$ 400 reais perdidos no WhatsApp que eu tinha esquecido de cobrar. Apertei o botão do link direto e recebi de três clientes.",
    name: "Camila R.",
    niche: "Moda Feminina",
  },
  {
    id: 3,
    text: "O material é bizarramente organizado. É só abrir a semana, copiar o texto, colocar a foto e postar. Levo menos de 10 minutos por dia e meus Stories nunca tiveram tantas visualizações.",
    name: "Juliana T.",
    niche: "Cosméticos e Beleza",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-zinc-950 text-zinc-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-zinc-950 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-zinc-400 font-medium mb-4 block">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-50">
            Elas pararam de levar vácuo e começaram a vender.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 relative flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-zinc-800/50 -z-10 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-500/80 text-amber-500/80"
                  />
                ))}
              </div>
              
              <p className="text-zinc-300 text-base leading-relaxed font-light mb-8 flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <h4 className="text-zinc-100 font-semibold text-base">
                  {testimonial.name}
                </h4>
                <p className="text-zinc-500 text-sm mt-1">
                  {testimonial.niche}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
