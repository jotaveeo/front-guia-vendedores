import React from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <Section variant="muted" className="border-t-4 border-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-8">
          Você já construiu sua carteira de clientes.
          <br />
          <span className="text-primary mt-4 block">
            Agora é hora de organizar a forma como você apresenta e vende o que
            oferece.
          </span>
        </h2>

        <Button
          size="lg"
          className="w-full sm:w-fit text-xl py-6 px-12 border-2 border-foreground shadow-[4px_4px_0_0_#1a1a1a] hover:shadow-[2px_2px_0_0_#1a1a1a] hover:translate-y-[2px] hover:translate-x-[2px]"
        >
          <a href="https://pay.cakto.com.br/z7475c6_1028186">QUERO COMEÇAR AGORA</a>
        </Button>
      </div>
    </Section>
  );
}
