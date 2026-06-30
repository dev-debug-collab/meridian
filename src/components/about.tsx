"use client";

import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { Target, Eye, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    text: "To empower businesses with the expertise, integrity, and precision needed to win and execute high-value tenders.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "To be the most trusted procurement and tender advisory partner across emerging and established markets.",
  },
  {
    icon: ShieldCheck,
    title: "Core Values",
    text: "Integrity, transparency, technical excellence, and an unwavering commitment to our clients' success.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-ink-950 overflow-hidden">
      <div className="section-px container-prose">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Meridian Advisory"
              title="Seventeen years of turning complex tenders into lasting contracts."
            />
            <Reveal delay={0.2}>
              <p className="mt-6 text-white/55 leading-relaxed">
                Founded in 2008, Meridian Advisory has grown into a multidisciplinary
                team of procurement specialists, engineers, legal advisors, and bid
                writers. We work alongside contractors and suppliers of every size —
                from emerging vendors seeking their first government contract to
                established EPC firms managing multi-million dollar portfolios.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-white/55 leading-relaxed">
                Our approach blends rigorous compliance discipline with strategic
                positioning, ensuring every submission we touch is technically sound,
                competitively priced, and built to win.
              </p>
            </Reveal>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "17+", label: "Years Experience" },
                { value: "1,240+", label: "Tenders Completed" },
                { value: "92%", label: "Success Rate" },
              ].map((s, i) => (
                <Reveal key={s.label} delay={0.1 * i}>
                  <div className="glass rounded-xl p-4 text-center">
                    <p className="font-display text-2xl text-gradient-gold">{s.value}</p>
                    <p className="text-xs text-white/45 mt-1">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] glass-strong p-1">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="Meridian Advisory engineering and procurement team in a project review"
                className="w-full h-full object-cover rounded-[20px]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-6 py-4">
                <p className="font-display text-xl text-gradient-gold">380+</p>
                <p className="text-xs text-white/50">Projects Delivered</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-24">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={0.1 * i}>
              <div className="glass rounded-2xl p-8 card-hover h-full">
                <v.icon className="text-gold-light mb-4" size={28} />
                <h3 className="font-display text-xl mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
