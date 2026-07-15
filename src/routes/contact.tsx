import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Building2 } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [
    { title: "Contact — Bhava Solar Energy" },
    { name: "description", content: "Get in touch with Bhava Solar Energy — free consultation, quotes, and project inquiries across India." },
  ]}),
});

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(20),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10).max(1500),
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title={<>Let's <span className="gradient-text">power</span> your project</>} subtitle="Free feasibility, generation forecast, and financial model within 48 hours." />

      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: "Call us", value: site.phone },
              { icon: MessageCircle, label: "WhatsApp", value: site.whatsapp },
              { icon: Mail, label: "Email", value: site.email },
              { icon: MapPin, label: "Head Office", value: site.address },
              { icon: Building2, label: "Service Area", value: "19 States · 120+ Cities · Pan-India" },
            ].map((c, i) => (
              <motion.div key={c.label} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="flex items-start gap-4 rounded-xl bg-card border border-border p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg gradient-brand shrink-0">
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </motion.div>
            ))}

            <div className="rounded-2xl overflow-hidden border border-border h-72">
              <iframe
                title="Bhava Solar Energy office map"
                src="https://www.google.com/maps?q=Hyderabad,India&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            className="lg:col-span-3 rounded-2xl bg-card border border-border p-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const parsed = contactSchema.safeParse({
                name: fd.get("name"), email: fd.get("email"), phone: fd.get("phone"),
                company: fd.get("company") || undefined, message: fd.get("message"),
              });
              if (!parsed.success) {
                toast.error(parsed.error.issues[0]?.message || "Please check your inputs.");
                return;
              }
              toast.success("Thanks — we'll be in touch within 24 hours.");
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <h2 className="font-display text-2xl font-bold">Send us an inquiry</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Input name="name" required placeholder="Full name *" />
              <Input name="email" required type="email" placeholder="Email *" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input name="phone" required placeholder="Phone *" />
              <Input name="company" placeholder="Company" />
            </div>
            <Textarea name="message" rows={6} required placeholder="Tell us about your project — location, load, roof area, timelines..." />
            <Button type="submit" size="lg" className="gradient-brand text-white w-full h-12">
              Get Free Consultation
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              By submitting, you agree to our privacy policy. We'll never share your details.
            </p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
