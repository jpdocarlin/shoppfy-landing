"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";

const COMMON = [
  "Acesso completo à plataforma",
  "Curadoria de produtos vencedores e virais",
  "IA para vídeos, roteiros, legendas e títulos",
  "Extensão de link automático",
  "Calendário de postagens e biblioteca de criativos",
  "Dashboard de desempenho",
];

export function Pricing() {
  return (
    <section id="planos" className="section relative">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Planos"
          title="Um investimento, acesso completo"
          description="Sem letras miúdas. Escolha como prefere pagar — o produto é exatamente o mesmo."
        />

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-border bg-white/[0.015] p-8"
          >
            <p className="mb-1 text-[13px] font-medium uppercase tracking-wide text-muted-2">
              Plano mensal
            </p>
            <div className="mb-1 flex items-baseline gap-1.5">
              <span className="text-[20px] font-medium text-muted">R$</span>
              <span className="font-display text-[46px] font-medium leading-none text-foreground">
                149
              </span>
              <span className="text-[14px] text-muted-2">/mês</span>
            </div>
            <p className="mb-7 text-[12.5px] text-muted-2">Renovação mensal, cancele quando quiser</p>

            <ul className="mb-8 space-y-3">
              {COMMON.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-muted">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              href="https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=wrtzxwu"
              variant="secondary"
              size="lg"
              className="w-full justify-center"
            >
              Assinar mensal
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative scale-100 rounded-2xl border-2 border-orange/60 bg-[linear-gradient(180deg,rgba(255,107,0,0.08),rgba(255,107,0,0.01))] p-8 shadow-[0_30px_80px_-25px_rgba(255,107,0,0.45)] md:scale-[1.04]"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[linear-gradient(135deg,#FF9E2C,#FF6B00)] px-4 py-1.5 text-[11px] font-medium tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(255,107,0,0.7)]">
              MAIS VENDIDO · MELHOR CUSTO-BENEFÍCIO
            </div>

            <p className="mb-1 text-[13px] font-medium uppercase tracking-wide text-orange-lighter">
              Plano vitalício
            </p>
            <div className="mb-1 flex items-baseline gap-1.5">
              <span className="text-[20px] font-medium text-muted">R$</span>
              <span className="font-display text-[46px] font-medium leading-none text-foreground">
                249
              </span>
              <span className="text-[14px] text-muted-2">pagamento único</span>
            </div>
            <p className="mb-7 text-[12.5px] text-muted-2">Acesso pra sempre, sem mensalidade</p>

            <ul className="mb-8 space-y-3">
              {COMMON.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  {item}
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-[13.5px] font-medium text-orange-lighter">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-lighter" />
                Todas as atualizações futuras inclusas
              </li>
            </ul>

            <Button
              href="https://checkout.applyfy.com.br/checkout/cmrujoz4g08o101oruu9qhwnu?offer=qlfvx7s"
              size="lg"
              className="w-full justify-center"
            >
              Quero o vitalício
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass mx-auto mt-8 flex max-w-2xl items-center justify-center gap-3 rounded-2xl px-6 py-4 text-center"
        >
          <span className="text-[13.5px] text-muted">
            <strong className="text-foreground">Garantia incondicional de 7 dias.</strong> Não gostou?
            Devolvemos 100% do valor, sem perguntas.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
