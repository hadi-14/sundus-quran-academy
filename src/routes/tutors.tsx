import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import tutorFemale from "@/assets/tutor-female.jpg";
import tutorMale from "@/assets/tutor-male.jpg";

const tutors = [
  { name: "Sh. Abdullah Yusuf", spec: "Tajweed & Qiraat", years: "12 yrs", img: tutorMale },
  { name: "Ustadha Maryam Ali", spec: "Hifz & Tajweed (Sisters)", years: "9 yrs", img: tutorFemale },
  { name: "Sh. Hamza Rahman", spec: "Hifz Program", years: "10 yrs", img: tutorMale },
  { name: "Ustadha Khadija Noor", spec: "Noorani Qaida (Kids)", years: "7 yrs", img: tutorFemale },
  { name: "Sh. Ibrahim Hasan", spec: "Quranic Arabic", years: "11 yrs", img: tutorMale },
  { name: "Ustadha Aisha Siddiqa", spec: "Islamic Studies (Sisters)", years: "8 yrs", img: tutorFemale },
];

export const Route = createFileRoute("/tutors")({
  head: () => ({
    meta: [
      { title: "Our Tutors — Sundus Quran Academy" },
      { name: "description", content: "Meet our certified male and female Quran tutors, dedicated to your learning journey." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero title="Our Tutors" subtitle="Certified, patient, and devoted to your progress." breadcrumb="Tutors" />
      <section className="section-pad bg-off-white">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((t) => (
            <article key={t.name} className="bg-white rounded-2xl border border-border overflow-hidden text-center hover:shadow-card hover:-translate-y-1 transition">
              <div className="aspect-square overflow-hidden bg-primary-light">
                <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold">{t.name}</h3>
                <p className="text-sm text-gold mt-1">{t.spec}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.years} experience</p>
                <Link to="/free-trial" className="btn-outline-green mt-4 inline-flex">Book Session</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  ),
});
