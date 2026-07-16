import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
 
  {
    name: "Ram Kumar",
    role: "10 kW Residential Solar Customer",
    body: "My solar connection process was smooth from start to finish. The installation team was experienced, my net-metering connection was completed within 12 days, and I received the government subsidy on time.",
    rating: 5,
  },
  {
    name: "Saurabh Kushwaha",
    role: "On-Grid Solar Customer",
    body: "Thank you, Bhava Solar Energy, for the excellent installation of our on-grid solar plant. The team delivered professional service, timely execution, and complete support throughout the project.",
    rating: 5,
  },
 
  {
    name: "Jeetu Netram",
    role: "Sheet Roof Solar Installation",
    body: "Excellent service and highly skilled installation team. They completed my sheet-roof solar structure with proper waterproofing and great attention to quality.",
    rating: 5,
  },
  {
    name: "Mithlesh",
    role: "Residential Solar Customer",
    body: "Bhava Solar Energy provided excellent consultation and installation services. They also guided me through the entire government subsidy process without any hassle.",
    rating: 5,
  },
  {
    name: "Jameel Hashmi",
    role: "Residential Solar Customer",
    body: "The installation service was excellent. The team was professional, efficient, and completed the work to a high standard. Highly recommended.",
    rating: 5,
  },
  {
    name: "Chandra Shekhar Gupta",
    role: "Residential Solar Customer",
    body: "Very good service with excellent workmanship. The project was completed professionally, and I would definitely recommend Bhava Solar Energy.",
    rating: 5,
  },
];

const partners = ["Waaree", "Adani Solar", "Tata Power Solar", "Sungrow", "Growatt", "Solis", "Huawei", "ABB", "Schneider", "Luminous", "Exide", "Amara Raja"];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-brand font-semibold">Client Voices</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Trusted by <span className="gradient-text">People</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl bg-card border border-border p-8 shadow-sm hover:shadow-elegant transition-shadow"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-brand/20" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">"{t.body}"</p>
              <footer className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">Our Technology Partners</p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-6">
            {partners.map((p) => (
              <div key={p} className="font-display text-lg md:text-xl font-semibold text-muted-foreground/70 hover:text-brand transition-colors">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
