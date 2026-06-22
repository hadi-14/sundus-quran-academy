import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import { CourseCard } from "../components/CourseCard";
import { COURSES } from "../data/courses";

export const Route = createFileRoute("/courses/advanced")({
  head: () => ({
    meta: [
      { title: "Advanced Quran Courses & Hifz — Sundus Quran Academy" },
      { name: "description", content: "Take your Quranic studies to the next level. We offer advanced Hifz (memorization) programs, advanced Tajweed rules with Qiraat, and Quranic Arabic grammar." },
      { name: "keywords", content: "advanced quran classes, online hifz program, learn quranic arabic, advanced tajweed rules" },
      { property: "og:title", content: "Advanced Quran Courses & Hifz — Sundus Quran Academy" },
      { property: "og:description", content: "Master Tajweed, memorize the Quran, and study Arabic grammar with certified scholars in one-on-one sessions." },
      { property: "og:type", content: "website" },
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
