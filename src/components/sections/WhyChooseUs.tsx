import { BookOpenCheck, GraduationCap, Award, Monitor, Clock, BarChart3, Video, CheckCircle2, Users } from "lucide-react";

const features = [
  { Icon: BookOpenCheck, title: "Structured Learning Path", desc: "Beginner to Advanced progression at your pace." },
  { Icon: GraduationCap, title: "Expert Certified Tutors", desc: "Qualified instructors for all ages and levels." },
  { Icon: Award, title: "Achievement Certificates", desc: "Earn certificates at every milestone." },
  { Icon: Monitor, title: "Virtual Classroom", desc: "Zoom-style live, interactive sessions." },
  { Icon: Clock, title: "Flexible Schedules", desc: "Daily, weekly, or weekend options to fit your life." },
  { Icon: BarChart3, title: "Progress Reports", desc: "Regular performance and improvement updates." },
  { Icon: Video, title: "Recorded Sessions", desc: "Review every lesson, any time, on any device." },
  { Icon: CheckCircle2, title: "Daily Assessment", desc: "Continuous evaluation to keep you on track." },
  { Icon: Users, title: "Male & Female Tutors", desc: "Separate qualified tutors available for sisters." },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-primary-light">
      <div className="container-page">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Why Sundus</div>
          <h2 className="font-display text-4xl font-bold mt-3 text-primary-dark">Why Choose Us</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card transition">
              <div className="w-11 h-11 rounded-lg bg-primary text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="font-display text-lg font-bold mt-4">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
