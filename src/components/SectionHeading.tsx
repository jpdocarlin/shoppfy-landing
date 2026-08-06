"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mx-auto mb-14 max-w-2xl",
        align === "center" ? "text-center" : "text-left ml-0",
        className
      )}
    >
      <p className="mb-3 text-[12.5px] font-medium uppercase tracking-[0.14em] text-orange-lighter">
        {eyebrow}
      </p>
      <h2 className="font-display text-[2rem] font-medium leading-tight tracking-[-0.02em] text-foreground sm:text-[2.5rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15.5px] leading-relaxed text-muted">{description}</p>
      )}
    </motion.div>
  );
}
