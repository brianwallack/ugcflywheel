"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder video ID - replace with actual YouTube video ID
  const videoId = "dQw4w9WgXcQ"; // Placeholder

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl text-[#1A1A1A] mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            See How It <span className="text-gold-gradient">Works</span>
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Watch how our proven system helps creators land their first paid UGC deals
          </p>
        </motion.div>

        {/* Video container with decorative frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Orange corner accents */}
          <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-[#F97316] rounded-tl-lg pointer-events-none" />
          <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-[#F97316] rounded-tr-lg pointer-events-none" />
          <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-[#F97316] rounded-bl-lg pointer-events-none" />
          <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-[#F97316] rounded-br-lg pointer-events-none" />

          {/* Video wrapper */}
          <div className="relative aspect-video bg-[#F5F5F5] rounded-lg overflow-hidden border border-black/10">
            {!isPlaying ? (
              // Custom thumbnail with play button
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F5F5F5] to-[#E5E5E5]">
                {/* Placeholder thumbnail background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/20 to-transparent" />
                </div>

                {/* Play button */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 group"
                  aria-label="Play video"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_60px_rgba(249,115,22,0.3)]">
                    <Play size={32} className="text-white ml-1.5 sm:ml-2 sm:w-10 sm:h-10" fill="white" />
                  </div>

                  {/* Pulse animation */}
                  <div className="absolute inset-0 rounded-full bg-[#F97316] animate-ping opacity-20" />
                </button>

                {/* Watch text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 text-[#6B7280] text-sm tracking-wider"
                >
                  Click to watch
                </motion.p>
              </div>
            ) : (
              // YouTube embed
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="UGC Flywheel Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
