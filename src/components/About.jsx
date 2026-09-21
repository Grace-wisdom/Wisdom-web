import building from "../assets/building.png";
import { CheckCircle2, Award, Heart, BookOpen, Compass, ShieldCheck, ArrowRight, Quote, Sparkles } from "lucide-react";

export default function About({ onOpenAdmission }) {
  const pillars = [
    {
      icon: BookOpen,
      title: "Academic Rigor",
      desc: "Comprehensive Tamil Nadu Matric & Higher Secondary Board curriculum with NEET/JEE foundation."
    },
    {
      icon: Heart,
      title: "Moral & Ethical Values",
      desc: "Cultivating empathy, respect, civic responsibility, and moral consciousness in every child."
    },
    {
      icon: Compass,
      title: "21st-Century STEM",
      desc: "Smart classrooms, hands-on robotics, computer literacy, and interactive science labs."
    },
    {
      icon: Award,
      title: "Sports & Leadership",
      desc: "Physical fitness, yoga, martial arts, athletics, debates, and leadership development."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck size={14} className="text-yellow-600" />
            About Wisdom School
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F67] tracking-tight">
            Nurturing Responsible Citizens & Future Leaders Since 2001
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Over <span className="font-bold text-[#082F67]">25 Years of Educational Excellence</span> in Kadayanallur, Tamil Nadu.
          </p>
        </div>

        {/* 2-Column Content: Left Media & Quote, Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Campus Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[36px] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={building}
                alt="Wisdom Matric Hr. Sec. School Kadayanallur Campus"
                className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041B3A]/90 via-[#082F67]/30 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-1 text-yellow-400 font-bold text-sm">
                  <Sparkles size={16} />
                  <span>Inspiring Education Since 2001</span>
                </div>
                <p className="font-black text-xl text-white">Wisdom Campus • Kadayanallur</p>
              </div>
            </div>

            {/* Principal Quote Card */}
            <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-md relative">
              <Quote size={28} className="text-yellow-500/40 absolute top-4 right-4" />
              <p className="text-gray-700 italic text-sm leading-relaxed">
                "Our mission is not merely academic excellence, but awakening the inner potential of every student with knowledge, character, discipline, and compassionate human values."
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-gray-200/60 pt-3">
                <div>
                  <h4 className="font-black text-[#082F67] text-sm">Correspondent & Principal's Desk</h4>
                  <p className="text-xs text-gray-500">Wisdom Matric Hr. Sec. School, Kadayanallur</p>
                </div>
                <span className="text-xs font-bold text-yellow-600 bg-yellow-100 px-2.5 py-1 rounded-full">
                  Kadayanallur
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Philosophy & 4 Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#082F67] leading-snug">
                A Holistic Learning Environment Tailored for the 21st Century
              </h3>
              <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
                Situated in Kadayanallur, Wisdom Matric Higher Secondary School offers a safe, vibrant, and intellectually stimulating atmosphere. We integrate traditional cultural ethics with contemporary smart teaching methodologies.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-slate-50 hover:bg-yellow-50/60 border border-slate-200/80 rounded-2xl p-4 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#082F67] text-yellow-400 flex items-center justify-center mb-3 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-bold text-[#082F67] text-base mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-600 leading-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                "State Board & Matric Curriculum",
                "Special Coaching for Board Centums",
                "Spoken English & Communication Skills",
                "CCTV Monitored & Safe Campus"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenAdmission}
                className="bg-[#082F67] hover:bg-yellow-500 hover:text-[#082F67] text-white px-7 py-3.5 rounded-full font-bold text-sm transition duration-300 shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Join Wisdom Family</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#academics"
                className="text-[#082F67] hover:text-yellow-600 text-sm font-bold flex items-center gap-1.5 transition py-2"
              >
                <span>Explore Academic Programs</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}