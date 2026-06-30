"use client";

import { stats } from "@/lib/data";
import Reveal from "./reveal";
import Counter from "./counter";

export default function Stats() {
  return (
    <section className="relative py-24 bg-ink-900 border-y border-white/5">
      <div className="section-px container-prose">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <Counter value={s.value} suffix={s.suffix} />
              <p className="text-white/45 text-xs uppercase tracking-wider mt-3">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
