"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Minus } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    monthly: 49,
    annual: 42,
    description: "Perfect for a single venue getting started",
    featured: false,
    features: [
      { text: "1 venue", included: true },
      { text: "Up to 20 tables", included: true },
      { text: "3 game formats", included: true },
      { text: "Live session dashboard", included: true },
      { text: "Basic analytics", included: true },
      { text: "QR code generator + print templates", included: true },
      { text: "Email support", included: true },
      { text: "14-day free trial", included: true },
    ],
    cta: "Start Free Trial",
    href: "/signup",
  },
  {
    name: "Growth",
    monthly: 79,
    annual: 67,
    description: "Full analytics and sponsorship tools",
    featured: true,
    badge: "Most Popular",
    features: [
      { text: "1 venue", included: true },
      { text: "Up to 50 tables", included: true },
      { text: "3 game formats", included: true },
      { text: "Live session dashboard", included: true },
      { text: "Full dwell time analytics", included: true },
      { text: "Cross-table heatmaps", included: true },
      { text: "Data export (CSV)", included: true },
      { text: "Monthly question refreshes", included: true },
      { text: "Drinks brand sponsorship layer", included: true },
      { text: "Priority chat support", included: true },
    ],
    cta: "Start Free Trial",
    href: "/signup",
  },
  {
    name: "Chain",
    monthly: null,
    annual: null,
    description: "Multi-location venue groups",
    featured: false,
    features: [
      { text: "Unlimited venues", included: true },
      { text: "Unlimited tables", included: true },
      { text: "3 + custom game formats", included: true },
      { text: "Aggregated chain analytics", included: true },
      { text: "API access", included: true },
      { text: "White-label option", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Onboarding workshop", included: true },
    ],
    cta: "Contact Us",
    href: "/contact",
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-cream text-[32px] md:text-[48px] mb-4">
            Less Than One Round of Drinks. Per Month.
          </h2>

          {/* Annual toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm ${!annual ? "text-cream" : "text-cream-muted"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                annual ? "bg-accent" : "bg-surface-raised border border-border"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-cream absolute top-0.5 transition-all ${
                  annual ? "left-[26px]" : "left-0.5"
                }`}
              />
            </button>
            <span className={`text-sm ${annual ? "text-cream" : "text-cream-muted"}`}>
              Annual{" "}
              <span className="text-accent text-xs font-medium">Save 15%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 relative ${
                plan.featured
                  ? "bg-surface-raised border-[1.5px] border-accent shadow-glow"
                  : plan.name === "Chain"
                  ? "bg-surface border border-dashed border-accent/40"
                  : "bg-surface border border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-2">
                {plan.name}
              </div>

              {plan.monthly !== null ? (
                <div className="mb-1">
                  <span className="font-display text-cream text-[48px] font-bold">
                    ${annual ? plan.annual : plan.monthly}
                  </span>
                  <span className="text-cream-muted text-lg">/mo</span>
                </div>
              ) : (
                <div className="mb-1">
                  <span className="font-display text-cream text-[40px] font-bold">
                    Let&apos;s Talk
                  </span>
                </div>
              )}

              <p className="text-cream-muted text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2.5">
                    {f.included ? (
                      <Check size={14} className="text-cream mt-0.5 shrink-0" />
                    ) : (
                      <Minus size={14} className="text-cream-dim mt-0.5 shrink-0" />
                    )}
                    <span className="text-cream-muted text-sm">{f.text}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block text-center py-3 rounded-md font-semibold text-sm transition-all ${
                  plan.featured
                    ? "bg-accent hover:bg-accent-hover text-accent-foreground shadow-button"
                    : plan.name === "Chain"
                    ? "border border-cream/30 text-cream hover:bg-surface-hover"
                    : "border border-accent/60 text-accent hover:bg-accent/10"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-cream-dim text-xs text-center mt-8">
          All plans include a 14-day free trial. No credit card required. Cancel
          anytime.
        </p>
      </div>
    </section>
  );
}
