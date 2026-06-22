import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import { ClipboardList, ClipboardCheck, UserCheck, MonitorPlay, Award } from "lucide-react";
import kidsImg from "@/assets/course-kids.jpg";

const steps = [
  { Icon: ClipboardList, title: "Book", desc: "Sign up for a free trial — choose your level and preferred time." },
  { Icon: ClipboardCheck, title: "Assessment", desc: "We evaluate your current level to design a personal learning plan." },
  { Icon: UserCheck, title: "Matched", desc: "Get paired with a certified tutor that fits your goals and schedule." },
  { Icon: MonitorPlay, title: "Learn", desc: "Attend live one-on-one classes from anywhere in the world." },
  { Icon: Award, title: "Certify", desc: "Receive certificates as you progress through every milestone." },
];

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Sundus Quran Academy" },
      { name: "description", content: "Five simple steps to start learning the Quran online with Sundus Quran Academy." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero title="How It Works" subtitle="From signup to certification — a clear path forward." breadcrumb="How It Works" />
      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -inset-3 bg-gold/15 rounded-3xl blur-2xl" />
              <img
                src={kidsImg}
                alt="Student learning Quran online"
                loading="lazy"
                className="relative rounded-2xl border border-border shadow-soft w-full h-auto"
              />
            </div>
          </div>
          <ol className="relative border-l-2 border-dashed border-gold/40 ml-4 space-y-10">
            {steps.map(({ Icon, title, desc }, i) => (
              <li key={title} className="relative pl-8">
                <span className="absolute -left-[1.05rem] top-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center border-4 border-white shadow-card">
                  <Icon size={16} />
                </span>
                <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Step {i + 1}</div>
                <h3 className="font-display text-2xl font-bold mt-1 text-primary-dark">{title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteLayout>
  ),
});
