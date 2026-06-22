import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import { CourseCard } from "../components/CourseCard";
import { COURSES } from "../data/courses";

export const Route = createFileRoute("/courses/advanced")({
  head: () => ({
    meta: [
      { title: "Advanced Quran Courses — Sundus Quran Academy" },
      { name: "description", content: "Advance to Hifz, Qiraat-level Tajweed, and Quranic Arabic with our advanced classes." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero title="Advanced Courses" breadcrumb="Courses › Advanced" subtitle="Master Tajweed, begin Hifz, and study Quranic Arabic in depth." />
      <section className="section-pad bg-off-white">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.filter((c) => c.level === "advanced").map((c) => <CourseCard course={c} key={c.slug} />)}
        </div>
      </section>
    </SiteLayout>
  ),
});
