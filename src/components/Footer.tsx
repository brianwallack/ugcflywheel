"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} id="contact" className="bg-[#F5F5F5] border-t border-black/5">
      {/* CTA Section */}
      <div className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-6xl text-[#1A1A1A] mb-4"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Ready to <span className="text-gold-gradient">Start?</span>
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto mb-10">
              Join the UGC Flywheel community today and start your journey to becoming a paid content creator
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://whop.com/checkout/plan_CQEyhzLHHXd81"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-base w-full sm:w-auto"
              >
                Join the Community
              </a>
              <a
                href="https://form.typeform.com/to/XGz0agvh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-outline text-base w-full sm:w-auto"
              >
                Want to see if you qualify?
              </a>
            </div>

            {/* Brands CTA */}
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
        </div>
      </div>

      {/* Contact & Links */}
      <div className="border-t border-black/5 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo */}
            <div className="text-center md:text-left">
              <span
                className="text-2xl tracking-wider text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                UGC FLYWHEEL
              </span>
              <p className="text-[#9CA3AF] text-xs tracking-[0.2em] uppercase mt-1">
                powered by Triibe Talents
              </p>
            </div>

            {/* Contact Emails */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8">
              <a
                href="mailto:brian@triibetalents.com"
                className="flex items-center gap-2 text-[#6B7280] hover:text-[#F97316] transition-colors text-xs sm:text-sm"
              >
                <Mail size={16} className="flex-shrink-0" />
                <span className="break-all">brian@triibetalents.com</span>
              </a>
              <a
                href="mailto:jaden@triibetalents.com"
                className="flex items-center gap-2 text-[#6B7280] hover:text-[#F97316] transition-colors text-xs sm:text-sm"
              >
                <Mail size={16} className="flex-shrink-0" />
                <span className="break-all">jaden@triibetalents.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#6B7280] hover:text-[#F97316] hover:border-[#F97316]/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#6B7280] hover:text-[#F97316] hover:border-[#F97316]/30 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-[#6B7280] hover:text-[#F97316] hover:border-[#F97316]/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-black/5 text-center">
            <p className="text-[#9CA3AF] text-sm">
              © 2026 UGC Flywheel powered by Triibe Talents. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
