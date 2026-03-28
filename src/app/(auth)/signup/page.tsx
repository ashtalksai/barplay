"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Star, Check } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    venueName: "",
    email: "",
    password: "",
    agreed: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreed) {
      setError("Please agree to the Terms of Service");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          venueName: form.venueName,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        setLoading(false);
        return;
      }

      // Auto sign in after signup
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (result?.ok) {
        router.push("/dashboard");
      } else {
        setError("Account created. Please log in.");
        router.push("/login");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left — form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
        <Link
          href="/"
          className="font-display font-bold text-accent tracking-[0.06em] uppercase text-xl mb-10"
        >
          BARPLAY
        </Link>

        <h1 className="font-display font-bold text-cream text-[32px] md:text-[40px] mb-2">
          Start Your Free Trial
        </h1>
        <p className="text-cream-muted text-base mb-8">
          14 days free. No credit card.
        </p>

        {error && (
          <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm rounded-lg px-4 py-3 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 max-w-[400px]">
          <div>
            <label className="text-cream-muted text-xs uppercase tracking-wider mb-1.5 block">
              Venue Name
            </label>
            <input
              type="text"
              value={form.venueName}
              onChange={(e) =>
                setForm({ ...form, venueName: e.target.value })
              }
              placeholder="The Draft Amsterdam"
              className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-[15px] text-cream placeholder:text-cream-dim focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="text-cream-muted text-xs uppercase tracking-wider mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@yourbar.com"
              className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-[15px] text-cream placeholder:text-cream-dim focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label className="text-cream-muted text-xs uppercase tracking-wider mb-1.5 block">
              Password
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              placeholder="Min. 8 characters"
              className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-[15px] text-cream placeholder:text-cream-dim focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={form.agreed}
              onChange={(e) =>
                setForm({ ...form, agreed: e.target.checked })
              }
              className="mt-1 accent-accent"
            />
            <span className="text-cream-muted text-sm">
              I agree to the{" "}
              <Link href="/terms" className="text-accent hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
            </span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold py-3 rounded-md shadow-button transition-all disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account →"}
          </button>
        </form>

        <div className="max-w-[400px] mt-6">
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-cream-dim text-xs">or continue with</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="w-full border border-cream/30 text-cream hover:bg-surface-raised py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        <p className="text-cream-muted text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-accent hover:underline">
            Log in
          </Link>
        </p>
      </div>

      {/* Right — trust panel (hidden on mobile) */}
      <div className="hidden lg:flex flex-1 bg-surface-raised bg-bar-ambiance flex-col justify-center px-16">
        <div className="max-w-[380px]">
          <div className="flex gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-accent fill-accent" />
            ))}
          </div>
          <p className="font-display text-cream text-xl italic leading-relaxed mb-6">
            &ldquo;Setup took 12 minutes. I printed the QR codes, stuck them on
            the tables, and watched the dashboard fill up on a Tuesday.&rdquo;
          </p>
          <p className="text-cream-muted text-sm">
            James O., Owner, The Anchor Liverpool
          </p>

          <div className="mt-10 space-y-3">
            {[
              "14-day free trial, no credit card",
              "Setup in 12 minutes",
              "Cancel anytime, no lock-in",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2.5">
                <Check size={14} className="text-accent shrink-0" />
                <span className="text-cream-muted text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
