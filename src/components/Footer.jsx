import schoollogo from "../assets/schoollogo.png";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export default function Footer({ onOpenAdmission }) {
  const quickLinks = [
    { label: "About Wisdom", href: "#about" },
    { label: "Academic Levels", href: "#academics" },
    { label: "Campus Facilities", href: "#facilities" },
    { label: "Achievements & Pride", href: "#achievements" },
    { label: "Campus Gallery", href: "#gallery" },
    { label: "Parent Reviews", href: "#testimonials" },
    { label: "Admissions & FAQ", href: "#faq" },
    { label: "Campus Location & Map", href: "#location" },
  ];

  const academicStreams = [
    "Pre-KG, LKG & UKG (Kindergarten)",
    "Primary School (Class I to V)",
    "Middle School (Class VI to VIII)",
    "Secondary School (Class IX & X)",
    "+2 Bio-Maths Stream",
    "+2 Computer Science Stream",
    "+2 Commerce & Accountancy Stream"
  ];

  const handleLinkClick = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-[#03142B] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: School Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={schoollogo} 
                alt="Wisdom Matric Hr. Sec. School Logo" 
                className="w-16 h-16 object-contain" 
              />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                WISDOM MATRIC HR. SEC. SCHOOL
              </h3>
              <p className="text-xs text-yellow-400 font-bold uppercase tracking-widest mt-0.5">
                Kadayanallur • Established 2001
              </p>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Empowering thousands of young learners with academic distinction, high moral character, modern science, and holistic life skills for over 25 years.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={onOpenAdmission}
                className="bg-yellow-400 hover:bg-yellow-300 text-[#082F67] px-5 py-2.5 rounded-full font-bold text-xs shadow-md transition transform hover:scale-105 cursor-pointer"
              >
                Apply for Admissions 2026–27
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-400 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="hover:text-yellow-400 transition cursor-pointer text-left py-0.5"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-400 border-b border-white/10 pb-2">
              Academic Streams
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {academicStreams.map((stream, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                  <span>{stream}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location Info (3.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-400 border-b border-white/10 pb-2">
              Get in Touch
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                <span>
                  Wisdom Matric Hr. Sec. School,<br />
                  Main Campus, Kadayanallur - 627751,<br />
                  Tenkasi District, Tamil Nadu, India.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-400 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+917010318116" className="hover:text-yellow-400 transition">
                    +91 70103 18116
                  </a>
                  <a href="tel:+919842115398" className="hover:text-yellow-400 transition text-gray-300">
                    +91 98421 15398
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-400 shrink-0" />
                <a href="mailto:wisdomschoolkadayanallur@gmail.com" className="hover:text-yellow-400 transition text-xs truncate">
                  wisdomschoolkadayanallur@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400 pt-1">
                <Clock size={16} className="text-yellow-400 shrink-0" />
                <span>Office: Mon – Sat (8:45 AM – 4:30 PM)</span>
              </div>
            </div>

            {/* Map Link */}
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Kadayanallur+Wisdom+School"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-yellow-400 hover:text-yellow-300 font-semibold underline"
              >
                <span>Find Campus on Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Affiliation */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Wisdom Matric Hr. Sec. School, Kadayanallur</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Govt. of Tamil Nadu Recognized</span>
            <span>•</span>
            <span>Code: MATRIC-KDNL-2001</span>
            <span>•</span>
            <span className="text-yellow-400 font-semibold">25 Years Silver Jubilee</span>
          </div>
        </div>

      </div>
    </footer>
  );
}