import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Users, BadgeCheck, Clock, Wrench, FileCheck2, Banknote, Radar } from "lucide-react";

const reasons = [
  { icon: BadgeCheck, title: "Tier-1 Components", desc: "Only bankable modules, inverters & batteries from proven Tier-1 OEMs." },
  { icon: FileCheck2, title: "Bankable Designs", desc: "PVsyst-modeled, IEC/BIS compliant, ready for lenders' technical DD." },
  { icon: Users, title: "Certified Engineers", desc: "180+ in-house engineers, IESA & MNRE trained." },
  { icon: Clock, title: "Fast Execution", desc: "Average 45-day commissioning for C&I rooftops up to 1 MW." },
  { icon: ShieldCheck, title: "Performance Guarantee", desc: "Contractual PR guarantee — we underwrite yield." },
  { icon: Zap, title: "25-Year Warranty", desc: "Module linear performance & workmanship warranties." },
  { icon: Radar, title: "Remote Monitoring", desc: "24×7 SCADA + AI analytics + drone thermal inspection." },
  { icon: Wrench, title: "After-Sales Support", desc: "Dedicated O&M cells across 19 states." },
  { icon: Banknote, title: "Financing Assistance", desc: "PPA, RESCO, CAPEX, OPEX — we help structure the deal." },
  { icon: CheckCircle2, title: "Government Docs", desc: "Net metering, DISCOM, MNRE — end-to-end handled." },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-brand font-semibold">Why Bhava</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Engineered to <span className="gradient-text">outperform</span> your PPA
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl bg-card border border-border p-5 hover:border-brand hover:shadow-elegant transition-all"
            >
              <r.icon className="h-6 w-6 text-brand" />
              <h3 className="mt-3 font-semibold text-sm">{r.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
