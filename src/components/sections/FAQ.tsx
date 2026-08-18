import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';

export function FAQ() {
  const faqs = [
    {
      q: "Qual a diferença entre o Essencial e o PRO?",
      a: "O Essencial é a opção de entrada e concentra os materiais necessários para ajudar você a organizar seu conteúdo e saber o que postar. O PRO inclui o Essencial e adiciona os materiais de WhatsApp, templates, organização financeira, vitrine e estratégia."
    },
    {
      q: "Preciso saber usar Canva?",
      a: "Não. Os templates já estão prontos e são extremamente fáceis de editar, bastando colocar a sua foto e o seu preço. Se você tiver qualquer dificuldade, é só nos chamar."
    },
    {
      q: "Preciso ter muitos seguidores?",
      a: "Não. A estrutura foi desenhada justamente para que você consiga atrair a atenção e conduzir a venda com o público que você já tem ou que vai começar a construir agora."
    },
    {
      q: "Posso usar para qualquer tipo de revenda?",
      a: "Sim, desde que os produtos e materiais sejam compatíveis com sua atividade. A lógica de atração e vendas funciona para moda, beleza, semijoias e quase todo tipo de produto físico."
    },
    {
      q: "Como recebo o acesso?",
      a: "Você receberá o acesso digital via e-mail imediatamente após a confirmação do pagamento. O acesso é feito através da nossa plataforma segura."
    },
    {
      q: "Preciso aparecer nos Stories?",
      a: "Não necessariamente. Vários roteiros e templates são desenhados apenas para destacar os produtos, criar desejo e conduzir a venda sem você precisar colocar o rosto na câmera todos os dias."
    },
    {
      q: "Isso garante vendas?",
      a: "Não. Nenhum material pode garantir vendas. A proposta é fornecer uma estrutura, ideias e mensagens prontas para ajudar você a executar melhor sua divulgação e suas conversas comerciais."
    }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#121212] text-zinc-100 overflow-hidden z-0">
      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100">
            Perguntas Frequentes
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FadeIn key={idx} delay={0.05 * idx}>
              <details className="group bg-[#1a1a1a] border border-zinc-800 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden cursor-pointer hover:border-zinc-700 transition-colors">
                <summary className="flex items-center justify-between p-6 md:p-8 font-bold text-lg text-zinc-100">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="p-6 md:p-8 pt-0 text-zinc-400 font-medium leading-relaxed">
                  {faq.a}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
