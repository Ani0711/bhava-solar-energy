import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Sun, BatteryCharging, Zap, Wrench, LineChart, PlugZap, Factory, Cog, Landmark,
} from "lucide-react";
import rooftop from "@/assets/service-rooftop.jpg";
import bess from "@/assets/service-bess.jpg";
import ground from "@/assets/service-ground.jpg";
import ev from "@/assets/service-ev.jpg";
import om from "@/assets/service-om.jpg";

const services = [
  { icon: Sun, title: "Solar EPC", desc: "End-to-end engineering, procurement & construction for rooftop, ground-mount, and utility-scale plants.", img: ground },
  { icon: BatteryCharging, title: "Battery Energy Storage", desc: "Grid-scale BESS with LFP chemistry, integrated PCS, EMS, and safety systems.", img: bess },
  { icon: Factory, title: "Rooftop Solar", desc: "Commercial & industrial rooftops with net-metering, PPA, and CAPEX options.", img: rooftop },
  { icon: PlugZap, title: "EV Charging", desc: "AC/DC fast-charging stations with solar canopies and OCPP-compliant networks.", img: ev },
  { icon: Wrench, title: "Operations & Maintenance", desc: "24×7 SCADA, drone thermal inspection, preventive & predictive maintenance.", img: om },
  { icon: LineChart, title: "Energy Management", desc: "IoT metering, energy audits, and analytics to cut consumption by 15–30%.", img: rooftop },
  { icon: Zap, title: "Electrical Infrastructure", desc: "HT/LT panels, transformers, substations up to 33 kV — turnkey.", img: ground },
  { icon: Cog, title: "Microgrid Solutions", desc: "Solar+DG hybrid microgrids with intelligent load management.", img: bess },
  { icon: Landmark, title: "Solar Consultancy", desc: "PMC, owner's engineer, net-metering & government approvals.", img: om },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-brand font-semibold">What We Do</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Full-stack <span className="gradient-text">renewable</span> services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From feasibility to commissioning to 25-year O&amp;M — one accountable partner.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-elegant transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl gradient-brand shadow-glow">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center text-sm font-semibold text-brand hover:underline">
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
