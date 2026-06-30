"use client";

import { services } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import {
  Landmark,
  FileText,
  ShoppingCart,
  ClipboardCheck,
  BadgeCheck,
  Compass,
  Truck,
  Network,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  FileText,
  ShoppingCart,
  ClipboardCheck,
  BadgeCheck,
  Compass,
  Truck,
  Network,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-ink-900">
      <div className="section-px container-prose">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive tender & procurement services"
          description="From the first opportunity scan to final contract execution, our services cover every stage of the procurement lifecycle."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.08}>
                <div className="group relative glass rounded-2xl p-6 card-hover h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gold-gradient/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold-gradient group-hover:border-transparent transition-all duration-500">
                    <Icon
                      size={20}
                      className="text-gold-light group-hover:text-ink-950 transition-colors duration-500"
                    />
                  </div>
                  <h3 className="font-display text-lg mb-2 leading-snug">{s.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed flex-1">{s.description}</p>
                  <div className="mt-5 flex items-center gap-1 text-xs text-gold-light/0 group-hover:text-gold-light/90 transition-all duration-500 group-hover:gap-2">
                    Learn more <ArrowUpRight size={14} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
