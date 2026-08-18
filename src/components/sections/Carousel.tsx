"use client";

import React, { useState, useEffect } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Carousel() {
  const images = [
    { src: "/capa_produto2.webp", alt: "Mockup no Celular", caption: "Escolha um roteiro." },
    { src: "/imagem2-carrossel.webp", alt: "Capa do Produto Completo", caption: "Copie." },
    { src: "/imagem3-carrossel.webp", alt: "Logo Operação Vendedora", caption: "Adapte para seu produto." },
    { src: "/imagem4carrossel.webp", alt: "Logo Operação Vendedora", caption: "Publique." },
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
    <section className="relative w-full py-24 bg-[#121212] overflow-hidden z-0 border-t border-zinc-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-green-500/5 blur-[60px] md:blur-[120px] will-change-transform transform-gpu rounded-full pointer-events-none -z-10" />
      
      <div className="px-4 max-w-6xl mx-auto w-full z-10">
        <FadeIn className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100">
            Veja o que você recebe por dentro.
          </h2>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto flex flex-col items-center group mt-8">
          <div className="relative w-full aspect-square md:aspect-video rounded-3xl bg-[#0a0a0a] border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="absolute w-full h-full flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-full flex-1 p-6 md:p-12">
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-6 md:p-12"
                  />
                </div>
                <div className="absolute bottom-6 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 px-6 py-2 rounded-full z-30 shadow-xl">
                  <span className="text-green-400 font-bold text-lg">{images[currentIndex].caption}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-400 hover:text-green-400 hover:border-green-500/50 shadow-lg transition-all opacity-80 hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-zinc-900/80 border border-zinc-700 text-zinc-400 hover:text-green-400 hover:border-green-500/50 shadow-lg transition-all opacity-80 hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-3 mt-8">
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
