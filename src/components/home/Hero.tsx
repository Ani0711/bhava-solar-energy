import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calculator, PhoneCall, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-solar.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Utility-scale solar farm at sunrise"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-brand/60"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      <div className="relative container-px mx-auto max-w-7xl py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-white">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            India's Trusted Renewable EPC
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Powering India's{" "}
            <span className="gradient-text">Sustainable</span> Future
          </h1>

          <p className="mt-6 text-lg text-white/80 sm:text-xl max-w-2xl">
            Engineering · Procurement · Construction · Battery Energy Storage · O&amp;M — full-stack
            renewable solutions delivered by certified engineers across India.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gradient-brand text-white shadow-glow hover:opacity-95 h-12 px-6">
              <Link to="/contact"><PhoneCall className="h-4 w-4 mr-2" />Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white backdrop-blur">
              <Link to="/contact">Request Quote <ArrowRight className="h-4 w-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-12 px-6 text-white hover:bg-white/10 hover:text-white">
              <Link to="/portfolio"><Calculator className="h-4 w-4 mr-2" />Calculate Savings</Link>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              ["200+ KW", "Installed"],
              ["50+", "Projects"],
              ["10+", "Solutions"],
              ["2+", "Years"],
            ].map(([v, k]) => (
              <div key={k}>
                <dt className="font-display text-2xl sm:text-3xl font-bold text-white">{v}</dt>
                <dd className="text-xs uppercase tracking-widest text-white/60">{k}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
