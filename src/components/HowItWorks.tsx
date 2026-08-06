"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Escolha um produto validado",
    description:
      "Catálogo com produtos vencedores, virais e em alta, filtrados por dados reais de venda e entrega rápida.",
  },
  {
    n: "02",
    title: "Gere link e vídeo com 1 clique",
    description:
      "A extensão cria seu link de afiliado sozinha. A IA gera roteiro, legenda, título e o vídeo pronto pra postar.",
  },
  {
    n: "03",
    title: "Publique e acompanhe o resultado",
    description:
      "Calendário de postagens, biblioteca de criativos e dashboard mostram exatamente o que está performando.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Como funciona"
          title="Três passos entre você e o primeiro resultado"
        />

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent md:block" />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="mb-6 flex h-[76px] w-[76px] items-center justify-center rounded-2xl border border-border-strong bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] font-display text-[22px] font-medium text-orange-lighter shadow-[0_0_0_1px_rgba(255,158,44,0.12),0_20px_40px_-20px_rgba(255,107,0,0.35)]">
                {s.n}
              </div>
              <h3 className="mb-2.5 font-display text-[18px] font-medium text-foreground">
                {s.title}
              </h3>
              <p className="max-w-xs text-[14px] leading-relaxed text-muted">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
