import { ArrowRight, Phone, CheckCircle2, Sparkles } from "lucide-react";

export default function CTA({ onOpenAdmission }) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-[#041B3A] via-[#082F67] to-[#0F4C9A] text-white relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        
        {/* Admissions Pill */}
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
          <Sparkles size={14} className="text-yellow-400" />
          <span>Admissions Open for 2026–2027</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          Give Your Child the Foundation for a
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400">
            Brighter, Limitless Future
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Limited seats open for <span className="font-bold text-yellow-400">Pre-KG to Class XI</span>. Ensure personalized mentorship, high moral values, and 100% board academic excellence at Wisdom School.
        </p>

        {/* Feature points */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs sm:text-sm text-gray-200">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-yellow-400" />
            100% Board Exam Success Track
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-yellow-400" />
            Safe GPS Bus Transport
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-yellow-400" />
            Smart Digital Classrooms
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onOpenAdmission}
            className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-[#082F67] font-black px-9 py-4 rounded-full text-base shadow-2xl hover:shadow-yellow-400/40 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Apply for Admission Now</span>
            <ArrowRight size={18} />
          </button>

          <a
            href="tel:+917010318116"
            className="w-full sm:w-auto border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone size={18} className="text-yellow-400" />
            <span>Call Admissions (+91 70103 18116)</span>
          </a>
        </div>

      </div>
    </section>
  );
}