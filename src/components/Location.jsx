import { useState } from "react";
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  Copy, 
  Check, 
  Bus, 
  Train, 
  Calendar,
  Compass
} from "lucide-react";

export default function Location({ onOpenAdmission }) {
  const [copied, setCopied] = useState(false);

  const schoolAddress = "Wisdom Matriculation Higher Secondary School, Melakadayanallur / Panpozhi Road, Kadayanallur - 627751, Tenkasi District, Tamil Nadu, India";
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Wisdom+Matriculation+Higher+Secondary+School+Kadayanallur";
  const googleMapsEmbedUrl = "https://maps.google.com/maps?q=Wisdom+Matriculation+Higher+Secondary+School+Kadayanallur&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(schoolAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const transportHighlights = [
    {
      icon: Bus,
      title: "Kadayanallur Bus Stand",
      distance: "~1.8 km (5 mins drive)",
      desc: "Frequent bus services from Tenkasi, Tirunelveli, and Sankarankovil."
    },
    {
      icon: Train,
      title: "Kadayanallur Railway Station",
      distance: "~2.5 km (8 mins drive)",
      desc: "Direct passenger and express train connectivity on the Kollam–Sengottai route."
    },
    {
      icon: Compass,
      title: "Landmark & Access",
      distance: "Near Panpozhi Road",
      desc: "Easily accessible from main arterial roads with spacious parking & safe drop-off zones."
    }
  ];

  return (
    <section id="location" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-200 text-[#082F67] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin size={14} className="text-yellow-600" />
            <span>Campus Location & Map</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F67] tracking-tight">
            Visit Our School Campus
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Conveniently situated in <span className="font-bold text-[#082F67]">Kadayanallur, Tenkasi District</span>, our expansive, student-friendly campus is well-connected and easily accessible.
          </p>
        </div>

        {/* 2-Column Grid: Details Left, Interactive Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Campus Details Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Address Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-gray-100 transition-all hover:border-yellow-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#082F67] text-yellow-400 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin size={24} />
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 hover:border-yellow-400 text-gray-600 hover:text-[#082F67] bg-slate-50 transition cursor-pointer"
                  title="Copy address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <h3 className="text-xl font-black text-[#082F67]">
                Wisdom Matric Hr. Sec. School
              </h3>
              <p className="text-xs font-bold text-yellow-600 uppercase tracking-wider mt-0.5">
                Main Campus • Kadayanallur
              </p>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Melakadayanallur / Panpozhi Road,<br />
                Kadayanallur - 627751,<br />
                Tenkasi District, Tamil Nadu, India.
              </p>

              {/* Action Buttons: Get Directions & Open Map */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 bg-[#082F67] hover:bg-[#0F4C9A] text-white px-5 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Navigation size={16} className="text-yellow-400" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Kadayanallur+Wisdom+School"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#082F67] px-4 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <ExternalLink size={16} />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* Timings & Contact Info */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg shadow-slate-100 border border-gray-100 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Campus Visiting Hours
                  </h4>
                  <p className="text-sm font-bold text-[#082F67]">
                    Mon – Sat: 8:45 AM – 4:30 PM
                  </p>
                  <p className="text-xs text-gray-500">Admissions & enquiry desk open during school hours</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={16} className="text-yellow-500 shrink-0" />
                  <a href="tel:+917010318116" className="hover:text-[#082F67] font-semibold transition">
                    +91 70103 18116
                  </a>
                  <span className="text-gray-300">/</span>
                  <a href="tel:+919842115398" className="hover:text-[#082F67] font-semibold transition">
                    +91 98421 15398
                  </a>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <Mail size={16} className="text-yellow-500 shrink-0" />
                  <a href="mailto:wisdomschoolkadayanallur@gmail.com" className="hover:text-[#082F67] font-medium transition truncate max-w-[200px]">
                    wisdomschoolkadayanallur@gmail.com
                  </a>
                </div>
              </div>

              {/* Book a Campus Visit CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenAdmission}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-[#082F67] py-2.5 px-4 rounded-xl font-bold text-xs shadow transition cursor-pointer"
                >
                  <Calendar size={15} />
                  <span>Book a Campus Visit & Admission Enquiry</span>
                </button>
              </div>
            </div>

            {/* Connectivity highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">
                Nearby Transport & Connectivity
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {transportHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="bg-white/80 backdrop-blur-sm p-3.5 rounded-2xl border border-gray-100 shadow-sm hover:shadow transition"
                    >
                      <div className="flex items-center gap-2 text-[#082F67] font-bold text-xs mb-1">
                        <Icon size={15} className="text-yellow-500 shrink-0" />
                        <span>{item.distance}</span>
                      </div>
                      <p className="text-[11px] font-semibold text-gray-700 leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Google Map (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[450px] sm:h-[550px] lg:h-full min-h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              
              {/* Interactive iframe embed */}
              <iframe
                title="Wisdom Matriculation Higher Secondary School Kadayanallur Map Location"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-[1.02] saturate-[1.05]"
              />

              {/* Floating Map Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <p className="text-xs font-black text-[#082F67] leading-none">
                    Wisdom Campus Map
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    Kadayanallur, Tamil Nadu 627751
                  </p>
                </div>
              </div>

              {/* Floating Quick Action over map */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#082F67]/90 hover:bg-[#082F67] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xl backdrop-blur-md border border-white/20 transition transform hover:scale-105"
                >
                  <Navigation size={14} className="text-yellow-400" />
                  <span>Open Full Directions</span>
                  <ExternalLink size={12} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
