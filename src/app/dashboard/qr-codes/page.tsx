"use client";

import { useState } from "react";
import { QrCode, Download, Printer } from "lucide-react";

export default function QRCodesPage() {
  const [tableCount] = useState(20);

  return (
    <div className="p-6 lg:p-8 pt-20 lg:pt-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-cream font-semibold text-lg">QR Codes</h1>
          <p className="text-cream-muted text-sm mt-1">
            Generate and manage QR codes for your tables
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 border border-cream/30 text-cream px-4 py-2.5 rounded-md text-sm font-medium hover:bg-surface-raised transition-colors">
            <Download size={14} />
            Download All PDF
          </button>
          <button className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-accent-foreground px-4 py-2.5 rounded-md text-sm font-semibold shadow-button transition-all">
            <Printer size={14} />
            Print Templates
          </button>
        </div>
      </div>

      {/* QR Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: tableCount }, (_, i) => (
          <div
            key={i}
            className="bg-surface border border-border rounded-xl p-5 text-center hover:border-border-strong transition-colors group"
          >
            <div className="bg-cream/5 rounded-lg p-4 mb-3">
              <QrCode
                size={80}
                className="text-cream mx-auto opacity-80"
              />
            </div>
            <div className="font-mono text-accent text-sm uppercase tracking-widest font-medium">
              TABLE {i + 1}
            </div>
            <div className="text-cream-dim text-[10px] mt-1">barplay.app</div>
            <button className="mt-3 text-accent text-xs hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
              Download
            </button>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-surface border border-border rounded-xl p-6">
        <h3 className="text-cream font-semibold text-base mb-3">
          Printing Instructions
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-cream-muted">
          <div>
            <h4 className="text-cream font-medium mb-1">Table Tents</h4>
            <p>
              Download the PDF and print on card stock. Fold along the center
              line. Place on each table.
            </p>
          </div>
          <div>
            <h4 className="text-cream font-medium mb-1">Coasters</h4>
            <p>
              Use the coaster template for a 4-inch round format. Works with any
              label printer.
            </p>
          </div>
          <div>
            <h4 className="text-cream font-medium mb-1">Stickers</h4>
            <p>
              Print on adhesive paper. Great for bar tops, menu boards, or
              anywhere guests can reach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
