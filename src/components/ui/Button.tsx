"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  icon?: ReactNode;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  icon,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out will-change-transform active:scale-[0.97]";

  const sizes = {
    md: "px-6 py-3 text-[14.5px]",
    lg: "px-8 py-4 text-[16px]",
  };

  const variants = {
    primary:
      "text-white bg-[linear-gradient(135deg,#FF9E2C,#FF6B00)] shadow-[0_0_0_1px_rgba(255,158,44,0.4),0_8px_24px_-6px_rgba(255,107,0,0.55)] hover:shadow-[0_0_0_1px_rgba(255,158,44,0.6),0_10px_36px_-4px_rgba(255,107,0,0.75)] hover:-translate-y-0.5 hover:brightness-110",
    secondary:
      "text-foreground glass hover:border-border-strong hover:-translate-y-0.5 hover:bg-white/[0.06]",
    ghost:
      "text-muted hover:text-foreground",
  };

  const content = (
    <>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.35),transparent)]" />
      )}
      <span className="relative">{children}</span>
      {icon && <span className="relative">{icon}</span>}
    </>
  );

  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
