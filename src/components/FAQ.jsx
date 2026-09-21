import { useState } from "react";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";

export default function FAQ({ onOpenAdmission }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Which curriculum does Wisdom School follow?",
      answer: "Wisdom Matric Higher Secondary School follows the recognized Tamil Nadu State Matriculation & Higher Secondary Board curriculum enriched with modern STEM, spoken English, robotics, and integrated competitive exam foundation modules (NEET / JEE / Olympiads)."
    },
    {
      question: "What are the school timings for students?",
      answer: "Kindergarten (Pre-KG, LKG, UKG) operates from 9:00 AM to 1:00 PM. Primary to Higher Secondary (Classes I to XII) classes run from 8:45 AM to 4:15 PM Monday through Friday, with special Saturday academic enrichment sessions for High School and Higher Secondary."
    },
    {
      question: "Is school bus transportation available in my area?",
      answer: "Yes, we operate a well-managed fleet of GPS-tracked school buses with trained drivers and bus attendants covering Kadayanallur town, Tenkasi, Puliyangudi, Chinthamani, Vasudevanallur, and neighboring residential areas."
    },
    {
      question: "What Higher Secondary (+1 & +2) streams are offered?",
      answer: "We offer three prime career streams: (1) Biology with Mathematics (for Medical, Agriculture, Biotechnology & Engineering), (2) Computer Science with Mathematics (for AI, Data Science & Tech Engineering), and (3) Commerce with Accountancy & Business Maths/Economics (for CA, Finance, Management & Law)."
    },
    {
      question: "How do I apply for admission for the 2026–2027 academic session?",
      answer: "You can click the 'Admission Enquiry' button on this website to register your interest online, or visit our school admissions counter during working hours (Monday to Saturday, 8:45 AM – 4:30 PM). Our counsellors will guide you with forms and campus visits."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle size={14} className="text-yellow-600" />
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F67] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Have questions about admissions, academics, or campus life? Find quick answers below.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 font-bold text-base sm:text-lg text-[#082F67] flex items-center justify-between gap-4 cursor-pointer hover:bg-yellow-50/50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-yellow-100 text-yellow-800 text-xs flex items-center justify-center shrink-0 font-black">
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#082F67] transition-transform duration-300 shrink-0 ${
                      isOpen ? "transform rotate-180 text-yellow-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-[#082F67] text-base">Still have questions?</h4>
            <p className="text-xs text-gray-500">Our admissions desk is available to assist you every day.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+917010318116"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#082F67] px-5 py-2.5 rounded-full font-bold text-xs transition"
            >
              <Phone size={14} /> +91 70103 18116 / 98421 15398
            </a>
            <button
              onClick={onOpenAdmission}
              className="bg-[#082F67] hover:bg-yellow-500 hover:text-[#082F67] text-white px-5 py-2.5 rounded-full font-bold text-xs transition shadow cursor-pointer"
            >
              Enquire Online
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
