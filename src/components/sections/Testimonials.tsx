import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Ahmed K.", role: "Parent of Student", text: "My child's recitation improved remarkably within weeks. The tutors are patient and professional. Highly recommended!" },
  { name: "Ayesha N.", role: "Adult Student", text: "The Tajweed classes are clear and structured. I finally learned the rules properly and recite with full confidence." },
  { name: "Bilal Q.", role: "Adult Learner", text: "Excellent for working professionals. One-on-one sessions helped me fix mistakes quickly. Truly worthwhile." },
  { name: "Sarah M.", role: "Female Student", text: "The female tutors are very supportive and respectful. I feel comfortable and the teaching style is friendly." },
  { name: "Fatima Z.", role: "New Revert", text: "As a new revert I was nervous, but the tutors were kind and supportive. I now read the Quran with understanding." },
  { name: "Yasir A.", role: "Hifz Student", text: "The memorization method is excellent. My revision became much stronger with the step-by-step Hifz plan." },
];

export function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Testimonials</div>
          <h2 className="font-display text-4xl font-bold mt-3 text-primary-dark">What Our Students Say</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-off-white rounded-2xl p-6 border border-border relative hover:shadow-soft transition">
              <Quote className="absolute top-5 right-5 text-gold/30" size={36} />
              <div className="flex gap-0.5 text-gold mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-foreground/85 leading-relaxed text-[15px]">"{t.text}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
