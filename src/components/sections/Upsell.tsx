import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, LayoutTemplate } from "lucide-react";

export function Upsell() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto text-center bg-foreground text-background p-8 md:p-16 rounded-3xl border-4 border-primary shadow-[12px_12px_0_0_#459A44]">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-8 border-2 border-background">
          <LayoutTemplate className="w-8 h-8 text-primary-foreground" />
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-primary">
          Quer levar sua revenda para o próximo nível?
        </h2>

        <p className="text-lg md:text-2xl font-bold opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
          O Produto ajuda você a organizar sua estratégia. Mas, se você quiser uma
          estrutura pronta para apresentar seus produtos, podemos criar uma{" "}
          <strong>vitrine digital personalizada</strong>, com seus produtos,
          informações, promoções e botão direto para o WhatsApp.
        </p>

        <Button
          size="lg"
          className="text-lg md:text-xl py-6 px-8 bg-primary text-primary-foreground border-2 border-primary hover:bg-primary/90 shadow-none hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#f5f4eb]"
        >
          <a href="https://joaovitoroliveira.com.br/start">
            QUERO UMA VITRINE PERSONALIZADA
          </a>
          <ArrowRight className="ml-2 w-6 h-6" />
        </Button>
      </div>
    </Section>
  );
}
