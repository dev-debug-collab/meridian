"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "ghost";
  className?: string;
}

export default function MagneticButton({
  href,
  onClick,
  children,
  variant = "gold",
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const styles = {
    gold: "bg-gold-gradient text-ink-950 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]",
    outline: "border border-white/20 text-white hover:border-gold/60 hover:text-gold-light",
    ghost: "text-white/80 hover:text-white",
  };

  const Tag = (href ? "a" : "button") as any;

  return (
    <motion.div
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className="inline-block"
    >
      <Tag
        ref={ref}
        href={href}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        className={cn(
          "magnetic-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
          styles[variant],
          className
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
