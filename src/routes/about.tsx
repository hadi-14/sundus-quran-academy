import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import mosqueImg from "@/assets/mosque-interior.jpg";
import quranImg from "@/assets/quran-open.jpg";

const stats = [
  { n: "5,000+", l: "Students" },
  { n: "40+", l: "Countries" },
  { n: "60+", l: "Tutors" },
  { n: "10+", l: "Years" },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sundus Quran Academy" },
      { name: "description", content: "Learn about our mission to bring authentic Quran education to students around the world." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero title="About Sundus" subtitle="A mission rooted in tradition, delivered through modern technology." breadcrumb="About" />

      <section className="section-pad bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-gold/15 rounded-3xl blur-2xl" />
            <img
              src={mosqueImg}
              alt="Beautiful mosque interior"
              loading="lazy"
              className="relative rounded-2xl border border-border shadow-soft w-full h-auto"
            />
          </div>
          <div>
            <p className="arabic text-gold text-2xl mb-4">وَنُنَزِّلُ مِنَ ٱلْقُرْءَانِ مَا هُوَ شِفَآءٌ</p>
            <h2 className="font-display text-4xl font-bold text-primary-dark">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Sundus Quran Academy exists to make authentic, structured Quran education accessible to every
              Muslim — regardless of age, background, or location. We pair sincere students with certified
              tutors in live one-on-one sessions, supporting a journey of lifelong learning.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our tutors are graduates of recognized Islamic institutions with years of teaching experience,
              fluent in both Arabic and English to serve students worldwide.
            </p>
          </div>
        </div>

        <div className="container-page mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.l} className="text-center bg-primary-light rounded-2xl p-7 border border-primary/10">
              <div className="font-display text-4xl font-bold text-primary-dark">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-off-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-dark">Our Vision</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To be the most trusted online Quran academy globally — known for the depth of our teachers,
              the warmth of our community, and the lifelong benefit our students carry from their lessons.
            </p>
            <div className="mt-6">
              <Link to="/free-trial" className="btn-primary">Book Your Free Trial</Link>
            </div>
          </div>
          <img
            src={quranImg}
            alt="Open Quran on patterned background"
            loading="lazy"
            className="rounded-2xl border border-border shadow-soft w-full h-auto"
          />
        </div>
      </section>
    </SiteLayout>
  ),
});
