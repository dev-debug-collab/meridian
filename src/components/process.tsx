"use client";

import { tenderProcess } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36 bg-ink-950">
      <div className="section-px container-prose">
        <SectionHeading
          eyebrow="Our Methodology"
          title="A proven, five-step tender process"
          description="Structured, transparent, and repeatable — our process is engineered to maximize your chances of award at every stage."
        />

        <div className="relative mt-20">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-white/10" />
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-6">
            {tenderProcess.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.12}>
                <div className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                  <div className="relative z-10 shrink-0 w-16 h-16 rounded-full glass-strong border border-gold/30 flex items-center justify-center font-display text-lg text-gradient-gold lg:mb-6">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-display text-lg mb-2">{step.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed lg:max-w-[200px] lg:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
