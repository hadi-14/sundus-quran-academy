import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { IslamicPattern } from "../brand/IslamicPattern";
import heroImg from "@/assets/hero-student.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-primary text-white">
      <IslamicPattern className="absolute inset-0 w-full h-full" opacity={0.08} />
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-gold/20 blur-3xl pointer-events-none" />
      <div className="container-page relative grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center py-16 lg:py-24">
        <div>
          <p className="arabic text-gold text-2xl md:text-3xl tracking-wider mb-4">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            Learn the Qur'an<br />
            <span className="text-gold-light">Online With Certified Tutors</span>
          </h1>
          <p className="mt-5 text-white/85 text-lg max-w-xl leading-relaxed">
            One-on-one live classes for every level — Beginner, Intermediate, and Advanced.
            Flexible schedules, qualified instructors, and a free trial to get you started.
          </p>

          <ul className="mt-6 space-y-2.5">
            {[
              "Live one-on-one sessions",
              "Flexible timing for all time zones",
              "Free trial class for new students",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-white/90">
                <span className="w-6 h-6 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <Check size={13} className="text-gold-light" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/free-trial" className="btn-primary">Book Free Trial</Link>
            <Link to="/courses" className="btn-outline-white">View Courses</Link>
          </div>
        </div>

        <div className="relative lg:justify-self-end w-full max-w-md">
          <div className="absolute -inset-4 bg-gold/15 rounded-[2rem] blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden border-4 border-gold/40 shadow-2xl">
            <img
              src={heroImg}
              alt="Young student reading the Holy Quran"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </div>
          <div className="hidden md:flex absolute -bottom-5 -left-5 bg-white text-foreground rounded-2xl shadow-xl px-5 py-3 items-center gap-3 border border-gold/30">
            <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center font-display text-primary font-bold">5k+</div>
            <div className="text-xs">
              <div className="font-bold text-primary-dark">Happy Students</div>
              <div className="text-muted-foreground">across 40+ countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
