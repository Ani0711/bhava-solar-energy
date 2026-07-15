import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/home/About";
import { WhyUs } from "@/components/home/WhyUs";
import { Stats } from "@/components/home/Stats";
import { CTA } from "@/components/home/CTA";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Users2, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Bhava Solar Energy" },
      { name: "description", content: "Learn about Bhava Solar Energy — India's trusted renewable EPC partner since 2013." },
    ],
  }),
});

const certifications = [
  { icon: Award, label: "ISO 9001:2015" },
  { icon: ShieldCheck, label: "ISO 45001 (OH&S)" },
  { icon: Leaf, label: "ISO 14001 (Environment)" },
  { icon: Users2, label: "MNRE Empanelled" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About Bhava"
        title={<>Engineering the <span className="gradient-text">energy transition</span></>}
        subtitle="Since 2013, we've partnered with India's most demanding developers, manufacturers, and governments to deliver renewable assets that outperform their PPAs."
      />
      <Stats />
      <About />
      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Certifications & Compliance</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">MNRE, IEC, BIS, MSME, Startup India — every plant we build meets national and international standards.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((c, i) => (
              <motion.div key={c.label} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="rounded-xl bg-card border border-border p-6 text-center">
                <c.icon className="mx-auto h-8 w-8 text-brand" />
                <div className="mt-3 font-semibold">{c.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <WhyUs />
      <CTA />
    </SiteLayout>
  );
}
