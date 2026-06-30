"use client";

import { whyChooseUs } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import {
  Users,
  TrendingUp,
  Eye,
  MapPin,
  Zap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Users,
  TrendingUp,
  Eye,
  MapPin,
  Zap,
  ShieldCheck,
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 sm:py-36 bg-ink-900">
      <div className="section-px container-prose">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A partner built for high-stakes procurement"
          description="Every engagement is backed by deep regulatory expertise, disciplined process, and a relentless focus on outcomes."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {whyChooseUs.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.1}>
                <div className="relative glass rounded-2xl p-8 card-hover h-full overflow-hidden group">
                  <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gold/10 blur-2xl group-hover:bg-gold/20 transition-all duration-500" />
                  <Icon className="text-emerald-light mb-5" size={26} />
                  <h3 className="font-display text-lg mb-2">{f.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{f.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
