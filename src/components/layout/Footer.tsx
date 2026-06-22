import { Link } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, Facebook, Instagram, Youtube, Music2 } from "lucide-react";
import { Logo } from "../brand/Logo";
import { IslamicPattern } from "../brand/IslamicPattern";

export function Footer() {
  return (
    <footer className="relative bg-primary-dark text-white">
      <IslamicPattern className="absolute inset-0 w-full h-full pointer-events-none" opacity={0.05} />
      <div className="relative container-page py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="text-sm text-white/70 mt-4 leading-relaxed">
            Sundus Quran Academy is an online learning platform dedicated to teaching the
            Qur'an with clarity, sincerity, and excellence — accessible to every student
            around the world.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gold-light">About</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-gold-light">About Us</Link></li>
            <li><Link to="/faqs" className="hover:text-gold-light">FAQs</Link></li>
            <li><Link to="/blogs" className="hover:text-gold-light">Blog</Link></li>
            <li><Link to="/how-it-works" className="hover:text-gold-light">How It Works</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-gold-light">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-gold-light">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gold-light">Courses</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/courses/beginner" className="hover:text-gold-light">Beginner Courses</Link></li>
            <li><Link to="/courses/intermediate" className="hover:text-gold-light">Intermediate Courses</Link></li>
            <li><Link to="/courses/advanced" className="hover:text-gold-light">Advanced Courses</Link></li>
            <li><Link to="/courses" className="hover:text-gold-light">All Courses</Link></li>
            <li><Link to="/free-trial" className="hover:text-gold-light">Free Trial</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gold-light">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Mail size={14} /> <a href="mailto:info@sundusquranacademy.com" className="hover:text-gold-light">info@sundusquranacademy.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} /> <a href="tel:+923452178606" className="hover:text-gold-light">+92 345 2178606</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} /> <a href="https://wa.me/923452178606" className="hover:text-gold-light" target="_blank" rel="noopener noreferrer">WhatsApp: +92 345 2178606</a>
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-5">
            {[
              { Icon: MessageCircle, href: "https://wa.me/923452178606", label: "WhatsApp" },
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Youtube, href: "#", label: "YouTube" },
              { Icon: Music2, href: "#", label: "TikTok" }
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold transition">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-page py-5 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Sundus Quran Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
