"use client";

import { motion } from "framer-motion";
import MagneticButton from "./magnetic-button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink-950">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />

      {/* Glow orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[80px] animate-float"
      />
      <motion.div
        className="hidden sm:block absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-emerald/10 blur-[70px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        className="hidden sm:block absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full bg-royal/15 blur-[80px] animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Engineering / global-trade inspired line art */}
      <svg
        className="hidden sm:block absolute inset-0 w-full h-full opacity-[0.15]"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M0 700 L240 560 L480 640 L720 420 L960 520 L1200 340 L1440 460"
          stroke="#D4AF37"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 800 L300 720 L600 780 L900 600 L1200 700 L1440 600"
          stroke="#1FA37A"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 0.3, ease: "easeInOut" }}
        />
        {[...Array(14)].map((_, i) => (
          <motion.circle
            key={i}
            cx={100 + i * 100}
            cy={300 + (i % 3) * 90}
            r="3"
            fill="#D4AF37"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.4] }}
            transition={{ duration: 2, delay: i * 0.15, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </svg>

      <div className="relative z-10 section-px container-prose w-full pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold-light/90 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-light animate-pulse" />
            Trusted Tender &amp; Procurement Advisory
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Winning Tenders.{" "}
            <span className="text-gradient-gold">Delivering Success.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 text-lg text-white/55 max-w-2xl leading-relaxed"
          >
            We help contractors, suppliers, and enterprises navigate government and
            private-sector procurement with precision — from bid strategy to EPC
            execution — turning complex tenders into long-term contracts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <MagneticButton href="#contact" variant="gold">
              Get Consultation <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="#services" variant="outline">
              View Services
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-white/40 text-sm"
          >
            <span>17+ Years Experience</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>1,240+ Tenders Completed</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>92% Success Rate</span>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
}
