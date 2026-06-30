"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="relative py-28 sm:py-36 bg-ink-900">
      <div className="section-px container-prose">
        <SectionHeading eyebrow="Client Voices" title="What our clients say" />

        <div className="relative max-w-3xl mx-auto mt-16">
          <Reveal>
            <div className="glass-strong rounded-3xl p-10 sm:p-14 text-center relative min-h-[260px] flex items-center justify-center">
              <Quote className="absolute top-8 left-8 text-gold/20" size={36} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                    “{current.quote}”
                  </p>
                  <div className="mt-8">
                    <p className="font-display text-base text-gold-light">{current.name}</p>
                    <p className="text-white/40 text-sm mt-1">{current.role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:border-gold/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === index ? "bg-gold w-6" : "bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass flex items-center justify-center hover:border-gold/40 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 mt-20 opacity-40">
          {["VANTAGE ENERGY", "HASSAN GROUP", "OKAFOR MEDICAL", "UNITED TELECOM", "QURESHI INFRA"].map(
            (logo) => (
              <span key={logo} className="font-display text-sm tracking-widest text-white/60">
                {logo}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
