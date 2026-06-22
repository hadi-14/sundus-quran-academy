import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import { CourseCard } from "../components/CourseCard";
import { COURSES } from "../data/courses";

export const Route = createFileRoute("/courses/intermediate")({
  head: () => ({
    meta: [
      { title: "Intermediate Quran Courses — Sundus Quran Academy" },
      { name: "description", content: "Develop your recitation and Tajweed with structured intermediate-level Quran classes." },
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
