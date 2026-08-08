"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";

const buyers = [
  { name: "Ana Laura", city: "São Paulo, SP", time: "há 2 minutos" },
  { name: "Juliana", city: "Belo Horizonte, MG", time: "há 5 minutos" },
  { name: "Camila", city: "Curitiba, PR", time: "há 12 minutos" },
  { name: "Fernanda", city: "Rio de Janeiro, RJ", time: "há 1 minuto" },
  { name: "Mariana", city: "Fortaleza, CE", time: "há 8 minutos" },
  { name: "Beatriz", city: "Salvador, BA", time: "há 4 minutos" },
  { name: "Amanda", city: "Goiânia, GO", time: "há 15 minutos" },
  { name: "Letícia", city: "Porto Alegre, RS", time: "há 3 minutos" },
  { name: "Vanessa", city: "Recife, PE", time: "há 6 minutos" },
  { name: "Patrícia", city: "Manaus, AM", time: "há 9 minutos" },
  { name: "Julia", city: "São José dos Campos, SP", time: "há 12 minutos" },
  { name: "Felipe", city: "São Paulo, SP", time: "há 10 minutos" },
  { name: "Thiago", city: "Belo Horizonte, MG", time: "há 7 minutos" },
  { name: "Rafael", city: "Curitiba, PR", time: "há 14 minutos" },
  { name: "Gabriel", city: "Rio de Janeiro, RJ", time: "há 11 minutos" },
  { name: "Pedro", city: "Fortaleza, CE", time: "há 13 minutos" },
  { name: "Lucas", city: "Salvador, BA", time: "há 16 minutos" },
  { name: "João", city: "Recife, PE", time: "há 6 minutos" },
  { name: "Maria", city: "Goiânia, GO", time: "há 15 minutos" },
  { name: "Pedro", city: "Porto Alegre, RS", time: "há 3 minutos" },
  { name: "Ana", city: "Recife, PE", time: "há 6 minutos" },
  { name: "Mariana", city: "Goiânia, GO", time: "há 15 minutos" },
  { name: "Pedro", city: "Porto Alegre, RS", time: "há 3 minutos" },
];

export function SalesPopup() {
  const [currentBuyer, setCurrentBuyer] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Embaralhar a ordem inicial para não parecer repetitivo sempre
    setCurrentBuyer(Math.floor(Math.random() * buyers.length));

    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 6000); // Fica na tela por 6 segundos
      return () => clearTimeout(hideTimer);
    } else {
      // Tempo aleatório entre 8 e 15 segundos para mostrar o próximo
      const nextDelay = Math.floor(Math.random() * 7000) + 8000;
      const showTimer = setTimeout(() => {
        setCurrentBuyer((prev) => (prev + 1) % buyers.length);
        setIsVisible(true);
      }, nextDelay);
      return () => clearTimeout(showTimer);
    }
  }, [isVisible, isMounted]);

  if (!isMounted) return null;

  const buyer = buyers[currentBuyer];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm w-[calc(100%-3rem)] sm:w-auto"
        >
          <div className="bg-card border-2 border-foreground shadow-[4px_4px_0_0_#1a1a1a] p-4 rounded-xl flex items-start gap-4 relative pr-10">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Fechar notificação"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="bg-primary text-primary-foreground p-3 rounded-full border-2 border-foreground flex-shrink-0 mt-1 shadow-[2px_2px_0_0_#1a1a1a]">
              <ShoppingBag className="w-5 h-5" />
            </div>

            <div className="flex flex-col">
              <p className="text-sm font-extrabold text-foreground leading-tight">
                {buyer.name} de {buyer.city}
              </p>
              <p className="text-sm font-medium text-foreground/80 mt-1">
                acabou de comprar O Guia Prático
              </p>
              <p className="text-xs font-bold text-primary mt-2">
                {buyer.time}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
