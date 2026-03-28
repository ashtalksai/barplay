import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-20 md:py-28">
          <div className="max-w-[720px] mx-auto px-6">
            <h1 className="font-display font-bold text-cream text-[32px] md:text-[40px] mb-8">
              Terms of Service
            </h1>
            <p className="text-cream-muted text-sm mb-8">
              Last updated: March 2026
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  1. Service Description
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  Barplay is a bar entertainment platform that provides QR code-based interactive games for hospitality venues. The service includes game content, cross-table connection mechanics, real-time analytics dashboards, and QR code management tools. The service is provided for bar and hospitality venue use only. Use for events, retail, or private parties requires prior written agreement.
                </p>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  2. Account Registration
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  To use Barplay&apos;s bar owner features, you must register for an account and provide accurate, complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 18 years of age to create an account.
                </p>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  3. Venue Responsibilities
                </h2>
                <div className="text-cream-muted text-[15px] leading-relaxed space-y-3">
                  <p>As a venue operator using Barplay, you are responsible for:</p>
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    <li>Ensuring guests are of legal drinking age in your jurisdiction</li>
                    <li>Maintaining appropriate internet connectivity for the service</li>
                    <li>Using the platform in compliance with local laws and regulations</li>
                    <li>Not using the platform to collect personal information from guests beyond what the system anonymously provides</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  4. Guest Content
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  Chat messages between connected tables are ephemeral and are not stored beyond the active session. Barplay does not monitor or moderate guest-to-guest communications in real-time. Guests interact anonymously using table identifiers only.
                </p>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  5. Subscription and Billing
                </h2>
                <div className="text-cream-muted text-[15px] leading-relaxed space-y-3">
                  <p>
                    Subscription fees are billed monthly or annually based on your selected plan. All plans include a 14-day free trial period. No credit card is required during the trial period.
                  </p>
                  <p>
                    Subscriptions automatically renew at the end of each billing period unless cancelled. No refunds are issued for partial billing periods. You may cancel your subscription at any time from your account settings.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  6. Analytics Disclaimer
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  Barplay&apos;s dwell-time analytics and engagement metrics are directional benchmarks intended to help venue operators make informed business decisions. They are not guarantees of specific business outcomes, revenue increases, or return on investment.
                </p>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  7. Intellectual Property
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  All game content, question databases, matching algorithms, analytics tools, and design elements are the intellectual property of Barplay (operated by ChimeStream). You may not reproduce, distribute, or create derivative works from Barplay&apos;s content without explicit written permission.
                </p>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  8. Account Suspension
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  Barplay reserves the right to suspend or terminate accounts that violate these terms, use the platform to collect guest personal information, engage in fraudulent activity, or otherwise misuse the service.
                </p>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  9. Limitation of Liability
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  Barplay is provided &quot;as is&quot; without warranties of any kind. To the maximum extent permitted by law, Barplay shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-cream font-semibold text-lg mb-3">
                  10. Contact
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed">
                  For questions about these terms, contact us at{" "}
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
