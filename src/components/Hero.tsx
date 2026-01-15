"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Users } from "lucide-react";

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Start counter animation
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden geometric-bg"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FB923C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Social proof stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-3 bg-white border border-black/10 rounded-full px-5 py-2.5 mb-8 shadow-sm"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#F97316] to-[#FB923C]">
            <Users size={16} className="text-white" />
          </div>
          <span className="text-[#1A1A1A]" style={{ fontFamily: "var(--font-space-mono)" }}>
            <AnimatedCounter target={500} duration={2.5} />+ Creators Trained
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          <span className="text-[#1A1A1A]">Building the next generation</span>
          <br />
          <span className="text-[#1A1A1A]">of </span>
          <span className="text-gold-gradient">UGC creators</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-12 px-4"
        >
          Join the premier community for UGC creators. Get trained by industry experts, 
          land brand deals, and build a sustainable content creation career.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 px-4"
        >
          {/* Primary CTA - Join Community */}
          <a
            href="https://whop.com/checkout/plan_CQEyhzLHHXd81"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base w-full sm:w-auto"
          >
            Join the Community
          </a>

          {/* Secondary CTA - Qualification Form */}
          <a
            href="https://form.typeform.com/to/XGz0agvh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline text-base w-full sm:w-auto"
          >
            Want to see if you qualify?
          </a>
        </motion.div>

        {/* Tertiary CTA - Brands */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <a
            href="https://calendly.com/jaden-triibetalents/triibe-1on1-coaching-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#F97316] transition-colors group"
          >
            <span>Are you a brand? Book a call with us</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[#9CA3AF]/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-[#F97316] rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
