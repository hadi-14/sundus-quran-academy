import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import { CourseCard } from "../components/CourseCard";
import { COURSES } from "../data/courses";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Online Quran Courses — Sundus Quran Academy" },
      { name: "description", content: "Browse our comprehensive range of live 1-on-1 online Quran courses including Noorani Qaida, Tajweed, Quran Memorization (Hifz), Arabic, and Islamic Studies." },
      { name: "keywords", content: "online quran courses, learn tajweed online, hifz program online, learn arabic grammar, islamic studies for kids" },
      { property: "og:title", content: "Online Quran Courses — Sundus Quran Academy" },
      { property: "og:description", content: "Browse our 1-on-one live Quran courses for beginner, intermediate, and advanced levels. Book your free trial class today." },
      { property: "og:type", content: "website" },
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
