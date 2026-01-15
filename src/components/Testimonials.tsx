"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, BadgeCheck } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Beth Carlino",
    handle: "@bethcarlinofitness",
    instagram: "https://www.instagram.com/bethcarlinofitness/",
    image: "/images/testimonials/bethcarlino.jpg",
    rating: 5,
    quote: "UGC Flywheel gave me the exact blueprint I needed to turn my fitness content into paid brand deals. The coaching calls are invaluable.",
    badge: "Fitness Creator",
  },
  {
    name: "Amie",
    handle: "@amiefitnesss",
    instagram: "https://www.instagram.com/amiefitnesss/",
    image: "/images/testimonials/amiefairweather.jpg",
    rating: 5,
    quote: "I went from posting content for fun to landing my first paid partnership within weeks. The community support is unmatched.",
    badge: "First Paid Deal",
  },
  {
    name: "Charlie Stringer",
    handle: "@charliestringr",
    instagram: "https://www.instagram.com/charliestringr/",
    image: "/images/testimonials/charlie.jpg",
    rating: 5,
    quote: "The pitch templates and outreach strategies changed everything for me. Now I have brands reaching out to me directly.",
    badge: "Brand Partnerships",
  },
  {
    name: "Tristan Kuhn",
    handle: "@tristankuhn",
    instagram: "https://www.instagram.com/tristankuhn/",
    image: "/images/testimonials/tristan.jpg",
    rating: 5,
    quote: "Jaden and the team break down exactly what brands are looking for. My content quality and deal flow have both improved dramatically.",
    badge: "Content Creator",
  },
  {
    name: "Will Robo",
    handle: "@willlrobo",
    instagram: "https://www.instagram.com/willlrobo/",
    image: "/images/testimonials/willrobo.jpg",
    rating: 5,
    quote: "The UGC Flywheel community is full of creators who genuinely want to help each other succeed. Best investment I've made in my career.",
    badge: "Community Member",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dark p-6 flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar */}
        <a
          href={testimonial.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#F97316]/30 hover:border-[#F97316] transition-colors flex-shrink-0"
        >
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </a>
        <div>
          <h4 className="text-[#1A1A1A] font-semibold">{testimonial.name}</h4>
          <a
            href={testimonial.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] text-sm hover:text-[#F97316] transition-colors"
          >
            {testimonial.handle}
          </a>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="text-[#F97316] fill-[#F97316]" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#6B7280] text-sm leading-relaxed flex-grow mb-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Badge */}
      {testimonial.badge && (
        <div className="flex items-center gap-2 pt-4 border-t border-black/5">
          <BadgeCheck size={16} className="text-[#F97316]" />
          <span className="text-[#F97316] text-xs font-semibold tracking-wide">
            {testimonial.badge}
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="testimonials" className="section-padding bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
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
            Creator <span className="text-gold-gradient">Success Stories</span>
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Real creators who&apos;ve transformed their content into consistent income with UGC Flywheel
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
