import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Industries } from "@/components/home/Industries";
import { CTA } from "@/components/home/CTA";

export const Route = createFileRoute("/industries")({
  component: () => (
    <SiteLayout>
      <PageHeader eyebrow="Industries" title={<>Trusted across <span className="gradient-text">every sector</span></>} subtitle="Custom renewable solutions engineered for the load profile of your industry." />
      <Industries />
      <CTA />
    </SiteLayout>
  ),
  head: () => ({ meta: [
    { title: "Industries — Bhava Solar Energy" },
    { name: "description", content: "Solar solutions for Manufacturing, Hospitals, Hotels, Data Centers, Airports, Agriculture, and more." },
  ]}),
});
