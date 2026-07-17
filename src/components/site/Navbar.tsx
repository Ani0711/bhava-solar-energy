import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Zap } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/bhava-logo.png"

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initial = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", initial);
    setDark(initial);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3 group" aria-label={site.name}>

          
            <img
            src={logoAsset}
            alt="Bhava Solar Energy"
            width={48}
            height={48}
            className=" h-10 w-10 md:h-12 md:w-12 object-contain rounded-md bg-white/95 p-1 shadow-elegant transition group-hover:scale-105"
          />
          <div className=" sm:flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight md:text-lg">
              Bhava <span className="gradient-text">Solar</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Renewable EPC</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.slice(0, 9).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2 hover:bg-accent transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button asChild size="sm" className="hidden md:inline-flex gradient-brand text-white shadow-glow hover:opacity-90">
            <Link to="/contact">Get Quote</Link>
          </Button>
          <button
            className="lg:hidden rounded-md p-2 hover:bg-accent"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border/50 overflow-hidden"
          >
            <nav className="container-px mx-auto max-w-7xl py-4 flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium border-b border-border/40 last:border-0"
                  activeProps={{ className: "text-brand" }}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4 gradient-brand text-white">
                <Link to="/contact" onClick={() => setOpen(false)}>Get Free Consultation</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
