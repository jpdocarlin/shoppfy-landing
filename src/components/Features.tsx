"use client";

import { motion } from "framer-motion";
import {
  AlignLeft,
  Bot,
  Calendar,
  Captions,
  Cloud,
  Film,
  Flame,
  FolderKanban,
  Gauge,
  Image as ImageIcon,
  LayoutDashboard,
  Link2,
  MousePointerClick,
  RefreshCw,
  TrendingUp,
  Type,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

type Feature = { icon: LucideIcon; label: string };

const GROUPS: { title: string; description: string; items: Feature[] }[] = [
  {
    title: "Descoberta de produtos",
    description: "Nunca mais escolha um produto no achismo.",
    items: [
      { icon: TrendingUp, label: "Produtos vencedores" },
      { icon: Flame, label: "Produtos virais" },
      { icon: Gauge, label: "Produtos em alta" },
      { icon: TrendingUp, label: "Tendências em tempo real" },
    ],
  },
  {
    title: "Inteligência artificial",
    description: "O trabalho criativo, feito em segundos.",
    items: [
      { icon: Film, label: "IA para criação de vídeos" },
      { icon: Bot, label: "IA para roteiros" },
      { icon: Captions, label: "IA para legendas" },
      { icon: Type, label: "IA para títulos" },
      { icon: AlignLeft, label: "IA para descrições" },
    ],
  },
  {
    title: "Organização e conteúdo",
    description: "Tudo no lugar certo, sempre à mão.",
    items: [
      { icon: Calendar, label: "Calendário de postagens" },
      { icon: ImageIcon, label: "Biblioteca de criativos" },
      { icon: FolderKanban, label: "Organização de conteúdos" },
      { icon: Link2, label: "Área de links de afiliado" },
    ],
  },
  {
    title: "Plataforma",
    description: "Infraestrutura de nível profissional.",
    items: [
      { icon: LayoutDashboard, label: "Dashboard de desempenho" },
      { icon: Wrench, label: "Ferramentas exclusivas" },
      { icon: Cloud, label: "Plataforma em nuvem" },
      { icon: RefreshCw, label: "Atualizações constantes" },
      { icon: MousePointerClick, label: "Interface simples" },
      { icon: Zap, label: "Alta velocidade" },
    ],
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="section relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Funcionalidades"
          title="Cada ferramenta que um afiliado sério precisa"
          description="Organizado em quatro frentes — descoberta, criação, organização e plataforma — pra você nunca se perder no que fazer a seguir."
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-border bg-white/[0.015] p-6 sm:p-7"
            >
              <div className="mb-5">
                <h3 className="font-display text-[17px] font-medium text-foreground">
                  {group.title}
                </h3>
                <p className="mt-1 text-[13px] text-muted-2">{group.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 transition-colors duration-200 hover:border-border hover:bg-white/[0.03]"
                  >
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-white/[0.03] transition-colors group-hover:border-orange/40">
                      <item.icon className="h-4 w-4 text-orange-lighter" strokeWidth={1.75} />
                    </span>
                    <span className="text-[13px] leading-snug text-muted">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
