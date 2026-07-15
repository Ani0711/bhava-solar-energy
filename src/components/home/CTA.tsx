import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-16 shadow-elegant"
        >
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Ready to power your business with the sun?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Get a free feasibility study, generation forecast, and financial model within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6 bg-white text-navy hover:bg-white/90">
                <Link to="/contact">Get Free Consultation <ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white">
                <Link to="/portfolio">See Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
