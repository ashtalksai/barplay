"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "34 min", label: "average increase in table dwell time" },
  { value: "7,200+", label: "cross-table connections made" },
  { value: "180+", label: "venues" },
  { value: "4.9★", label: "avg owner rating" },
];

const testimonials = [
  {
    quote:
      "We had a group of strangers who met at separate tables end up sharing a bottle of wine together. That's never happened before Friday trivia nights.",
    name: "Marco V.",
    role: "Owner, The Draft Amsterdam",
    initials: "MV",
  },
  {
    quote:
      "I showed my Heineken rep the dwell time data after two months. We got a €2,000 sponsorship deal for their autumn campaign. Paid for a year of Barplay in one meeting.",
    name: "Sarah K.",
    role: "Manager, The Woolshed Dublin",
    initials: "SK",
  },
  {
    quote:
      'Setup took 12 minutes. I printed the QR codes, stuck them on the tables, and watched the dashboard fill up on a Tuesday. On a Tuesday.',
    name: "James O.",
    role: "Owner, The Anchor Liverpool",
    initials: "JO",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 relative"
      ref={ref}
      style={{
        background:
          "radial-gradient(ellipse at 40% 30%, rgba(232,135,42,0.05) 0%, transparent 50%), radial-gradient(ellipse at 60% 70%, rgba(183,97,24,0.04) 0%, transparent 50%), #0F0D0A",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-cream text-[32px] md:text-[48px] text-center mb-12"
        >
          Bars That Run Barplay Don&apos;t Go Back
        </motion.h2>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-accent text-[36px] md:text-[48px] font-medium leading-none">
                {stat.value}
              </div>
              <div className="text-cream-muted text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-surface-raised border border-border-strong rounded-2xl p-8"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>
              <p className="font-display text-cream text-[17px] italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-mono text-xs text-accent font-medium">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-cream text-sm font-semibold">{t.name}</p>
                  <p className="text-cream-muted text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
