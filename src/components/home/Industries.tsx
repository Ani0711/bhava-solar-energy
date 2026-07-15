import { motion } from "framer-motion";
import {
  Building2, Hospital, Hotel, School, GraduationCap, Factory, Warehouse, Snowflake,
  Plane, TrainFront, Landmark, Wheat, Home, Server, Cpu, Antenna,
} from "lucide-react";

const items = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Hospital, label: "Hospitals" },
  { icon: Hotel, label: "Hotels" },
  { icon: School, label: "Schools" },
  { icon: GraduationCap, label: "Universities" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: Snowflake, label: "Cold Storage" },
  { icon: Plane, label: "Airports" },
  { icon: TrainFront, label: "Railways" },
  { icon: Landmark, label: "Government" },
  { icon: Wheat, label: "Agriculture" },
  { icon: Building2, label: "Commercial" },
  { icon: Home, label: "Residential" },
  { icon: Server, label: "Data Centers" },
  { icon: Cpu, label: "IT Parks" },
  { icon: Antenna, label: "Telecom Towers" },
];

export function Industries() {
  return (
    <section className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-brand font-semibold">Industries Served</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Trusted across <span className="gradient-text">every sector</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From gigawatt-scale IPPs to residential rooftops — we've engineered energy solutions
            for every kind of load profile.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4 }}
              className="group aspect-square rounded-xl border border-border bg-card flex flex-col items-center justify-center gap-2 p-3 hover:border-brand hover:shadow-elegant transition-all"
            >
              <it.icon className="h-6 w-6 text-brand transition-transform group-hover:scale-110" />
              <span className="text-xs text-center font-medium">{it.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
