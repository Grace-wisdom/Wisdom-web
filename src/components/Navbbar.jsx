import { useState } from "react";
import schoollogo from "../assets/schoollogo.png";
import { Menu, X, Phone, Mail, Clock, Sparkles, GraduationCap } from "lucide-react";

export default function Navbar({ onOpenAdmission }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "Achievements", href: "#achievements" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#041B3A] text-white text-xs md:text-sm py-2 px-4 md:px-8 flex flex-wrap justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-4 md:gap-6 flex-wrap">
          <a 
            href="tel:+917010318116" 
            className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition"
          >
            <Phone size={14} className="text-yellow-400" />
            <span>+91 70103 18116 / +91 98421 15398</span>
          </a>

          <a 
            href="mailto:wisdomschoolkadayanallur@gmail.com" 
            className="hidden sm:flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition"
          >
            <Mail size={14} className="text-yellow-400" />
            <span>wisdomschoolkadayanallur@gmail.com</span>
          </a>

          <span className="hidden xl:flex items-center gap-2 text-gray-300">
            <Clock size={14} className="text-yellow-400" />
            <span>Mon - Sat: 8:45 AM – 4:30 PM</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/30 text-xs font-semibold">
            <Sparkles size={13} />
            <span>Admissions Open 2026–2027</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md shadow-md z-40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo & School Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="flex items-center">
              <img 
                src={schoollogo} 
                alt="Wisdom Matric Hr. Sec. School Logo" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain transform group-hover:scale-105 transition" 
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-r from-[#082F67] via-[#0F4C9A] to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
                  WISDOM
                </h1>
              </div>
              <p className="text-[11px] md:text-xs font-extrabold text-gray-800 tracking-wider">
                MATRIC HR. SEC. SCHOOL
              </p>
              <div className="flex items-center gap-2 text-[10px] md:text-xs text-yellow-600 font-semibold tracking-widest uppercase">
                <span>Kadayanallur</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6 font-semibold text-sm text-gray-700">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="hover:text-[#082F67] hover:border-b-2 hover:border-yellow-400 py-1 transition cursor-pointer text-left font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenAdmission}
              className="bg-gradient-to-r from-[#082F67] to-[#0F4C9A] hover:from-[#0F4C9A] hover:to-[#082F67] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border border-yellow-400/40"
            >
              <GraduationCap size={18} className="text-yellow-400" />
              <span>Admission Enquiry</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#082F67] hover:text-yellow-600 p-2 rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-5 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-3 font-medium text-gray-700">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-2.5 px-3 rounded-xl hover:bg-slate-50 hover:text-[#082F67] font-semibold text-base transition flex items-center justify-between cursor-pointer"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-yellow-500">→</span>
                </button>
              ))}

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmission();
                  }}
                  className="w-full bg-[#082F67] hover:bg-yellow-500 hover:text-[#082F67] text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow transition"
                >
                  <GraduationCap size={18} />
                  <span>Admissions 2026–2027 Apply</span>
                </button>
                <div className="text-center text-xs text-gray-500 py-1">
                  📞 Helpdesk: +91 70103 18116 / 98421 15398
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}