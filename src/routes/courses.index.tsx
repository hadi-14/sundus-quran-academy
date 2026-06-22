import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import { CourseCard } from "../components/CourseCard";
import { COURSES } from "../data/courses";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "All Courses — Sundus Quran Academy" },
      { name: "description", content: "Browse all our online Quran courses: Noorani Qaida, Tajweed, Hifz, Arabic, Islamic Studies, and more." },
    ],
  }),
  component: AllCourses,
});

function AllCourses() {
  return (
    <SiteLayout>
      <PageHero title="All Courses" subtitle="Find the right path — from your first letter to advanced Tajweed and Hifz." breadcrumb="Courses" />
      <section className="section-pad bg-off-white">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.map((c) => <CourseCard course={c} key={c.slug} />)}
        </div>
      </section>
    </SiteLayout>
  );
}
