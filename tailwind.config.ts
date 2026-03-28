import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class", ".dark"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0F0D0A',
        surface: '#1A1612',
        'surface-raised': '#241F19',
        'surface-hover': '#2D2620',
        border: '#332C22',
        'border-strong': '#4A3F30',
        accent: '#E8872A',
        'accent-hover': '#F59B3F',
        'accent-dim': '#7B4A15',
        'accent-foreground': '#0F0D0A',
        cream: '#F5EDD8',
        'cream-muted': '#C4AD8A',
        'cream-dim': '#7A6848',
        success: '#4CAF82',
        destructive: '#C0392B',
        warning: '#D4A017',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Helvetica', 'sans-serif'],
        mono: ['"DM Mono"', '"Courier New"', 'monospace'],
      },
      backgroundImage: {
        'amber-glow': 'radial-gradient(ellipse at 50% 0%, rgba(232,135,42,0.15) 0%, transparent 60%)',
        'bar-ambiance': 'radial-gradient(ellipse at 30% 40%, rgba(232,135,42,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(183,97,24,0.06) 0%, transparent 40%)',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(15,13,10,0.4), 0 4px 12px rgba(15,13,10,0.3)',
        'raised': '0 4px 16px rgba(15,13,10,0.5), 0 1px 4px rgba(15,13,10,0.4)',
        'modal': '0 20px 60px rgba(15,13,10,0.7), 0 4px 20px rgba(15,13,10,0.5)',
        'glow': '0 0 20px rgba(232,135,42,0.25), 0 0 60px rgba(232,135,42,0.1)',
        'button': '0 2px 8px rgba(232,135,42,0.3)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
