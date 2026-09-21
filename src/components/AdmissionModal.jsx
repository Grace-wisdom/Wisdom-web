import { useState } from "react";
import { X, CheckCircle, Send, School, Phone, Mail, User, BookOpen } from "lucide-react";

export default function AdmissionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "Grade 1 - 5 (Primary)",
    parentName: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone || !formData.parentName) {
      alert("Please fill in the required fields (Student Name, Parent Name, Phone Number).");
      return;
    }
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      studentName: "",
      grade: "Grade 1 - 5 (Primary)",
      parentName: "",
      phone: "",
      email: "",
      message: ""
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-yellow-400/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#041B3A] via-[#082F67] to-[#0F4C9A] p-6 text-white relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-semibold mb-2">
            <School size={14} /> Admissions Open 2026–2027
          </div>
          <h3 className="text-2xl font-black">Wisdom Admission Enquiry</h3>
          <p className="text-sm text-gray-200 mt-1">
            Join the 25-year legacy of academic brilliance & character building.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={36} />
              </div>
              <h4 className="text-2xl font-black text-[#082F67]">Enquiry Received!</h4>
              <p className="text-gray-600 mt-2 max-w-md mx-auto">
                Thank you for your interest in <span className="font-semibold text-[#082F67]">Wisdom Matric Hr. Sec. School</span>. 
                Our admissions counselor will contact you shortly at <span className="font-bold text-gray-900">{formData.phone}</span>.
              </p>
              <div className="mt-6 p-4 bg-yellow-50 rounded-2xl border border-yellow-200 text-sm text-yellow-800">
                <p className="font-semibold">Need immediate assistance?</p>
                <p className="mt-1">Call admissions desk: <span className="font-bold">+91 70103 18116 / 98421 15398</span></p>
              </div>
              <button
                onClick={resetAndClose}
                className="mt-6 bg-[#082F67] hover:bg-yellow-500 hover:text-[#082F67] text-white px-8 py-3 rounded-full font-bold transition duration-300 shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammed Aayan"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#082F67] focus:ring-2 focus:ring-[#082F67]/20 outline-none text-sm text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Applying For Grade <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#082F67] focus:ring-2 focus:ring-[#082F67]/20 outline-none text-sm text-gray-800 bg-white"
                    >
                      <option>Pre-KG / LKG / UKG (Kindergarten)</option>
                      <option>Grade 1 - 5 (Primary School)</option>
                      <option>Grade 6 - 8 (Middle School)</option>
                      <option>Grade 9 - 10 (Secondary School)</option>
                      <option>Grade 11 - 12 (Bio-Maths Stream)</option>
                      <option>Grade 11 - 12 (Computer Science Stream)</option>
                      <option>Grade 11 - 12 (Commerce / Arts Stream)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Parent / Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. K. Rahman"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#082F67] focus:ring-2 focus:ring-[#082F67]/20 outline-none text-sm text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#082F67] focus:ring-2 focus:ring-[#082F67]/20 outline-none text-sm text-gray-800"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-3.5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#082F67] focus:ring-2 focus:ring-[#082F67]/20 outline-none text-sm text-gray-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Specific Questions or Message (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ask about curriculum, school bus routes, fees, hostel, or timings..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-[#082F67] focus:ring-2 focus:ring-[#082F67]/20 outline-none text-sm text-gray-800 resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="text-gray-500 hover:text-gray-700 text-sm font-semibold px-4 py-2 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#082F67] hover:bg-yellow-500 hover:text-[#082F67] text-white px-7 py-3 rounded-full font-bold flex items-center gap-2 transition duration-300 shadow-md text-sm cursor-pointer"
                >
                  <Send size={16} /> Submit Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
