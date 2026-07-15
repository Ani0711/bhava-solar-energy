import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTA } from "@/components/home/CTA";
import { motion } from "framer-motion";
import { Radar, Camera, BrainCircuit, Plane, Thermometer, Activity, Wifi, Layers } from "lucide-react";

export const Route = createFileRoute("/technology")({
  component: TechPage,
  head: () => ({ meta: [
    { title: "Technology — Bhava Solar Energy" },
    { name: "description", content: "SCADA, AI analytics, drone thermal, predictive maintenance, IoT, digital twin — the tech powering our plants." },
  ]}),
});

const tech = [
  { icon: Radar, title: "SCADA", desc: "Real-time supervisory control & data acquisition across every string, tracker, and inverter." },
  { icon: Camera, title: "Remote Monitoring", desc: "24×7 NOC with alerts, KPIs, and performance dashboards accessible on any device." },
  { icon: BrainCircuit, title: "AI Analytics", desc: "ML-driven anomaly detection, yield forecasting, and soiling loss prediction." },
  { icon: Plane, title: "Drone Inspection", desc: "Quarterly aerial surveys with EL & thermal imaging to catch degradation early." },
  { icon: Thermometer, title: "Thermal Imaging", desc: "Hotspot detection down to individual cell level — before it becomes a fault." },
  { icon: Activity, title: "Predictive Maintenance", desc: "Failure-mode modeling to schedule interventions before generation loss." },
  { icon: Wifi, title: "IoT Monitoring", desc: "Smart meters, weather stations, and edge gateways — all cloud-connected." },
  { icon: Layers, title: "Digital Twin", desc: "Live 3D replica of every plant for what-if simulations and O&M planning." },
];

function TechPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Technology" title={<>Intelligence that <span className="gradient-text">outperforms</span></>} subtitle="Every plant we build gets full-stack digital instrumentation — from string to cloud." />
      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tech.map((t, i) => (
            <motion.div key={t.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl bg-card border border-border p-6 hover:border-brand hover:shadow-elegant transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-brand shadow-glow">
                <t.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
