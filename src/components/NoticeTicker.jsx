import { Bell, Sparkles, ChevronRight } from "lucide-react";

export default function NoticeTicker({ onOpenAdmission }) {
  const notices = [
    "🎓 Admissions Open for Academic Year 2026–2027 from Pre-KG to Class XI (Limited Seats).",
    "🏆 Celebrating 25 Years of Educational Glory (Silver Jubilee Year 2001–2026).",
    "🥇 100% Pass in 10th & 12th State Board Exams with Multiple District Centums!",
    "🔬 Wisdom Science Expo & STEM Fair 2026 dates announced. Registration open.",
    "🚌 Safe GPS-tracked bus transportation available across Kadayanallur, Tenkasi & surrounding regions."
  ];

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-[#082F67] py-2.5 px-4 shadow-sm relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm font-semibold">
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
          </span>
          <span className="bg-[#082F67] text-white px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            <Bell size={12} /> Notice
          </span>
        </div>

        <div className="overflow-hidden whitespace-nowrap w-full mx-4">
          <div className="inline-block animate-marquee hover:pause">
            <span className="inline-flex items-center gap-8">
              {notices.map((notice, idx) => (
                <span key={idx} className="inline-flex items-center gap-2">
                  <span>{notice}</span>
                  <Sparkles size={12} className="text-[#082F67]/60" />
                </span>
              ))}
            </span>
          </div>
        </div>

        <button
          onClick={onOpenAdmission}
          className="hidden md:inline-flex items-center gap-1 bg-[#082F67] hover:bg-[#041B3A] text-white px-3.5 py-1 rounded-full text-xs font-bold transition shrink-0 cursor-pointer shadow-sm"
        >
          Apply Now <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
