import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import { CourseCard } from "../components/CourseCard";
import { COURSES } from "../data/courses";

export const Route = createFileRoute("/courses/intermediate")({
  head: () => ({
    meta: [
      { title: "Intermediate Quran Courses — Sundus Quran Academy" },
      { name: "description", content: "Build your fluency and learn the rules of Tajweed with structured intermediate-level Quran classes. Recitation practice and Islamic studies." },
      { name: "keywords", content: "intermediate quran classes, learn tajweed rules, fluent quran recitation, online islamic studies" },
      { property: "og:title", content: "Intermediate Quran Courses — Sundus Quran Academy" },
      { property: "og:description", content: "Strengthen your recitation, master Tajweed rules, and study core Islamic knowledge with our 1-on-1 classes." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero title="Intermediate Courses" breadcrumb="Courses › Intermediate" subtitle="Strengthen your recitation and apply the full rules of Tajweed." />
      <section className="section-pad bg-off-white">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.filter((c) => c.level === "intermediate").map((c) => <CourseCard course={c} key={c.slug} />)}
        </div>
      </section>
    </SiteLayout>
  ),
});
