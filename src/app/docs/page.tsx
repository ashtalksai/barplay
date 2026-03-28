"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  FileText,
  Target,
  Megaphone,
  Palette,
  Presentation,
  ExternalLink,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const sections = [
  {
    id: "research",
    icon: FileText,
    label: "Research",
    description: "Market research, competitive analysis, and IdeaBrowser data",
    docs: [
      {
        title: "Research Brief — Barplay",
        description:
          "IdeaBrowser idea analysis, keyword data (portable QR scanner: 22.2K vol, +24,567% growth), competitor breakdown (Buzztime vs Flowcode vs BarTrivia.ai), community signals (4 subreddits, 4 FB groups, 14 YouTube channels). Idea score: 75/100 — GO.",
        url: "https://docs.google.com/document/d/1wgNFBVtXOQ8tXM-uCJFUKW2yC-bxyrq6gphVAZv-KYU/edit",
      },
      {
        title: "Product Enrichment — Barplay",
        description:
          "Full product spec: dashboard design, guest game mechanic, onboarding flow, 11-section landing page copy, pricing tiers, and product identity. Includes competitive visual direction (what to avoid: Buzztime, Kahoot, Flowcode aesthetics).",
        url: "https://docs.google.com/document/d/1N5fwxTJaw0s2WjyfqkH-ifoy7dnogFeN4J7Rf7dHQxE/edit",
      },
    ],
  },
  {
    id: "gtm",
    icon: Target,
    label: "GTM",
    description: "Go-to-market strategy and distribution plan",
    docs: [
      {
        title: "GTM Plan — Barplay",
        description:
          "Full go-to-market strategy: 4-phase launch (hand-to-hand → community → content → paid), specific Reddit posts for r/BarOwners/r/SideProject/r/trivia/r/entrepreneur, Facebook group playbook, YouTube creator outreach templates, launch sequence (T-0 to T+30), pricing strategy ($49/$79/custom), partnership plan, and milestones to $24.5K MRR.",
        url: "https://docs.google.com/document/d/1cgnhcTyBx5P2FdrskZvfAT_hRe5sSVVVzbiw2NFTw7s/edit",
      },
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    label: "Marketing",
    description: "Content strategy, copy, social posts, and campaign plans",
    docs: [
      {
        title: "Marketing Plan — Barplay",
        description:
          "Complete marketing playbook: brand voice guidelines, final brand copy (tagline, CTAs, meta description, social bios), 8-week Reddit content calendar (5 full posts ready to publish), LinkedIn content plan, Twitter/X threads, first 5 social posts ready to publish, email sequence (Day 0 → Day 14 trial → paid), and press pitch templates.",
        url: "https://docs.google.com/document/d/1v0lnOu4pT8U8ye_E344qivOdFmuK1pVw9YR77h20WAQ/edit",
      },
    ],
  },
  {
    id: "brand",
    icon: Palette,
    label: "Brand",
    description: "Brand identity, design system, and visual guidelines",
    docs: [
      {
        title: "Brand & Design Spec — Barplay",
        description:
          "Complete design system: brand tokens (CSS variables + Tailwind config), typography (Playfair Display + DM Sans + DM Mono), color palette (#0F0D0A bg, #E8872A amber accent, #F5EDD8 cream), component specs, animation specs (Framer Motion: connection spark, hero stagger, scroll reveal), page-by-page design specs for all 14 routes, and artist brief for logo + social media kit.",
        url: "https://docs.google.com/document/d/1VLqfSk4W6MNMNi2HIYfl9bH5RBn3dvY79vYawo_wFtY/edit",
      },
    ],
  },
  {
    id: "pitch",
    icon: Presentation,
    label: "Pitch",
    description: "Investor and partner pitch materials",
    docs: [
      {
        title: "Pitch Deck Content — Barplay",
        description:
          "12-slide pitch deck narrative: Cover → Problem → Market ($4.2B TAM, 20.5% CAGR) → Solution → Product Demo → How It Works → Traction (5 venues, +55% dwell time, 80% trial conversion) → Business Model ($49/$79/Custom + sponsor layer) → Competitive Landscape → Go-To-Market → Team → Ask ($150K seed).",
        url: "https://docs.google.com/document/d/1IBhopVzw1J6qWhqCf9SJwqeR_jMN5_H-bvAtGP2Slgg/edit",
      },
      {
        title: "Live Pitch Deck — /deck",
        description:
          "Interactive 12-slide Framer Motion pitch deck. Keyboard navigation (← →), progress indicator, full-screen immersive experience. Use for investor meetings, partner demos, and press presentations.",
        url: "/deck",
        internal: true,
      },
    ],
  },
];

function SidebarNav({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav className="space-y-1">
      <div className="text-cream-dim text-[10px] font-mono uppercase tracking-[0.15em] mb-3 px-3">
        Documents
      </div>
      {sections.map((s) => {
        const Icon = s.icon;
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left ${
              isActive
                ? "bg-accent/10 text-accent border border-accent/20"
                : "text-cream-muted hover:text-cream hover:bg-surface-hover"
            }`}
          >
            <Icon size={14} className={isActive ? "text-accent" : "text-cream-dim"} />
            {s.label}
          </button>
        );
      })}
    </nav>
  );
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [mobileOpen, setMobileOpen] = useState(false);

  const section = sections.find((s) => s.id === activeSection)!;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <div className="flex h-[calc(100vh-64px)]">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-[220px] border-r border-border bg-surface shrink-0 p-5">
            <SidebarNav active={activeSection} onSelect={setActiveSection} />
            <div className="mt-8 pt-6 border-t border-border">
              <div className="text-cream-dim text-[10px] font-mono uppercase tracking-[0.15em] mb-2">Live product</div>
              <a
                href="/"
                className="text-cream-muted text-xs hover:text-accent transition-colors block"
              >
                → barplay.ashketing.com
              </a>
              <a
                href="/deck"
                className="text-cream-muted text-xs hover:text-accent transition-colors block mt-1"
              >
                → /deck — Pitch Deck
              </a>
            </div>
          </aside>

          {/* Mobile sidebar trigger */}
          <div className="lg:hidden fixed top-16 left-0 right-0 bg-surface border-b border-border z-30 px-4 py-2.5 flex items-center gap-2">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger className="text-accent p-1 bg-transparent border-none cursor-pointer">
                <Menu size={18} />
              </SheetTrigger>
              <SheetContent side="left" className="bg-surface border-border w-[240px] p-5">
                <SheetTitle className="sr-only">Documents Navigation</SheetTitle>
                <SidebarNav
                  active={activeSection}
                  onSelect={(id) => {
                    setActiveSection(id);
                    setMobileOpen(false);
                  }}
                />
              </SheetContent>
            </Sheet>
            <span className="text-cream text-sm font-medium">{section.label}</span>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 lg:p-10 pt-24 lg:pt-10 overflow-y-auto">
            <div className="max-w-[800px]">
              <h1 className="font-display font-bold text-cream text-[28px] md:text-[36px] mb-2">
                {section.label}
              </h1>
              <p className="text-cream-muted text-base mb-8">
                {section.description}
              </p>

              <div className="space-y-4">
                {section.docs.map((doc) => (
                  <a
                    key={doc.title}
                    href={doc.url}
                    target={doc.url.startsWith("http") ? "_blank" : undefined}
                    rel={doc.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block bg-surface border border-border rounded-xl p-6 hover:border-accent/40 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-cream font-semibold text-base mb-1.5 group-hover:text-accent transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-cream-muted text-sm leading-relaxed">
                          {doc.description}
                        </p>
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-cream-dim group-hover:text-accent shrink-0 mt-1 transition-colors"
                      />
                    </div>
                    <span className="text-accent text-xs mt-3 inline-block group-hover:underline">
                      {"internal" in doc && doc.internal ? "View presentation →" : "Open in Google Docs →"}
                    </span>
                  </a>
                ))}
              </div>

              {/* Section meta */}
              <div className="mt-10 pt-6 border-t border-border">
                <p className="text-cream-dim text-xs">
                  All documents are maintained in{" "}
                  <a
                    href="https://drive.google.com/drive/folders/1VZajewhTj7f0ARIZcqpGTV7l_tCwKbR1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Google Drive — Barplay/Marketing
                  </a>
                  . Last updated: March 28, 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
