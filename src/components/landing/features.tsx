"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  QrCode,
  TrendingUp,
  Layers,
  LayoutDashboard,
  Beer,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Cross-Table Connection Engine",
    description:
      "When two guests at different tables answer the same question the same way, Barplay connects them. A chat window opens. Strangers become regulars.",
    tag: "The core mechanic",
    large: true,
  },
  {
    icon: QrCode,
    title: "Zero-Hardware Setup",
    description:
      "Print the QR codes. Put them on tables. Go live in 10 minutes. No tablets, no contracts.",
    large: false,
  },
  {
    icon: TrendingUp,
    title: "Dwell Time Analytics",
    description:
      "See exactly how long tables stay on game nights. The data that gets you the drinks brand sponsorship.",
    large: false,
  },
  {
    icon: Layers,
    title: "3 Game Formats",
    description:
      "Trivia. Would You Rather. Hot Takes. Fresh questions monthly. Works in loud, distracted environments.",
    large: false,
  },
  {
    icon: LayoutDashboard,
    title: "Live Session Dashboard",
    description:
      "Watch your game unfold in real-time. Table heatmap, connection counts, who's been sitting 90 minutes (buy them another round).",
    tag: null,
    large: true,
  },
  {
    icon: Beer,
    title: "Drinks Brand Sponsorship",
    description:
      "Growth tier: let brands sponsor themed game nights. Impressions data. Revenue on top of subscriptions.",
    tag: "Growth tier",
    large: false,
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 md:py-32 bg-surface/50" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-cream text-[32px] md:text-[48px] text-center mb-16"
        >
          Everything a Bar Needs. Nothing It Doesn&apos;t.
        </motion.h2>

        {/* Bento grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-surface border border-border rounded-2xl p-8 hover:border-border-strong transition-all duration-200 ${
                f.large ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <f.icon
                  size={f.large ? 32 : 28}
                  className="text-accent"
                />
                {f.tag && (
                  <span className="bg-accent/20 text-accent text-[11px] font-mono uppercase tracking-[0.06em] px-2 py-0.5 rounded border border-accent/40">
                    {f.tag}
                  </span>
                )}
              </div>
              <h3
                className={`text-cream font-semibold mb-2 ${
                  f.large ? "text-xl" : "text-lg"
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`text-cream-muted leading-relaxed ${
                  f.large ? "text-[15px]" : "text-sm"
                }`}
              >
                {f.description}
              </p>

              {/* Mini visual for large cards */}
              {f.large && i === 0 && (
                <div className="mt-6 flex items-center justify-center gap-6">
                  <div className="w-12 h-20 rounded-xl border-2 border-border bg-surface-raised" />
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-px bg-accent/40" />
                    <Sparkles size={20} className="text-accent animate-pulse" />
                    <div className="w-8 h-px bg-accent/40" />
                  </div>
                  <div className="w-12 h-20 rounded-xl border-2 border-border bg-surface-raised" />
                </div>
              )}

              {f.large && i === 4 && (
                <div className="mt-6 flex items-center justify-center gap-2">
                  {[0.3, 0.5, 0.8, 1, 0.7, 0.4].map((opacity, j) => (
                    <div
                      key={j}
                      className="w-8 h-8 rounded-full border border-accent/30"
                      style={{
                        backgroundColor: `rgba(232, 135, 42, ${opacity * 0.6})`,
                        animation: `table-pulse 2s ease-in-out ${j * 0.3}s infinite`,
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
