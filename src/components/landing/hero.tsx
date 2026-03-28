"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { PhoneMockup } from "./phone-mockup";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grain-overlay overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(232,135,42,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 60%, rgba(183,97,24,0.07) 0%, transparent 40%), #0F0D0A",
      }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_0.7fr] gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <span className="inline-block bg-accent/20 text-accent text-[11px] font-mono uppercase tracking-[0.06em] px-3 py-1 rounded border border-accent/40 mb-6">
                NEW — v1.0 Now Live
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display font-bold text-cream text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] mb-6"
            >
              Turn Empty Tables
              <br />
              Into Conversations
            </motion.h1>

            <motion.p
              variants={item}
              className="text-cream-muted text-lg md:text-xl max-w-[520px] leading-relaxed mb-8"
            >
              Barplay puts a QR code on every table. Guests scan, play trivia,
              and connect with strangers two tables over. Bar owners get the
              dwell-time data to prove it works.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link
                href="/signup"
                className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-6 py-3 rounded-md shadow-button transition-all duration-200 active:scale-[0.98] text-center"
              >
                Start Free 14-Day Trial
              </Link>
              <a
                href="#how-it-works"
                className="border border-cream/30 text-cream hover:bg-surface-raised hover:border-cream/60 font-medium px-6 py-3 rounded-md transition-all text-center"
              >
                See How It Works ↓
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4 text-cream-dim text-xs"
            >
              {[
                "No credit card required",
                "14-day free trial",
                "Setup in 12 minutes",
              ].map((text) => (
                <span key={text} className="flex items-center gap-1.5">
                  <Check size={12} className="text-accent" />
                  {text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
