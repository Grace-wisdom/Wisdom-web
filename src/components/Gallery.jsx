import { useState } from "react";
import building from "../assets/building.png";
import schoolEntrance from "../assets/entrance.png";
import hero from "../assets/hero.png";
import { Image, Eye } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Campus", "Celebrations", "Academics", "Sports & Arts"];

  const galleryItems = [
    {
      title: "Wisdom Main Academic Building",
      category: "Campus",
      image: building,
      caption: "Sprawling architecture with modern spacious classrooms"
    },
    {
      title: "School Grand Entrance & Front Gate",
      category: "Campus",
      image: schoolEntrance,
      caption: "Secure and welcoming main entrance at Kadayanallur"
    },
    {
      title: "Interactive Classroom Learning",
      category: "Academics",
      image: hero,
      caption: "Smart board digital learning and group discussions"
    },
    {
      title: "Science Expo & STEM Fair",
      category: "Academics",
      image: building,
      caption: "Young innovators presenting working science projects"
    },
    {
      title: "Annual Sports Day & Athletics",
      category: "Sports & Arts",
      image: schoolEntrance,
      caption: "Fostering sportsmanship, physical vigor and team spirit"
    },
    {
      title: "Cultural Extravaganza & Arts",
      category: "Celebrations",
      image: hero,
      caption: "Student performances, dramas, and speech competitions"
    }
  ];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

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
              onClick={() => setActiveCategory(cat)}
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
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 group border border-gray-100 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041B3A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-5">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-[#082F67]/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <Eye size={14} className="text-yellow-400" />
                    <span>View Memory</span>
                  </span>
                </div>
                <span className="absolute top-4 right-4 bg-yellow-400 text-[#082F67] text-[11px] font-black px-3 py-1 rounded-full shadow">
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
    </section>
  );
}
