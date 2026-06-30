"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, services, siteConfig } from "@/lib/data";
import MagneticButton from "./magnetic-button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="section-px">
        <div
          className={`container-prose flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "bg-transparent"
          }`}
        >
          <a href="#" className="font-display text-xl tracking-wide">
            MERIDIAN<span className="text-gradient-gold">.</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors">
                    {link.label} <ChevronDown size={14} />
                  </button>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] glass-strong rounded-2xl p-6 grid grid-cols-2 gap-3"
                      >
                        {services.map((s) => (
                          <a
                            key={s.title}
                            href="#services"
                            className="rounded-lg p-3 hover:bg-white/5 transition-colors"
                          >
                            <p className="text-sm font-medium text-white/90">{s.title}</p>
                            <p className="text-xs text-white/45 mt-1 line-clamp-2">{s.description}</p>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${siteConfig.phone}`} className="text-sm text-white/70 hover:text-white">
              {siteConfig.phone}
            </a>
            <MagneticButton href="#contact" variant="gold">
              Get Consultation
            </MagneticButton>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mx-6 mt-2 glass-strong rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/85 text-sm"
                >
                  {link.label}
                </a>
              ))}
              <MagneticButton href="#contact" variant="gold">
                Get Consultation
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
