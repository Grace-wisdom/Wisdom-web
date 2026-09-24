import { useState, useEffect } from "react";
import building from "../assets/building.png";
import entrance from "../assets/entrance.png";
import campus from "../assets/campus.png";
import homepage1 from "../assets/homepage1.png";
import computerLab from "../assets/ComputerLab.png";
import chemistryLab from "../assets/chemistryLab.png";
import bharatham from "../assets/bharatham.jpg";
import dance from "../assets/dance.JPG";
import traditional from "../assets/traditional.jpeg";
import rainbow from "../assets/rainbow.png";
import { Image, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = ["All", "Campus", "Academics", "Celebrations", "Sports & Arts"];

  const galleryItems = [
    {
      title: "School Grand Entrance Gate",
      category: "Campus",
      image: entrance,
      caption: "Secure and welcoming main entrance gate of Wisdom Matric Hr. Sec. School at Kadayanallur"
    },
    {
      title: "Wisdom Main Academic Building",
      category: "Campus",
      image: building,
      caption: "Modern multi-storey academic architecture with spacious, well-ventilated smart classrooms"
    },
    {
      title: "Campus Courtyard & Assembly Grounds",
      category: "Campus",
      image: homepage1,
      caption: "Vibrant campus courtyard lined with lush greenery and morning assembly space"
    },
    {
      title: "Hi-Tech Computer & Smart IT Lab",
      category: "Academics",
      image: computerLab,
      caption: "State-of-the-art computer workstations fostering digital literacy, programming, and interactive learning"
    },
    {
      title: "Science & Chemistry Practical Lab",
      category: "Academics",
      image: chemistryLab,
      caption: "Modern laboratory equipment supporting practical experimentation and scientific discovery"
    },
    {
      title: "25th Silver Jubilee Cultural Dance",
      category: "Celebrations",
      image: dance,
      caption: "Vibrant rhythmic Dandiya stick dance during Wisdom School's Silver Jubilee celebration"
    },
    {
      title: "Traditional Heritage Day Celebrations",
      category: "Celebrations",
      image: traditional,
      caption: "Students celebrating Tamil culture and traditions in vibrant ethnic attire"
    },
    {
      title: "Happy Rainbow Day Fest",
      category: "Celebrations",
      image: rainbow,
      caption: "Joyous colorful primary and kindergarten activities and stage performances"
    },
    {
      title: "Classical Bharatanatyam Showcase",
      category: "Sports & Arts",
      image: bharatham,
      caption: "Graceful Indian classical Bharatanatyam dance performance at Wisdom Fest 2025"
    },
    {
      title: "Sports Grounds & Athletic Track",
      category: "Sports & Arts",
      image: campus,
      caption: "Spacious outdoor athletics grounds for football, sports coaching, and physical wellness"
    }
  ];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Close lightbox on Escape key & arrow keys navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <Image size={14} className="text-yellow-600" />
            Campus Life & Memories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#082F67] tracking-tight">
            Glimpses of Life at Wisdom School
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Capturing the joyous learning moments, celebrations, sports triumphs, and everyday smiles of our students.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedImageIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-sm ${
                activeCategory === cat
                  ? "bg-[#082F67] text-white shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-yellow-50 hover:text-[#082F67] border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 group border border-gray-100 flex flex-col cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041B3A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-5">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-[#082F67]/90 px-3.5 py-1.5 rounded-full backdrop-blur-sm shadow-md">
                    <Eye size={14} className="text-yellow-400" />
                    <span>View Photo</span>
                  </span>
                </div>
                <span className="absolute top-4 right-4 bg-yellow-400 text-[#082F67] text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#082F67] group-hover:text-yellow-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition flex items-center justify-center cursor-pointer shadow-lg"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Prev Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-white text-white hover:text-black transition flex items-center justify-center cursor-pointer shadow-lg border border-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Next Button */}
          {filteredItems.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-white text-white hover:text-black transition flex items-center justify-center cursor-pointer shadow-lg border border-white/20"
              aria-label="Next image"
            >
              <ChevronRight size={26} />
            </button>
          )}

          {/* Modal Content */}
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                className="w-full h-full max-h-[70vh] object-contain"
              />
              <span className="absolute top-4 left-4 bg-yellow-400 text-[#082F67] text-xs font-black px-3.5 py-1.5 rounded-full shadow">
                {filteredItems[selectedImageIndex].category}
              </span>
              <span className="absolute top-4 right-4 bg-black/60 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                {selectedImageIndex + 1} / {filteredItems.length}
              </span>
            </div>

            <div className="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-[#082F67]">
                  {filteredItems[selectedImageIndex].title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {filteredItems[selectedImageIndex].caption}
                </p>
              </div>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="self-start sm:self-auto px-5 py-2 rounded-full bg-[#082F67] text-white text-xs font-bold hover:bg-[#06234d] transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
