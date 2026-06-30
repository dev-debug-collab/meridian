"use client";

import { industries } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import {
  Building2,
  Flame,
  HeartPulse,
  Shield,
  Construction,
  Zap,
  Radio,
  Factory,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Flame,
  HeartPulse,
  Shield,
  Construction,
  Zap,
  Radio,
  Factory,
};

export default function Industries() {
  return (
    <section id="industries" className="relative py-28 sm:py-36 bg-ink-950">
      <div className="section-px container-prose">
        <SectionHeading
          eyebrow="Sectors We Serve"
          title="Industries we empower"
          description="Our expertise spans the sectors that move economies forward — wherever procurement complexity exists, we deliver clarity."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-16">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon];
            return (
              <Reveal key={ind.name} delay={(i % 4) * 0.08}>
                <div className="group relative glass rounded-2xl py-10 px-6 text-center card-hover overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-emerald/0 group-hover:from-gold/5 group-hover:to-emerald/5 transition-all duration-700" />
                  <Icon
                    className="mx-auto text-gold-light mb-4 group-hover:scale-110 transition-transform duration-500"
                    size={30}
                  />
                  <p className="text-sm font-medium text-white/80">{ind.name}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
