import { Link } from "@tanstack/react-router";
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube, Instagram, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const columns = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/careers", label: "Careers" },
      { to: "/blog", label: "Blog & Insights" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "Solar EPC" },
      { to: "/services", label: "Battery Storage" },
      { to: "/services", label: "O&M" },
      { to: "/services", label: "Energy Audit" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { to: "/solutions", label: "Residential" },
      { to: "/solutions", label: "Commercial" },
      { to: "/solutions", label: "Industrial" },
      { to: "/solutions", label: "Utility Scale" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/portfolio", label: "Portfolio" },
      { to: "/technology", label: "Technology" },
      { to: "/industries", label: "Industries" },
      { to: "/products", label: "Products" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 bg-navy text-navy-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(600px circle at 20% 0%, oklch(0.62 0.16 155 / 0.6), transparent 60%)" }} />
      <div className="relative container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-lg gradient-brand p-2">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-bold">Bhava Solar Energy</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-sm">
              India's trusted renewable energy EPC partner. Powering a sustainable tomorrow through engineering
              excellence and bankable execution.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-3 text-white/80"><Phone className="h-4 w-4 text-brand" />{site.phone}</div>
              <div className="flex items-center gap-3 text-white/80"><Mail className="h-4 w-4 text-brand" />{site.email}</div>
              <div className="flex items-start gap-3 text-white/80"><MapPin className="h-4 w-4 text-brand mt-0.5" />{site.address}</div>
            </div>
            <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
              <label className="text-xs uppercase tracking-widest text-white/60">Newsletter</label>
              <div className="mt-2 flex gap-2">
                <Input type="email" required placeholder="you@company.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Button className="gradient-brand text-white shrink-0" aria-label="Subscribe"><ArrowRight className="h-4 w-4" /></Button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-white">{col.title}</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-white/70 hover:text-brand transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Bhava Solar Energy Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-white">Privacy Policy</Link>
            <Link to="/" className="hover:text-white">Terms</Link>
            <span className="mx-2 opacity-40">|</span>
            <a href="#" aria-label="LinkedIn" className="hover:text-brand"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-brand"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-brand"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-brand"><Youtube className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-brand"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
