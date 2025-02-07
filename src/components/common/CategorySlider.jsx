import { useState, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const categories = [
  "All", "Yachts", "Boats", "RVs", "Electrical Engineering",
  "Photocopier", "Cookery", "Apple", "CSS", "Figma",
  "Astronomy", "React routers", "Motorcycles"
];

export default function CategorySlider() {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);
  const visibleCount = 8;

  const handleNext = () => {
    if (startIndex + visibleCount < categories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <div
      className="flex items-center bg-black space-x-2 overflow-hidden w-full"
      onWheel={handleWheel}
    >
      <button
        onClick={handlePrev}
        className={`p-2 rounded-full bg-gray-800 text-white disabled:opacity-50 ${startIndex === 0 ? "hidden" : "block"}`}
        disabled={startIndex === 0}
      >
        <ChevronLeft size={20} />
      </button>
      
      <div className="flex space-x-2 overflow-hidden" ref={containerRef}>
        {categories.slice(startIndex, startIndex + visibleCount).map((category, index) => (
          <a href={`#${category.toLowerCase().replace(/ /g, "-")}`} key={index} className="px-4 py-2 bg-[ #4242428F
] text-white rounded-full border border-transparent hover:border-white hover:bg-gray-800">
            {category}
          </a>
        ))}
      </div>
      
      <button
        onClick={handleNext}
        className={`p-2 rounded-full bg-gray-800 text-white disabled:opacity-50 ${startIndex + visibleCount >= categories.length ? "hidden" : "block"}`}
        disabled={startIndex + visibleCount >= categories.length}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
