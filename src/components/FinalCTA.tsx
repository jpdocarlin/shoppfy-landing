"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="section relative">
      <div className="container-px mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-orange/30 bg-[linear-gradient(160deg,rgba(255,107,0,0.14),rgba(7,7,7,0.4))] px-8 py-16 text-center sm:px-16"
        >
          <div className="glow left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,107,0,0.3),transparent_70%)]" />

          <div className="relative">
            <p className="mb-4 text-[12.5px] font-medium uppercase tracking-[0.14em] text-orange-lighter">
              Vagas abertas nesse lote
            </p>
            <h2 className="mx-auto max-w-2xl font-display text-[2.1rem] font-medium leading-tight tracking-[-0.02em] text-foreground sm:text-[2.6rem]">
              Sua operação de afiliado merece infraestrutura de verdade
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15.5px] text-muted">
              Acesso liberado na hora, com 7 dias de garantia. Se não for pra você,
              devolvemos o seu dinheiro.
            </p>
            <div className="mt-9 flex justify-center">
              <Button
                href="#planos"
                size="lg"
                icon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
              >
                Quero começar agora
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
