import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { addSubmission } from "@/lib/submissions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Sundus Quran Academy" },
      { name: "description", content: "Have questions about our online Quran classes, timings, or plans? Get in touch with Sundus Quran Academy support. We respond within 24 hours." },
      { name: "keywords", content: "contact quran academy, online quran support, help learning quran, customer service sundus quran" },
      { property: "og:title", content: "Contact Us — Sundus Quran Academy" },
      { property: "og:description", content: "Get in touch with us for any inquiries about courses, pricing, tutors, or schedules." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <SiteLayout>
      <PageHero title="Contact Us" subtitle="We respond within 24 hours, in shaa Allah." breadcrumb="Contact" />
      <section className="section-pad bg-off-white">
        <div className="container-page grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <Info Icon={Mail} title="Email" v={<a href="mailto:info@sundusquranacademy.com" className="hover:text-primary">info@sundusquranacademy.com</a>} />
            <Info Icon={Phone} title="Phone" v={<a href="tel:+923452178606" className="hover:text-primary">+92 345 2178606</a>} />
            <Info Icon={MessageCircle} title="WhatsApp" v={<a href="https://wa.me/923452178606" className="hover:text-primary" target="_blank" rel="noopener noreferrer">+92 345 2178606</a>} />
            <Info Icon={MapPin} title="Address" v="Suite 402, 4th Floor, Block 10 Gulshan-e-Iqbal, NIPA, Main University Road, Karachi 75300" />
            <Info Icon={Clock} title="Hours" v="Mon–Sun · 5:00 AM – 11:00 PM (your local time)" />
            <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-soft">
              <iframe
                src="https://maps.google.com/maps?q=Suite%20402,%204th%20Floor,%20Block%2010%20Gulshan-e-Iqbal,%20NIPA,%20Main%20University%20Road,%20Karachi%2075300&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Sundus Quran Academy Location Map"
              />
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitting(true);
              const f = e.currentTarget;
              const fd = new FormData(f);
              setTimeout(() => {
                addSubmission({
                  kind: "contact",
                  name: String(fd.get("name") || ""),
                  email: String(fd.get("email") || ""),
                  phone: String(fd.get("phone") || ""),
                  subject: String(fd.get("subject") || ""),
                  message: String(fd.get("message") || ""),
                });
                toast.success("Message sent! We'll get back to you soon.");
                f.reset();
                setSubmitting(false);
              }, 500);
            }}
            className="bg-white rounded-2xl border border-border p-7 shadow-card space-y-3"
          >
            <h3 className="font-display text-2xl font-bold text-primary-dark mb-2">Send us a message</h3>
            {[
              ["Full Name", "name", "text"],
              ["Email", "email", "email"],
              ["Phone", "phone", "tel"],
              ["Subject", "subject", "text"],
            ].map(([l, n, t]) => (
              <label key={n} className="block">
                <span className="text-xs font-semibold text-foreground/80">{l}</span>
                <input name={n} type={t} required className="mt-1 w-full rounded-lg border border-input px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>
            ))}
            <label className="block">
              <span className="text-xs font-semibold text-foreground/80">Message</span>
              <textarea name="message" required rows={5} className="mt-1 w-full rounded-lg border border-input px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            </label>
            <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({ Icon, title, v }: { Icon: any; title: string; v: ReactNode }) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-xl border border-border p-5">
      <div className="w-11 h-11 rounded-lg bg-primary-light text-primary flex items-center justify-center"><Icon size={18} /></div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{title}</div>
        <div className="font-medium text-foreground mt-0.5">{v}</div>
      </div>
    </div>
  );
}
