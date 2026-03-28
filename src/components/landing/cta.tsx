"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cta"
      className="py-24 md:py-32 relative grain-overlay"
      ref={ref}
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(232,135,42,0.15) 0%, transparent 60%), #0F0D0A",
      }}
    >
      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-cream text-[40px] md:text-[64px] leading-[1.05] mb-6"
        >
          Your Next Regular Started as a{" "}
          <span className="italic text-accent">Stranger.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-cream-muted text-lg mb-8"
        >
          14 days free. No credit card. Setup in 12 minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col items-center gap-4"
        >
          <Link
            href="/signup"
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold text-lg px-10 py-4 rounded-md shadow-button transition-all duration-200 active:scale-[0.98]"
          >
            Start Free Trial →
          </Link>
          <Link
            href="/contact"
            className="text-accent hover:underline text-sm"
          >
            Already running a venue? Talk to us.
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
