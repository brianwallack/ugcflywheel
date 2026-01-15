"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Instagram } from "lucide-react";

const directors = [
  {
    name: "Jaden Versluis",
    title: "Founder, UGC Flywheel",
    email: "jaden@triibetalents.com",
    bio: "Full-time UGC creator and founder of Triibe Talents. Helping creators land paid brand deals and build sustainable careers in content creation.",
    image: "/images/directors/jaden.jpg",
    socials: {
      instagram: "https://www.instagram.com/jaden.versluis/",
    },
  },
  {
    name: "Brian Wallack",
    title: "Co-Founder, UGC Flywheel",
    email: "brian@triibetalents.com",
    bio: "Entrepreneur and creator economy strategist. Building systems that help UGC creators scale their businesses and secure brand partnerships.",
    image: "/images/directors/brian.jpg",
    socials: {
      instagram: "https://www.instagram.com/brianwallack/",
    },
  },
];

function DirectorCard({ director, index }: { director: typeof directors[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      <div className="card-dark p-8 text-center">
        {/* Photo */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F97316]/20 to-[#FB923C]/10 flex items-center justify-center border-2 border-[#F97316]/30 overflow-hidden">
          {director.image ? (
            <img
              src={director.image}
              alt={director.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span
              className="text-5xl text-gold-gradient"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              {director.name.split(" ").map(n => n[0]).join("")}
            </span>
          )}
        </div>

        {/* Name and title */}
        <h3
          className="text-2xl text-[#1A1A1A] mb-1"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          {director.name}
        </h3>
        <p className="text-[#F97316] text-sm tracking-wide mb-4">{director.title}</p>

        {/* Bio */}
        <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
          {director.bio}
        </p>

        {/* Contact */}
        <div className="flex items-center justify-center">
          <a
            href={`mailto:${director.email}`}
            className="flex items-center gap-2 text-[#6B7280] hover:text-[#F97316] transition-colors text-xs sm:text-sm break-all"
          >
            <Mail size={16} className="flex-shrink-0" />
            <span className="break-all">{director.email}</span>
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-black/5">
          <a
            href={director.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#F97316] transition-colors"
            aria-label={`${director.name} Instagram`}
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Directors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl text-[#1A1A1A] mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Meet The Team Behind{" "}
            <span className="text-gold-gradient">The Flywheel</span>
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Two industry experts dedicated to helping creators build sustainable careers in UGC
          </p>
        </motion.div>

        {/* Directors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {directors.map((director, index) => (
            <DirectorCard key={director.name} director={director} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
