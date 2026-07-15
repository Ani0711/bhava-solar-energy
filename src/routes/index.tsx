import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Industries } from "@/components/home/Industries";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Bhava Solar Energy — Powering India's Sustainable Future" },
      { name: "description", content: "Renewable EPC across India — Solar, BESS, O&M, EV charging. 250+ MW installed, 1200+ projects, 19 states." },
    ],
  }),
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Industries />
      <WhyUs />
      <Testimonials />
      <CTA />
    </SiteLayout>
  );
}
