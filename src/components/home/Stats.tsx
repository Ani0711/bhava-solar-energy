import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2000, bounce: 0 });
  const rounded = useTransform(spring, (v) => `${prefix}${Math.floor(v).toLocaleString("en-IN")}${suffix}`);

  useEffect(() => { if (inView) mv.set(value); }, [inView, value, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 250, suffix: "+ MW", label: "Installed Capacity" },
  { value: 1200, suffix: "+", label: "Projects Completed" },
  { value: 850, suffix: "+", label: "Happy Clients" },
  { value: 120, suffix: "+", label: "Cities Served" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 180, suffix: "+", label: "Engineers On Ground" },
];

export function Stats() {
  return (
    <section className="relative py-24 bg-navy text-navy-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(800px circle at 50% 0%, oklch(0.62 0.16 155 / 0.5), transparent 60%)" }} />
      <div className="relative container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
