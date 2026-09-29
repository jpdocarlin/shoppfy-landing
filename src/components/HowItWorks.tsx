"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Escolha um produto do fornecedor",
    description:
      "Catálogo com milhares de produtos prontos pra revender, com preço de custo, estoque e fotos reais já incluídos.",
  },
  {
    n: "02",
    title: "Gere o anúncio com 1 clique",
    description:
      "A IA escreve título e descrição e escolhe a categoria certa sozinha. Você só define sua margem de lucro.",
  },
  {
    n: "03",
    title: "Publique direto na sua loja Shopee",
    description:
      "O anúncio vai ao ar com foto, título, descrição e preço prontos — sem copiar e colar nada no Seller Center.",
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
