"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageCircle, ArrowLeft, Send } from "lucide-react";

// Demo questions
const demoQuestions = [
  {
    id: "Q1",
    text: "What city invented the modern cocktail?",
    options: ["New York", "London", "New Orleans", "Paris"],
    correct: "New Orleans",
  },
  {
    id: "Q2",
    text: "Which country drinks the most beer per capita?",
    options: ["Germany", "Czech Republic", "Ireland", "Belgium"],
    correct: "Czech Republic",
  },
  {
    id: "Q3",
    text: "How many bubbles are in a glass of champagne?",
    options: ["1 million", "250 million", "49 million", "500,000"],
    correct: "49 million",
  },
  {
    id: "Q4",
    text: "What's the world's oldest bar?",
    options: ["Sean's Bar, Ireland", "The Eagle, UK", "White Horse, UK", "Ye Olde Trip, UK"],
    correct: "Sean's Bar, Ireland",
  },
  {
    id: "Q5",
    text: "What cocktail was invented in Cuba?",
    options: ["Margarita", "Mojito", "Negroni", "Old Fashioned"],
    correct: "Mojito",
  },
];

type GameState = "loading" | "playing" | "matched" | "chatting";

export default function PlayPage({
  params,
}: {
  params: Promise<{ venueId: string; tableId: string }>;
}) {
  const [state, setState] = useState<GameState>("loading");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [tableNumber, setTableNumber] = useState("4");
  const [messages, setMessages] = useState<Array<{ from: string; text: string }>>([
    { from: "system", text: "You're now connected! Say hi 👋" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    params.then((p) => {
      setTableNumber(p.tableId || "4");
    });
    // Loading state
    const timer = setTimeout(() => setState("playing"), 2000);
    return () => clearTimeout(timer);
  }, [params]);

  const currentQuestion = demoQuestions[questionIndex];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);

    setTimeout(() => {
      // Simulate connection on questions 2 and 4
      if (questionIndex === 1 || questionIndex === 3) {
        setState("matched");
      } else {
        setShowResult(false);
        setSelectedAnswer(null);
        setQuestionIndex((prev) => Math.min(prev + 1, demoQuestions.length - 1));
      }
    }, 1500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages((prev) => [...prev, { from: "me", text: newMessage }]);
    setNewMessage("");
    // Simulate response
    setTimeout(() => {
      const responses = [
        "Hey! Can't believe we both got that wrong 😂",
        "What are you drinking?",
        "First time here? The craft beer is amazing!",
        "Haha same! This game is fun",
      ];
      setMessages((prev) => [
        ...prev,
        {
          from: "other",
          text: responses[Math.floor(Math.random() * responses.length)],
        },
      ]);
    }, 2000);
  };

  // Loading state
  if (state === "loading") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="font-display font-bold text-accent tracking-[0.06em] uppercase text-2xl">
            BARPLAY
          </span>
          <p className="text-cream-muted text-base mt-3">
            Welcome to The Draft Amsterdam
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4"
          >
            <span className="font-mono text-accent text-5xl font-bold">
              Table {tableNumber}
            </span>
          </motion.div>
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
                className="w-2 h-2 rounded-full bg-accent"
              />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  // Chat state
  if (state === "chatting") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Chat header */}
        <div className="bg-surface border-b border-border px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => {
              setState("playing");
              setShowResult(false);
              setSelectedAnswer(null);
              setQuestionIndex((prev) => Math.min(prev + 1, demoQuestions.length - 1));
            }}
            className="text-cream-muted hover:text-cream"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
            <span className="font-mono text-[10px] text-accent">T7</span>
          </div>
          <span className="text-cream font-medium text-sm">Table 7</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.from === "me" ? "justify-end" : msg.from === "system" ? "justify-center" : "justify-start"
              }`}
            >
              {msg.from === "system" ? (
                <span className="text-cream-dim text-xs italic">{msg.text}</span>
              ) : (
                <div
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.from === "me"
                      ? "bg-accent text-accent-foreground rounded-br-sm"
                      : "bg-surface-raised text-cream border border-border rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message input */}
        <form
          onSubmit={handleSendMessage}
          className="bg-surface border-t border-border p-3 flex items-center gap-2"
        >
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-surface-raised border border-border rounded-full px-4 py-2.5 text-sm text-cream placeholder:text-cream-dim focus:outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="bg-accent hover:bg-accent-hover text-accent-foreground w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    );
  }

  // Match notification
  if (state === "matched") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-surface-raised border border-accent/60 rounded-2xl p-6 max-w-[320px] w-full pulse-glow"
        >
          {/* Table avatars with spark */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
              <span className="font-mono text-sm text-accent font-medium">
                T{tableNumber}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-6 h-px bg-accent/40" />
              <Sparkles size={20} className="text-accent" />
              <div className="w-6 h-px bg-accent/40" />
            </div>
            <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
              <span className="font-mono text-sm text-accent font-medium">T7</span>
            </div>
          </div>

          <h2 className="font-display text-cream text-xl text-center font-bold mb-2">
            You matched with Table 7!
          </h2>
          <p className="text-cream-muted text-sm text-center mb-5">
            You both got {currentQuestion.id} wrong. Want to say hi?
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setState("chatting")}
              className="flex-1 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold py-3 rounded-md transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} />
              Say Hi 👋
            </button>
            <button
              onClick={() => {
                setState("playing");
                setShowResult(false);
                setSelectedAnswer(null);
                setQuestionIndex((prev) =>
                  Math.min(prev + 1, demoQuestions.length - 1)
                );
              }}
              className="flex-1 border border-cream/30 text-cream font-medium py-3 rounded-md hover:bg-surface-hover transition-colors"
            >
              Keep Playing
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Playing state
  return (
    <div className="min-h-screen bg-background flex flex-col px-6 py-8">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-cream-muted text-xs font-sans">BARPLAY</span>
        <span className="text-cream-muted text-xs font-sans">
          Table {tableNumber}
        </span>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-[360px] mx-auto w-full">
        {/* Question number */}
        <span className="bg-accent/20 text-accent text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded border border-accent/40 mb-4">
          {currentQuestion.id}
        </span>

        {/* Question text */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-display text-cream text-2xl md:text-[28px] font-bold text-center leading-snug mb-8"
          >
            {currentQuestion.text}
          </motion.h2>
        </AnimatePresence>

        {/* Answer buttons */}
        <div className="w-full space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = showResult && option === currentQuestion.correct;
            const isWrong = showResult && isSelected && option !== currentQuestion.correct;

            return (
              <motion.button
                key={option}
                whileTap={{ scale: 0.98 }}
                onClick={() => !showResult && handleAnswer(option)}
                disabled={showResult}
                className={`w-full text-left px-4 py-3.5 rounded-lg text-[15px] font-sans transition-all border ${
                  isCorrect
                    ? "border-success bg-success/15 text-cream"
                    : isWrong
                    ? "border-destructive/50 bg-destructive/10 text-cream-muted line-through"
                    : isSelected
                    ? "border-accent bg-accent/15 text-cream"
                    : "border-border bg-surface-raised text-cream-muted hover:border-border-strong"
                }`}
              >
                {option}
              </motion.button>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-2 mt-8">
          {demoQuestions.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === questionIndex
                  ? "bg-accent w-4"
                  : i < questionIndex
                  ? "bg-accent/40"
                  : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
