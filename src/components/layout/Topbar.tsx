import { Mail, Phone, MessageCircle, Facebook, Instagram, Youtube, Music2 } from "lucide-react";

export function Topbar() {
  const social = [
    { Icon: MessageCircle, href: "#", label: "WhatsApp" },
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Youtube, href: "#", label: "YouTube" },
    { Icon: Music2, href: "#", label: "TikTok" },
  ];
  return (
    <div className="hidden md:block bg-primary-dark text-white text-[12px]">
      <div className="container-page flex items-center justify-between py-2">
        <div className="flex items-center gap-5">
          <a href="mailto:academy@sundusquranacademy.com" className="flex items-center gap-1.5 hover:text-gold-light">
            <Mail size={13} /> academy@sundusquranacademy.com
          </a>
          <a href="tel:+10000000000" className="flex items-center gap-1.5 hover:text-gold-light">
            <Phone size={13} /> +1 (000) 000-0000
          </a>
        </div>
        <div className="flex items-center gap-3">
          {social.map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} className="hover:text-gold-light transition">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
