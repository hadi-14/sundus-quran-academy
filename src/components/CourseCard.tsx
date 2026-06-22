import { Link } from "@tanstack/react-router";
import { Clock, ArrowRight } from "lucide-react";
import type { Course } from "../data/courses";
import { LEVEL_LABEL } from "../data/courses";

export function CourseCard({ course }: { course: Course }) {
  const badge =
    course.level === "beginner"
      ? "badge-beginner"
      : course.level === "intermediate"
        ? "badge-intermediate"
        : "badge-advanced";
  return (
    <article className="group bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-soft hover:-translate-y-1 transition flex flex-col">
      <Link to="/courses/$slug" params={{ slug: course.slug }} className="relative aspect-[16/10] overflow-hidden bg-primary-light block">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
        <span className={`absolute top-3 left-3 ${badge}`}>{LEVEL_LABEL[course.level]}</span>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <Link to="/courses/$slug" params={{ slug: course.slug }}>
          <h3 className="font-display text-xl font-bold text-foreground hover:text-primary transition">{course.title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{course.description}</p>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-4">
          <Clock size={13} /> {course.duration}
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <Link
            to="/courses/$slug"
            params={{ slug: course.slug }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
          >
            View Details <ArrowRight size={15} />
          </Link>
          <Link
            to="/free-trial"
            className="text-xs font-semibold text-gold hover:underline"
          >
            Free Trial
          </Link>
        </div>
      </div>
    </article>
  );
}
