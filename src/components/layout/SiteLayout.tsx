import type { ReactNode } from "react";
import { Topbar } from "./Topbar";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb?: string }) {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 overflow-hidden">
      <div className="container-page relative text-center">
        {breadcrumb && <div className="text-xs uppercase tracking-[0.2em] text-gold-light mb-3">{breadcrumb}</div>}
        <h1 className="font-display text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 text-white/80 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
