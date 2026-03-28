"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-xl shadow-raised border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display font-bold text-accent tracking-[0.06em] uppercase text-xl">
          BARPLAY
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream-muted hover:text-cream text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-cream-muted hover:text-cream text-sm font-medium transition-colors px-4 py-2"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="bg-accent hover:bg-accent-hover text-accent-foreground text-sm font-semibold px-5 py-2.5 rounded-md shadow-button transition-all duration-200 active:scale-[0.98]"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden text-accent p-2 bg-transparent border-none cursor-pointer">
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent side="right" className="bg-surface border-border w-[80vw] max-w-[320px]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-1 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-cream-muted hover:text-cream hover:bg-surface-raised py-4 px-4 text-base font-medium border-b border-border transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 px-4 space-y-3">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block text-center text-cream border border-cream/30 hover:border-cream/60 py-3 rounded-md font-medium"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-accent hover:bg-accent-hover text-accent-foreground py-3 rounded-md font-semibold shadow-button"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
