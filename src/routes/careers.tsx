import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { CTA } from "@/components/home/CTA";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({ meta: [
    { title: "Careers — Bhava Solar Energy" },
    { name: "description", content: "Join India's fastest-growing renewable EPC. Engineering, project management, O&M roles across India." },
  ]}),
});

const openings = [
  { title: "Senior Solar Design Engineer", location: "Hyderabad", type: "Full-time", exp: "5–8 yrs" },
  { title: "Project Manager – EPC", location: "Bengaluru", type: "Full-time", exp: "8–12 yrs" },
  { title: "SCADA & IoT Engineer", location: "Pune", type: "Full-time", exp: "3–6 yrs" },
  { title: "BESS Commissioning Engineer", location: "Ahmedabad", type: "Full-time", exp: "4–7 yrs" },
  { title: "Business Development – C&I", location: "Mumbai", type: "Full-time", exp: "5–10 yrs" },
  { title: "Solar Design Intern", location: "Hyderabad", type: "Internship", exp: "Fresher" },
];

function CareersPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Careers" title={<>Build the <span className="gradient-text">energy transition</span></>} subtitle="Join 180+ engineers powering India's largest solar and storage projects." />
      <section className="py-24">
        <div className="container-px mx-auto max-w-7xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Current Openings</h2>
          <div className="mt-8 grid gap-4">
            {openings.map((o, i) => (
              <motion.div key={o.title} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-card border border-border p-6 hover:border-brand hover:shadow-elegant transition-all">
                <div>
                  <h3 className="font-semibold text-lg">{o.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{o.location}</span>
                    <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{o.type}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{o.exp}</span>
                  </div>
                </div>
                <Button className="gradient-brand text-white">Apply Now</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-secondary/40">
        <div className="container-px mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold">Submit Your Resume</h2>
          <p className="mt-2 text-muted-foreground">Don't see a role that fits? Send us your resume — we're always hiring exceptional engineers.</p>
          <form onSubmit={(e)=>{e.preventDefault(); toast.success("Application received — we'll be in touch shortly.");}} className="mt-8 space-y-4 rounded-2xl bg-card border border-border p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input required placeholder="Full name" />
              <Input required type="email" placeholder="Email" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input required placeholder="Phone" />
              <Input placeholder="Role you're interested in" />
            </div>
            <Textarea rows={4} placeholder="Tell us about yourself..." />
            <label className="flex items-center gap-2 text-sm border border-dashed border-border rounded-lg p-4 cursor-pointer hover:border-brand transition-colors">
              <Upload className="h-4 w-4 text-brand" /> Upload resume (PDF, DOC)
              <input type="file" accept=".pdf,.doc,.docx" className="sr-only" />
            </label>
            <Button type="submit" className="gradient-brand text-white w-full">Submit Application</Button>
          </form>
        </div>
      </section>
      <CTA />
    </SiteLayout>
  );
}
