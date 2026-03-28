import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Check, Sparkles, TrendingUp, QrCode } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero strip */}
        <section className="bg-surface py-20 md:py-28">
          <div className="max-w-[900px] mx-auto px-6 text-center">
            <h1 className="font-display font-black italic text-cream text-[36px] md:text-[52px] leading-tight">
              We Made Barplay Because We Were Tired of the Silence.
            </h1>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 md:py-28">
          <div className="max-w-[720px] mx-auto px-6 text-center">
            <p className="font-display text-accent italic text-[24px] md:text-[32px] leading-relaxed mb-8">
              &ldquo;Barplay exists to make bars what they were supposed to be —
              places where strangers become friends. We just give the table a
              reason to start.&rdquo;
            </p>
            <div className="text-cream-muted text-lg leading-relaxed space-y-4">
              <p>
                Two friends who spent years in hospitality — one a bar manager,
                the other a SaaS product builder — watched bar owners spending
                thousands on atmosphere while nobody talked to anyone. The music
                was perfect, the lighting was warm, and every solo visitor was
                scrolling their phone.
              </p>
              <p>
                We built Barplay because we wished it existed. A simple QR code
                that turns an empty table into a conversation starter. No app
                downloads. No hardware contracts. Just a trivia question and the
                chance to meet the person two tables over who got it wrong too.
              </p>
              <p>
                We believe bars are the last democratic social spaces. Barplay
                doesn&apos;t replace the bartender — it gives every table the
                same social energy the bar stool has always had.
              </p>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 md:py-28 bg-surface/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 className="font-display font-bold text-cream text-[32px] md:text-[40px] text-center mb-12">
              What Makes Barplay Different
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Built for Stranger-Connection Mechanics",
                  description:
                    "The only bar entertainment platform where the game is a matchmaking algorithm. Every question is designed to connect people at different tables — not just entertain individuals.",
                },
                {
                  icon: TrendingUp,
                  title: "Analytics in Bar Owner Language",
                  description:
                    "We don't show you game scores. We show you dwell time, cross-table connection rates, and per-table engagement — the data that gets drinks brand sponsorships and proves ROI.",
                },
                {
                  icon: QrCode,
                  title: "Browser-Native, Zero Hardware",
                  description:
                    "Works on every phone in the room from day one. No tablets to buy, maintain, replace, or insure. Print QR codes, put them on tables, go live in 10 minutes.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface border border-border rounded-xl p-8"
                >
                  <item.icon size={32} className="text-accent mb-4" />
                  <h3 className="text-cream font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream-muted text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-28">
          <div className="max-w-[720px] mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-cream text-[32px] md:text-[36px] mb-4">
              Built by ChimeStream
            </h2>
            <p className="text-cream-muted text-lg leading-relaxed mb-8">
              A team obsessed with hospitality technology and human connection.
              We&apos;ve worked with bar owners across Europe to understand what
              actually moves the needle on a night out. We build products that
              make physical spaces more social — starting with the bar table.
            </p>
            <div className="inline-flex items-center gap-4 bg-surface border border-border rounded-xl px-6 py-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="font-mono text-sm text-accent font-medium">CS</span>
              </div>
              <div className="text-left">
                <p className="text-cream font-semibold">ChimeStream</p>
                <p className="text-cream-muted text-sm">Hospitality Tech · Amsterdam</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 md:py-28 grain-overlay relative"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(232,135,42,0.12) 0%, transparent 60%), #0F0D0A",
          }}
        >
          <div className="relative z-10 max-w-[600px] mx-auto px-6 text-center">
            <h2 className="font-display italic text-cream text-[28px] md:text-[32px] mb-6">
              Ready to see what Barplay does to a Tuesday?
            </h2>
            <Link
              href="/signup"
              className="inline-block bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-3.5 rounded-md shadow-button transition-all"
            >
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
