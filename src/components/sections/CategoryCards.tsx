import { Link } from "@tanstack/react-router";
import { Sprout, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

const cats = [
  {
    Icon: Sprout, title: "Beginner", to: "/courses/beginner",
    desc: "Start from scratch. Learn Noorani Qaida and basic recitation with care.",
    label: "Explore Beginner",
  },
  {
    Icon: BookOpen, title: "Intermediate", to: "/courses/intermediate",
    desc: "Deepen your skills. Quran reading with proper Tajweed application.",
    label: "Explore Intermediate",
  },
  {
    Icon: GraduationCap, title: "Advanced", to: "/courses/advanced",
    desc: "Master Tajweed and begin Hifz. Scholarly recitation and Arabic.",
    label: "Explore Advanced",
  },
];

export function CategoryCards() {
  return (
    <section className="relative -mt-12 z-10">
      <div className="container-page grid md:grid-cols-3 gap-5">
        {cats.map(({ Icon, title, desc, to, label }) => (
          <Link
            to={to}
            key={title}
            className="group bg-white rounded-2xl p-7 border border-border shadow-card hover:shadow-soft hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-4">
              <Icon size={22} />
            </div>
            <h3 className="font-display text-2xl font-bold text-primary-dark">{title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold group-hover:gap-2.5 transition-all">
              {label} <ArrowRight size={15} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
