import { useState, useRef } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

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
      className="flex items-center space-x-2 overflow-hidden w-auto"
      onWheel={handleWheel}
    >
      <button
        onClick={handlePrev}
        className={`p-2 rounded-full bg-gray-800 text-white disabled:opacity-50 ${startIndex === 0 ? "hidden" : "block"}`}
        disabled={startIndex === 0}
      >
        <MdChevronLeft />
      </button>
      
      <div className="flex space-x-2 overflow-hidden" ref={containerRef}>
        {categories.slice(startIndex, startIndex + visibleCount).map((category, index) => (
          <a href={`#${category.toLowerCase().replace(/ /g, "-")}`} key={index} className="px-4 py-2 bg-gray-700 text-white rounded-full border border-transparent hover:border-white hover:bg-gray-800">
            {category}
          </a>
        ))}
      </div>
      
      <button
        onClick={handleNext}
        className={`p-2 rounded-full bg-gray-800 text-white disabled:opacity-50 ${startIndex + visibleCount >= categories.length ? "hidden" : "block"}`}
        disabled={startIndex + visibleCount >= categories.length}
      >
        <MdChevronRight />
      </button>
    </div>
  );
}