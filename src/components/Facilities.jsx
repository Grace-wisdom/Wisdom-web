import { Laptop, BookOpen, Bus, Trophy, ShieldCheck, Sparkles, Building, Activity } from "lucide-react";

export default function Facilities() {
  const facilitiesList = [
    {
      icon: Laptop,
      title: "Smart Digital Classrooms",
      description: "Interactive smart boards, multimedia lessons, and audio-visual pedagogical systems for engaging learning.",
      badge: "High-Tech"
    },
    {
      icon: Activity,
      title: "Science & Robotics Labs",
      description: "Fully equipped Physics, Chemistry, Biology and STEM Robotics labs for practical experimentation.",
      badge: "Hands-on"
    },
    {
      icon: BookOpen,
      title: "Extensive Library & Reading Hub",
      description: "Thousands of books, encyclopedias, journals, fiction, competitive exam guides, and digital e-readers.",
      badge: "Knowledge"
    },
    {
      icon: Trophy,
      title: "Sports Complex & Playgrounds",
      description: "Cricket, football ground, basketball, badminton courts, martial arts, athletic track, and yoga pavilion.",
      badge: "Fitness"
    },
    {
      icon: Bus,
      title: "Safe GPS-Tracked Transport",
      description: "Fleet of modern buses covering Kadayanallur, Tenkasi, Puliyangudi, and neighboring towns with speed governors.",
      badge: "Safe Commute"
    },
    {
      icon: ShieldCheck,
      title: "CCTV & 24/7 Campus Security",
      description: "Round-the-clock surveillance, secure gated perimeter, RO drinking water, and hygienic sanitation.",
      badge: "Secure"
    }
  ];

  return (
    <section id="facilities" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <Building size={14} className="text-yellow-600" />
            World-Class Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F67] tracking-tight">
            Campus Facilities Built for Modern Excellence
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            A secure, inspiring, and technologically equipped campus designed to support academic, sports, and creative pursuits.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 hover:bg-[#082F67] hover:text-white rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-2 group shadow-sm hover:shadow-2xl border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-[#082F67] flex items-center justify-center shadow-md group-hover:scale-110 transition duration-300">
                      <Icon size={26} />
                    </div>
                    <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-white text-[#082F67] group-hover:bg-yellow-400 group-hover:text-[#082F67] shadow-sm transition">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#082F67] group-hover:text-white mb-3 transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-200 text-sm leading-relaxed transition">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 group-hover:border-white/10 flex items-center gap-1 text-xs font-semibold text-yellow-600 group-hover:text-yellow-300 transition">
                  <Sparkles size={14} />
                  <span>Available on Campus</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
