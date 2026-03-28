"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Mail, Check } from "lucide-react";
import { TwitterIcon, InstagramIcon, LinkedinIcon } from "@/components/icons/social";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    venueName: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 md:py-28">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">
              {/* Form */}
              <div>
                <h1 className="font-display font-bold text-cream text-[32px] md:text-[40px] mb-2">
                  Get in Touch
                </h1>
                <p className="text-cream-muted text-base mb-8">
                  Questions about Barplay? Want a demo? We&apos;d love to hear from you.
                </p>

                {submitted ? (
                  <div className="bg-success/10 border border-success/30 rounded-xl p-8 text-center">
                    <Check size={48} className="text-success mx-auto mb-4" />
                    <h3 className="text-cream font-semibold text-lg mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-cream-muted text-sm">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-cream-muted text-xs uppercase tracking-wider mb-1.5 block">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-[15px] text-cream placeholder:text-cream-dim focus:outline-none focus:border-accent transition-colors"
                          placeholder="Your name"
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
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-[15px] text-cream placeholder:text-cream-dim focus:outline-none focus:border-accent transition-colors"
                          placeholder="you@yourbar.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-cream-muted text-xs uppercase tracking-wider mb-1.5 block">
                        Venue Name (optional)
                      </label>
                      <input
                        type="text"
                        value={form.venueName}
                        onChange={(e) =>
                          setForm({ ...form, venueName: e.target.value })
                        }
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-[15px] text-cream placeholder:text-cream-dim focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your bar or venue name"
                      />
                    </div>

                    <div>
                      <label className="text-cream-muted text-xs uppercase tracking-wider mb-1.5 block">
                        Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-[15px] text-cream focus:outline-none focus:border-accent transition-colors"
                      >
                        <option value="general">General inquiry</option>
                        <option value="demo">Demo request</option>
                        <option value="technical">Technical support</option>
                        <option value="billing">Billing</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-cream-muted text-xs uppercase tracking-wider mb-1.5 block">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-[15px] text-cream placeholder:text-cream-dim focus:outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-3 rounded-md shadow-button transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Info panel */}
              <div className="lg:pt-20">
                <div className="bg-surface border border-border rounded-xl p-6 mb-6">
                  <h3 className="text-cream font-semibold text-base mb-4">
                    Contact Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-accent" />
                      <a
                        href="mailto:hello@barplay.app"
                        className="text-cream-muted text-sm hover:text-cream transition-colors"
                      >
                        hello@barplay.app
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-surface border border-border rounded-xl p-6 mb-6">
                  <h3 className="text-cream font-semibold text-base mb-2">
                    Response Times
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed">
                    We reply to all inquiries within 24 hours. For urgent
                    technical support on Growth and Chain plans, expect a
                    response within 2 hours during business hours (Mon–Fri,
                    9am–6pm CET).
                  </p>
                </div>

                <div className="bg-surface border border-border rounded-xl p-6">
                  <h3 className="text-cream font-semibold text-base mb-4">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-dim hover:text-accent transition-colors"
                    >
                      <TwitterIcon size={18} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-dim hover:text-accent transition-colors"
                    >
                      <InstagramIcon size={18} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cream-dim hover:text-accent transition-colors"
                    >
                      <LinkedinIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
