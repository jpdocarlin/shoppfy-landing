"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-px mx-auto max-w-7xl">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300",
            scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]" : "bg-transparent"
          )}
        >
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#FF9E2C,#FF6B00)] font-display text-[15px] font-bold text-white shadow-[0_0_0_1px_rgba(255,158,44,0.4),0_6px_18px_-4px_rgba(255,107,0,0.6)]">
              S
            </span>
            <span className="font-display text-[17px] font-medium tracking-tight text-foreground">
              Shoppfy
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-[13.5px] text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <Button href="#planos" size="md" className="!py-2.5 !px-5 !text-[13.5px]">
            Começar agora
          </Button>
        </div>
      </div>
    </header>
  );
}
