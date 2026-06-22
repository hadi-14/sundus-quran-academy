import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import { CourseCard } from "../components/CourseCard";
import { COURSES } from "../data/courses";

export const Route = createFileRoute("/courses/beginner")({
  head: () => ({
    meta: [
      { title: "Beginner Quran Courses — Sundus Quran Academy" },
      { name: "description", content: "Start your Quran journey with Noorani Qaida, basic recitation, and introductory Tajweed." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero title="Beginner Courses" breadcrumb="Courses › Beginner" subtitle="Start from the very first letter with a structured foundation." />
      <section className="section-pad bg-off-white">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.filter((c) => c.level === "beginner").map((c) => <CourseCard course={c} key={c.slug} />)}
        </div>
      </section>
    </SiteLayout>
  ),
});
