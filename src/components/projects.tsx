"use client";

import { projects } from "@/lib/data";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-ink-950">
      <div className="section-px container-prose">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          description="A selection of tenders and contracts we have helped secure and deliver across multiple industries."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden glass card-hover">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.industry} project`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                  <span
                    className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full glass-strong ${
                      p.status === "Completed" ? "text-emerald-light" : "text-gold-light"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-gold-light/70">{p.industry}</p>
                  <h3 className="font-display text-lg mt-2 mb-3">{p.title}</h3>
                  <div className="flex items-center justify-between text-sm text-white/45 border-t border-white/10 pt-3 mt-3">
                    <span>{p.client}</span>
                    <span className="text-white/70 font-medium">{p.value}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
