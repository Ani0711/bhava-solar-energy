import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTA } from "@/components/home/CTA";
import { projects, categories } from "@/lib/projects";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Zap, Calendar, TrendingUp, Leaf } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — Bhava Solar Energy" },
      { name: "description", content: "250+ MW of installed solar & storage projects across India. Explore our residential, commercial, industrial & utility-scale portfolio." },
    ],
  }),
});

function PortfolioPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Project Portfolio"
        title={<>Proof in <span className="gradient-text">performance</span></>}
        subtitle="12+ signature projects across India — from hospital microgrids to utility-scale plants."
      />

      <section className="py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all border ${
                  active === c
                    ? "gradient-brand text-white border-transparent shadow-glow"
                    : "bg-card border-border hover:border-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.article
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="group overflow-hidden rounded-2xl bg-card border border-border hover:shadow-elegant transition-all"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full glass px-3 py-1 text-xs font-semibold text-white">{p.category}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                      <p className="text-sm text-white/80">{p.client}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4 text-brand" />{p.location}</div>
                      <div className="flex items-center gap-2 text-muted-foreground"><Zap className="h-4 w-4 text-brand" />{p.capacity}</div>
                      <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="h-4 w-4 text-brand" />{p.year}</div>
                      <div className="flex items-center gap-2 text-muted-foreground"><TrendingUp className="h-4 w-4 text-brand" />{p.generation}</div>
                    </div>
                    <p className="text-sm text-foreground/80 line-clamp-2">{p.description}</p>
                    <div className="flex items-center gap-2 pt-2 border-t border-border text-xs text-muted-foreground">
                      <Leaf className="h-4 w-4 text-brand" /> {p.co2} offset annually
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
