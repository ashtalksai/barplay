"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { QrCode } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sign Up and Set Up",
    description:
      'Enter your venue name and number of tables. Barplay generates unique QR codes for every table. Download the print-ready PDF.',
    visual: (
      <div className="bg-surface rounded-xl border border-border p-4 mt-4">
        <div className="space-y-2.5">
          <div>
            <label className="text-cream-dim text-[10px] font-mono uppercase tracking-wider">Venue name</label>
            <div className="bg-surface-raised border border-border rounded-lg px-3 py-2 mt-1">
              <span className="text-cream text-sm">The Draft</span>
            </div>
          </div>
          <div>
            <label className="text-cream-dim text-[10px] font-mono uppercase tracking-wider">Tables</label>
            <div className="bg-surface-raised border border-border rounded-lg px-3 py-2 mt-1">
              <span className="text-cream text-sm">20</span>
            </div>
          </div>
          <div className="bg-accent hover:bg-accent-hover text-accent-foreground text-xs font-semibold py-2 rounded-md text-center mt-2">
            Generate QR Codes →
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Print and Go Live",
    description:
      'Put the QR codes on your tables — we have templates for table tents, coasters, and stickers. Hit "Go Live" from your dashboard. Takes 10 seconds.',
    visual: (
      <div className="flex justify-center mt-4">
        <div className="bg-background rounded-lg border border-border p-4 text-center w-[140px]">
          <div className="bg-cream/10 rounded-md p-3 mb-2">
            <QrCode size={60} className="text-cream mx-auto" />
          </div>
          <div className="text-[11px] font-mono text-accent uppercase tracking-widest">TABLE 4</div>
          <div className="text-[9px] text-cream-dim mt-0.5">barplay.app</div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Watch It Happen",
    description:
      "Guests scan, play, get connected. You watch the live dashboard fill up. The first connection notification is the moment you know it's working.",
    visual: (
      <div className="bg-surface-raised rounded-xl border border-accent/40 p-3 mt-4 pulse-glow">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
            <span className="font-mono text-[8px] text-accent">T4</span>
          </div>
          <span className="text-accent text-[10px]">✨</span>
          <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
            <span className="font-mono text-[8px] text-accent">T7</span>
          </div>
        </div>
        <p className="text-cream text-xs font-display font-bold">Table 4 matched with Table 7</p>
        <p className="text-cream-muted text-[10px]">Both got Q12 wrong</p>
      </div>
    ),
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 relative"
      ref={ref}
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(232,135,42,0.06) 0%, transparent 50%), #0F0D0A",
      }}
    >
      <div className="max-w-[900px] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-cream text-[32px] md:text-[48px] text-center mb-16"
        >
          Up and Running Before Your First Pint
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px border-t border-dashed border-accent/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              {/* Step number */}
              <div className="w-12 h-12 rounded-full border-2 border-accent mx-auto flex items-center justify-center mb-4 bg-background relative z-10">
                <span className="font-mono text-accent font-medium text-sm">
                  {step.number}
                </span>
              </div>

              <h3 className="text-cream font-semibold text-xl mb-2">
                {step.title}
              </h3>
              <p className="text-cream-muted text-[15px] leading-relaxed">
                {step.description}
              </p>

              {step.visual}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
