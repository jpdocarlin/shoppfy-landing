"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const FAQS = [
  {
    q: "Preciso ter fornecedor próprio?",
    a: "Não. O catálogo de fornecedor já vem dentro da plataforma — você escolhe o produto que quer vender e o Shoppfy cuida do resto, do custo ao estoque.",
  },
  {
    q: "Preciso tirar foto ou escrever a descrição do anúncio?",
    a: "Não. A IA gera o título e a descrição sozinha, e a foto do produto já vem pronta do catálogo do fornecedor — você só revisa e publica.",
  },
  {
    q: "Preciso entender de tecnologia ou IA?",
    a: "Não. Todo o processo é guiado dentro da plataforma: escolher produto, gerar o anúncio e publicar. A interface foi desenhada pra ser simples mesmo pra quem nunca usou nenhuma ferramenta parecida.",
  },
  {
    q: "Qual a diferença entre o plano mensal e o vitalício?",
    a: "Ambos liberam acesso completo à plataforma. No mensal você paga R$149 todo mês e cancela quando quiser. No vitalício você paga R$249 uma única vez e tem acesso pra sempre, incluindo todas as atualizações futuras.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Se não for pra você, devolvemos 100% do valor, sem burocracia.",
  },
  {
    q: "Funciona só pra Shopee?",
    a: "Hoje o Shoppfy publica anúncio direto na Shopee e no Mercado Livre, com o mesmo catálogo de fornecedor e a mesma IA cuidando do anúncio nas duas.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section relative">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Accordion.Root type="single" collapsible className="space-y-3">
            {FAQS.map((item, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-white/[0.015] transition-colors data-[state=open]:border-border-strong data-[state=open]:bg-white/[0.03]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[14.5px] font-medium text-foreground">
                    {item.q}
                    <ChevronDown className="h-4 w-4 flex-shrink-0 text-muted-2 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-orange-lighter" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden px-5 text-[13.5px] leading-relaxed text-muted data-[state=closed]:animate-[accordion-up_0.25s_ease] data-[state=open]:animate-[accordion-down_0.25s_ease]">
                  <p className="pb-4">{item.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
