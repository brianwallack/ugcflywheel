"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow effect behind text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0.15] }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#F97316] to-[#FB923C] opacity-20"
              />

              {/* Main wordmark */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-[var(--font-bebas)] text-4xl sm:text-6xl md:text-8xl tracking-wider text-[#1A1A1A] relative z-10 px-4"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                UGC FLYWHEEL
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center text-[#6B7280] text-sm tracking-[0.3em] uppercase mt-4"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                powered by Triibe Talents
              </motion.p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="h-[2px] bg-gradient-to-r from-[#F97316] to-[#FB923C] mt-6 sm:mt-8 rounded-full sm:w-[200px]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
