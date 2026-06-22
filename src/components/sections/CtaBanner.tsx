import { Link } from "@tanstack/react-router";
import { IslamicPattern } from "../brand/IslamicPattern";
import mosqueImg from "@/assets/mosque-interior.jpg";

export function CtaBanner() {
  return (
    <section className="relative text-white overflow-hidden">
      <img
        src={mosqueImg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary/85" />
      <IslamicPattern className="absolute inset-0 w-full h-full" opacity={0.08} />
      <div className="relative container-page py-20 text-center">
        <p className="arabic text-gold text-2xl mb-3">وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Register for a Free Assessment</h2>
        <p className="mt-3 text-white/85 max-w-2xl mx-auto">
          Let our tutors evaluate your current level and build a learning plan tailored just for you.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/free-trial" className="btn-primary">Book Free Trial</Link>
          <Link to="/contact" className="btn-outline-white">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
