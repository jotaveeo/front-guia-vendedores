import React from 'react';
import { Section } from '@/components/ui/Section';
import { Footer } from '@/components/sections/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "Termos de Uso | O Produto Prático",
};

export default function Termos() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-background">
      <Section className="pt-24 pb-16 max-w-4xl mx-auto w-full">
        <Link href="/" className="inline-flex items-center gap-2 font-bold text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Voltar para o site
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8">
          Termos de Uso
        </h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 font-medium space-y-6">
          <p>
            Ao acessar e utilizar os materiais fornecidos pelo site "O Produto Prático", você concorda com estes termos.
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Do Produto</h2>
          <p>
            O "Produto Prático" é um infoproduto digital em formato Produto, desenvolvido para fins educacionais e informativos. Todo o conteúdo é protegido por direitos autorais e não pode ser revendido ou distribuído sem autorização.
          </p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Do Acesso</h2>
          <p>
            Após a confirmação do pagamento, você receberá acesso ao material através do e-mail cadastrado na plataforma de compra. O acesso ao material baixável é contínuo, não havendo limitação de tempo para consumo do arquivo já salvo em seu dispositivo.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Da Garantia</h2>
          <p>
            Oferecemos uma garantia incondicional estabelecida pela plataforma de pagamento. Caso você sinta que o material não atendeu às suas expectativas, o reembolso integral poderá ser solicitado diretamente na plataforma dentro do prazo de garantia estipulado.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Limitação de Responsabilidade</h2>
          <p>
            Os resultados obtidos variam de pessoa para pessoa. Não garantimos faturamento mínimo ou sucesso absoluto nas suas vendas, uma vez que isso depende da execução individual e de inúmeros outros fatores de mercado.
          </p>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
