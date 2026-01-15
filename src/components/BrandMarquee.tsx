"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Brand names ordered by recognizability
const brands = [
  { name: "Samsung", placeholder: "SAMSUNG" },
  { name: "Meta", placeholder: "META" },
  { name: "Mastercard", placeholder: "MASTERCARD" },
  { name: "Ford", placeholder: "FORD" },
  { name: "Uber", placeholder: "UBER" },
  { name: "TikTok", placeholder: "TIKTOK" },
  { name: "Adidas", placeholder: "ADIDAS" },
  { name: "Ray-Ban", placeholder: "RAY-BAN" },
  { name: "Expedia", placeholder: "EXPEDIA" },
  { name: "Gymshark", placeholder: "GYMSHARK" },
  { name: "Manscaped", placeholder: "MANSCAPED" },
  { name: "MyProtein", placeholder: "MYPROTEIN" },
  { name: "Turo", placeholder: "TURO" },
  { name: "SwissGear", placeholder: "SWISSGEAR" },
  { name: "Insta360", placeholder: "INSTA360" },
  { name: "HoverAir", placeholder: "HOVERAIR" },
];

function BrandLogo({ brand }: { brand: typeof brands[0] }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-28 sm:w-40 h-16 sm:h-20 mx-4 sm:mx-8 group">
      <div className="text-[#9CA3AF] text-base sm:text-xl font-semibold tracking-widest opacity-60 group-hover:opacity-100 group-hover:text-[#F97316] transition-all duration-300 cursor-default">
        {brand.placeholder}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 overflow-hidden border-y border-black/5 bg-[#F5F5F5]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 mb-8"
      >
        <p className="text-center text-[#6B7280] text-sm tracking-[0.2em] uppercase">
          Trusted by Leading Brands
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Gradient masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F5F5F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F5F5F5] to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {/* First set */}
          {brands.map((brand, index) => (
            <BrandLogo key={`first-${index}`} brand={brand} />
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <BrandLogo key={`second-${index}`} brand={brand} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
