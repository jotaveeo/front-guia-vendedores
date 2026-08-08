import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';

export function Product() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="w-full max-w-sm rounded-xl border-4 border-foreground shadow-[12px_12px_0_0_#1a1a1a] overflow-hidden relative aspect-[384/600] bg-background">
            <Image 
              src="/cover.svg" 
              alt="Capa d'O Guia Prático" 
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Conheça <br/>
            <span className="text-primary">O Guia Prático</span>
          </h2>
          <p className="text-lg text-foreground/80 font-medium leading-relaxed">
            Um guia prático e direto ao ponto, desenvolvido exclusivamente para ajudar revendedoras, consultoras e pequenas vendedoras independentes a organizarem sua presença digital.
          </p>
          <p className="text-lg text-foreground/80 font-medium leading-relaxed">
            A ideia central é simples: você já tem clientes e já vende. O produto não tenta substituir o que funciona, mas ensina a utilizar melhor o WhatsApp e o Instagram, criando processos para você vender mais rápido e com menos confusão.
          </p>
        </div>
      </div>
    </Section>
  );
}
