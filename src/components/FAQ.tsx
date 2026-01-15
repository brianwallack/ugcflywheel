"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is UGC Flywheel?",
    answer:
      "UGC Flywheel is an educational coaching program designed to help content creators break into the UGC industry and start earning from brand partnerships. Through our comprehensive training and community, we teach you everything you need to land paid UGC deals.",
  },
  {
    question: "Do I need prior experience to join?",
    answer:
      "No prior experience is required. Our program is built for creators at all levels—whether you're just getting started or looking to scale your existing UGC business. Many of our most successful members started with zero experience.",
  },
  {
    question: "What's included in the program?",
    answer:
      "The program includes our UGC Blueprint training (video + PDF materials), weekly live group coaching calls, 1:1 messaging support, lifetime access to our private community, and access to paid UGC opportunities. Full details are provided when you apply.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "Yes. We offer a $2,000 earnings guarantee within 90 days for participants who actively engage with the program. Specific terms and participation requirements are outlined in the program agreement when you enroll.",
  },
  {
    question: "How do I know if this is right for me?",
    answer:
      "If you're serious about building a career in UGC, willing to put in the work, and ready to follow a proven system—this program is for you. Fill out our qualification form to see if you're a good fit, or book a call to learn more.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-black/5 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-5 sm:py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-[#1A1A1A] text-base sm:text-lg font-medium pr-4 sm:pr-8 group-hover:text-[#F97316] transition-colors">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#F97316]/30 flex items-center justify-center group-hover:border-[#F97316] transition-colors">
          {isOpen ? (
            <Minus size={16} className="text-[#F97316] sm:w-[18px] sm:h-[18px]" />
          ) : (
            <Plus size={16} className="text-[#F97316] sm:w-[18px] sm:h-[18px]" />
          )}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#6B7280] text-sm sm:text-base pb-5 sm:pb-6 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
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
            Frequently Asked{" "}
            <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Everything you need to know about joining UGC Flywheel
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="bg-white rounded-2xl border border-black/5 px-6 md:px-8 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
