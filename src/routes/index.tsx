import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "../components/layout/SiteLayout";
import { Hero } from "../components/sections/Hero";
import { CategoryCards } from "../components/sections/CategoryCards";
import { BestPlace } from "../components/sections/BestPlace";
import { HowItWorks } from "../components/sections/HowItWorks";
import { CoursesShowcase } from "../components/sections/CoursesShowcase";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Testimonials } from "../components/sections/Testimonials";
import { CtaBanner } from "../components/sections/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sundus Quran Academy — Learn the Qur'an Online with Certified Tutors" },
      { name: "description", content: "Live one-on-one online Quran classes for Beginner, Intermediate, and Advanced students. Tajweed, Hifz, Arabic, and more. Book your free trial today." },
      { property: "og:title", content: "Sundus Quran Academy — Online Quran Classes" },
      { property: "og:description", content: "Live one-on-one online Quran classes with certified tutors. Book your free trial today." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <CategoryCards />
      <BestPlace />
      <HowItWorks />
      <CoursesShowcase />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </SiteLayout>
  );
}
