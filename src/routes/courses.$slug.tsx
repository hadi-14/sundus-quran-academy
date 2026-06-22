import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  BookOpen, CheckCircle2, Clock, GraduationCap, Languages, Users,
  Award, Calendar, Globe, ArrowRight, ChevronRight,
} from "lucide-react";
import { SiteLayout } from "../components/layout/SiteLayout";
import { CourseCard } from "../components/CourseCard";
import { COURSES, LEVEL_LABEL, type Course } from "../data/courses";
import { TrialForm } from "../components/TrialForm";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }): { course: Course } => {
    const course = COURSES.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    if (!c) return { meta: [{ title: "Course Not Found — Sundus Quran Academy" }] };
    const levelLabel = c.level.charAt(0).toUpperCase() + c.level.slice(1);
    return {
      meta: [
        { title: `${c.title} Course (${levelLabel}) — Sundus Quran Academy` },
        { name: "description", content: `${c.description} Join live one-on-one classes with certified tutors. Flexible schedule, personalized pace.` },
        { name: "keywords", content: `${c.title.toLowerCase()}, online ${c.title.toLowerCase()} course, learn ${c.title.toLowerCase()}, online quran academy, ${c.level} quran course` },
        { property: "og:title", content: `${c.title} — Online Quran Course` },
        { property: "og:description", content: c.description },
        { property: "og:image", content: c.image },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${c.title} Course — Sundus Quran Academy` },
        { name: "twitter:description", content: c.description },
        { name: "twitter:image", content: c.image },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-4xl font-bold text-primary-dark">Course not found</h1>
        <p className="text-muted-foreground mt-3">The course you're looking for doesn't exist.</p>
        <Link to="/courses" className="btn-primary mt-6 inline-flex">Browse all courses</Link>
      </div>
    </SiteLayout>
  ),
  component: CourseDetail,
});

function CourseDetail() {
  const { course } = Route.useLoaderData() as { course: Course };
  const details = getDetails(course);
  const related = COURSES.filter((c) => c.slug !== course.slug && c.level === course.level).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={course.image} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/40" />
        </div>
        <div className="container-page relative py-16 lg:py-24">
          <nav className="text-xs text-white/70 flex items-center gap-2 mb-5">
            <Link to="/" className="hover:text-gold">Home</Link>
            <ChevronRight size={12} />
            <Link to="/courses" className="hover:text-gold">Courses</Link>
            <ChevronRight size={12} />
            <span className="text-white">{course.title}</span>
          </nav>
          <span className="inline-block bg-gold text-primary-dark px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {LEVEL_LABEL[course.level]}
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mt-4 max-w-3xl">{course.title}</h1>
          <p className="mt-4 text-lg text-white/85 max-w-2xl leading-relaxed">{details.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-white/80">
            <Meta Icon={Clock} label="Duration" value={course.duration} />
            <Meta Icon={Users} label="Format" value="1-on-1 Live" />
            <Meta Icon={Globe} label="Schedule" value="Flexible · Your Timezone" />
            <Meta Icon={Award} label="Certificate" value="Yes, on completion" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/free-trial" className="btn-gold">Book Free Trial</Link>
            <Link to="/contact" className="btn-secondary !bg-white/10 !text-white !border-white/20 hover:!bg-white/20">Talk to Advisor</Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad bg-off-white">
        <div className="container-page grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <Block title="Course Overview" Icon={BookOpen}>
              {details.overview.map((p, i) => (
                <p key={i} className="text-foreground/85 leading-relaxed mb-3">{p}</p>
              ))}
            </Block>

            <Block title="What You Will Learn" Icon={GraduationCap}>
              <ul className="grid sm:grid-cols-2 gap-3">
                {details.learn.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/85">{item}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Course Curriculum" Icon={Calendar}>
              <ol className="space-y-3">
                {details.curriculum.map((m, i) => (
                  <li key={m.title} className="bg-white rounded-xl border border-border p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-primary-light text-primary font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-primary-dark">{m.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </Block>

            <Block title="Who Is This Course For?" Icon={Users}>
              <ul className="space-y-2">
                {details.audience.map((a) => (
                  <li key={a} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-gold mt-0.5 shrink-0" />
                    <span className="text-foreground/85">{a}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Requirements" Icon={Languages}>
              <ul className="space-y-2">
                {details.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground/85">{r}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 self-start space-y-5">
            <TrialForm compact />
            <div className="bg-white rounded-2xl border border-border p-6">
              <h4 className="font-display text-lg font-bold text-primary-dark">Course Highlights</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <SideRow Icon={Clock} k="Duration" v={course.duration} />
                <SideRow Icon={GraduationCap} k="Level" v={LEVEL_LABEL[course.level]} />
                <SideRow Icon={Users} k="Class Type" v="1-on-1 Live" />
                <SideRow Icon={Globe} k="Languages" v="English, Urdu, Arabic" />
                <SideRow Icon={Award} k="Certificate" v="Yes" />
                <SideRow Icon={Calendar} k="Trial Class" v="Free" />
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-page">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-gold font-bold">Continue Exploring</p>
                <h2 className="font-display text-3xl font-bold text-primary-dark mt-2">Related Courses</h2>
              </div>
              <Link to="/courses" className="text-sm text-primary font-semibold inline-flex items-center gap-1.5">
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((c) => <CourseCard course={c} key={c.slug} />)}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}

function Meta({ Icon, label, value }: { Icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={16} className="text-gold" />
      <span><span className="text-white/60">{label}:</span> <span className="font-semibold">{value}</span></span>
    </div>
  );
}

function Block({ title, Icon, children }: { title: string; Icon: any; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
          <Icon size={18} />
        </div>
        <h2 className="font-display text-2xl font-bold text-primary-dark">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function SideRow({ Icon, k, v }: { Icon: any; k: string; v: string }) {
  return (
    <li className="flex items-start justify-between gap-3 border-b border-border last:border-0 pb-3 last:pb-0">
      <span className="flex items-center gap-2 text-muted-foreground"><Icon size={14} /> {k}</span>
      <span className="font-semibold text-foreground text-right">{v}</span>
    </li>
  );
}

/* --------- per-course detail content (with sensible defaults) --------- */

type Details = {
  tagline: string;
  overview: string[];
  learn: string[];
  curriculum: { title: string; desc: string }[];
  audience: string[];
  requirements: string[];
};

const OVERRIDES: Record<string, Partial<Details>> = {
  "noorani-qaida": {
    tagline: "The essential first step — master the Arabic alphabet, pronunciation, and the foundations of reading the Qur'an.",
    learn: [
      "All 28 Arabic letters with correct Makharij (articulation points)",
      "Short vowels (Fatha, Kasra, Damma) and long vowels (Madd)",
      "Tanween, Sukoon, and Shaddah rules",
      "Joining letters and reading words fluently",
      "Stopping rules (Waqf) and basic recitation etiquette",
      "Confidence to begin reading the Qur'an itself",
    ],
    curriculum: [
      { title: "Arabic Alphabet & Makharij", desc: "Recognize and pronounce every letter from its correct articulation point." },
      { title: "Short Vowels & Combinations", desc: "Fatha, Kasra, Damma — reading single and joined letters." },
      { title: "Long Vowels (Madd) & Tanween", desc: "Stretching letters, double vowels, and their timings." },
      { title: "Sukoon, Shaddah & Joining", desc: "Stopping on letters, doubling, and fluent joined reading." },
      { title: "Practice Words & Short Verses", desc: "Apply rules on Qaida exercises and easy Qur'anic words." },
      { title: "Assessment & Path to Quran Reading", desc: "Final review and preparation for Nazra (Qur'an reading)." },
    ],
  },
  "hifz": {
    tagline: "A structured, supported path to memorize the entire Qur'an with strong retention through daily Sabaq, Sabaqi & Manzil.",
    learn: [
      "Proven Hifz technique — Sabaq (new), Sabaqi (recent), Manzil (old revision)",
      "Memorization with full Tajweed",
      "Daily portion targets tailored to your pace",
      "Robust revision schedule that prevents forgetting",
      "Personal coach to keep you consistent and motivated",
      "Du'as and adab of carriers of the Qur'an",
    ],
    curriculum: [
      { title: "Hifz Readiness Assessment", desc: "Tajweed check and design of a personal plan." },
      { title: "Short Surahs (Juz Amma)", desc: "Build memorization muscle with the 30th Juz." },
      { title: "Daily Sabaq System", desc: "Set, track, and refine your daily new portion." },
      { title: "Sabaqi Revision", desc: "Daily revision of recently memorized pages." },
      { title: "Manzil Cycle", desc: "Long-term revision so older Juz never fade." },
      { title: "Completion & Ijazah Track", desc: "Final revision, testing, and optional Ijazah pathway." },
    ],
  },
  "advanced-tajweed": {
    tagline: "Refine your recitation to mastery level with deep study of Tajweed rules and an introduction to the Qira'at.",
    learn: [
      "Advanced rules of Noon Sakinah, Meem Sakinah, and Madd",
      "Detailed Sifaat (qualities) of letters",
      "Waqf, Ibtida, and rare recitation rules",
      "Introduction to the 10 Qira'at and their narrators",
      "Live correction and recitation drills",
      "Path to Ijazah for qualified students",
    ],
  },
  "arabic-language": {
    tagline: "Understand the Qur'an in its original language — Nahw, Sarf, and classical Arabic comprehension.",
  },
};

function getDetails(c: Course): Details {
  const o = OVERRIDES[c.slug] ?? {};
  return {
    tagline: o.tagline ?? `${c.description} Taught one-on-one by certified tutors at a pace that suits you.`,
    overview: o.overview ?? [
      `${c.title} is a structured, one-on-one online course at Sundus Quran Academy. Each session is tailored to your current level and learning goals, with a certified tutor guiding you every step of the way.`,
      `You'll progress through a clear roadmap, get real-time correction, and build a strong, lasting foundation in your relationship with the Qur'an — in shaa Allah.`,
    ],
    learn: o.learn ?? [
      "Build strong fundamentals with structured lessons",
      "Receive personal, real-time tutor feedback",
      "Practice consistently with guided exercises",
      "Track measurable progress every week",
      "Develop confidence and fluency in recitation",
      "Connect your learning to the meaning of the Qur'an",
    ],
    curriculum: o.curriculum ?? [
      { title: "Level Assessment", desc: "Your tutor evaluates your current ability and sets a personal plan." },
      { title: "Foundations", desc: "Core concepts and skills required for this course." },
      { title: "Guided Practice", desc: "Hands-on practice with immediate tutor correction." },
      { title: "Applied Lessons", desc: "Apply learned rules on selected portions of the Qur'an." },
      { title: "Review & Reinforcement", desc: "Regular reviews to consolidate everything you've learned." },
      { title: "Final Assessment", desc: "Demonstrate mastery and receive your course certificate." },
    ],
    audience: o.audience ?? [
      "Children and adults of all ages",
      "Complete beginners and returning learners",
      "Students who prefer a flexible, online schedule",
      "Learners who want personal, 1-on-1 attention",
      "Anyone seeking a structured, results-focused path",
    ],
    requirements: o.requirements ?? [
      "A stable internet connection and a quiet space",
      "A laptop, tablet, or smartphone with Zoom/Skype",
      "A printed or digital Mushaf (we can recommend one)",
      "Commitment to attend regular weekly classes",
    ],
  };
}
