"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface ConnectionCardProps {
  tableA?: string;
  tableB?: string;
  question?: string;
  className?: string;
  delay?: number;
}

export function ConnectionCard({
  tableA = "T4",
  tableB = "T7",
  question = "Q12",
  className = "",
  delay = 2.0,
}: ConnectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 300, delay }}
      className={`bg-surface-raised border border-accent/60 rounded-2xl p-5 pulse-glow ${className}`}
    >
      {/* Table avatars with spark */}
      <div className="flex items-center justify-center gap-4 mb-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
          <span className="font-mono text-xs text-accent font-medium">{tableA}</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-6 h-px bg-accent/40" />
          <Sparkles size={16} className="text-accent" />
          <div className="w-6 h-px bg-accent/40" />
        </div>
        <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
          <span className="font-mono text-xs text-accent font-medium">{tableB}</span>
        </div>
      </div>

      <p className="font-display text-cream text-base text-center font-bold">
        You matched with Table {tableB.replace("T", "")}!
      </p>
      <p className="text-cream-muted text-xs text-center mt-1">
        You both got {question} wrong. Want to say hi?
      </p>

      <div className="flex items-center gap-2 mt-3">
        <button className="flex-1 bg-accent hover:bg-accent-hover text-accent-foreground text-sm font-semibold py-2 rounded-md transition-colors">
          Say Hi 👋
        </button>
        <button className="flex-1 border border-cream/30 text-cream text-sm font-medium py-2 rounded-md hover:bg-surface-hover transition-colors">
          Keep Playing
        </button>
      </div>
    </motion.div>
  );
}
