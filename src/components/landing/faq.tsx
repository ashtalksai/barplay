"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Does this require guests to download an app?",
    a: "No. Guests scan the QR code with their phone camera and the game opens in their browser. No download, no account, no friction. If they can order food from a QR menu, they can play Barplay.",
  },
  {
    q: "What happens if the internet goes out mid-service?",
    a: "The games are lightweight and reconnect automatically. If the connection drops entirely, the QR codes still display the last loaded question until reconnection. We also send a status email with tips for backup connectivity.",
  },
  {
    q: "How often are the questions refreshed?",
    a: "Growth tier subscribers get a new question pack monthly — typically 30–50 new questions per format. Starter subscribers get quarterly refreshes. We know stale content is the number-one churn reason — this is built into the product, not an afterthought.",
  },
  {
    q: "Can I customize the questions for my bar or add my own?",
    a: "Custom question uploads are on the roadmap for Q3 2026. For now, you can request themed question packs (e.g., sports, local history, film nights) via the support chat. Most requests are turned around within 48 hours.",
  },
  {
    q: "How does the cross-table connection work without guest accounts?",
    a: 'Guests are assigned anonymous session tokens when they scan. The connection mechanic matches tokens (not identities) — guests are shown as "Table 4" or "Table 7," never by name or email. Privacy by design.',
  },
  {
    q: "How is this different from Buzztime?",
    a: "Buzztime costs $149/month, requires hardware tablets at every table, and has no cross-table stranger-connection mechanic. Barplay costs $49/month, works on any smartphone, and the stranger connection is the entire product. Plus, our analytics are designed for bar business decisions — not just game scores.",
  },
  {
    q: "Do I need any technical knowledge to set this up?",
    a: "No. If you can use a smartphone and a printer, you can set up Barplay. The onboarding takes 12 minutes. We've had bar owners in their 60s set up 40-table venues without help.",
  },
  {
    q: "What if I want to cancel?",
    a: "Cancel any time from your account settings. No cancellation fees, no lock-in. If you cancel before your trial ends, you owe nothing.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-12 lg:gap-20">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-cream text-[32px] md:text-[48px] leading-tight">
              The Honest Answers
            </h2>
            <p className="text-cream-muted text-base mt-4">
              Everything you need to know about getting started with Barplay.
            </p>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Accordion className="space-y-0">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-cream text-left font-medium text-base py-5 hover:no-underline hover:text-cream [&[data-state=open]>svg]:text-accent [&>svg]:text-accent [&>svg]:transition-transform">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-cream-muted text-[15px] leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
