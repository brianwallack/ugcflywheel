"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span
              className="text-2xl tracking-wider text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              UGC FLYWHEEL
            </span>
            <span className="text-[10px] text-[#6B7280] tracking-[0.2em] uppercase -mt-1">
              powered by Triibe Talents
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#6B7280] hover:text-[#1A1A1A] transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://whop.com/checkout/plan_CQEyhzLHHXd81"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm px-6 py-2.5"
            >
              Join the Community
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1A1A1A] p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-black/5 pt-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#6B7280] hover:text-[#1A1A1A] transition-colors text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://whop.com/checkout/plan_CQEyhzLHHXd81"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm px-6 py-2.5 text-center mt-2"
              >
                Join the Community
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
