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
      // quickTo reuses a single tween per property instead of spawning a new
      // one on every scroll event — same visual drift, far less GC/CPU churn.
      const setAY = gsap.quickTo(blobA.current, "y", { duration: 0.6, ease: "power2.out" });
      const setAX = gsap.quickTo(blobA.current, "x", { duration: 0.6, ease: "power2.out" });
      const setBY = gsap.quickTo(blobB.current, "y", { duration: 0.6, ease: "power2.out" });
      const setBX = gsap.quickTo(blobB.current, "x", { duration: 0.6, ease: "power2.out" });
      const setCY = gsap.quickTo(blobC.current, "y", { duration: 0.6, ease: "power2.out" });

      let queued = false;
      const onScroll = () => {
        if (queued) return;
        queued = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setAY(y * 0.08);
          setAX(y * 0.02);
          setBY(y * -0.05);
          setBX(y * -0.015);
          setCY(y * 0.03);
          queued = false;
        });
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
        style={{ willChange: "transform" }}
        className="glow -top-40 -left-40 h-[36rem] w-[36rem] bg-[radial-gradient(circle,rgba(255,107,0,0.28),transparent_70%)]"
      />
      <div
        ref={blobB}
        style={{ willChange: "transform" }}
        className="glow top-[20%] -right-52 h-[42rem] w-[42rem] bg-[radial-gradient(circle,rgba(255,158,44,0.16),transparent_70%)]"
      />
      <div
        ref={blobC}
        style={{ willChange: "transform" }}
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
