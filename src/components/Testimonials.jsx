import { Star, Quote, MessageSquareHeart, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Dr. K. Mohamed Ibrahim",
      role: "Parent of Class X Student",
      location: "Kadayanallur",
      quote: "Wisdom School has given my son not just top grades, but great discipline, moral character, and confidence. The teachers take individual care of every single student.",
      rating: 5
    },
    {
      name: "Mrs. A. Rahmath Nisha",
      role: "Parent of Class III & VI Students",
      location: "Tenkasi",
      quote: "The safe GPS bus transport and modern smart classrooms made Wisdom our first choice. My daughters love going to school and are thriving in both academics and spoken English.",
      rating: 5
    },
    {
      name: "Er. S. Syed Meeran",
      role: "Alumnus (Batch of 2016), Software Architect",
      location: "Chennai / Kadayanallur",
      quote: "Studying at Wisdom laid the strongest foundation in mathematics and science for my engineering career. Proud to see our school celebrating its 25th Silver Jubilee year!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <MessageSquareHeart size={14} className="text-yellow-600" />
            Voices of Wisdom Family
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F67] tracking-tight">
            What Parents & Alumni Say About Us
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Trusted by more than 2,000 families across Kadayanallur, Tenkasi, and surrounding areas for over 25 years.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-yellow-400 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400" />
                    ))}
                  </div>
                  <Quote size={28} className="text-yellow-500/30 group-hover:text-yellow-500 transition" />
                </div>

                <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-[#082F67] text-base">{rev.name}</h4>
                  <p className="text-xs text-gray-500">{rev.role}</p>
                  <p className="text-[11px] text-yellow-600 font-semibold">{rev.location}</p>
                </div>
                <CheckCircle2 size={20} className="text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
