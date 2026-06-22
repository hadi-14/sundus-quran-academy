import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import { CourseCard } from "../components/CourseCard";
import { COURSES } from "../data/courses";

export const Route = createFileRoute("/courses/beginner")({
  head: () => ({
    meta: [
      { title: "Beginner Quran Courses — Sundus Quran Academy" },
      { name: "description", content: "Start your Quran learning journey from the basics. Our beginner courses cover Noorani Qaida, basic Arabic reading, and introductory Tajweed." },
      { name: "keywords", content: "beginner quran classes, learn arabic alphabet, noorani qaida online, kids quran learning" },
      { property: "og:title", content: "Beginner Quran Courses — Sundus Quran Academy" },
      { property: "og:description", content: "Start your Quran learning from the very first letter with Noorani Qaida and basic Tajweed. Book your free trial." },
      { property: "og:type", content: "website" },
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
