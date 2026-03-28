import Link from "next/link";
import { TwitterIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/social";

const productLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="font-display font-bold text-accent tracking-[0.06em] uppercase text-lg">
              BARPLAY
            </span>
            <p className="text-cream-muted text-sm mt-3 max-w-[280px] leading-relaxed">
              The bar entertainment platform that connects strangers and proves it in data.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-cream-dim hover:text-accent transition-colors">
                <TwitterIcon size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream-dim hover:text-accent transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cream-dim hover:text-accent transition-colors">
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-cream text-sm font-semibold uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream-muted hover:text-cream text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-cream text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-cream-muted hover:text-cream text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:hello@barplay.app" className="text-cream-muted hover:text-cream text-sm transition-colors">
                  hello@barplay.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-cream-dim text-xs">
            © {new Date().getFullYear()} Barplay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
