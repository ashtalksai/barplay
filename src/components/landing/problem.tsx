"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Tablet, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: Smartphone,
    title: "Atmosphere Money, Zero ROI Data",
    description:
      "You can't prove which nights drive returns. Your dwell time intuition isn't enough for a drinks brand sponsor.",
    stat: "67% of solo bar visitors feel awkward within 10 minutes.",
  },
  {
    icon: Tablet,
    title: "Buzztime Costs €149/mo and Breaks on Fridays",
    description:
      "Hardware at every table. Maintenance contracts. Dated UI from 2008. Still no stranger-connection mechanic.",
    stat: "€149/mo. Hardware required. Still no data.",
  },
  {
    icon: BarChart3,
    title: "Nothing On The Table Does Anything",
    description:
      "Lighting, music, decor. Then guests sit down and open Instagram. The table is the dead zone in your atmosphere investment.",
    stat: "0 tools connect strangers at different tables.",
  },
];

export function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-cream text-[32px] md:text-[48px] leading-tight mb-4">
            Your Bar Sells Atmosphere.{" "}
            <span className="font-display italic text-accent">But the Table Does Nothing.</span>
          </h2>
          <p className="text-cream-muted text-lg max-w-[600px] mx-auto">
            You spent €8,000 on lighting. The music is perfect. And the couple
            at table 6 is on their phones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-surface border border-border rounded-xl p-8 hover:border-border-strong transition-all duration-200"
            >
              <p.icon size={40} className="text-accent mb-5" />
              <h3 className="text-cream font-semibold text-lg mb-2">
                {p.title}
              </h3>
              <p className="text-cream-muted text-[15px] leading-relaxed mb-4">
                {p.description}
              </p>
              <p className="font-mono text-xs text-accent">{p.stat}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
