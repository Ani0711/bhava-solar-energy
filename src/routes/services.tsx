import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/home/Services";
import { CTA } from "@/components/home/CTA";
import { motion } from "framer-motion";
import { ClipboardCheck, Compass, HardHat, Cpu, Rocket, Wrench } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Bhava Solar Energy" },
      { name: "description", content: "Solar EPC, BESS, O&M, Energy Audit, HT/LT Panels, PMC — end-to-end renewable services." },
    ],
  }),
});

const process = [
  { icon: Compass, title: "Consultation", desc: "Requirement study, tariff analysis, roof survey." },
  { icon: ClipboardCheck, title: "Design", desc: "PVsyst yield modeling, SLDs, structural, BOQ." },
  { icon: HardHat, title: "Procurement", desc: "Tier-1 modules, inverters, BOS with QC at factory." },
  { icon: Cpu, title: "Installation", desc: "Certified crews, safety-first execution, IEC compliance." },
  { icon: Rocket, title: "Commissioning", desc: "Testing, DISCOM approvals, PR verification." },
  { icon: Wrench, title: "O&M", desc: "25-year performance, SCADA, drone thermal, predictive." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="What we do" title={<>Full-stack <span className="gradient-text">renewable services</span></>} subtitle="One accountable partner from feasibility to 25-year O&M." />
      <Services />
      <section className="py-24 bg-secondary/40">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center">Our Process</h2>
          <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">Consultation → Design → Procurement → Installation → Commissioning → O&amp;M</p>
          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {process.map((p, i) => (
              <motion.div key={p.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="text-center">
                <div className="mx-auto h-14 w-14 rounded-2xl gradient-brand flex items-center justify-center shadow-glow">
                  <p.icon className="h-6 w-6 text-white" />
                </div>
                <div className="mt-4 text-xs uppercase tracking-widest text-brand">Step {i+1}</div>
                <div className="mt-1 font-semibold">{p.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
