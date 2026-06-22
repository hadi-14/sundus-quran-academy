import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";

const posts = [
  { slug: "tajweed-basics", title: "Tajweed Basics Every Student Should Know", cat: "Tajweed Tips", excerpt: "A clear introduction to the core rules of Tajweed and why they matter for every reciter.", date: "Jun 2025" },
  { slug: "hifz-routine", title: "Building a Daily Hifz Routine That Sticks", cat: "Learning Guides", excerpt: "Proven strategies to memorize and retain the Qur'an alongside school or work.", date: "May 2025" },
  { slug: "ramadan-prep", title: "Preparing Your Heart for Ramadan", cat: "Islamic Reminders", excerpt: "Practical and spiritual ways to enter Ramadan with sincerity and structure.", date: "Apr 2025" },
  { slug: "kids-learning", title: "How to Help Children Love the Qur'an", cat: "Parenting", excerpt: "Tips for parents to build a joyful, lasting relationship between kids and the Qur'an.", date: "Mar 2025" },
];

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Quran Learning Blog & Tips — Sundus Quran Academy" },
      { name: "description", content: "Explore articles on Tajweed rules, Quran memorization (Hifz) strategies, parenting tips for Islamic education, and spiritual reminders." },
      { name: "keywords", content: "quran learning blog, tajweed tips, hifz memorization tips, islamic studies reminders, parenting and quran" },
      { property: "og:title", content: "Quran Learning Blog & Tips — Sundus Quran Academy" },
      { property: "og:description", content: "Practical guides and spiritual reminders on learning the Quran, mastering Tajweed, and building Hifz routines." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero title="Blog" subtitle="Reflections, tips, and learning guides." breadcrumb="Blog" />
      <section className="section-pad bg-off-white">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => (
            <article key={p.slug} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-card transition">
              <div className="h-44 bg-gradient-to-br from-primary to-primary-dark relative">
                <div className="absolute bottom-3 left-3 bg-white/90 text-primary text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">{p.cat}</div>
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground">{p.date}</div>
                <h3 className="font-display text-lg font-bold mt-1.5 text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  ),
});
