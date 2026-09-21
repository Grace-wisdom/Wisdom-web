import { FileText, MapPin, CheckCircle, GraduationCap, ArrowRight } from "lucide-react";

export default function AdmissionSteps({ onOpenAdmission }) {
  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "Online Enquiry / Registration",
      desc: "Fill the admission enquiry form online or visit the school reception desk directly."
    },
    {
      step: "02",
      icon: MapPin,
      title: "Campus Visit & Interaction",
      desc: "Tour our smart classrooms and meet our friendly academic counsellors along with your child."
    },
    {
      step: "03",
      icon: CheckCircle,
      title: "Document Verification",
      desc: "Submit birth certificate, previous school report card (if applicable), and photograph."
    },
    {
      step: "04",
      icon: GraduationCap,
      title: "Welcome to Wisdom",
      desc: "Confirm admission, receive books & uniform kit, and begin the exciting educational journey."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#082F67] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <GraduationCap size={14} className="text-yellow-400" />
            Simple & Transparent Admission Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            How to Enroll for Academic Year 2026–2027
          </h2>
          <p className="mt-4 text-gray-200 text-base sm:text-lg leading-relaxed">
            Follow 4 easy steps to secure your child's seat at Wisdom Matric Hr. Sec. School.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-3xl p-7 transition duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-[#082F67] flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition">
                      <Icon size={26} />
                    </div>
                    <span className="text-3xl font-black text-yellow-400/60 font-mono">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs text-yellow-300 font-semibold flex items-center gap-1">
                  <span>Step {index + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-xl font-bold text-yellow-400">Admissions Open from Pre-KG to Class XI</h4>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">Limited seats available per class to ensure personalized attention.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmission}
              className="bg-yellow-400 hover:bg-yellow-300 text-[#082F67] px-7 py-3.5 rounded-full font-black text-sm transition transform hover:scale-105 shadow-xl flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Apply Online Now</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
