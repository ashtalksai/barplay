"use client";

import { TrendingUp, Users, Clock, Sparkles } from "lucide-react";

const weeklyData = [
  { week: "Week 1", sessions: 12, connections: 34, avgDwell: 28 },
  { week: "Week 2", sessions: 18, connections: 52, avgDwell: 31 },
  { week: "Week 3", sessions: 22, connections: 68, avgDwell: 34 },
  { week: "Week 4", sessions: 28, connections: 89, avgDwell: 37 },
];

const topQuestions = [
  { id: "Q12", text: "What city invented the modern cocktail?", answers: 342, connectionRate: "18%" },
  { id: "Q8", text: "Which country drinks the most beer per capita?", answers: 298, connectionRate: "15%" },
  { id: "Q15", text: "What's the world's oldest bar?", answers: 256, connectionRate: "22%" },
  { id: "Q3", text: "How many bubbles are in a glass of champagne?", answers: 234, connectionRate: "12%" },
  { id: "Q7", text: "What cocktail was invented in Cuba?", answers: 212, connectionRate: "16%" },
];

export default function AnalyticsPage() {
  return (
    <div className="p-6 lg:p-8 pt-20 lg:pt-8">
      <div className="mb-8">
        <h1 className="text-cream font-semibold text-lg">Analytics</h1>
        <p className="text-cream-muted text-sm mt-1">
          Track your venue performance over time
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Sessions", value: "80", change: "+23%", icon: TrendingUp },
          { label: "Total Players", value: "1,247", change: "+18%", icon: Users },
          { label: "Avg Dwell Time", value: "34 min", change: "+22%", icon: Clock },
          { label: "Total Connections", value: "243", change: "+31%", icon: Sparkles },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-surface border border-border rounded-xl p-5"
          >
            <stat.icon size={16} className="text-cream-muted mb-2" />
            <div className="font-mono text-accent text-2xl font-medium">
              {stat.value}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-cream-muted text-xs">{stat.label}</span>
              <span className="text-success text-[10px] font-mono">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Weekly breakdown */}
      <div className="bg-surface border border-border rounded-xl p-6 mb-6">
        <h3 className="text-cream font-medium text-base mb-4">Weekly Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-cream-muted font-medium py-3 pr-4">Week</th>
                <th className="text-right text-cream-muted font-medium py-3 px-4">Sessions</th>
                <th className="text-right text-cream-muted font-medium py-3 px-4">Connections</th>
                <th className="text-right text-cream-muted font-medium py-3 pl-4">Avg Dwell (min)</th>
              </tr>
            </thead>
            <tbody>
              {weeklyData.map((week) => (
                <tr key={week.week} className="border-b border-border/50">
                  <td className="py-3 pr-4 text-cream">{week.week}</td>
                  <td className="py-3 px-4 text-right font-mono text-cream-muted">
                    {week.sessions}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-accent">
                    {week.connections}
                  </td>
                  <td className="py-3 pl-4 text-right font-mono text-cream-muted">
                    {week.avgDwell}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top questions */}
      <div className="bg-surface border border-border rounded-xl p-6">
        <h3 className="text-cream font-medium text-base mb-4">
          Top Questions by Connection Rate
        </h3>
        <div className="space-y-3">
          {topQuestions.map((q) => (
            <div
              key={q.id}
              className="flex items-center gap-4 py-2 border-b border-border/50 last:border-0"
            >
              <span className="font-mono text-accent text-xs w-8">{q.id}</span>
              <span className="text-cream text-sm flex-1">{q.text}</span>
              <span className="text-cream-muted text-xs font-mono">{q.answers} answers</span>
              <span className="bg-accent/20 text-accent text-[11px] font-mono px-2 py-0.5 rounded">
                {q.connectionRate}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
