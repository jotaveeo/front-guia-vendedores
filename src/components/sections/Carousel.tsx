"use client";

import React, { useState, useEffect } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Carousel() {
  const images = [
    { src: "/mockap-celular.png", alt: "Mockup no Celular" },
    { src: "/capa_produto.png", alt: "Capa do Produto Completo" },
    { src: "/logo-500x500.png", alt: "Logo Operação Vendedora" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden z-0 border-y border-zinc-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="px-4 max-w-6xl mx-auto w-full z-10">
        <FadeIn className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400">
            Veja o Material por Dentro
          </h2>
          <p className="text-zinc-500 font-medium mt-3 text-sm md:text-base">
            Arraste ou clique para ver mais detalhes.
          </p>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center group mt-8">
          {/* Botão Voltar */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 md:-left-6 lg:-left-12 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-green-400 hover:border-green-500/50 shadow-lg transition-all opacity-80 hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Area do Carrossel */}
          <div className="relative w-full aspect-square md:aspect-video rounded-3xl bg-gradient-to-b from-zinc-900 to-[#121212] border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain p-6 md:p-12 drop-shadow-2xl"
              />
            </AnimatePresence>
          </div>

          {/* Botão Avançar */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 md:-right-6 lg:-right-12 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-green-400 hover:border-green-500/50 shadow-lg transition-all opacity-80 hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? "bg-green-500 w-8 shadow-[0_0_10px_rgba(34,197,94,0.5)]" 
                    : "bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
