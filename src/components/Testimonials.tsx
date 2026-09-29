"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const TESTIMONIALS = [
  {
    initials: "MR",
    name: "Marina R.",
    role: "Revendedora há 4 meses",
    quote:
      "Eu travava justamente na parte de tirar foto boa e escrever descrição. Com o Shoppfy, escolho o produto e o anúncio sai pronto sozinho.",
  },
  {
    initials: "TA",
    name: "Thiago A.",
    role: "Lojista há 7 meses",
    quote:
      "O que mais mudou foi parar de montar anúncio do zero. Hoje eu publico em minutos, direto na minha loja Shopee.",
  },
  {
    initials: "CP",
    name: "Camila P.",
    role: "Revendedora há 2 meses",
    quote:
      "Comecei sem entender nada de Shopee. O painel guia cada passo até o anúncio ir ao ar, sem eu me perder em nenhuma etapa.",
  },
];

export function Testimonials() {
  return (
    <section className="section relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Quem usa" title="Resultado de quem leva a sério" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-orange-lighter text-orange-lighter" />
                ))}
              </div>
              <p className="mb-6 text-[14px] leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[linear-gradient(135deg,#FF9E2C,#FF6B00)] text-[12px] font-medium text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-foreground">{t.name}</p>
                  <p className="text-[12px] text-muted-2">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
