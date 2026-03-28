"use client";

import { motion } from "framer-motion";
import { ConnectionCard } from "./connection-card";

export function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
      className="relative mx-auto w-[280px]"
    >
      {/* Phone frame */}
      <div className="relative w-[280px] h-[520px] rounded-[32px] border-4 border-surface-raised bg-background shadow-modal overflow-hidden">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-surface rounded-full z-10" />

        {/* Screen content */}
        <div className="pt-12 px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-cream-muted text-[11px] font-sans">BARPLAY</span>
            <span className="text-cream-muted text-[11px] font-sans">Table 4</span>
          </div>

          {/* Question chip */}
          <div className="flex justify-center mb-3">
            <span className="bg-accent/20 text-accent text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-accent/40">
              Q 12
            </span>
          </div>

          {/* Question */}
          <p className="font-display text-cream text-center text-lg font-bold leading-snug mb-4">
            What city invented the modern cocktail?
          </p>

          {/* Answer buttons */}
          <div className="space-y-2">
            {["A. New York", "B. London", "C. New Orleans", "D. Paris"].map(
              (answer, i) => (
                <button
                  key={answer}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-sans transition-all ${
                    i === 2
                      ? "border border-accent bg-accent/15 text-cream"
                      : "border border-border bg-surface-raised text-cream-muted hover:border-border-strong"
                  }`}
                >
                  {answer}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Connection card floating outside */}
      <div className="absolute -bottom-8 -right-4 w-[240px]">
        <ConnectionCard tableA="T4" tableB="T7" question="Q12" delay={2.0} />
      </div>
    </motion.div>
  );
}
