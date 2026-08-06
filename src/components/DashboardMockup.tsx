"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Sparkles, TrendingUp } from "lucide-react";

const CHART_POINTS = [18, 26, 22, 34, 30, 44, 40, 58, 52, 68, 64, 82];

function Sparkline() {
  const w = 260;
  const h = 64;
  const max = Math.max(...CHART_POINTS);
  const min = Math.min(...CHART_POINTS);
  const step = w / (CHART_POINTS.length - 1);

  const points = CHART_POINTS.map((v, i) => {
    const x = i * step;
    const y = h - ((v - min) / (max - min)) * h;
    return `${x},${y}`;
  }).join(" ");

  const area = `0,${h} ${points} ${w},${h}`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-16 w-full overflow-visible">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF9E2C" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FF9E2C" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sparkLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF9E2C" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#sparkFill)" />
      <polyline
        points={points}
        fill="none"
        stroke="url(#sparkLine)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PRODUCTS = [
  { name: "Fone TWS Pro Max", tag: "Viral", trend: "+312%", color: "from-orange-lighter to-orange" },
  { name: "Organizador Modular", tag: "Em alta", trend: "+184%", color: "from-orange to-orange-light" },
  { name: "Luminária LED RGB", tag: "IA pronta", trend: "+96%", color: "from-orange-light to-orange-lighter" },
];

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 6, rotateY: -6 }}
      animate={{
        opacity: 1,
        y: [0, -14, 0],
        rotateX: [6, 3, 6],
        rotateY: [-6, -3, -6],
      }}
      transition={{
        opacity: { duration: 0.9, ease: "easeOut" },
        y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        rotateX: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 9, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      className="relative mx-auto w-full max-w-[520px]"
    >
      <div className="glow -inset-8 bg-[radial-gradient(circle,rgba(255,107,0,0.35),transparent_70%)]" />

      <div className="border-gradient relative rounded-2xl p-5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)]">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-[11px] text-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-lighter" />
            shoppfy.app/dashboard
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-white/[0.02] p-4">
            <p className="text-[11px] text-muted-2">Comissão hoje</p>
            <p className="font-display text-2xl font-medium text-foreground">
              R$ 1.284<span className="text-muted-2">,90</span>
            </p>
            <p className="mt-1 flex items-center gap-1 text-[11px] font-medium text-emerald-400">
              <TrendingUp className="h-3 w-3" /> +38% vs ontem
            </p>
          </div>
          <div className="rounded-xl border border-border bg-white/[0.02] p-4">
            <p className="text-[11px] text-muted-2">Cliques nos links</p>
            <p className="font-display text-2xl font-medium text-foreground">4.921</p>
            <div className="mt-2 -ml-1">
              <Sparkline />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white/[0.02] p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-[12px] font-medium text-foreground">
              <Flame className="h-3.5 w-3.5 text-orange-lighter" /> Produtos em alta
            </p>
            <span className="flex items-center gap-1 text-[11px] text-muted-2">
              <Sparkles className="h-3 w-3" /> curadoria por IA
            </span>
          </div>

          <div className="space-y-2">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 rounded-lg border border-border/60 bg-white/[0.015] px-3 py-2.5"
              >
                <div
                  className={`h-8 w-8 flex-shrink-0 rounded-md bg-gradient-to-br ${p.color}`}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12.5px] font-medium text-foreground">{p.name}</p>
                  <p className="text-[11px] text-muted-2">{p.tag}</p>
                </div>
                <span className="flex items-center gap-0.5 text-[11px] font-medium text-emerald-400">
                  {p.trend} <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -right-8 -top-6 flex items-center gap-2 rounded-xl px-3 py-2.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#FF9E2C,#FF6B00)]">
          <Sparkles className="h-3.5 w-3.5 text-white" />
        </span>
        <div>
          <p className="text-[11px] font-medium text-foreground">Vídeo gerado</p>
          <p className="text-[10px] text-muted-2">pela IA em 12s</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="glass absolute -bottom-6 -left-8 rounded-xl px-3.5 py-2.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]"
      >
        <p className="text-[11px] text-muted-2">Nível de afiliado</p>
        <p className="font-display text-[13px] font-medium text-orange-lighter">Elite · Top 2%</p>
      </motion.div>
    </motion.div>
  );
}
