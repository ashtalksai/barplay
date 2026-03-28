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
          "IdeaBrowser idea analysis, keyword data, competitor breakdown, and community signals. Score: 75/100 — GO.",
        url: "https://docs.google.com/document/d/1wgNFBVtXOQ8tXM-uCJFUKW2yC-bxyrq6gphVAZv-KYU/edit",
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
          "Go-to-market strategy covering launch channels, partnerships, and growth motions for bar entertainment SaaS.",
        url: "#",
        placeholder: true,
      },
    ],
  },
  {
    id: "marketing",
    icon: Megaphone,
    label: "Marketing",
    description: "Content strategy, positioning, and campaign plans",
    docs: [
      {
        title: "Marketing Plan — Barplay",
        description:
          "Content marketing playbook, social strategy, and bar owner acquisition funnel.",
        url: "#",
        placeholder: true,
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
          "Complete design system: brand tokens, typography, color palette, component specs, animation guidelines, and page-by-page design specs.",
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
        title: "Pitch Deck — Barplay",
        description:
          "10-slide Framer Motion pitch presentation covering problem, solution, market, traction, and business model.",
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
    <div>
      <div className="text-accent text-xs font-mono uppercase tracking-[0.06em] mb-4 px-2">
        Documents
      </div>
      <nav className="space-y-0.5">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSelect(section.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                isActive
                  ? "text-cream bg-surface-raised border-l-2 border-accent"
                  : "text-cream-muted hover:text-cream hover:bg-surface-hover border-l-2 border-transparent"
              }`}
            >
              <section.icon size={16} className={isActive ? "text-accent" : ""} />
              {section.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("research");
  const [mobileOpen, setMobileOpen] = useState(false);

  const section = sections.find((s) => s.id === activeSection)!;

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="flex">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-[240px] bg-surface border-r border-border min-h-[calc(100vh-64px)] p-5 sticky top-16">
            <SidebarNav active={activeSection} onSelect={setActiveSection} />
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
          <div className="flex-1 p-6 lg:p-10 pt-24 lg:pt-10">
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
                    className={`block bg-surface border border-border rounded-xl p-6 hover:border-border-strong transition-all group ${
                      "placeholder" in doc && doc.placeholder
                        ? "opacity-60 cursor-default pointer-events-none"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-cream font-semibold text-base mb-1.5 group-hover:text-accent transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-cream-muted text-sm leading-relaxed">
                          {doc.description}
                        </p>
                      </div>
                      {"placeholder" in doc && doc.placeholder ? (
                        <span className="text-cream-dim text-[10px] font-mono uppercase bg-surface-raised px-2 py-0.5 rounded border border-border shrink-0 mt-1">
                          Coming Soon
                        </span>
                      ) : (
                        <ExternalLink
                          size={14}
                          className="text-cream-dim group-hover:text-accent shrink-0 mt-1 transition-colors"
                        />
                      )}
                    </div>
                    {"placeholder" in doc || (
                      <span className="text-accent text-xs mt-3 inline-block group-hover:underline">
                        {"internal" in doc ? "View presentation →" : "Open in Google Docs →"}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
