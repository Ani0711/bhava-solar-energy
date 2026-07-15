import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHeader({
  eyebrow, title, subtitle, children,
}: { eyebrow?: string; title: ReactNode; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(600px circle at 20% 30%, oklch(0.62 0.16 155 / 0.4), transparent 60%)" }} />
      <div className="relative container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {eyebrow && <span className="text-xs uppercase tracking-widest text-brand font-semibold">{eyebrow}</span>}
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-white">{title}</h1>
          {subtitle && <p className="mt-5 text-lg text-white/80 max-w-2xl">{subtitle}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
