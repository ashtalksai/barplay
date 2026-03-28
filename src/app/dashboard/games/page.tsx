"use client";

import { Layers, MessageCircle, Zap, HelpCircle, Check } from "lucide-react";

const gameFormats = [
  {
    name: "Trivia",
    icon: HelpCircle,
    description: "Classic pub trivia. Answer questions about music, history, geography, and pop culture.",
    questionCount: 50,
    active: true,
    categories: ["Music", "History", "Geography", "Pop Culture", "Science", "Sports"],
  },
  {
    name: "Would You Rather",
    icon: MessageCircle,
    description: "Fun dilemmas that spark debate. Great for breaking the ice between strangers.",
    questionCount: 50,
    active: true,
    categories: ["Funny", "Deep", "Bar Life", "Travel", "Food & Drink"],
  },
  {
    name: "Hot Takes",
    icon: Zap,
    description: "Controversial opinions that get people talking. Agree or disagree — then find your match.",
    questionCount: 50,
    active: false,
    categories: ["Food", "Music", "Social", "Sports", "Lifestyle"],
  },
];

export default function GamesPage() {
  return (
    <div className="p-6 lg:p-8 pt-20 lg:pt-8">
      <div className="mb-8">
        <h1 className="text-cream font-semibold text-lg">Game Library</h1>
        <p className="text-cream-muted text-sm mt-1">
          Choose and configure your game formats
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {gameFormats.map((game) => (
          <div
            key={game.name}
            className={`bg-surface border rounded-xl p-6 transition-all ${
              game.active
                ? "border-accent/40 shadow-glow"
                : "border-border hover:border-border-strong"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <game.icon size={28} className="text-accent" />
              {game.active && (
                <span className="bg-success/20 text-success text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded">
                  Active
                </span>
              )}
            </div>

            <h3 className="text-cream font-semibold text-xl mb-2">
              {game.name}
            </h3>
            <p className="text-cream-muted text-sm leading-relaxed mb-4">
              {game.description}
            </p>

            <div className="flex items-center gap-2 mb-4">
              <Layers size={12} className="text-cream-dim" />
              <span className="text-cream-dim text-xs font-mono">
                {game.questionCount} questions
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {game.categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-surface-raised text-cream-muted text-[10px] px-2 py-0.5 rounded border border-border"
                >
                  {cat}
                </span>
              ))}
            </div>

            <button
              className={`w-full py-2.5 rounded-md text-sm font-semibold transition-all ${
                game.active
                  ? "bg-surface-raised text-cream border border-border hover:bg-surface-hover"
                  : "bg-accent hover:bg-accent-hover text-accent-foreground shadow-button"
              }`}
            >
              {game.active ? "Deactivate" : "Activate"}
            </button>
          </div>
        ))}
      </div>

      {/* Content freshness */}
      <div className="mt-8 bg-surface border border-border rounded-xl p-6">
        <h3 className="text-cream font-semibold text-base mb-3">
          Content Freshness
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {gameFormats.map((game) => (
            <div key={game.name} className="flex items-center gap-3">
              <Check size={14} className="text-success" />
              <div>
                <p className="text-cream text-sm">{game.name}</p>
                <p className="text-cream-dim text-xs">Last refreshed: March 2026</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-cream-muted text-xs mt-4">
          Growth tier subscribers get monthly question refreshes. Starter subscribers get quarterly refreshes.
        </p>
      </div>
    </div>
  );
}
