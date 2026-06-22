import { ClipboardList, UserCheck, MonitorPlay } from "lucide-react";

const steps = [
  { Icon: ClipboardList, title: "Book Free Trial", desc: "Fill a short form and choose your preferred time slot." },
  { Icon: UserCheck, title: "Get Matched", desc: "We assign a certified tutor based on your level and goals." },
  { Icon: MonitorPlay, title: "Start Learning", desc: "Join your live class through our secure online platform." },
];

export function HowItWorks() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Simple Process</div>
        <h2 className="font-display text-4xl font-bold mt-3 text-primary-dark">3 Easy Steps to Start Learning</h2>

        <div className="relative mt-14 grid md:grid-cols-3 gap-10">
          {/* dotted connector */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] border-t-2 border-dashed border-gold/40" />
          {steps.map(({ Icon, title, desc }, i) => (
            <div key={title} className="relative text-center">
              <div className="relative mx-auto w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-soft">
                <Icon size={28} />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-white text-sm font-bold flex items-center justify-center border-2 border-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mt-5">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
