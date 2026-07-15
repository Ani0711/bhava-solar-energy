import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTA } from "@/components/home/CTA";
import { motion } from "framer-motion";
import { Home, Building2, Factory, Zap, BatteryCharging, Fuel, PlugZap, Network, CarFront, Wallet, FileSignature, Landmark } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      { title: "Solutions — Bhava Solar Energy" },
      { name: "description", content: "Residential, Commercial, Industrial, Utility-Scale Solar; Battery Storage; Solar+DG Hybrid; EV Charging; PPA & Open Access." },
    ],
  }),
});

const solutions = [
  { icon: Home, title: "Residential Solar", desc: "Rooftop systems 1–20 kW with net-metering and hybrid battery options." },
  { icon: Building2, title: "Commercial Solar", desc: "50 kW–5 MW rooftop & carport solutions for offices and retail chains." },
  { icon: Factory, title: "Industrial Solar", desc: "MW-scale captive plants with wheeling & banking arrangements." },
  { icon: Zap, title: "Utility-Scale Solar", desc: "10 MW+ ground-mount plants under PPA, VGF, or merchant models." },
  { icon: BatteryCharging, title: "Battery Storage (BESS)", desc: "Grid-scale, C&I, and residential LFP battery systems." },
  { icon: Fuel, title: "Solar + DG Hybrid", desc: "Diesel-solar hybrid microgrids with intelligent load control." },
  { icon: Network, title: "Solar + Grid", desc: "On-grid systems with export metering and gross/net-metering." },
  { icon: PlugZap, title: "Microgrids", desc: "Islanded microgrids for campuses, resorts, and remote sites." },
  { icon: CarFront, title: "EV Charging", desc: "AC/DC OCPP-compliant chargers with solar canopies." },
  { icon: Wallet, title: "Captive Power", desc: "Group captive & third-party sale under Open Access." },
  { icon: FileSignature, title: "PPA Solutions", desc: "Zero-capex PPA with performance guarantees." },
  { icon: Landmark, title: "Open Access", desc: "State & inter-state open access consulting and execution." },
];

function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Solutions" title={<>Solutions for every <span className="gradient-text">load profile</span></>} subtitle="From residential rooftops to gigawatt utility projects, we engineer the right renewable mix." />
      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.04}} className="rounded-2xl bg-card border border-border p-6 hover:border-brand hover:shadow-elegant transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand shadow-glow">
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
