"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { QrCode, HelpCircle, Sparkles, Check } from "lucide-react";

const frames = [
  {
    icon: QrCode,
    title: "Scan",
    content: (
      <div className="flex flex-col items-center py-6">
        <div className="w-24 h-24 bg-accent/10 border-2 border-accent/40 rounded-lg flex items-center justify-center mb-3">
          <QrCode size={48} className="text-accent" />
        </div>
        <p className="text-cream-muted text-xs mt-2">Guest scans table QR</p>
      </div>
    ),
  },
  {
    icon: HelpCircle,
    title: "Play",
    content: (
      <div className="py-4 px-3">
        <div className="bg-accent/20 text-accent text-[9px] font-mono px-2 py-0.5 rounded inline-block mb-2">
          Q 12
        </div>
        <p className="text-cream text-sm font-display font-bold mb-3">
          What city invented the modern cocktail?
        </p>
        <div className="space-y-1.5">
          {["New York", "London", "New Orleans", "Paris"].map((a, i) => (
            <div
              key={a}
              className={`text-xs px-2.5 py-1.5 rounded border ${
                i === 2
                  ? "border-accent bg-accent/15 text-cream"
                  : "border-border bg-surface text-cream-muted"
              }`}
            >
              {a}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Sparkles,
    title: "Connect",
    content: (
      <div className="flex flex-col items-center py-6 px-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
            <span className="font-mono text-[10px] text-accent">T4</span>
          </div>
          <Sparkles size={14} className="text-accent" />
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
            <span className="font-mono text-[10px] text-accent">T7</span>
          </div>
        </div>
        <p className="text-cream text-sm font-display font-bold text-center">
          You matched with Table 7!
        </p>
        <p className="text-cream-muted text-[10px] text-center mt-1">
          You both got Q12 wrong
        </p>
      </div>
    ),
  },
];

export function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="solution" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-cream text-[32px] md:text-[48px] leading-tight mb-6">
              One QR Code. Strangers Talking. You with the Data.
            </h2>
            <p className="text-cream-muted text-lg leading-relaxed mb-8 max-w-[480px]">
              Barplay is bar entertainment built around one moment: two strangers
              at different tables both get a trivia question wrong — and Barplay
              introduces them. Browser-based, no download. The bar owner watches
              it happen in real-time and gets the dwell-time data to prove every
              session&apos;s worth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Check size={16} className="text-accent shrink-0" />
                <span className="text-cream-muted text-[15px]">
                  Browser-native — works on any phone, no install
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check size={16} className="text-accent shrink-0" />
                <span className="text-cream-muted text-[15px]">
                  Privacy-first — guests are Table 4, not their names
                </span>
              </div>
            </div>
          </motion.div>

          {/* 3-frame animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Frame indicators */}
            <div className="flex items-center gap-3 mb-4">
              {frames.map((f, i) => (
                <button
                  key={f.title}
                  onClick={() => setActiveFrame(i)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    i === activeFrame
                      ? "bg-accent/20 text-accent border border-accent/40"
                      : "text-cream-dim hover:text-cream-muted"
                  }`}
                >
                  <f.icon size={12} />
                  {f.title}
                </button>
              ))}
            </div>

            {/* Phone frame with animated content */}
            <div className="relative w-[220px] h-[380px] rounded-[28px] border-4 border-surface-raised bg-background shadow-modal overflow-hidden">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-surface rounded-full z-10" />
              <div className="pt-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFrame}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {frames[activeFrame].content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
