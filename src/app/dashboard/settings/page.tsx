"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [venue, setVenue] = useState({
    name: "The Draft Amsterdam",
    address: "Keizersgracht 384, Amsterdam",
    tableCount: 20,
  });

  return (
    <div className="p-6 lg:p-8 pt-20 lg:pt-8">
      <div className="mb-8">
        <h1 className="text-cream font-semibold text-lg">Settings</h1>
        <p className="text-cream-muted text-sm mt-1">
          Manage your venue and account settings
        </p>
      </div>

      <div className="max-w-[600px] space-y-8">
        {/* Venue settings */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-cream font-semibold text-base mb-5">
            Venue Details
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-cream-muted text-xs uppercase tracking-wider mb-1.5 block">
                Venue Name
              </label>
              <input
                type="text"
                value={venue.name}
                onChange={(e) => setVenue({ ...venue, name: e.target.value })}
                className="w-full bg-surface-raised border border-border rounded-lg px-4 py-3 text-[15px] text-cream focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="text-cream-muted text-xs uppercase tracking-wider mb-1.5 block">
                Address
              </label>
              <input
                type="text"
                value={venue.address}
                onChange={(e) =>
                  setVenue({ ...venue, address: e.target.value })
                }
                className="w-full bg-surface-raised border border-border rounded-lg px-4 py-3 text-[15px] text-cream focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="text-cream-muted text-xs uppercase tracking-wider mb-1.5 block">
                Number of Tables
              </label>
              <input
                type="number"
                value={venue.tableCount}
                onChange={(e) =>
                  setVenue({ ...venue, tableCount: parseInt(e.target.value) })
                }
                className="w-full bg-surface-raised border border-border rounded-lg px-4 py-3 text-[15px] text-cream focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <button className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-6 py-2.5 rounded-md shadow-button transition-all text-sm">
              Save Changes
            </button>
          </div>
        </div>

        {/* Subscription */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-cream font-semibold text-base mb-3">
            Subscription
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cream text-sm">
                Current plan: <span className="text-accent font-semibold">Starter</span>
              </p>
              <p className="text-cream-muted text-xs mt-1">$49/month · Renews April 28, 2026</p>
            </div>
            <a
              href="/pricing"
              className="text-accent text-sm font-medium hover:underline"
            >
              Upgrade
            </a>
          </div>
        </div>

        {/* Danger zone */}
        <div className="bg-surface border border-destructive/30 rounded-xl p-6">
          <h3 className="text-destructive font-semibold text-base mb-3">
            Danger Zone
          </h3>
          <p className="text-cream-muted text-sm mb-4">
            Permanently delete your venue and all associated data. This action
            cannot be undone.
          </p>
          <button className="border border-destructive/40 text-destructive text-sm font-medium px-4 py-2 rounded-md hover:bg-destructive/10 transition-colors">
            Delete Venue
          </button>
        </div>
      </div>
    </div>
  );
}
