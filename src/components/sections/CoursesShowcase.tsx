import { COURSES } from "../../data/courses";
import { CourseCard } from "../CourseCard";

export function CoursesShowcase() {
  return (
    <section className="section-pad bg-off-white">
      <div className="container-page">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">Our Curriculum</div>
          <h2 className="font-display text-4xl font-bold mt-3 text-primary-dark">What Do You Want to Study?</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            From the very first letter to advanced Tajweed and Hifz — every step structured.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.map((c) => (
            <CourseCard course={c} key={c.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
