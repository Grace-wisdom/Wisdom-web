import heroImg1 from "../assets/entrance.png";
import heroImg2 from "../assets/ComputerLab.png";
import heroImg3 from "../assets/chemistryLab.png";
import heroImg4 from "../assets/homepage1.png";
import heroImg5 from "../assets/rainbow.png";
import heroImg6 from "../assets/campus.png";
import heroImg7 from "../assets/bharatham.jpg";
import heroImg8 from "../assets/dance.jpg";
import { Award, Star, CheckCircle, MapPin, GraduationCap, Trophy, Users } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_IMAGES = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5, heroImg6, heroImg7, heroImg8];
const SLIDE_DURATION = 5000; // 5 seconds per image
const CYCLING_WORDS = ["Excellence", "Character", "Leadership", "Innovation", "Success"];

export default function Hero({ onOpenAdmission }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const word = CYCLING_WORDS[wordIndex];
    let timeout;
    if (typing) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
      } else {
        setWordIndex((i) => (i + 1) % CYCLING_WORDS.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIndex]);

  // Background slideshow auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] bg-[#03142B] overflow-hidden flex items-center"
    >
      {/* Background Slideshow */}
      {HERO_IMAGES.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Wisdom Matric Higher Secondary School Campus ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
            transform: currentSlide === index ? "scale(1.05)" : "scale(1)",
            transitionProperty: "opacity, transform",
            transitionDuration: "1.5s, 8s",
            transitionTimingFunction: "ease-in-out, ease-out",
          }}
        />
      ))}

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Animated glow orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 left-32 w-64 h-64 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" style={{ animation: "pulse 4s ease-in-out infinite 1s" }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-2xl animate-slide-left">

          {/* Pulsing Badge */}
          <div className="inline-flex items-center gap-2 border border-yellow-400/60 bg-yellow-400/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-yellow-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6"
            style={{ boxShadow: "0 0 18px rgba(250,204,21,0.25)" }}>
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block animate-ping" style={{ animationDuration: "1.5s" }}></span>
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block absolute ml-0" style={{ position: "absolute" }}></span>
            &nbsp;&nbsp;A Premier Matriculation Higher Secondary School
          </div>

          {/* Main Headline */}
          <h1
            className="mt-2 text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-[-0.04em]"
          >
            <span
              className="block text-white"
              style={{
                textShadow: "0 2px 30px rgba(0,0,0,0.95), 0 1px 8px rgba(0,0,0,0.9)",
              }}
            >
              Inspiring Minds.
            </span>
            <span
              className="mt-3 block relative"
              style={{
                background: "linear-gradient(90deg, #facc15, #fde68a, #ffffff, #fde68a, #facc15)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 4s linear infinite",
                filter: "drop-shadow(0 0 20px rgba(250,204,21,0.5)) drop-shadow(0 2px 4px rgba(0,0,0,0.8))",
              }}
            >
              Shaping Futures.
            </span>
          </h1>

          {/* Animated underline decoration */}
          <div className="mt-3 flex items-center gap-1.5">
            <div
              className="h-1 rounded-full"
              style={{
                width: "120px",
                background: "linear-gradient(90deg, #facc15, #f59e0b, #facc15)",
                backgroundSize: "200% auto",
                animation: "shimmer 3s linear infinite",
                boxShadow: "0 0 12px rgba(250,204,21,0.6), 0 0 24px rgba(250,204,21,0.3)",
              }}
            />
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" style={{ boxShadow: "0 0 8px rgba(250,204,21,0.8)" }} />
            <div
              className="h-0.5 rounded-full bg-gradient-to-r from-yellow-400/60 to-transparent"
              style={{ width: "60px" }}
            />
          </div>

          {/* Typewriter Line */}
          <div className="mt-5 flex items-center gap-3">
            <span className="text-white/70 text-base sm:text-lg font-medium">Nurturing</span>
            <span
              className="text-yellow-300 text-base sm:text-xl font-black tracking-wide min-w-[140px]"
              style={{ textShadow: "0 0 12px rgba(250,204,21,0.6)" }}
            >
              {displayed}
              <span className="inline-block w-[2px] h-5 bg-yellow-400 ml-0.5 align-middle animate-pulse" />
            </span>
            <span className="text-white/70 text-base sm:text-lg font-medium">in Every Child</span>
          </div>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/80 font-medium tracking-wide leading-relaxed">
            Wisdom Matric Hr. Sec. School &nbsp;·&nbsp;{" "}
            <span className="text-yellow-300 font-semibold">Built for Excellence</span>
            &nbsp;·&nbsp; Kadayanallur
          </p>

          {/* Animated Divider */}
          <div className="mt-5 flex items-center gap-2">
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full" style={{ boxShadow: "0 0 8px rgba(250,204,21,0.7)" }} />
            <div className="w-4 h-1 bg-yellow-400/40 rounded-full" />
            <div className="w-2 h-1 bg-yellow-400/20 rounded-full" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              onClick={onOpenAdmission}
              className="relative overflow-hidden bg-yellow-400 text-[#082F67] px-7 py-3.5 rounded-full font-black text-sm sm:text-base shadow-xl transition-all transform hover:-translate-y-1 hover:shadow-yellow-400/40 tracking-wide cursor-pointer group"
              style={{ boxShadow: "0 4px 24px rgba(250,204,21,0.45)" }}
            >
              <span className="relative z-10">🎓 ADMISSIONS OPEN</span>
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </button>
            <button
              onClick={onOpenAdmission}
              className="border-2 border-white/40 hover:border-yellow-400 bg-white/10 hover:bg-yellow-400/10 backdrop-blur-sm text-white hover:text-yellow-300 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all transform hover:-translate-y-1 tracking-wide cursor-pointer"
            >
              2026–2027 Enroll →
            </button>
          </div>

          {/* Location */}
          <div className="mt-6 flex items-center gap-2 text-white/75 text-sm font-medium">
            <MapPin size={16} className="text-yellow-400 flex-shrink-0" />
            <span>Kadayanallur, Tenkasi District, Tamil Nadu</span>
          </div>

          {/* Trust Strip */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-white/75 text-xs font-semibold tracking-wide border-t border-white/15 pt-5">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 hover:border-yellow-400/40 transition-colors">
              <Award size={14} className="text-yellow-400" />
              <span>25+ YEARS LEGACY</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 hover:border-yellow-400/40 transition-colors">
              <Trophy size={14} className="text-yellow-400 fill-yellow-400/30" />
              <span>100% BOARD RESULTS</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 hover:border-yellow-400/40 transition-colors">
              <GraduationCap size={14} className="text-yellow-400" />
              <span>KG TO CLASS 12</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 hover:border-yellow-400/40 transition-colors">
              <Users size={14} className="text-yellow-400" />
              <span>1000+ STUDENTS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}