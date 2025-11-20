import React from "react";

const categories = ["All", "Web Design", "Print Design", "Web Application", "Photography"];

const items = [
  "/images/p1.jpg",
  "/images/p2.jpg",
  "/images/p3.jpg",
  "/images/p4.jpg",
  "/images/p5.jpg",
  "/images/p6.jpg",
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="w-full bg-[#1f1f1f] py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Title */}
        <p className="text-gray-400 tracking-widest uppercase text-sm mb-2">
          Portfolio
        </p>
        <h2 className="text-white text-4xl font-bold mb-6">
          WORK I HAVE DONE
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-5 mb-12 text-gray-300 text-sm">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="hover:text-white transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-md group cursor-pointer"
            >
              <img
                src={src}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                alt="portfolio"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;