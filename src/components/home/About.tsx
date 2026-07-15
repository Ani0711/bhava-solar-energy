import { motion } from "framer-motion";
import { Target, Eye, Award, TrendingUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const pillars = [
  { icon: Target, title: "Mission", body: "Deliver bankable renewable energy assets that redefine India's power landscape." },
  { icon: Eye, title: "Vision", body: "Be the most trusted EPC partner for the energy transition of Bharat by 2035." },
  { icon: Award, title: "Values", body: "Safety, integrity, engineering excellence, and unwavering client success." },
  { icon: TrendingUp, title: "Impact", body: "1.2M+ tCO₂ offset annually — equivalent to planting 20 million trees." },
];

const timeline = [
  ["2013", "Founded in Hyderabad"],
  ["2016", "First 5 MW ground-mount plant commissioned"],
  ["2019", "Crossed 100 MW cumulative installations"],
  ["2022", "Launched BESS & EV charging division"],
  ["2024", "Expanded to 19 states, 250+ MW installed"],
];

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/40">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-xs uppercase tracking-widest text-brand font-semibold">About Bhava</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Engineering the energy transition — <span className="gradient-text">responsibly</span>.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Since 2013, Bhava Solar Energy has partnered with manufacturers, developers, and governments
            across India to design, build, and operate renewable assets that outperform their PPAs.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl bg-card border border-border p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-brand">
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
              </motion.div>
            ))}
          </div>

          <Button asChild className="mt-8 gradient-brand text-white">
            <Link to="/about">Discover our story →</Link>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-brand/50 to-transparent" />
          <ol className="space-y-8">
            {timeline.map(([year, event], i) => (
              <motion.li
                key={year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full gradient-brand text-white text-xs font-bold shadow-glow">
                  {year.slice(2)}
                </div>
                <div className="font-display text-lg font-semibold">{year}</div>
                <div className="text-sm text-muted-foreground">{event}</div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
