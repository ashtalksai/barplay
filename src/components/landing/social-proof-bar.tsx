"use client";

import { SectionWrapper } from "./section-wrapper";

const stats = [
  { value: "180+", label: "venues" },
  { value: "7,200+", label: "connections made" },
  { value: "34 min", label: "avg. longer dwell time" },
  { value: "4.9★", label: "owner rating" },
];

export function SocialProofBar() {
  return (
    <SectionWrapper className="bg-surface border-y border-border py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <span className="font-mono text-accent text-sm font-medium">
                {stat.value}
              </span>
              <span className="text-cream-muted text-sm ml-1.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <p className="text-cream-dim text-xs text-center mt-4">
          Trusted by bars in Amsterdam · London · Dublin · Lisbon
        </p>
      </div>
    </SectionWrapper>
  );
}
