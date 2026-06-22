import kidsImg from "@/assets/course-kids.jpg";
import tajweedImg from "@/assets/course-tajweed.jpg";
import hifzImg from "@/assets/course-hifz.jpg";
import arabicImg from "@/assets/course-arabic.jpg";
import quranImg from "@/assets/quran-open.jpg";
import mosqueImg from "@/assets/mosque-interior.jpg";

export type Level = "beginner" | "intermediate" | "advanced";

export type Course = {
  title: string;
  level: Level;
  description: string;
  duration: string;
  slug: string;
  image: string;
};

export const COURSES: Course[] = [
  { title: "Noorani Qaida", level: "beginner", description: "Learn the Arabic alphabet and basic pronunciation rules.", duration: "2–3 months", slug: "noorani-qaida", image: arabicImg },
  { title: "Quran Reading (Nazra)", level: "beginner", description: "Read the Quran with fluency, starting from Surah Al-Fatiha.", duration: "6–9 months", slug: "quran-reading", image: quranImg },
  { title: "Basic Tajweed", level: "beginner", description: "Introduction to the rules of proper Quranic recitation.", duration: "3 months", slug: "basic-tajweed", image: tajweedImg },
  { title: "Tajweed Rules (Full)", level: "intermediate", description: "Complete mastery of all Tajweed rules with applied practice.", duration: "6 months", slug: "tajweed-full", image: tajweedImg },
  { title: "Quran Recitation", level: "intermediate", description: "Structured recitation practice with one-on-one tutor correction.", duration: "Ongoing", slug: "quran-recitation", image: kidsImg },
  { title: "Islamic Studies", level: "intermediate", description: "Core Islamic knowledge — Fiqh, Hadith, and Seerah basics.", duration: "6–12 months", slug: "islamic-studies", image: mosqueImg },
  { title: "Hifz (Memorization)", level: "advanced", description: "Structured Quran memorization with a robust revision system.", duration: "2–4 years", slug: "hifz", image: hifzImg },
  { title: "Advanced Tajweed", level: "advanced", description: "Deep study of Tajweed with an introduction to Qiraat.", duration: "9 months", slug: "advanced-tajweed", image: tajweedImg },
  { title: "Arabic Language", level: "advanced", description: "Quranic Arabic grammar (Nahw & Sarf) and comprehension.", duration: "12 months", slug: "arabic-language", image: arabicImg },
];

export const LEVEL_LABEL: Record<Level, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};
