import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTA } from "@/components/home/CTA";
import { motion } from "framer-motion";
import { SquareStack, Cpu, Battery, Wrench, LineChart } from "lucide-react";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({ meta: [
    { title: "Products — Bhava Solar Energy" },
    { name: "description", content: "Tier-1 Solar Modules, Inverters, Batteries, Structures, Monitoring — bankable BOM." },
  ]}),
});

const groups = [
  { icon: SquareStack, title: "Solar Modules", items: ["TopCon (N-Type)", "Mono PERC", "Bifacial Glass-Glass", "HJT (High Efficiency)"] },
  { icon: Cpu, title: "Inverters", items: ["Hybrid Inverters", "String Inverters", "Central Inverters", "Micro-Inverters"] },
  { icon: Battery, title: "Battery Systems", items: ["Lithium-Ion (NMC)", "LFP (Long Life)", "Grid-Scale BESS", "Residential ESS"] },
  { icon: Wrench, title: "Structures & BOS", items: ["MMS (Hot-Dip Galv.)", "Aluminium Rails", "DC/AC Cables", "Combiner & ACDB Boxes"] },
  { icon: LineChart, title: "Monitoring Systems", items: ["SCADA Platform", "Cloud IoT Gateway", "Smart Energy Meters", "Weather Stations"] },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Products" title={<>Bankable <span className="gradient-text">Tier-1 BOM</span></>} subtitle="Only tested, certified, warranty-backed components from proven global OEMs." />
      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div key={g.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="rounded-2xl bg-card border border-border p-6 hover:shadow-elegant transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand shadow-glow">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{g.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full gradient-brand" />{it}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
