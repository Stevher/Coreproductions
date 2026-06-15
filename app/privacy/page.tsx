import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Core Productions collects, uses and protects your personal information in accordance with POPIA.",
};

export default function PrivacyPage() {
  return (
    <main className="relative">
      <Nav />
      <div className="mx-auto max-w-3xl px-6 py-32 lg:px-10 lg:py-44">
        <div className="mb-16 border-b border-white/[0.07] pb-10">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Legal
          </p>
          <h1 className="font-display text-5xl text-bone lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-bone/40">
            Last updated: June 2026 &nbsp;·&nbsp; Core Productions (Pty) Ltd
          </p>
        </div>

        <div className="space-y-12 text-bone/60 leading-relaxed">
          <LegalSection title="1. Introduction">
            <p>
              Core Productions (Pty) Ltd (&ldquo;Core Productions&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is
              committed to protecting the privacy and personal information of
              our clients, prospective clients and website visitors. This
              Privacy Policy explains how we collect, use, store and protect
              your personal information in accordance with the Protection of
              Personal Information Act 4 of 2013 (&ldquo;POPIA&rdquo;) and
              other applicable South African legislation.
            </p>
            <p>
              By using our website at{" "}
              <span className="text-bone/80">coreproductions.co.za</span> or
              submitting a contact form, you acknowledge that you have read
              and understood this policy.
            </p>
          </LegalSection>

          <LegalSection title="2. Responsible Party">
            <p>
              The responsible party for your personal information is Core
              Productions (Pty) Ltd, with its registered offices in Cape Town
              and Johannesburg, South Africa.
            </p>
            <p>
              Information Officer:{" "}
              <a
                href="mailto:bernard@coreproductions.co.za"
                className="text-accent transition-colors hover:text-accent-light"
              >
                bernard@coreproductions.co.za
              </a>
            </p>
          </LegalSection>

          <LegalSection title="3. Information We Collect">
            <p>We may collect the following categories of personal information:</p>
            <ul className="mt-4 space-y-2 pl-5">
              {[
                "Contact details: full name, email address, telephone number and company name, provided when you complete our contact form or communicate with us directly.",
                "Communication content: the content of emails, messages or project briefs you share with us.",
                "Website usage data: IP address, browser type, pages visited and time spent on our site, collected automatically via analytics tools.",
                "Contractual information: details necessary to enter into and perform service agreements, including billing and project documentation.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent/40" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We do not collect sensitive personal information (as defined in
              POPIA s26) unless strictly required and with your explicit
              consent.
            </p>
          </LegalSection>

          <LegalSection title="4. Purpose of Processing">
            <p>We process your personal information for the following purposes:</p>
            <ul className="mt-4 space-y-2 pl-5">
              {[
                "To respond to enquiries and provide quotations for our services.",
                "To enter into, manage and perform service contracts.",
                "To send project-related communications and updates.",
                "To comply with legal and regulatory obligations.",
                "To improve our website and services through analytics.",
                "To maintain records required for accounting and tax purposes.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent/40" />
                  {item}
                </li>
              ))}
            </ul>
          </LegalSection>

          <LegalSection title="5. Legal Basis for Processing">
            <p>
              We process your personal information on one or more of the
              following grounds as contemplated in section 11 of POPIA:
            </p>
            <ul className="mt-4 space-y-2 pl-5">
              {[
                "You have given consent to the processing for one or more specific purposes.",
                "Processing is necessary for the performance of a contract to which you are party, or to take steps at your request prior to entering into a contract.",
                "Processing is necessary for compliance with a legal obligation.",
                "Processing is necessary for our legitimate interests, provided those interests are not overridden by your rights and freedoms.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent/40" />
                  {item}
                </li>
              ))}
            </ul>
          </LegalSection>

          <LegalSection title="6. Disclosure of Personal Information">
            <p>
              We do not sell, rent or trade your personal information. We may
              share your information with:
            </p>
            <ul className="mt-4 space-y-2 pl-5">
              {[
                "Service providers and subcontractors who assist us in delivering our services (e.g. crew, venues, subcontractors), subject to appropriate confidentiality obligations.",
                "Professional advisors (accountants, lawyers) where necessary.",
                "Regulatory or law enforcement authorities where required by law.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent/40" />
                  {item}
                </li>
              ))}
            </ul>
          </LegalSection>

          <LegalSection title="7. Retention of Personal Information">
            <p>
              We retain your personal information for as long as is necessary
              to fulfil the purposes set out in this policy, or as required by
              applicable law. Contact and enquiry information is retained for a
              maximum of five years from the date of last contact. Contractual
              records are retained for seven years as required by tax and
              company law.
            </p>
          </LegalSection>

          <LegalSection title="8. Cross-Border Transfers">
            <p>
              Your personal information is processed and stored in South
              Africa. Should it become necessary to transfer personal
              information to a country outside South Africa, we will ensure
              that adequate safeguards are in place as required by section 72
              of POPIA, including recipient country adequacy, binding corporate
              rules or equivalent contractual protections.
            </p>
          </LegalSection>

          <LegalSection title="9. Your Rights as a Data Subject">
            <p>
              Under POPIA, you have the following rights in respect of your
              personal information:
            </p>
            <ul className="mt-4 space-y-2 pl-5">
              {[
                "Right of access: to request a copy of the personal information we hold about you.",
                "Right to rectification: to request correction of inaccurate or incomplete personal information.",
                "Right to erasure: to request deletion of your personal information, subject to applicable retention obligations.",
                "Right to object: to object to the processing of your personal information on grounds relating to your particular situation.",
                "Right to lodge a complaint: to lodge a complaint with the Information Regulator of South Africa if you believe your rights have been infringed.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-accent/40" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact our Information Officer
              at{" "}
              <a
                href="mailto:bernard@coreproductions.co.za"
                className="text-accent transition-colors hover:text-accent-light"
              >
                bernard@coreproductions.co.za
              </a>
              . We will respond within 30 days.
            </p>
          </LegalSection>

          <LegalSection title="10. Security Measures">
            <p>
              We implement appropriate technical and organisational security
              measures to protect your personal information against
              unauthorised access, disclosure, alteration or destruction. These
              measures include encrypted communications, access controls and
              regular security reviews. While we take all reasonable
              precautions, no method of electronic transmission or storage is
              100% secure.
            </p>
          </LegalSection>

          <LegalSection title="11. Cookies and Analytics">
            <p>
              Our website may use cookies and similar technologies to improve
              your browsing experience and collect usage analytics. You may
              control cookie settings through your browser. Disabling cookies
              may affect the functionality of certain parts of the site.
            </p>
          </LegalSection>

          <LegalSection title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Material
              changes will be notified on this page with an updated effective
              date. We encourage you to review this policy periodically.
            </p>
          </LegalSection>

          <LegalSection title="13. Contact and Complaints">
            <p>
              For any privacy-related queries, or to exercise your data subject
              rights, contact our Information Officer:
            </p>
            <p className="mt-3">
              <a
                href="mailto:bernard@coreproductions.co.za"
                className="text-accent transition-colors hover:text-accent-light"
              >
                bernard@coreproductions.co.za
              </a>
            </p>
            <p className="mt-6">
              If you are not satisfied with our response, you may contact the
              Information Regulator of South Africa:
            </p>
            <p className="mt-2 text-bone/50 text-sm">
              The Information Regulator (South Africa)
              <br />
              SALU Building, 316 Thabo Sehume Street
              <br />
              Pretoria, 0001
              <br />
              complaints.IR@justice.gov.za
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
