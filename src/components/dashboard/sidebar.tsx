"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  QrCode,
  Layers,
  Settings,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: QrCode, label: "QR Codes", href: "/dashboard/qr-codes" },
  { icon: Layers, label: "Game Library", href: "/dashboard/games" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-border">
        <Link
          href="/"
          className="font-display font-bold text-accent tracking-[0.06em] uppercase text-lg"
        >
          BARPLAY
        </Link>
        <p className="text-cream-dim text-xs mt-1">Bar Owner Dashboard</p>
      </div>

      {/* Session status */}
      <div className="px-5 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="font-mono text-xs text-success">DEMO MODE</span>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-3">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all ${
                active
                  ? "text-cream bg-surface-raised border-l-2 border-accent"
                  : "text-cream-muted hover:text-cream hover:bg-surface-hover border-l-2 border-transparent"
              }`}
            >
              <item.icon size={18} className={active ? "text-accent" : ""} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-5 py-4 border-t border-border space-y-3">
        <Link
          href="/pricing"
          className="block bg-accent/20 text-accent text-xs font-semibold text-center py-2 rounded-md border border-accent/40 hover:bg-accent/30 transition-colors"
        >
          Upgrade to Growth
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-2 text-cream-dim hover:text-cream text-sm w-full transition-colors"
        >
          <LogOut size={14} />
          Sign out
        </button>
      </div>
    </div>
  );
}

export function DashboardSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-[240px] bg-surface border-r border-border z-40">
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-surface border-b border-border z-40 flex items-center px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="text-accent p-2 bg-transparent border-none cursor-pointer">
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent side="left" className="bg-surface border-border w-[240px] p-0">
            <SheetTitle className="sr-only">Dashboard Navigation</SheetTitle>
            <SidebarContent onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
        <span className="font-display font-bold text-accent tracking-[0.06em] uppercase text-base ml-2">
          BARPLAY
        </span>
      </div>
    </>
  );
}
