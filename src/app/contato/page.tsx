import React from 'react';
import { Section } from '@/components/ui/Section';
import { Footer } from '@/components/sections/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, Mail } from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export const metadata = {
  title: "Contato | O Guia Prático",
};

export default function Contato() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Section className="flex-1 flex flex-col justify-center pt-24 pb-16 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" /> Voltar para o site
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Fale Conosco
        </h1>
        <p className="text-lg font-bold text-foreground/80 mb-12">
          Se você precisa de suporte, tem dúvidas sobre o e-book, ou tem interesse no serviço da Vitrine Digital, estou à disposição!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="flex flex-col items-start gap-4">
            <div className="bg-[#25D366] text-white p-4 rounded-full border-2 border-foreground shadow-[2px_2px_0_0_#1a1a1a]">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold">WhatsApp</h2>
            <p className="text-foreground/80 font-medium flex-grow">A forma mais rápida de falar comigo. Atendimento para alunos e futuros parceiros.</p>
            <a href="https://wa.me/5585991619768" target="_blank" rel="noopener noreferrer" className="mt-auto w-full pt-4">
              <Button className="w-full text-lg bg-[#25D366] text-white hover:bg-[#20bd5a] border-2 border-foreground shadow-[4px_4px_0_0_#1a1a1a] hover:shadow-[2px_2px_0_0_#1a1a1a] hover:translate-y-[2px] hover:translate-x-[2px]">
                CHAMAR NO ZAP
              </Button>
            </a>
          </Card>

          <Card className="flex flex-col items-start gap-4 bg-foreground text-background">
            <div className="bg-primary text-primary-foreground p-4 rounded-full border-2 border-background shadow-[2px_2px_0_0_#459A44]">
              <InstagramIcon className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold text-background">Instagram</h2>
            <p className="text-background/80 font-medium flex-grow">Me acompanhe por lá e mande um direct se preferir falar pela plataforma.</p>
            <a href="https://instagram.com/joaovitorroliveeira" target="_blank" rel="noopener noreferrer" className="mt-auto w-full pt-4">
              <Button className="w-full text-lg bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-background shadow-[4px_4px_0_0_#f5f4eb] hover:shadow-[2px_2px_0_0_#f5f4eb] hover:translate-y-[2px] hover:translate-x-[2px]">
                @JOAOVITORROLIVEEIRA
              </Button>
            </a>
          </Card>
        </div>

        <div className="mt-16 text-center text-foreground/60 font-bold">
          <p>João Vitor Oliveira — Desenvolvimento e Processos Digitais</p>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
