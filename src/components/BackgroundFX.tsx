"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Fixed full-viewport backdrop shared by the whole page: a few large blurred
 * orange/black blobs, a faint grid, and a grain layer. Kept behind everything
 * (z-index -10) so no section ever needs its own background.
 *
 * The blobs drift slowly on scroll (GSAP, very small offsets) so the page
 * never reads as a static screenshot without adding any layout-affecting
 * motion.
 */
export function BackgroundFX() {
  const blobA = useRef<HTMLDivElement>(null);
  const blobB = useRef<HTMLDivElement>(null);
  const blobC = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const onScroll = () => {
        const y = window.scrollY;
        gsap.to(blobA.current, { y: y * 0.08, x: y * 0.02, duration: 0.6, ease: "power2.out" });
        gsap.to(blobB.current, { y: y * -0.05, x: y * -0.015, duration: 0.6, ease: "power2.out" });
        gsap.to(blobC.current, { y: y * 0.03, duration: 0.6, ease: "power2.out" });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div
        ref={blobA}
        className="glow -top-40 -left-40 h-[36rem] w-[36rem] bg-[radial-gradient(circle,rgba(255,107,0,0.28),transparent_70%)]"
      />
      <div
        ref={blobB}
        className="glow top-[20%] -right-52 h-[42rem] w-[42rem] bg-[radial-gradient(circle,rgba(255,158,44,0.16),transparent_70%)]"
      />
      <div
        ref={blobC}
        className="glow bottom-[-10rem] left-[15%] h-[30rem] w-[30rem] bg-[radial-gradient(circle,rgba(255,107,0,0.14),transparent_70%)]"
      />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="noise" />
    </div>
  );
}
