import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';

export function Hero() {
  return (
    <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <FadeIn className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground text-balance">
            Você já vende pelo WhatsApp e Instagram. <br className="hidden lg:block" />
            <span className="text-primary">Agora organize sua forma de vender.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium text-pretty">
            Um guia prático para revendedoras que querem deixar para trás a improvisação e criar uma presença digital mais organizada, profissional e fácil de comprar.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <Button size="lg" className="text-lg w-full sm:w-fit px-10 py-6 border-2 border-foreground shadow-[4px_4px_0_0_#1a1a1a] hover:shadow-[2px_2px_0_0_#1a1a1a] hover:translate-y-[2px] hover:translate-x-[2px]">
              <a href="https://pay.cakto.com.br/z7475c6_1028186">QUERO ORGANIZAR MINHAS VENDAS</a>
            </Button>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-foreground/70">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary"/> Acesso imediato</span>
              <span>•</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary"/> Material digital</span>
              <span>•</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary"/> Leia no celular</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-xl border-4 border-foreground shadow-[12px_12px_0_0_#1a1a1a] overflow-hidden relative aspect-[384/600] bg-background">
            <Image 
              src="/cover.svg" 
              alt="Capa d'O Guia Prático" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
