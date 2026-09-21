import { useState } from "react";
import { BookOpen, CheckCircle, ChevronRight, GraduationCap, Sparkles } from "lucide-react";

export default function Academics({ onOpenAdmission }) {
  const [activeTab, setActiveTab] = useState(0);

  const levels = [
    {
      id: "kg",
      name: "Kindergarten (Pre-KG to UKG)",
      subtitle: "Play-Way Foundation & Sensory Development",
      age: "2.5 – 5.5 Years",
      features: [
        "Activity-based experiential learning & Phonics mastery",
        "Color-coded theme classrooms with audio-visual smart board",
        "Motor skill development, rhymes, storytelling & free play",
        "Loving, attentive, certified early-childhood educators",
        "Nutritious snacks break & secure child-safe play area"
      ],
      tagline: "Nurturing curiosity from the very first step"
    },
    {
      id: "primary",
      name: "Primary Wing (Classes I to V)",
      subtitle: "Building Core Literacy, Numeracy & Science",
      age: "6 – 10 Years",
      features: [
        "Strong foundation in English, Tamil, Mathematics & Science",
        "Interactive Smart Class audio-visual lessons & mental math",
        "Computer science fundamentals from Class 1 onwards",
        "Art, craft, moral stories, public speaking & recitation",
        "Continuous and Comprehensive Evaluation (CCE) model"
      ],
      tagline: "Instilling love for learning and analytical thinking"
    },
    {
      id: "middle",
      name: "Middle School (Classes VI to VIII)",
      subtitle: "Conceptual Clarity & Practical STEM Discovery",
      age: "11 – 13 Years",
      features: [
        "Hands-on experiments in Science and Computer Labs",
        "English communication, grammar mastery & vocabulary building",
        "Social Sciences, environmental projects & robotics basics",
        "Co-curricular clubs: Eco Club, Literary Club, Sports & Yoga",
        "Personalized remedial support for emerging learners"
      ],
      tagline: "Fostering independent thinking and collaborative skills"
    },
    {
      id: "high",
      name: "High School (Classes IX & X)",
      subtitle: "Board Exam Excellence & Foundation Building",
      age: "14 – 15 Years",
      features: [
        "Intensive preparation for Tamil Nadu 10th SSLC Board Exams",
        "Centum Target revision programs, unit tests & mock exams",
        "Special foundation modules for NEET, JEE & Olympiads",
        "One-on-one academic counselling and parent progress reviews",
        "Regular practical lab sessions with experienced mentors"
      ],
      tagline: "100% Pass record with state and district distinctions"
    },
    {
      id: "higher-secondary",
      name: "Higher Secondary (Classes XI & XII)",
      subtitle: "Career-Focused Streams & Professional Foundations",
      age: "16 – 17 Years",
      features: [
        "Stream 1: Biology + Mathematics (Medical & Engineering Gateway)",
        "Stream 2: Computer Science + Mathematics (AI & Tech Gateway)",
        "Stream 3: Commerce + Accountancy + Business Maths / Economics",
        "Specialized NEET, JEE, CUET & CA Foundation guidance classes",
        "Career guidance seminars, university entrance counselling"
      ],
      tagline: "Shaping future doctors, engineers, tech leaders & entrepreneurs"
    }
  ];

  return (
    <section id="academics" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <GraduationCap size={14} className="text-yellow-600" />
            Academic Pathways
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F67] tracking-tight">
            Comprehensive Education from Kindergarten to Class XII
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Our progressive curriculum provides a structured pathway from playful early learning to top career admissions.
          </p>
        </div>

        {/* Level Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {levels.map((lvl, index) => (
            <button
              key={lvl.id}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-sm ${
                activeTab === index
                  ? "bg-[#082F67] text-white shadow-lg scale-105 border-b-4 border-yellow-400"
                  : "bg-white text-gray-700 hover:bg-yellow-50 hover:text-[#082F67] border border-gray-200"
              }`}
            >
              <BookOpen size={16} className={activeTab === index ? "text-yellow-400" : "text-gray-400"} />
              <span>{lvl.name.split(" ")[0]}</span>
              <span className="hidden sm:inline font-normal text-xs opacity-80">
                ({lvl.id === "kg" ? "KG" : lvl.id === "primary" ? "I-V" : lvl.id === "middle" ? "VI-VIII" : lvl.id === "high" ? "IX-X" : "XI-XII"})
              </span>
            </button>
          ))}
        </div>

        {/* Active Tab Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-[#082F67] px-3.5 py-1 rounded-full text-xs font-bold">
                <Sparkles size={14} className="text-yellow-600" />
                <span>Age Group: {levels[activeTab].age}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#082F67]">
                {levels[activeTab].name}
              </h3>
              
              <p className="text-gray-600 font-medium text-sm sm:text-base">
                {levels[activeTab].subtitle}
              </p>

              <div className="space-y-3 pt-2">
                {levels[activeTab].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenAdmission}
                  className="bg-[#082F67] hover:bg-yellow-500 hover:text-[#082F67] text-white px-7 py-3 rounded-full font-bold text-sm transition shadow flex items-center gap-2 cursor-pointer"
                >
                  <span>Apply for {levels[activeTab].name.split(" ")[0]}</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#082F67] to-[#041B3A] text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">
                  Academic Focus
                </span>
                <h4 className="text-xl sm:text-2xl font-bold mt-2">
                  {levels[activeTab].tagline}
                </h4>
                <p className="text-xs text-gray-300 mt-4 leading-relaxed">
                  Tailored pedagogies, individual attention, and continuous progress monitoring ensure every student attains their highest potential at Wisdom School.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-yellow-300 font-semibold">Matriculation Board Approved</span>
                <span className="text-gray-300">Kadayanallur</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
