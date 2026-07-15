import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Ramesh Kulkarni", role: "COO, Sanjeevani Textiles", body: "Bhava delivered our 2.4 MW rooftop plant in 52 days, 8 days ahead of schedule. Generation is 6% above design PR.", rating: 5 },
  { name: "Dr. Priya Menon", role: "Director, Aster Hospitals", body: "Their O&M team's remote monitoring caught a string fault before it took down 40 kW. Truly proactive partners.", rating: 5 },
  { name: "Arvind Reddy", role: "MD, GreenAgro Cold Storage", body: "Hybrid solar+DG microgrid slashed our diesel bill by 74%. Payback in 3.8 years — exactly as promised.", rating: 5 },
];

const partners = ["Waaree", "Adani Solar", "Tata Power Solar", "Sungrow", "Growatt", "Solis", "Huawei", "ABB", "Schneider", "Luminous", "Exide", "Amara Raja"];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-brand font-semibold">Client Voices</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Trusted by <span className="gradient-text">India's finest</span>
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
