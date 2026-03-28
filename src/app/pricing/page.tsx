"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Check, Minus } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    monthly: 49,
    annual: 42,
    description: "Perfect for a single venue getting started",
    featured: false,
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
    cta: "Start Free Trial",
    href: "/signup",
  },
  {
    name: "Chain",
    monthly: null,
    annual: null,
    description: "Multi-location venue groups",
    featured: false,
    cta: "Contact Us",
    href: "/contact",
  },
];

const comparisonFeatures = [
  { feature: "Venues", starter: "1", growth: "1", chain: "Unlimited" },
  { feature: "Tables", starter: "Up to 20", growth: "Up to 50", chain: "Unlimited" },
  { feature: "Game formats", starter: "3", growth: "3", chain: "3 + Custom" },
  { feature: "Live dashboard", starter: true, growth: true, chain: true },
  { feature: "Basic analytics", starter: true, growth: true, chain: true },
  { feature: "QR code generator", starter: true, growth: true, chain: true },
  { feature: "Print templates", starter: true, growth: true, chain: true },
  { feature: "Dwell time charts", starter: false, growth: true, chain: true },
  { feature: "Cross-table heatmaps", starter: false, growth: true, chain: true },
  { feature: "Data export (CSV)", starter: false, growth: true, chain: true },
  { feature: "Monthly question refresh", starter: false, growth: true, chain: true },
  { feature: "Sponsorship layer", starter: false, growth: true, chain: true },
  { feature: "API access", starter: false, growth: false, chain: true },
  { feature: "White-label", starter: false, growth: false, chain: true },
  { feature: "Dedicated manager", starter: false, growth: false, chain: true },
  { feature: "Onboarding workshop", starter: false, growth: false, chain: true },
  { feature: "Support", starter: "Email", growth: "Priority chat", chain: "Dedicated" },
];

const pricingFaqs = [
  {
    q: 'What counts as a "table"?',
    a: "A table is any QR code you generate and deploy. A bar stool at the bar counts as a table if you put a QR code on it.",
  },
  {
    q: "Can I upgrade or downgrade mid-billing cycle?",
    a: "Yes, any time. Upgrades take effect immediately, downgrades at next billing date.",
  },
  {
    q: "Is there a setup fee?",
    a: "No. The 14-day trial is completely free, no credit card required.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 md:py-28 text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <h1 className="font-display font-bold text-cream text-[40px] md:text-[64px] leading-tight mb-4">
              Honest Pricing for Bar Owners
            </h1>
            <p className="text-cream-muted text-lg">
              No setup fees. No lock-in. Cancel anytime.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <span className={`text-sm ${!annual ? "text-cream" : "text-cream-muted"}`}>
                Monthly
              </span>
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
          </div>
        </section>

        {/* Pricing cards */}
        <section className="pb-20">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {plans.map((plan) => (
                <div
                  key={plan.name}
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
                </div>
              ))}
            </div>

            {/* Feature comparison table */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-surface z-10">
                    <tr className="border-b border-border">
                      <th className="text-left text-cream-muted font-medium py-4 px-6 w-[40%]">
                        Feature
                      </th>
                      <th className="text-center text-cream-muted font-medium py-4 px-4">
                        Starter
                      </th>
                      <th className="text-center text-accent font-semibold py-4 px-4">
                        Growth
                      </th>
                      <th className="text-center text-cream-muted font-medium py-4 px-4">
                        Chain
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-border/50 ${
                          i % 2 === 0 ? "" : "bg-surface-raised/30"
                        }`}
                      >
                        <td className="py-3.5 px-6 text-cream">{row.feature}</td>
                        {["starter", "growth", "chain"].map((tier) => {
                          const val = row[tier as keyof typeof row];
                          return (
                            <td key={tier} className="py-3.5 px-4 text-center">
                              {val === true ? (
                                <Check size={14} className="text-cream mx-auto" />
                              ) : val === false ? (
                                <Minus size={14} className="text-cream-dim mx-auto" />
                              ) : (
                                <span className="text-cream-muted text-xs">
                                  {val as string}
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-cream-dim text-xs text-center mt-6">
              All plans include a 14-day free trial. No credit card required.
              Cancel anytime.
            </p>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="py-16 border-t border-border">
          <div className="max-w-[700px] mx-auto px-6">
            <h2 className="font-display font-bold text-cream text-2xl mb-8">
              Pricing Questions
            </h2>
            <Accordion>
              {pricingFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`pfaq-${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-cream text-left font-medium text-base py-5 hover:no-underline [&>svg]:text-accent">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-cream-muted text-[15px] leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
