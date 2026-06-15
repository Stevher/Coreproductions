import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions governing the provision of production services by Core Productions.",
};

export default function TermsPage() {
  return (
    <main className="relative">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 py-32 lg:px-10 lg:py-44">
        <div className="mb-16 border-b border-white/[0.07] pb-10">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Legal
          </p>
          <h1 className="font-display text-5xl text-bone lg:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-bone/40">
            Last updated: June 2026 &nbsp;·&nbsp; Core Productions (Pty) Ltd
          </p>
        </div>

        <div className="space-y-12 text-bone/60 leading-relaxed">
          <LegalSection title="1. About These Terms">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern the
              provision of services by Core Productions (Pty) Ltd
              (&ldquo;Core Productions&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo; or &ldquo;our&rdquo;) to clients
              (&ldquo;Client&rdquo;, &ldquo;you&rdquo; or
              &ldquo;your&rdquo;). By engaging our services, you agree to be
              bound by these Terms. A written quotation accepted by the Client
              constitutes a binding agreement subject to these Terms.
            </p>
          </LegalSection>

          <LegalSection title="2. Services">
            <p>
              Core Productions provides live event production, audio visual
              services, lighting design, sound engineering, set and stage
              design, videography, video production, storyboarding and
              post-production services as described in each accepted
              quotation. The scope of services is defined in the relevant
              quotation and, where applicable, a written service agreement.
            </p>
            <p>
              We reserve the right to engage qualified subcontractors in the
              delivery of our services, subject to the same standards of
              quality and confidentiality required of our own personnel.
            </p>
          </LegalSection>

          <LegalSection title="3. Quotations and Booking">
            <p>
              Quotations are valid for 30 days from the date of issue unless
              otherwise stated. Acceptance of a quotation in writing (including
              by email) constitutes a binding agreement. A confirmed booking
              secures the relevant dates and resources; provisional holds may
              be placed at our discretion and will be released if a confirmed
              booking is received from another party without prior agreement.
            </p>
          </LegalSection>

          <LegalSection title="4. Fees and Payment">
            <p>
              Fees are as set out in the accepted quotation. Unless otherwise
              agreed in writing:
            </p>
            <ul className="mt-4 space-y-2 pl-5">
              {[
                "A deposit of 50% of the total quoted fee is required upon booking confirmation.",
                "The balance is due seven (7) days prior to the event date or project commencement.",
                "Video productions are invoiced 50% on booking, 25% on first shoot day and 25% on delivery of final files.",
                "Invoices not paid by the due date attract interest at 2% per month on the outstanding balance.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent/40" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              All fees are quoted exclusive of VAT unless stated otherwise.
              VAT will be charged at the applicable rate.
            </p>
          </LegalSection>

          <LegalSection title="5. Cancellation and Postponement">
            <p>
              Cancellations must be notified in writing. The following
              cancellation fees apply:
            </p>
            <ul className="mt-4 space-y-3 pl-5">
              {[
                "Cancellation more than 60 days before the event date: 25% of the total quoted fee.",
                "Cancellation 30–60 days before the event date: 50% of the total quoted fee.",
                "Cancellation 14–30 days before the event date: 75% of the total quoted fee.",
                "Cancellation fewer than 14 days before the event date: 100% of the total quoted fee.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent/40" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Postponements will be accommodated subject to availability and
              may incur an administration fee. Where a suitable alternative
              date cannot be found, the cancellation policy above applies.
            </p>
          </LegalSection>

          <LegalSection title="6. Client Obligations">
            <p>
              The Client agrees to provide timely access to venues, accurate
              event briefs, and all creative materials required for the
              production. Delays caused by the Client that require additional
              crew time or equipment will be charged at prevailing rates. The
              Client warrants that it has all necessary permissions for the
              use of venues, music, logos and any third-party intellectual
              property included in the production brief.
            </p>
          </LegalSection>

          <LegalSection title="7. Intellectual Property">
            <p>
              All raw footage, recordings, design files and intermediate
              production materials remain the property of Core Productions
              until full payment has been received. Upon receipt of full
              payment, the Client receives a licence to use the final
              delivered content for the purposes agreed in the brief.
            </p>
            <p>
              Core Productions retains the right to use anonymised or
              de-branded production photographs and technical specifications
              for internal training and portfolio purposes, subject to any
              written confidentiality agreement. We will not publish
              client-identifiable content without explicit written consent.
            </p>
          </LegalSection>

          <LegalSection title="8. Confidentiality">
            <p>
              Core Productions treats all client briefs, event details,
              business information and production content as strictly
              confidential. We will not disclose confidential information to
              third parties without the Client&apos;s prior written consent,
              except as required by law. Clients may request a formal
              Non-Disclosure Agreement prior to briefing.
            </p>
          </LegalSection>

          <LegalSection title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Core Productions&apos;
              total liability to the Client for any claim arising from or in
              connection with the provision of services shall not exceed the
              total fees paid by the Client for the specific project giving
              rise to the claim. We shall not be liable for any indirect,
              consequential, special or punitive loss or damage, including
              loss of profit, loss of business or reputational damage.
            </p>
          </LegalSection>

          <LegalSection title="10. Force Majeure">
            <p>
              Core Productions shall not be liable for any failure or delay in
              the performance of its obligations caused by circumstances
              beyond its reasonable control, including but not limited to acts
              of God, natural disasters, strikes, civil unrest, government
              actions, power failures or failures of third-party
              infrastructure. In such events, we will notify the Client as
              soon as reasonably practicable and will use all reasonable
              endeavours to resume performance.
            </p>
          </LegalSection>

          <LegalSection title="11. Governing Law and Dispute Resolution">
            <p>
              These Terms are governed by the laws of the Republic of South
              Africa. Any dispute arising from or in connection with these
              Terms shall first be referred to good-faith negotiation between
              the parties. If unresolved after 30 days, the dispute shall be
              submitted to mediation in Cape Town. If mediation fails, the
              parties submit to the jurisdiction of the Western Cape Division
              of the High Court of South Africa.
            </p>
          </LegalSection>

          <LegalSection title="12. Changes to These Terms">
            <p>
              Core Productions reserves the right to update these Terms at any
              time. Material changes will be communicated to active clients by
              email. Continued engagement with our services following
              notification constitutes acceptance of the updated Terms.
            </p>
          </LegalSection>

          <LegalSection title="13. Contact">
            <p>
              For any queries regarding these Terms, please contact:
            </p>
            <p className="mt-3">
              <a
                href="mailto:bernard@coreproductions.co.za"
                className="text-accent transition-colors hover:text-accent-light"
              >
                bernard@coreproductions.co.za
              </a>
            </p>
          </LegalSection>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-bone">{title}</h2>
      {children}
    </section>
  );
}
