import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 md:py-28">
          <div className="max-w-[720px] mx-auto px-6">
            <h1 className="font-display font-bold text-cream text-[32px] md:text-[40px] mb-8">
              Privacy Policy
            </h1>
            <p className="text-cream-muted text-sm mb-8">
              Last updated: March 2026
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  1. Information We Collect
                </h2>
                <div className="text-cream-muted text-[15px] leading-relaxed space-y-3">
                  <p>
                    <strong className="text-cream">Bar owner accounts:</strong> Name, email address, venue name and address, billing information. Payment details are processed securely by Stripe — Barplay does not store credit card numbers.
                  </p>
                  <p>
                    <strong className="text-cream">Guest sessions:</strong> Anonymous session tokens only. We do not collect names, email addresses, or any personally identifiable information from guests. Session tokens expire after 24 hours. Cross-table connections are matched by anonymous table tokens, not personal identity.
                  </p>
                  <p>
                    <strong className="text-cream">Usage analytics:</strong> Table engagement data, session duration, and question response rates. This data is aggregated at the venue level and never linked to individual guest profiles.
                  </p>
                  <p>
                    <strong className="text-cream">Cookies:</strong> Authentication cookies for the bar owner portal. We do not use third-party tracking cookies on guest-facing pages.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  2. How We Use Your Information
                </h2>
                <div className="text-cream-muted text-[15px] leading-relaxed space-y-3">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Provide and maintain the Barplay service</li>
                    <li>Process subscriptions and payments via Stripe</li>
                    <li>Generate venue-level analytics and dwell-time reports</li>
                    <li>Send product updates and support communications</li>
                    <li>Improve our game content and matching algorithms</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  3. Data Retention
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  Guest session data is retained for 90 days for analytics purposes, then permanently deleted. Bar owner account data is retained for the duration of the subscription plus 90 days after cancellation. Chat messages between connected tables are ephemeral and are not stored beyond the active session.
                </p>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  4. Data Sharing
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  Barplay does not sell or share personal data with third parties. Aggregated, anonymized analytics may be used for product improvement and industry benchmarking reports. No venue names are included in benchmarking without explicit consent.
                </p>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  5. Data Security
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  We implement industry-standard security measures to protect your data. All data is encrypted in transit using TLS. Bar owner account passwords are hashed and salted. We regularly review our security practices and infrastructure.
                </p>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  6. Your Rights
                </h2>
                <div className="text-cream-muted text-[15px] leading-relaxed space-y-3">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Access and export your venue data</li>
                    <li>Request deletion of your account and associated data</li>
                    <li>Withdraw consent for data processing</li>
                    <li>Object to data processing for marketing purposes</li>
                    <li>Lodge a complaint with a supervisory authority</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  7. Contact
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  For any privacy-related questions or requests, contact us at{" "}
                  <a href="mailto:hello@barplay.app" className="text-accent hover:underline">
                    hello@barplay.app
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
