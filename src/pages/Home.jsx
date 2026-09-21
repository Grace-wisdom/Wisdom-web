import { useState } from "react";
import silverLogo from "../assets/silver.png";
import Navbar from "../components/Navbbar";
import NoticeTicker from "../components/NoticeTicker";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Academics from "../components/Academics";
import Facilities from "../components/Facilities";
import Achievements from "../components/Achievements";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import AdmissionSteps from "../components/AdmissionSteps";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import AdmissionModal from "../components/AdmissionModal";
import FloatingActions from "../components/FloatingActions";

export default function Home() {
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

  const handleOpenAdmission = () => {
    setIsAdmissionOpen(true);
  };

  const handleCloseAdmission = () => {
    setIsAdmissionOpen(false);
  };

  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen flex flex-col selection:bg-yellow-400 selection:text-[#082F67]">
      {/* Top Notice Ticker */}
      <NoticeTicker onOpenAdmission={handleOpenAdmission} />

      {/* Main Sticky Navigation */}
      <Navbar onOpenAdmission={handleOpenAdmission} />

      {/* Hero Section */}
      <Hero onOpenAdmission={handleOpenAdmission} />

      {/* Stats Counter Strip */}
      <Stats />

      {/* About & Leadership Vision */}
      <About onOpenAdmission={handleOpenAdmission} />

      {/* Academics & Grade Levels */}
      <Academics onOpenAdmission={handleOpenAdmission} />

      {/* Campus Facilities */}
      <Facilities />

      {/* Silver Jubilee Pride & Achievements */}
      <Achievements />

      {/* Life at Wisdom Gallery */}
      <Gallery />

      {/* Parent & Alumni Testimonials */}
      <Testimonials />

      {/* Admission Steps Roadmap */}
      <AdmissionSteps onOpenAdmission={handleOpenAdmission} />

      {/* Frequently Asked Questions */}
      <FAQ onOpenAdmission={handleOpenAdmission} />

      {/* Call to Action Banner */}
      <CTA onOpenAdmission={handleOpenAdmission} />

      {/* Comprehensive Footer */}
      <Footer onOpenAdmission={handleOpenAdmission} />

      {/* Interactive Admission Enquiry Modal */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={handleCloseAdmission}
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenAdmission={handleOpenAdmission} />

      {/* 25 Years Silver Jubilee Badge – top-right corner */}
      <div className="fixed top-[72px] right-4 z-50 pointer-events-none">
        <img
          src={silverLogo}
          alt="25 Years Silver Jubilee"
          className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-xl animate-float"
        />
      </div>
    </div>
  );
}