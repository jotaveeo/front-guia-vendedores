import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { Footer } from '@/components/sections/Footer';
import { CheckCircle2, Mail, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Obrigado pela compra! | O Guia Prático",
  description: "Seu acesso foi liberado com sucesso.",
};

export default function Obrigado() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Section className="flex-1 flex items-center justify-center pt-24 pb-16">
        <FadeIn className="max-w-3xl w-full mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-foreground shadow-[6px_6px_0_0_#1a1a1a]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Compra Aprovada!
            </h1>
            <p className="text-xl font-bold text-foreground/80 text-balance">
              Parabéns pela decisão. O seu acesso ao Guia Prático foi liberado com sucesso.
            </p>
          </div>

          <Card className="border-4 border-foreground shadow-[8px_8px_0_0_#1a1a1a] mb-12">
            <h2 className="text-2xl font-extrabold mb-6 text-foreground text-center">
              Próximos passos
            </h2>
            
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 items-start">
                <div className="bg-primary text-primary-foreground p-3 rounded-full border-2 border-foreground flex-shrink-0 mt-1 shadow-[2px_2px_0_0_#1a1a1a]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-foreground mb-1">1. Acesse seu e-mail</h3>
                  <p className="text-foreground/80 font-medium text-lg leading-relaxed">Você acabou de receber um e-mail da plataforma com o seu link de acesso exclusivo. (Verifique também sua caixa de spam ou promoções).</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-foreground text-background p-3 rounded-full border-2 border-primary flex-shrink-0 mt-1 shadow-[2px_2px_0_0_#459A44]">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-foreground mb-1">2. Acesse o material</h3>
                  <p className="text-foreground/80 font-medium text-lg leading-relaxed">Você já pode abrir o Guia e baixar todos os bônus e checklists diretamente no seu celular ou computador.</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 bg-card border-4 border-foreground p-8 md:p-10 rounded-2xl shadow-[8px_8px_0_0_#1a1a1a] text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-foreground">
              Quer ir além e construir a sua própria página?
            </h2>
            <p className="text-lg text-foreground/80 font-bold mb-8 text-balance max-w-xl mx-auto">
              Para complementar o seu novo e-book e acelerar seus resultados, entre em contato comigo! Vamos conversar sobre como podemos estruturar a sua própria Vitrine Digital para você vender de forma ainda mais profissional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="https://wa.me/5585991619768" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-lg px-8 py-6 bg-[#25D366] text-white border-2 border-foreground shadow-[4px_4px_0_0_#1a1a1a] hover:shadow-[2px_2px_0_0_#1a1a1a] hover:translate-y-[2px] hover:translate-x-[2px] hover:bg-[#20bd5a]">
                  MEU WHATSAPP
                </Button>
              </a>
              <a href="https://instagram.com/joaovitorroliveeira" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full text-lg px-8 py-6 bg-foreground text-background border-2 border-foreground shadow-[4px_4px_0_0_#1a1a1a] hover:shadow-[2px_2px_0_0_#1a1a1a] hover:translate-y-[2px] hover:translate-x-[2px]">
                  MEU INSTAGRAM
                </Button>
              </a>
            </div>
            
            <p className="mt-8 font-bold opacity-60 text-sm">
              João Vitor Oliveira — Desenvolvimento e Processos Digitais
            </p>
          </div>
        </FadeIn>
      </Section>
      <Footer />
    </main>
  );
}
