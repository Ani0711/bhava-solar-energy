import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({ meta: [
    { title: "Blog & Insights — Bhava Solar Energy" },
    { name: "description", content: "Solar news, government schemes, storage tech, net-metering — insights from India's renewable frontier." },
  ]}),
});

const categories = ["All", "Solar News", "Government Schemes", "Battery Storage", "Net Metering", "Technology", "EV Charging", "Energy Saving"];

const posts = [
  { title: "PM-Surya Ghar: What ₹75,021 subsidy means for Indian homeowners", cat: "Government Schemes", date: "Mar 12, 2025", excerpt: "A complete breakdown of the new residential solar subsidy scheme, eligibility, and expected payback." },
  { title: "Why LFP is winning the C&I storage race in India", cat: "Battery Storage", date: "Feb 28, 2025", excerpt: "Lithium Iron Phosphate chemistry now dominates commercial deployments — here's the economics." },
  { title: "TopCon vs Mono PERC: Which module wins in 2025?", cat: "Technology", date: "Feb 14, 2025", excerpt: "Real yield data from our 12-plant portfolio comparing next-gen N-type against traditional P-type." },
  { title: "Group captive vs Open access: The definitive guide", cat: "Solar News", date: "Jan 30, 2025", excerpt: "Structuring MW-scale renewable procurement for large industrial consumers in India." },
  { title: "Net metering rules across Indian states — 2025 update", cat: "Net Metering", date: "Jan 18, 2025", excerpt: "State-by-state comparison of gross vs net metering policies, caps, and settlement." },
  { title: "Fast charging infrastructure: Making DC chargers pay back", cat: "EV Charging", date: "Jan 05, 2025", excerpt: "Utilization economics for public DC fast chargers under India's EV policy landscape." },
];

function BlogPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Blog & Insights" title={<>News from the <span className="gradient-text">renewable frontier</span></>} subtitle="Deep dives on policy, technology, and finance from our engineering desk." />
      <section className="py-16">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button key={c} className={`rounded-full px-4 py-1.5 text-sm border ${i === 0 ? "gradient-brand text-white border-transparent" : "bg-card border-border hover:border-brand"}`}>{c}</button>
            ))}
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <motion.article key={p.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="group rounded-2xl bg-card border border-border overflow-hidden hover:shadow-elegant transition-all">
                <div className="aspect-video gradient-hero relative overflow-hidden">
                  <div className="absolute inset-0" style={{background:"radial-gradient(300px circle at 50% 50%, oklch(0.62 0.16 155 / 0.5), transparent)"}} />
                  <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs font-semibold text-white">{p.cat}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground"><CalendarDays className="h-3.5 w-3.5" />{p.date}</div>
                  <h3 className="mt-3 font-display text-lg font-semibold group-hover:text-brand transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <Link to="/blog" className="mt-4 inline-flex items-center text-sm font-semibold text-brand">Read more <ArrowRight className="h-4 w-4 ml-1" /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
