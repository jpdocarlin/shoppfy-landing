"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const ROWS = [
  { label: "Escolha de produto", without: "Tentativa e erro", with: "Curadoria validada por dados" },
  { label: "Link de afiliado", without: "Copiar e colar manualmente", with: "Gerado sozinho, 1 clique" },
  { label: "Criação de vídeo", without: "Precisa aparecer e editar", with: "IA gera tudo em segundos" },
  { label: "Organização", without: "Planilha e bloco de notas", with: "Painel único e automático" },
  { label: "Tempo até o resultado", without: "Semanas de tentativa", with: "Minutos" },
];

export function Comparison() {
  return (
    <section className="section relative">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="A diferença" title="O que muda quando você tem o Shoppfy" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-2xl border border-border"
        >
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-white/[0.02] text-[12.5px] font-medium uppercase tracking-wide text-muted-2">
            <div className="px-5 py-4 sm:px-7">Critério</div>
            <div className="px-4 py-4 text-center">Sem Shoppfy</div>
            <div className="border-l border-border bg-[linear-gradient(180deg,rgba(255,107,0,0.08),transparent)] px-4 py-4 text-center text-orange-lighter">
              Com Shoppfy
            </div>
          </div>

          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1fr_1fr_1fr] items-center text-[13.5px] ${
                i !== ROWS.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="px-5 py-4 font-medium text-foreground sm:px-7">{row.label}</div>
              <div className="flex items-center justify-center gap-2 px-4 py-4 text-center text-muted-2">
                <X className="h-3.5 w-3.5 flex-shrink-0 text-red-400/70" />
                <span className="hidden sm:inline">{row.without}</span>
              </div>
              <div className="flex items-center justify-center gap-2 border-l border-border bg-white/[0.015] px-4 py-4 text-center text-foreground">
                <Check className="h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                <span className="hidden sm:inline">{row.with}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
