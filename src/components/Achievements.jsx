import { Trophy, Award, Medal, Star, CheckCircle, Sparkles } from "lucide-react";

export default function Achievements() {
  const highlights = [
    {
      icon: Trophy,
      title: "100% Board Exam Results",
      desc: "Continuous 100% pass track record in SSLC (10th) and Higher Secondary (+2) Tamil Nadu State Board examinations."
    },
    {
      icon: Star,
      title: "District & State Centums",
      desc: "Numerous 100/100 centum scorers in Mathematics, Physics, Chemistry, Biology, and Computer Science."
    },
    {
      icon: Medal,
      title: "Sports & Athletics Laurels",
      desc: "Championship trophies in District & State level athletic meets, silambam, karate, and football tournaments."
    },
    {
      icon: Award,
      title: "NEET & Higher Education Success",
      desc: "Alumni securing admissions in top government medical colleges, NITs, engineering universities, and CA institutes."
    }
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#041B3A] text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-sm">
            <Trophy size={14} className="text-yellow-400" />
            Hall of Fame & Pride
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Celebrating 25 Years of Glorious Milestones
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            Consistently leading Kadayanallur and Tenkasi district in scholastic standards, values, and student triumphs.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="bg-gradient-to-r from-[#082F67] via-[#0F4C9A] to-[#082F67] rounded-3xl p-8 sm:p-10 border border-yellow-400/30 shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-yellow-400 text-[#082F67] flex items-center justify-center shrink-0 shadow-lg">
              <Trophy size={36} />
            </div>
            <div>
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles size={14} /> Quarter Century Landmark (2001 – 2026)
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-1">25 Years of Academic Excellence</h3>
              <p className="text-gray-300 text-sm mt-2 max-w-xl">
                Empowering thousands of students who are today excelling worldwide as doctors, software architects, professors, and civil servants.
              </p>
            </div>
          </div>
          <div className="shrink-0 bg-yellow-400 text-[#082F67] px-6 py-4 rounded-2xl text-center shadow-lg font-black">
            <p className="text-3xl">25+</p>
            <p className="text-xs uppercase tracking-wider">Years of Trust</p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-6 transition-all duration-300 hover:border-yellow-400/50 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 flex items-center justify-center mb-5">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1 text-[11px] text-yellow-300 font-semibold">
                  <CheckCircle size={13} />
                  <span>Verified Track Record</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
