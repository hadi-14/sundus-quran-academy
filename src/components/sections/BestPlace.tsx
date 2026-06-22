import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import quranImg from "@/assets/quran-open.jpg";

export function BestPlace() {
  return (
    <section className="section-pad bg-off-white">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Our Approach</div>
          <h2 className="font-display text-4xl font-bold mt-3 text-primary-dark">
            The Best Place to Learn Qur'an Online
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We combine traditional teaching methods with modern technology to give every student
            a personal, structured, and meaningful path to mastering the Qur'an.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Native-level Arabic pronunciation",
              "Lesson recordings for revision",
              "Personalized learning plan for every student",
              "Patient, certified male & female tutors",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center mt-0.5">
                  <Check size={13} />
                </span>
                <span className="text-foreground/90">{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/about" className="btn-outline-green">About Us</Link>
            <Link to="/courses" className="btn-primary">View Courses</Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-tr from-primary/20 to-gold/20 rounded-3xl blur-2xl" />
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-soft">
            <img
              src={quranImg}
              alt="Open Holy Quran with Islamic geometric patterns"
              width={1280}
              height={854}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary-dark text-white rounded-2xl p-5 shadow-xl max-w-[220px] hidden md:block">
            <div className="font-display text-3xl font-bold text-gold-light">15+</div>
            <div className="text-xs text-white/80 mt-1">Years of teaching excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
