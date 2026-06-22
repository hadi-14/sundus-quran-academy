import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "../components/layout/SiteLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Sundus Quran Academy" }, { name: "description", content: "How we collect, use, and protect your personal information." }] }),
  component: () => (
    <SiteLayout>
      <PageHero title="Privacy Policy" breadcrumb="Legal" />
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl prose prose-sm">
          <p className="text-muted-foreground">Last updated: June 2025</p>
          <h2 className="font-display text-2xl font-bold mt-6">Information We Collect</h2>
          <p className="text-muted-foreground mt-2">We collect contact information you voluntarily submit through our enrollment and contact forms — including name, email, phone number, and country.</p>
          <h2 className="font-display text-2xl font-bold mt-6">How We Use It</h2>
          <p className="text-muted-foreground mt-2">Your information is used solely to respond to your inquiry, schedule classes, and provide academic services. We do not sell your data.</p>
          <h2 className="font-display text-2xl font-bold mt-6">Cookies</h2>
          <p className="text-muted-foreground mt-2">We use minimal cookies for site functionality and basic analytics.</p>
          <h2 className="font-display text-2xl font-bold mt-6">Contact</h2>
          <p className="text-muted-foreground mt-2">For privacy concerns, email <a href="mailto:info@sundusquranacademy.com" className="underline hover:text-primary">info@sundusquranacademy.com</a>.</p>
        </div>
      </section>
    </SiteLayout>
  ),
});
