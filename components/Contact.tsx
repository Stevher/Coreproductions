"use client";

import { useState } from "react";
import { cta, site } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `New enquiry from ${name}`,
    )}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative px-6 py-20 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[40vh] w-[60vw] -translate-x-1/2 rounded-full bg-accent/6 blur-[200px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — copy + contact details */}
          <div>
            <Reveal>
              <p className="mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.38em] text-accent">
                <span className="h-px w-10 bg-accent/30" />
                {cta.eyebrow}
              </p>
              <h2 className="display-lg text-balance text-bone">
                <RevealText text={cta.title} />
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-bone/50">
                {cta.body}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <dl className="mt-10 space-y-0 divide-y divide-white/[0.06] border-t border-white/[0.06]">
                <ContactItem label="Email">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-bone transition-colors hover:text-accent"
                  >
                    {site.contact.email}
                  </a>
                </ContactItem>
                {site.contact.offices.map((office) => (
                  <ContactItem key={office.city} label={office.city}>
                    {office.phone ? (
                      <>
                        <a
                          href={office.phoneHref}
                          className="text-bone transition-colors hover:text-accent"
                        >
                          {office.phone}
                        </a>
                        <span className="ml-3 text-sm text-bone/35">
                          {site.contact.hours}
                        </span>
                      </>
                    ) : (
                      <span className="text-bone/45 text-sm">{office.type}</span>
                    )}
                  </ContactItem>
                ))}
                <ContactItem label="After hours">
                  <a
                    href={site.contact.phoneAfterHoursHref}
                    className="text-bone transition-colors hover:text-accent"
                  >
                    {site.contact.phoneAfterHours}
                  </a>
                </ContactItem>
                <ContactItem label="Coverage">
                  <span className="text-bone">{site.contact.coverage}</span>
                </ContactItem>
              </dl>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.08] bg-ink-900/40 p-6 md:p-8"
            >
              <div className="space-y-6">
                <Field name="name" label="Full name" type="text" required />
                <Field name="email" label="Email address" type="email" required />
                <Field name="company" label="Company" type="text" />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2.5 block text-[10px] font-medium uppercase tracking-[0.28em] text-bone/40"
                  >
                    Project brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-ink-950/70 px-4 py-3.5 text-sm text-bone outline-none transition-colors placeholder:text-bone/25 focus:border-accent/40"
                    placeholder="A conference, a product launch, a brand film, or all three…"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-950 transition-all duration-300 hover:bg-accent-light"
              >
                {sent ? "Opening your email client…" : cta.button}
              </button>
              <p className="mt-4 text-center text-xs text-bone/30">
                Or call our Cape Town office on {site.contact.offices[0].phone} · {site.contact.hours}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
      <dt className="w-28 shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-bone/35">
        {label}
      </dt>
      <dd className="text-base">{children}</dd>
    </div>
  );
}

function Field({
  name,
  label,
  type,
  required,
}: {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2.5 block text-[10px] font-medium uppercase tracking-[0.28em] text-bone/40"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/[0.08] bg-ink-950/70 px-4 py-3.5 text-sm text-bone outline-none transition-colors placeholder:text-bone/25 focus:border-accent/40"
      />
    </div>
  );
}
