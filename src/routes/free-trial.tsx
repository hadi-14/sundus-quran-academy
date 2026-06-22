import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";
import { TrialForm } from "../components/TrialForm";

export const Route = createFileRoute("/free-trial")({
  head: () => ({
    meta: [
      { title: "Free Trial — Sundus Quran Academy" },
      { name: "description", content: "Book your free one-on-one trial Quran class today — no commitment required." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero title="Book Your Free Trial" subtitle="One free class. No commitment. Discover your path to learning the Qur'an." breadcrumb="Free Trial" />
      <section className="section-pad bg-off-white">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-dark">What to expect</h2>
            <ul className="mt-5 space-y-3 text-foreground/85">
              <li>• A short call to understand your goals and current level.</li>
              <li>• A live trial class with a certified tutor.</li>
              <li>• A personalized learning plan tailored for you.</li>
              <li>• A flexible schedule that fits your time zone.</li>
            </ul>
            <p className="arabic text-gold text-2xl mt-8">خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</p>
            <p className="text-xs text-muted-foreground italic mt-1">"The best of you are those who learn the Qur'an and teach it." — Sahih al-Bukhari</p>
          </div>
          <div className="max-w-md w-full mx-auto"><TrialForm /></div>
        </div>
      </section>
    </SiteLayout>
  ),
});
