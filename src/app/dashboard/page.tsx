"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Users,
  Clock,
  HelpCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// Demo data
const demoStats = [
  { label: "Active Tables", value: "12/20", icon: Activity, color: "text-accent" },
  { label: "Players Active", value: "34", icon: Users, color: "text-accent" },
  { label: "Avg Session Time", value: "22 min", icon: Clock, color: "text-accent" },
  { label: "Questions Answered", value: "187", icon: HelpCircle, color: "text-accent" },
];

const demoTables = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  players: Math.random() > 0.4 ? Math.floor(Math.random() * 6) + 1 : 0,
  active: Math.random() > 0.4,
}));

const demoConnections = [
  { time: "9:42 PM", tables: "T3 ↔ T7", question: "Q12" },
  { time: "9:38 PM", tables: "T1 ↔ T9", question: "Q8" },
  { time: "9:31 PM", tables: "T4 ↔ T12", question: "Q15" },
  { time: "9:24 PM", tables: "T6 ↔ T2", question: "Q3" },
  { time: "9:18 PM", tables: "T11 ↔ T5", question: "Q7" },
  { time: "9:10 PM", tables: "T8 ↔ T14", question: "Q11" },
  { time: "9:02 PM", tables: "T10 ↔ T3", question: "Q6" },
];

const demoActivity = [
  { text: "Table 3 answered Q12", type: "answer" },
  { text: "Table 7 answered Q12", type: "answer" },
  { text: "Connection triggered: T3 ↔ T7", type: "connection" },
  { text: "Table 1 joined session", type: "join" },
  { text: "Table 9 answered Q8", type: "answer" },
  { text: "Table 1 answered Q8", type: "answer" },
  { text: "Connection triggered: T1 ↔ T9", type: "connection" },
  { text: "Table 4 answered Q15", type: "answer" },
];

export default function DashboardPage() {
  const [sessionActive, setSessionActive] = useState(true);

  return (
    <div className="p-6 lg:p-8 pt-20 lg:pt-8">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-cream font-semibold text-lg">The Draft Amsterdam</h1>
          <div className="flex items-center gap-2 mt-1">
            {sessionActive ? (
              <>
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="font-mono text-xs text-success">SESSION: LIVE</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 rounded-full bg-cream-dim" />
                <span className="font-mono text-xs text-cream-dim">NO ACTIVE SESSION</span>
              </>
            )}
          </div>
        </div>
        <button
          onClick={() => setSessionActive(!sessionActive)}
          className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all ${
            sessionActive
              ? "bg-destructive/20 text-destructive border border-destructive/40 hover:bg-destructive/30"
              : "bg-accent hover:bg-accent-hover text-accent-foreground shadow-button"
          }`}
        >
          {sessionActive ? "Stop Session" : "Start Game"}
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {demoStats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-surface border border-border rounded-xl p-6"
          >
            <stat.icon size={18} className="text-cream-muted mb-3" />
            <div className="font-mono text-accent text-3xl font-medium">
              {stat.value}
            </div>
            <div className="text-cream-muted text-xs mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Table Heatmap + Connections */}
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-4 mb-6">
        {/* Table Heatmap */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-cream-muted text-sm font-medium">Table Activity</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <span className="text-success text-[10px] font-mono">Live</span>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {demoTables.map((table) => {
              const heat =
                table.players === 0
                  ? "bg-surface-raised"
                  : table.players <= 2
                  ? "bg-amber-900/30"
                  : table.players <= 4
                  ? "bg-amber-700/50"
                  : "bg-amber-500/70";
              return (
                <div
                  key={table.id}
                  className={`aspect-square rounded-lg ${heat} border border-border flex items-center justify-center cursor-pointer hover:border-border-strong transition-all group relative`}
                  style={
                    table.active
                      ? {
                          animation: `table-pulse 2s ease-in-out ${table.id * 0.3}s infinite`,
                        }
                      : {}
                  }
                >
                  <span className="font-mono text-xs text-cream-muted">
                    {table.id}
                  </span>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-surface-raised border border-border rounded-md px-2 py-1 text-[10px] text-cream whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Table {table.id} · {table.players} players
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-4 text-[10px] text-cream-dim">
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-surface-raised border border-border" /> Inactive</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-900/30" /> Low</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-700/50" /> Medium</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-500/70" /> Hot</span>
          </div>
        </div>

        {/* Connections */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-cream-muted text-sm font-medium mb-4">
            Cross-Table Connections
          </h3>
          <div className="text-center mb-6">
            <div className="font-mono text-accent text-[64px] font-medium leading-none">
              7
            </div>
            <div className="text-cream-muted text-sm mt-1">connections tonight</div>
          </div>
          <div className="space-y-2.5">
            {demoConnections.slice(0, 5).map((conn, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs"
              >
                <span className="text-cream-dim font-mono w-16">{conn.time}</span>
                <Sparkles size={10} className="text-accent shrink-0" />
                <span className="text-cream">{conn.tables}</span>
                <span className="text-cream-dim">({conn.question})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Feed + Dwell Time */}
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-4">
        {/* Activity feed */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-cream-muted text-sm font-medium mb-4">
            Recent Activity
          </h3>
          <div className="space-y-2">
            {demoActivity.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 text-xs py-1.5 border-l-2 pl-3 ${
                  item.type === "connection"
                    ? "border-accent text-accent"
                    : item.type === "join"
                    ? "border-success text-success"
                    : "border-border text-cream-muted"
                }`}
              >
                {item.type === "connection" && <Sparkles size={10} className="mt-0.5 shrink-0" />}
                {item.type === "join" && <ArrowRight size={10} className="mt-0.5 shrink-0" />}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dwell Time Chart (simplified) */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <h3 className="text-cream-muted text-sm font-medium mb-4">
            Dwell Time Comparison
          </h3>
          <div className="flex items-end gap-3 h-[200px] px-4">
            {[
              { label: "Mon", game: 35, noGame: 22 },
              { label: "Tue", game: 42, noGame: 20 },
              { label: "Wed", game: 38, noGame: 24 },
              { label: "Thu", game: 55, noGame: 28 },
              { label: "Fri", game: 68, noGame: 35 },
              { label: "Sat", game: 72, noGame: 40 },
              { label: "Sun", game: 45, noGame: 25 },
            ].map((day) => (
              <div key={day.label} className="flex-1 flex flex-col items-center gap-1">
                <div className="flex items-end gap-1 w-full h-[160px]">
                  <div
                    className="flex-1 bg-accent/60 rounded-t-sm"
                    style={{ height: `${(day.game / 80) * 100}%` }}
                  />
                  <div
                    className="flex-1 bg-cream-dim/30 rounded-t-sm border-t border-dashed border-cream-dim/50"
                    style={{ height: `${(day.noGame / 80) * 100}%` }}
                  />
                </div>
                <span className="text-cream-dim text-[10px] font-mono">{day.label}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6 mt-4 justify-center text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-accent/60" /> Game nights
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-cream-dim/30 border border-dashed border-cream-dim/50" /> No game
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
