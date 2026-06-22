import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "../brand/Logo";

const nav = [
  { to: "/", label: "Home" },
  {
    label: "Courses",
    children: [
      { to: "/courses", label: "All Courses" },
      { to: "/courses/beginner", label: "Beginner" },
      { to: "/courses/intermediate", label: "Intermediate" },
      { to: "/courses/advanced", label: "Advanced" },
    ],
  },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/tutors", label: "Tutors" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_-8px_rgba(19,77,42,0.18)]" : ""
      }`}
    >
      <div className="container-page flex items-center justify-between h-[74px]">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            "children" in item ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition">
                  {item.label} <ChevronDown size={14} />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="bg-white shadow-soft rounded-lg py-2 min-w-[200px] border border-border">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-primary"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-primary" }}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link to="/free-trial" className="btn-primary">
            Free Trial
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-page py-4 flex flex-col">
            {nav.map((item) =>
              "children" in item ? (
                <div key={item.label}>
                  <button
                    onClick={() => setCoursesOpen(!coursesOpen)}
                    className="flex items-center justify-between w-full py-3 font-medium"
                  >
                    {item.label} <ChevronDown size={14} className={coursesOpen ? "rotate-180" : ""} />
                  </button>
                  {coursesOpen &&
                    item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary"
                      >
                        {c.label}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 font-medium border-b border-border"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link to="/free-trial" onClick={() => setOpen(false)} className="btn-primary mt-4">
              Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
