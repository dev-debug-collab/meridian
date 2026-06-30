"use client";

import { siteConfig, services, navLinks } from "@/lib/data";
import { Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-white/5 pt-20 pb-10">
      <div className="section-px container-prose">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-xl tracking-wide">
              MERIDIAN<span className="text-gradient-gold">.</span>
            </a>
            <p className="text-white/45 text-sm mt-4 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-gold/40 hover:text-gold-light transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white/80 mb-4">Quick Links</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/45 hover:text-gold-light transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white/80 mb-4">Services</p>
            <ul className="space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-sm text-white/45 hover:text-gold-light transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white/80 mb-4">Newsletter</p>
            <p className="text-sm text-white/45 mb-4">
              Subscribe for tender alerts and industry insights.
            </p>
            <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm outline-none focus:border-gold/50"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-10 h-10 rounded-full bg-gold-gradient text-ink-950 flex items-center justify-center shrink-0"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 mt-14 pt-8 text-xs text-white/35">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
