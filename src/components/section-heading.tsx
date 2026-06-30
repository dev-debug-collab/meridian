import Reveal from "./reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-light/80 font-medium">
          <span className="w-6 h-px bg-gold-light/60" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-4 leading-[1.15] text-white">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-white/55 text-base sm:text-lg leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
