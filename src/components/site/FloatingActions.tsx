import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 top-0 h-0.5 origin-left z-[60] gradient-brand"
      />

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>

      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full glass border border-border/50 hover:scale-110 transition-transform"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
