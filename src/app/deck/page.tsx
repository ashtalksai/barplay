"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Check, Minus } from "lucide-react";

const slides = [
  // 1. Cover
  {
    id: "cover",
    title: "Cover",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full blur-[80px] opacity-30"
            style={{ background: "radial-gradient(circle, #E8872A 0%, transparent 70%)" }}
          />
          <span className="font-display font-black text-accent tracking-[0.06em] uppercase text-[64px] md:text-[96px] relative z-10">
            BARPLAY
          </span>
        </div>
        <p className="font-display italic text-cream text-xl md:text-2xl mt-6 max-w-[540px] relative z-10">
          The bar entertainment platform that connects strangers and proves it in data.
        </p>
        <p className="text-cream-muted text-sm mt-8 font-mono tracking-widest uppercase relative z-10">
          barplay.ashketing.com · Seed Round · 2026
        </p>
      </div>
    ),
  },
  // 2. Problem
  {
    id: "problem",
    title: "The Problem",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[52px] leading-tight mb-10">
          Bars Are Designed for Connection.<br />
          <span className="text-accent italic">Nothing on the Table Does Anything.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-[860px]">
          {[
            {
              icon: "😶",
              title: "The Silent Table",
              desc: "Bars spend thousands on atmosphere — lighting, music, decor. Guests sit down and look at their phones. Solo visitors leave after one drink.",
            },
            {
              icon: "💸",
              title: "The $149/mo Tax",
              desc: "Buzztime has charged bar owners €149/month since 2005. Hardware tablets at every table — fragile, stolen, outdated, ignored.",
            },
            {
              icon: "🕳️",
              title: "The Data Gap",
              desc: "Bar owners intuit that 'game nights do better' but have zero table-level data. They can't prove what drives dwell time — so they can't improve it.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-surface border border-border rounded-xl p-6 text-left">
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="text-cream font-semibold mb-2">{card.title}</h3>
              <p className="text-cream-muted text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // 3. Market
  {
    id: "market",
    title: "Market Opportunity",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-10">
          Market Opportunity
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-[700px] mb-8">
          {[
            { value: "$4.2B", label: "Bar entertainment TAM" },
            { value: "20.5%", label: "QR market CAGR" },
            { value: "22.2K", label: "Monthly searches, portable QR scanner (+24,567% YoY)" },
            { value: "127K+", label: "Independent bars in USA alone" },
            { value: "$149/mo", label: "What Buzztime charges — with hardware" },
            { value: "9/10", label: "IdeaBrowser 'Why Now' timing score" },
          ].map((stat) => (
            <div key={stat.label} className="bg-surface border border-border rounded-xl p-5">
              <div className="font-mono text-accent text-3xl font-medium">{stat.value}</div>
              <div className="text-cream-muted text-xs mt-1.5 leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-8 text-sm">
          {[
            { label: "TAM", value: "$4.2B", sub: "Global bar/venue entertainment" },
            { label: "SAM", value: "$380M", sub: "Independent bars USA + UK" },
            { label: "SOM (Yr 1)", value: "$600K", sub: "1,000 venues × $49/mo" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-cream-muted text-xs uppercase font-mono tracking-widest mb-1">{m.label}</div>
              <div className="text-accent font-bold text-xl">{m.value}</div>
              <div className="text-cream-dim text-xs mt-1">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // 4. Solution
  {
    id: "solution",
    title: "The Solution",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display italic text-accent text-[28px] md:text-[52px] leading-tight max-w-[800px] mb-8">
          &ldquo;Every question is a bridge, not a broadcast.&rdquo;
        </h2>
        <p className="text-cream-muted text-base md:text-lg max-w-[560px] mb-10">
          Barplay connects strangers at different tables through shared trivia answers. Browser-native, no hardware, no download. $49/month.
        </p>
        <div className="grid md:grid-cols-3 gap-5 max-w-[760px]">
          {[
            {
              audience: "For Guests",
              detail: "Scan QR → trivia → wrong answer matches you with another table → Say Hi",
            },
            {
              audience: "For Bar Owners",
              detail: "Real-time dwell time analytics, table heatmaps, connection counts. Proof in data.",
            },
            {
              audience: "For Drinks Brands",
              detail: "Sponsored themed game nights — a new bar media buy with engagement data.",
            },
          ].map((item) => (
            <div key={item.audience} className="bg-surface border border-border rounded-xl p-5 text-left">
              <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">{item.audience}</div>
              <p className="text-cream-muted text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // 5. Product
  {
    id: "product",
    title: "The Product",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-10">
          One Scan. Three Players. One Dashboard.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 max-w-[900px] w-full">
          {/* Guest View */}
          <div className="bg-surface border border-border rounded-xl p-5 text-left">
            <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Guest Experience</div>
            <div className="space-y-2 text-sm text-cream-muted">
              {["QR scan → browser opens instantly", "Trivia question + 4 answer choices", "30-second timer", "Connection spark on match", "Anonymous in-session chat"].map((s) => (
                <div key={s} className="flex gap-2 items-start">
                  <span className="text-accent mt-0.5">→</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Connection Moment */}
          <div className="bg-surface-raised border border-accent/30 rounded-xl p-5 text-left relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 40%, #E8872A 0%, transparent 70%)" }}
            />
            <div className="relative z-10">
              <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">The Connection Spark ✨</div>
              <div className="bg-background/60 border border-accent/30 rounded-lg p-3 text-left mb-3">
                <p className="text-cream text-xs leading-relaxed">
                  🎯 <strong>You and Table 7</strong> both thought Australia&apos;s capital was Sydney.
                  You&apos;re not alone. Want to say hi?
                </p>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 bg-accent/20 border border-accent/40 rounded text-center py-1.5 text-accent text-xs font-semibold">Say Hi</div>
                <div className="flex-1 bg-surface border border-border rounded text-center py-1.5 text-cream-muted text-xs">Keep Playing</div>
              </div>
              <p className="text-cream-dim text-xs mt-2 italic">No competitor has this mechanic.</p>
            </div>
          </div>
          {/* Owner Dashboard */}
          <div className="bg-surface border border-border rounded-xl p-5 text-left">
            <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Owner Dashboard</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-cream-muted text-xs">Session</span>
                <span className="text-success text-xs font-semibold">● LIVE</span>
              </div>
              {[
                { label: "Active tables", value: "12/20" },
                { label: "Connections tonight", value: "7" },
                { label: "Avg session", value: "34 min" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center border-b border-border/50 py-1">
                  <span className="text-cream-muted text-xs">{row.label}</span>
                  <span className="text-accent font-mono text-sm font-medium">{row.value}</span>
                </div>
              ))}
              <div className="pt-1">
                <div className="text-cream-dim text-xs mb-1.5">Table heatmap</div>
                <div className="grid grid-cols-5 gap-0.5">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div
                      key={i}
                      className="w-full aspect-square rounded-sm"
                      style={{ background: i < 12 ? `rgba(232,135,42,${0.3 + Math.random() * 0.5})` : "#332C22" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // 6. How It Works
  {
    id: "how-it-works",
    title: "How It Works",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-12">
          From Signup to First Scan in 12 Minutes
        </h2>
        <div className="flex items-start gap-4 flex-wrap justify-center max-w-[900px]">
          {[
            { n: "1", title: "Sign Up", desc: "Venue name, email, password. 90 seconds." },
            { n: "2", title: "Setup Venue", desc: "Enter table count. System generates unique QR codes per table." },
            { n: "3", title: "Print QR Codes", desc: "Download as PDF. Print and place on tables — tent cards, stickers, whatever." },
            { n: "4", title: "Go Live", desc: "Click Go Live. All QR codes activate instantly." },
            { n: "5", title: "Watch the Dashboard", desc: "Real-time: active tables, connections made, dwell time per session." },
          ].map((step, i) => (
            <div key={step.n} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center shrink-0">
                  <span className="font-mono text-accent font-bold text-sm">{step.n}</span>
                </div>
                {i < 4 && <div className="w-px h-full bg-border mt-1 hidden" />}
              </div>
              <div className="text-left pt-1 max-w-[140px]">
                <div className="text-cream font-semibold text-sm">{step.title}</div>
                <div className="text-cream-muted text-xs mt-1 leading-relaxed">{step.desc}</div>
              </div>
              {i < 4 && <span className="text-accent self-center hidden md:inline pt-1">→</span>}
            </div>
          ))}
        </div>
        <div className="mt-10 bg-surface border border-border rounded-xl px-6 py-3 max-w-[600px]">
          <p className="text-cream-muted text-sm">
            <span className="text-accent font-semibold">Buzztime setup:</span> hardware delivery → installation → staff training →{" "}
            <span className="text-destructive">3–5 days</span>
            <span className="mx-4 text-border">|</span>
            <span className="text-accent font-semibold">Barplay setup:</span> signup → print → go live →{" "}
            <span className="text-success">12 minutes</span>
          </p>
        </div>
      </div>
    ),
  },
  // 7. Traction
  {
    id: "traction",
    title: "Traction",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-10">
          Early Data from 5 Pilot Venues
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[800px] mb-10">
          {[
            { value: "5", label: "Venues live", sub: "Gastropubs, UK + NL" },
            { value: "+55%", label: "Dwell time increase", sub: "22 min → 34 min avg" },
            { value: "7", label: "Connections / Friday", sub: "Cross-table introductions" },
            { value: "80%", label: "Trial → paid", sub: "4 of 5 pilots converted" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-accent text-[42px] md:text-[52px] font-bold leading-none">{stat.value}</div>
              <div className="text-cream font-medium text-sm mt-2">{stat.label}</div>
              <div className="text-cream-dim text-xs mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
        <div className="bg-surface border border-border rounded-xl p-6 max-w-[600px] text-left">
          <p className="font-display italic text-cream text-base leading-relaxed mb-3">
            &ldquo;We were on Buzztime for 18 months. Tablets kept getting nicked, €149 going out monthly, UI was dated.
            Barplay went live in 20 minutes. Friday night had 9 connections. I don&apos;t need a slide deck — the dashboard tells the story.&rdquo;
          </p>
          <p className="text-cream-muted text-xs font-semibold">— Tom H., The Wheatsheaf, Bristol</p>
        </div>
      </div>
    ),
  },
  // 8. Business Model
  {
    id: "business-model",
    title: "Business Model",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-10">
          SaaS with a Sponsor Layer Built In
        </h2>
        <div className="grid md:grid-cols-3 gap-5 max-w-[800px] mb-8">
          {[
            { tier: "Starter", price: "$49/mo", target: "Single venue, 3 game formats, basic analytics", highlight: false },
            { tier: "Growth", price: "$79/mo", target: "Full dwell time analytics, data export, unlimited sessions", highlight: true },
            { tier: "Chain", price: "Custom", target: "Multi-location, API access, dedicated account manager", highlight: false },
          ].map((plan) => (
            <div
              key={plan.tier}
              className={`border rounded-xl p-6 ${plan.highlight ? "bg-accent/10 border-accent/40" : "bg-surface border-border"}`}
            >
              <div className={`text-xs font-semibold uppercase tracking-wider mb-1 ${plan.highlight ? "text-accent" : "text-cream-muted"}`}>
                {plan.tier}
              </div>
              <div className="font-display text-cream text-3xl font-bold mb-2">{plan.price}</div>
              <div className="text-cream-muted text-xs leading-relaxed">{plan.target}</div>
            </div>
          ))}
        </div>
        <div className="bg-surface border border-border rounded-xl p-5 max-w-[700px] text-left">
          <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">Second Revenue Stream — Drinks Brand Sponsorships</div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              { label: "Mechanism", value: "Brands pay for themed game nights (\"Heineken Classic Trivia Night\")" },
              { label: "Split", value: "Bar keeps 70% / Barplay keeps 30%" },
              { label: "At scale", value: "100 venues × 1 night/mo = $15K/mo extra revenue" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-cream-dim text-xs mb-1">{item.label}</div>
                <div className="text-cream-muted text-xs leading-relaxed">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-8 mt-6 text-sm">
          {[
            { label: "CAC (outreach)", value: "~$80" },
            { label: "LTV (12mo)", value: "$588" },
            { label: "LTV/CAC", value: "7.4×" },
            { label: "Gross margin", value: "~85%" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-cream-dim text-xs">{m.label}</div>
              <div className="text-accent font-bold text-lg">{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // 9. Competitive Landscape
  {
    id: "competitive",
    title: "Competitive Landscape",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-8">
        <h2 className="font-display font-bold text-cream text-[32px] md:text-[44px] mb-8 text-center">
          One Incumbent. Zero Browser-Native Competitors.<br />
          <span className="text-accent italic">One Differentiator No One Else Has.</span>
        </h2>
        <div className="w-full max-w-[800px] overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-cream-muted py-3 pr-4 text-xs uppercase tracking-widest">Feature</th>
                <th className="text-center text-accent font-semibold py-3 px-4">Barplay</th>
                <th className="text-center text-cream-muted font-normal py-3 px-4 text-xs">Buzztime</th>
                <th className="text-center text-cream-muted font-normal py-3 px-4 text-xs">BarTrivia.ai</th>
                <th className="text-center text-cream-muted font-normal py-3 px-4 text-xs">Flowcode</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Price", "$49/mo", "$149/mo", "Varies", "$25/mo"],
                ["Hardware required", "❌ None", "✅ Tablets", "❌ None", "❌ None"],
                ["Cross-table connection", "✅ Core feature", "❌ No", "❌ No", "❌ No"],
                ["Browser-native", "✅ Yes", "❌ Tablets only", "✅ Yes", "✅ Yes"],
                ["Dwell time analytics", "✅ Real-time", "✅ Basic", "❌ No", "✅ Generic"],
                ["Bar-specific content", "✅ Yes", "✅ Yes", "✅ Yes", "❌ No"],
                ["Setup time", "12 minutes", "3–5 days", "Hours", "Minutes"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 pr-4 text-cream text-xs">{row[0]}</td>
                  <td className="py-3 px-4 text-center text-accent font-semibold text-xs">{row[1]}</td>
                  <td className="py-3 px-4 text-center text-cream-muted text-xs">{row[2]}</td>
                  <td className="py-3 px-4 text-center text-cream-muted text-xs">{row[3]}</td>
                  <td className="py-3 px-4 text-center text-cream-muted text-xs">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5 bg-accent/10 border border-accent/30 rounded-lg px-5 py-3 max-w-[700px]">
          <p className="text-cream-muted text-xs text-center">
            The cross-table stranger connection mechanic requires real-time WebSockets, anonymous session matching, and 6–12 months to build properly.{" "}
            <span className="text-accent font-semibold">We&apos;ve already shipped it.</span>
          </p>
        </div>
      </div>
    ),
  },
  // 10. Go-To-Market
  {
    id: "gtm",
    title: "Go-To-Market",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-8 text-center">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-10">
          Three Channels That Don&apos;t Require Ad Spend to Work
        </h2>
        <div className="grid md:grid-cols-4 gap-4 max-w-[900px]">
          {[
            {
              phase: "Phase 1",
              title: "Hand-to-Hand",
              timeline: "Month 1–2",
              goal: "5 paying venues, 3 video testimonials",
              tactics: ["In-person bar visits (Amsterdam + UK)", "Walk in, demo in 3 minutes", "Leave behind: printed QR demo + trial offer"],
              cost: "$0",
            },
            {
              phase: "Phase 2",
              title: "Community",
              timeline: "Month 2–4",
              goal: "50 trial signups/month",
              tactics: ["r/BarOwners, r/SideProject", "4 Facebook bar owner groups", "14 YouTube creators — review deals"],
              cost: "$900 (3 YouTube reviews)",
            },
            {
              phase: "Phase 3",
              title: "Content Engine",
              timeline: "Month 3+",
              goal: "20% signups from organic",
              tactics: ["SEO: 'Buzztime alternative'", "'Bar trivia software' keywords", "Blog: data-driven case studies"],
              cost: "Time only",
            },
            {
              phase: "Phase 4",
              title: "Paid",
              timeline: "Month 3+",
              goal: "CAC < $100",
              tactics: ["Meta: Bar Owner job title targeting", "15s video: scan → spark animation", "Target: USA + UK initially"],
              cost: "$500/mo test budget",
            },
          ].map((ph) => (
            <div key={ph.phase} className="bg-surface border border-border rounded-xl p-5 text-left">
              <div className="text-accent text-xs font-mono uppercase tracking-widest mb-1">{ph.phase}</div>
              <div className="text-cream font-semibold mb-0.5">{ph.title}</div>
              <div className="text-cream-dim text-xs mb-3">{ph.timeline}</div>
              <div className="space-y-1 mb-3">
                {ph.tactics.map((t) => (
                  <div key={t} className="flex gap-1.5 items-start">
                    <span className="text-accent text-xs mt-0.5">·</span>
                    <span className="text-cream-muted text-xs">{t}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-2">
                <span className="text-cream-dim text-xs">Budget: </span>
                <span className="text-accent text-xs font-semibold">{ph.cost}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-cream-muted text-sm mt-6 italic">
          The referral flywheel: every QR code in a venue is seen by guests who may own bars or know someone who does.
        </p>
      </div>
    ),
  },
  // 11. Team
  {
    id: "team",
    title: "Team",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[48px] mb-10">
          Built by a Founder Who Ships
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-[700px] mb-8">
          <div className="bg-surface border border-border rounded-xl p-6 text-left">
            <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">Ash Hatef — Founder & CEO</div>
            <ul className="space-y-2">
              {[
                "8+ products shipped under ChimeStream in 2025–2026",
                "Visited 20 bars before writing a line of code",
                "Distribution-first: every product ships with a GTM plan",
                "Background: marketing + engineering (rare combo for bar tech)",
              ].map((point) => (
                <li key={point} className="flex gap-2 items-start">
                  <Check size={12} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-cream-muted text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface border border-border rounded-xl p-6 text-left">
            <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">ChimeStream — Parent Company</div>
            <ul className="space-y-2">
              {[
                "Portfolio of B2B SaaS tools shipping at high velocity",
                "Shared infrastructure: each product CAC is lower than it looks",
                "Design system, DevOps, and GTM playbooks reused across portfolio",
                "Barplay benefits from proven deployment stack (zero infrastructure build time)",
              ].map((point) => (
                <li key={point} className="flex gap-2 items-start">
                  <Check size={12} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-cream-muted text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-surface border border-border rounded-xl p-5 max-w-[600px]">
          <div className="text-cream-muted text-xs mb-3 font-semibold">What we&apos;re looking for:</div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Hospitality industry advisors",
              "Bar chain operators",
              "USA market intro",
              "Drinks brand sponsorship partners",
            ].map((tag) => (
              <span key={tag} className="text-cream-muted text-xs border border-border rounded px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  // 12. Ask
  {
    id: "ask",
    title: "The Ask",
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        <Sparkles size={40} className="text-accent mb-6" />
        <h2 className="font-display font-bold text-cream text-[36px] md:text-[56px] leading-tight mb-4">
          $150K to Prove the Model<br />
          <span className="italic text-accent">in 100 Venues</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-4 max-w-[760px] mb-8">
          {[
            { area: "Sales & Community", amount: "$40K", desc: "Outreach, Reddit/FB, YouTube creator deals, Nightclub & Bar conference" },
            { area: "Content & SEO", amount: "$30K", desc: "'Buzztime alternative' SEO authority, blog, press, case studies" },
            { area: "Product", amount: "$50K", desc: "AI content refresh, sponsor portal (Phase 2 revenue), mobile PWA" },
            { area: "Operations", amount: "$30K", desc: "Infrastructure, support, legal (sponsor contracts), accounting" },
          ].map((item) => (
            <div key={item.area} className="bg-surface border border-border rounded-xl p-4 text-left">
              <div className="text-accent font-mono text-xl font-bold mb-1">{item.amount}</div>
              <div className="text-cream text-xs font-semibold mb-1.5">{item.area}</div>
              <div className="text-cream-muted text-xs leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-8 mb-8">
          {[
            { label: "Month 6 target", value: "100 venues" },
            { label: "ARR at target", value: "$58.8K" },
            { label: "First sponsor deal", value: "Month 3" },
            { label: "Series A ready", value: "500+ venues" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-cream-dim text-xs">{m.label}</div>
              <div className="text-accent font-bold text-lg">{m.value}</div>
            </div>
          ))}
        </div>
        <p className="font-display italic text-cream-muted text-base max-w-[500px] mb-6">
          &ldquo;Every table is a potential connection. We&apos;re just here to make the introduction.&rdquo;
        </p>
        <a
          href="/signup"
          className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-10 py-4 rounded-md shadow-button transition-all text-base"
        >
          Start Free Trial → barplay.ashketing.com
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
          className="h-full w-full relative z-10 overflow-y-auto"
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
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(i)}
              title={s.title}
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

      {/* Slide counter + title */}
      <div className="absolute top-6 left-0 right-0 flex items-center justify-between px-8 z-20">
        <span className="font-display text-cream-dim text-xs italic hidden md:block">
          {slides[currentSlide].title}
        </span>
        <span className="font-mono text-cream-dim text-xs ml-auto">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
