import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";

const faqs = [
  { q: "How do classes work?", a: "All classes are live, one-on-one, and conducted through our secure online platform — typically via Zoom or Google Meet." },
  { q: "What if I miss a class?", a: "Sessions are recorded, so you can revise at any time. You can also reschedule with your tutor in advance." },
  { q: "Do you have female tutors?", a: "Yes — we have a dedicated team of qualified female tutors for sisters and children." },
  { q: "What age groups do you teach?", a: "We teach all age groups, from young children (age 5+) to adults and seniors." },
  { q: "How much do classes cost?", a: "We offer flexible monthly plans based on the number of classes per week. Contact us for a personalized quote." },
  { q: "Is there a free trial?", a: "Yes — your first class is completely free with no commitment required. Just book through our Free Trial page." },
];

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Sundus Quran Academy" },
      { name: "description", content: "Answers to common questions about our online Quran classes, tutors, and pricing." },
    ],
  }),
  component: FAQs,
});

function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SiteLayout>
      <PageHero title="Frequently Asked Questions" breadcrumb="FAQs" />
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-display text-lg font-semibold hover:bg-primary-light/40 transition"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {f.q}
                  <span className="text-primary">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
                </button>
                {isOpen && <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
