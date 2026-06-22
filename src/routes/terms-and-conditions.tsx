import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({ meta: [{ title: "Terms & Conditions — Sundus Quran Academy" }, { name: "description", content: "The terms governing your use of Sundus Quran Academy services." }] }),
  component: () => (
    <SiteLayout>
      <PageHero title="Terms & Conditions" breadcrumb="Legal" />
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <p className="text-muted-foreground">Last updated: June 2025</p>
          <h2 className="font-display text-2xl font-bold mt-6">Enrollment</h2>
          <p className="text-muted-foreground mt-2">Enrollment is confirmed only after a successful free trial and agreement on schedule and fees.</p>
          <h2 className="font-display text-2xl font-bold mt-6">Attendance & Rescheduling</h2>
          <p className="text-muted-foreground mt-2">Please give at least 4 hours' notice for rescheduling. Missed classes without notice may not be made up.</p>
          <h2 className="font-display text-2xl font-bold mt-6">Payments</h2>
          <p className="text-muted-foreground mt-2">Monthly fees are paid in advance. Refunds are issued on a pro-rata basis where applicable.</p>
          <h2 className="font-display text-2xl font-bold mt-6">Conduct</h2>
          <p className="text-muted-foreground mt-2">Students and tutors are expected to interact with respect, sincerity, and patience at all times.</p>
        </div>
      </section>
    </SiteLayout>
  ),
});
