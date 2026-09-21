import { GraduationCap, Trophy, Users, School, Sparkles } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: School,
      title: "25+",
      label: "Years of Legacy",
      description: "Silver Jubilee landmark since 2001 with unwavering quality",
      color: "from-amber-500 to-yellow-400",
      bgLight: "bg-yellow-50",
      iconColor: "text-amber-600"
    },
    {
      icon: Users,
      title: "2,000+",
      label: "Happy Students",
      description: "Nurtured across Kindergarten to Higher Secondary levels",
      color: "from-blue-600 to-cyan-500",
      bgLight: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "120+",
      label: "Expert Faculty",
      description: "Passionate mentors, subject experts & child-care educators",
      color: "from-indigo-600 to-purple-500",
      bgLight: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: Trophy,
      title: "100%",
      label: "Board Exam Success",
      description: "Centum scorers, state rankers & top medical/engineering admissions",
      color: "from-emerald-600 to-teal-500",
      bgLight: "bg-emerald-50",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <section className="bg-slate-50 -mt-10 md:-mt-14 relative z-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl p-7 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${item.bgLight} flex items-center justify-center transition group-hover:scale-110 duration-300`}>
                      <Icon size={28} className={item.iconColor} />
                    </div>
                    <span className="text-gray-300 group-hover:text-yellow-400 transition font-black text-xs">
                      #{index + 1}
                    </span>
                  </div>

                  <h3 className="text-4xl font-black text-[#082F67] tracking-tight group-hover:text-[#0b3e8a] transition">
                    {item.title}
                  </h3>

                  <p className="text-base font-bold text-gray-800 mt-1">
                    {item.label}
                  </p>

                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-1 text-[11px] font-semibold text-yellow-600">
                  <Sparkles size={13} />
                  <span>Wisdom Excellence Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}