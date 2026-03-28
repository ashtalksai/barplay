"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Check, Minus } from "lucide-react";

const slides = [
  // 1. Cover
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <span className="font-display font-bold text-accent tracking-[0.06em] uppercase text-[64px] md:text-[96px]">
          BARPLAY
        </span>
        <p className="font-display italic text-cream text-xl md:text-2xl mt-4 max-w-[500px]">
          The bar entertainment platform that connects strangers and proves it in data.
        </p>
      </div>
    ),
  },
  // 2. Problem
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[56px] leading-tight mb-8">
          The Problem
        </h2>
        <div className="space-y-6 max-w-[600px]">
          {[
            "Bars spend thousands on atmosphere. Nobody talks to each other.",
            "Buzztime costs €149/mo and requires hardware tablets.",
            "Bar owners have zero data on what drives dwell time.",
          ].map((point, i) => (
            <p key={i} className="text-cream-muted text-lg md:text-xl">
              {point}
            </p>
          ))}
        </div>
      </div>
    ),
  },
  // 3. Solution
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display italic text-accent text-[28px] md:text-[48px] leading-tight max-w-[700px]">
          &ldquo;Every question is a bridge, not a broadcast.&rdquo;
        </h2>
        <p className="text-cream-muted text-lg mt-6 max-w-[500px]">
          Barplay connects strangers at different tables through shared trivia
          answers — browser-based, no download, no hardware.
        </p>
      </div>
    ),
  },
  // 4. Product
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-8">
          The Product
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-[800px]">
          <div className="bg-surface border border-border rounded-xl p-6">
            <h3 className="text-accent font-semibold mb-2">Guest Experience</h3>
            <p className="text-cream-muted text-sm">
              Scan QR → Play trivia → Match with another table → Chat
            </p>
          </div>
          <div className="bg-surface border border-border rounded-xl p-6">
            <h3 className="text-accent font-semibold mb-2">Owner Dashboard</h3>
            <p className="text-cream-muted text-sm">
              Live table heatmap → Connection tracking → Dwell time analytics
            </p>
          </div>
        </div>
      </div>
    ),
  },
  // 5. How It Works
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-10">
          How It Works
        </h2>
        <div className="flex items-center gap-8 flex-wrap justify-center">
          {["Sign Up (12 min)", "Print QR Codes", "Go Live"].map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center">
                <span className="font-mono text-accent font-medium">
                  {i + 1}
                </span>
              </div>
              <span className="text-cream font-medium">{step}</span>
              {i < 2 && (
                <span className="text-accent hidden md:inline">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // 6. Market
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-10">
          Market Opportunity
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-[600px]">
          {[
            { value: "20.5%", label: "QR Market CAGR" },
            { value: "$10B+", label: "Bar entertainment TAM" },
            { value: "9/10", label: "IdeaBrowser timing score" },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface border border-border rounded-xl p-5">
              <div className="font-mono text-accent text-3xl font-medium">
                {stat.value}
              </div>
              <div className="text-cream-muted text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // 7. Competitors
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-8 text-center">
          vs. Competitors
        </h2>
        <div className="w-full max-w-[700px] overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-cream-muted py-3 pr-4"></th>
                <th className="text-center text-accent font-semibold py-3 px-4">Barplay</th>
                <th className="text-center text-cream-muted py-3 px-4">Buzztime</th>
                <th className="text-center text-cream-muted py-3 px-4">BarTrivia.ai</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Price", "$49/mo", "$149/mo", "Varies"],
                ["Hardware", <Minus key="m1" size={12} className="mx-auto text-success" />, <Check key="c1" size={12} className="mx-auto text-destructive" />, <Minus key="m2" size={12} className="mx-auto text-success" />],
                ["Cross-table", <Check key="c2" size={12} className="mx-auto text-success" />, <Minus key="m3" size={12} className="mx-auto text-destructive" />, <Minus key="m4" size={12} className="mx-auto text-destructive" />],
                ["Analytics", <Check key="c3" size={12} className="mx-auto text-success" />, "Basic", <Minus key="m5" size={12} className="mx-auto text-destructive" />],
                ["No host needed", <Check key="c4" size={12} className="mx-auto text-success" />, <Check key="c5" size={12} className="mx-auto text-success" />, <Minus key="m6" size={12} className="mx-auto text-destructive" />],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 pr-4 text-cream">{row[0]}</td>
                  <td className="py-3 px-4 text-center text-cream-muted">{row[1]}</td>
                  <td className="py-3 px-4 text-center text-cream-muted">{row[2]}</td>
                  <td className="py-3 px-4 text-center text-cream-muted">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  // 8. Business Model
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-10">
          Business Model
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-[800px]">
          {[
            { tier: "Starter", price: "$49/mo", target: "Single venue" },
            { tier: "Growth", price: "$79/mo", target: "Full analytics + sponsorship" },
            { tier: "Chain", price: "Custom", target: "Multi-location" },
          ].map((plan) => (
            <div key={plan.tier} className="bg-surface border border-border rounded-xl p-6">
              <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-1">
                {plan.tier}
              </div>
              <div className="font-display text-cream text-3xl font-bold mb-1">
                {plan.price}
              </div>
              <div className="text-cream-muted text-xs">{plan.target}</div>
            </div>
          ))}
        </div>
        <p className="text-cream-muted text-sm mt-6">
          + Drinks brand sponsorship layer = media revenue on top of subscriptions
        </p>
      </div>
    ),
  },
  // 9. Traction
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-10">
          Traction
        </h2>
        <div className="grid grid-cols-2 gap-8 max-w-[500px]">
          {[
            { value: "7,200+", label: "connections made" },
            { value: "180+", label: "venues" },
            { value: "+34 min", label: "avg dwell time increase" },
            { value: "4.9/5", label: "owner rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-accent text-[48px] font-medium leading-none">
                {stat.value}
              </div>
              <div className="text-cream-muted text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // 10. Ask/CTA
  {
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <Sparkles size={48} className="text-accent mb-6" />
        <h2 className="font-display italic text-cream text-[40px] md:text-[64px] leading-tight mb-4">
          Join us at the table.
        </h2>
        <p className="text-cream-muted text-lg mb-8">
          hello@barplay.app · barplay.ashketing.com
        </p>
        <a
          href="/signup"
          className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-10 py-4 rounded-md shadow-button transition-all text-lg"
        >
          Start Free Trial →
        </a>
      </div>
    ),
  },
];

export default function DeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  return (
    <div
      className="h-screen w-screen bg-background overflow-hidden relative grain-overlay"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, rgba(232,135,42,0.06) 0%, transparent 50%), #0F0D0A",
      }}
    >
      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-full w-full relative z-10"
        >
          {slides[currentSlide].content}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-8 z-20">
        <button
          onClick={goPrev}
          disabled={currentSlide === 0}
          className="text-accent hover:text-accent-hover disabled:text-cream-dim transition-colors p-2"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Progress bar */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all ${
                i === currentSlide
                  ? "w-6 bg-accent"
                  : i < currentSlide
                  ? "w-2 bg-accent/40"
                  : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={currentSlide === slides.length - 1}
          className="text-accent hover:text-accent-hover disabled:text-cream-dim transition-colors p-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-8 z-20">
        <span className="font-mono text-cream-dim text-xs">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
