"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/DashboardMockup";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.09, ease: EASE },
  }),
};

const STATS = [
  { value: "398+", label: "produtos validados" },
  { value: "12s", label: "pra gerar 1 vídeo com IA" },
  { value: "27k+", label: "links de afiliado gerenciados" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px] text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-lighter shadow-[0_0_8px_2px_rgba(255,158,44,0.6)]" />
            A nova infraestrutura pro afiliado Shopee
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-[2.6rem] font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-[3.4rem] lg:text-[3.75rem]"
          >
            O sistema operacional
            <br />
            de quem <span className="text-gradient">domina a Shopee</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted"
          >
            Shoppfy encontra produtos vencedores, gera seu link de afiliado e
            cria vídeos com IA — roteiro, legenda e título inclusos. Uma
            plataforma, zero trabalho manual, resultado de quem trata isso
            como negócio.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#planos" size="lg" icon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}>
              Começar agora
            </Button>
            <Button href="#como-funciona" variant="secondary" size="lg" icon={<PlayCircle className="h-4 w-4" />}>
              Ver como funciona
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-medium text-foreground">{s.value}</p>
                <p className="mt-1 text-[12.5px] leading-snug text-muted-2">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
