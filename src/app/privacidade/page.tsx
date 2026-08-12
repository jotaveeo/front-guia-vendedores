import React from 'react';
import { Section } from '@/components/ui/Section';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "Políticas de Privacidade | O Produto Prático",
};

export default function Privacidade() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Section className="pt-24 pb-16 max-w-4xl mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2 font-bold text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Voltar para o site
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8">
          Políticas de Privacidade
        </h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 font-medium space-y-6">
          <p>
            Sua privacidade é importante para nós. Esta política descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais.
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Coleta de Informações</h2>
          <p>
            Ao realizar uma compra ou entrar em contato, coletamos os dados estritamente necessários para o processamento da transação e envio do produto (como nome, e-mail e telefone), todos geridos de forma segura pela nossa plataforma de pagamento.
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Uso das Informações</h2>
          <p>
            Suas informações são utilizadas apenas para:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Processar pagamentos e entregar o acesso ao material digital.</li>
            <li>Enviar atualizações sobre sua compra ou suporte ao cliente.</li>
            <li>Enviar materiais promocionais, desde que você não opte pelo cancelamento (opt-out).</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Compartilhamento de Dados</h2>
          <p>
            Nós não vendemos, não alugamos e não compartilhamos suas informações pessoais com terceiros para fins de marketing. O compartilhamento ocorre exclusivamente com a intermediadora de pagamentos para garantir a segurança da transação financeira.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cookies</h2>
          <p>
            Nosso site pode utilizar cookies do navegador (como o pixel do Facebook e Google Analytics) para melhorar a experiência do usuário e mensurar conversões das nossas campanhas. Você pode gerenciar essas preferências nas configurações do seu próprio navegador.
          </p>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
