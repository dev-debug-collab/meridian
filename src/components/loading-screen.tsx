"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
        }
        return next;
      });
    }, 140);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ink-950"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl tracking-wide text-gradient-gold mb-6"
          >
            MERIDIAN
          </motion.div>
          <div className="w-56 h-[2px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gold-gradient"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-xs text-white/40 tracking-[0.2em] uppercase">
            Loading {Math.floor(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
