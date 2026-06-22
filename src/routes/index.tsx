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
      { name: "description", content: "Live one-on-one online Quran classes for Beginner, Intermediate, and Advanced students. Tajweed, Hifz, Arabic, and Islamic studies. Book your free trial today." },
      { name: "keywords", content: "online quran academy, learn quran online, quran classes, tajweed classes, hifz memorization, live quran tutor, learn arabic online" },
      { property: "og:title", content: "Sundus Quran Academy — Online Quran Classes" },
      { property: "og:description", content: "Live one-on-one online Quran classes with certified tutors. Book your free trial today." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sundusquranacademy.com" },
      { property: "og:image", content: "https://sundusquranacademy.com/src/assets/quran-open.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sundus Quran Academy — Learn the Qur'an Online" },
      { name: "twitter:description", content: "Live one-on-one online Quran classes with certified tutors. Book your free trial today." },
      { name: "twitter:image", content: "https://sundusquranacademy.com/src/assets/quran-open.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sundus Quran Academy",
    "url": "https://sundusquranacademy.com",
    "logo": "https://sundusquranacademy.com/src/assets/sundus-logo.png",
    "description": "Live one-on-one online Quran classes with certified tutors. Noorani Qaida, Tajweed, Hifz, Arabic, and Islamic Studies.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://sundusquranacademy.com/contact"
    }
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
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
