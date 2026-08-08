import React from "react";
import { Section } from "@/components/ui/Section";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 border-t-8 border-primary">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold uppercase mb-2 text-primary">
            O Guia Prático
          </h2>
          <p className="font-bold opacity-70">
            © 2026 Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 font-bold opacity-80 text-sm">
          <a href="#" className="hover:text-primary transition-colors">
            Políticas de Privacidade
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Contato
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center mt-12 opacity-50 text-xs font-bold px-4">
        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
        Depois que você sai do Facebook, a responsabilidade não é deles e sim do
        nosso site. Nós não vendemos o seu e-mail ou qualquer informação para
        terceiros.
      </div>
    </footer>
  );
}
