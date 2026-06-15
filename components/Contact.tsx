"use client";

import { useState } from "react";
import { cta, site } from "@/lib/content";
import { Reveal, RevealText } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend yet: compose a mailto so the form works on a static deploy.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(
      message,
    )}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      `New enquiry from ${name}`,
    )}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative px-6 py-28 lg:px-10 lg:py-40">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[50vh] w-[70vw] -translate-x-1/2 rounded-full bg-accent/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-accent">
                <span className="h-px w-10 bg-accent/60" />
                {cta.eyebrow}
              </p>
            </Reveal>
            <h2 className="display-lg text-balance text-bone">
              <RevealText text={cta.title} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-bone/60">
                {cta.body}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <dl className="mt-12 space-y-6">
                <ContactItem label="Email">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-bone transition-colors hover:text-accent"
                  >
                    {site.contact.email}
                  </a>
                </ContactItem>
                <ContactItem label="Office">
                  <a
                    href={site.contact.phoneOfficeHref}
                    className="text-bone transition-colors hover:text-accent"
                  >
                    {site.contact.phoneOffice}
                  </a>
                  <span className="ml-3 text-sm text-bone/40">
                    {site.contact.hours}
                  </span>
                </ContactItem>
                <ContactItem label="After hours">
                  <a
                    href={site.contact.phoneAfterHoursHref}
                    className="text-bone transition-colors hover:text-accent"
                  >
                    {site.contact.phoneAfterHours}
                  </a>
                </ContactItem>
                <ContactItem label="Where">
                  <span className="text-bone">{site.contact.location}</span>
                </ContactItem>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/8 bg-ink-900/60 p-7 backdrop-blur-sm md:p-10"
            >
              <div className="space-y-5">
                <Field name="name" label="Your name" type="text" required />
                <Field name="email" label="Email" type="email" required />
                <Field
                  name="company"
                  label="Company (optional)"
                  type="text"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-bone/50"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-bone outline-none transition-colors placeholder:text-bone/30 focus:border-accent/50"
                    placeholder="A launch, a conference, a brand film…"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-accent px-8 py-4 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-[1.02]"
              >
                {sent ? "Opening your email…" : cta.button}
              </button>
              <p className="mt-4 text-center text-xs text-bone/40">
                Prefer to talk? Call {site.contact.phoneOffice}.
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
    <div className="flex flex-col gap-1 border-t border-white/8 pt-4 sm:flex-row sm:items-baseline sm:gap-6">
      <dt className="w-28 shrink-0 text-xs font-medium uppercase tracking-[0.2em] text-bone/40">
        {label}
      </dt>
      <dd className="text-lg">{children}</dd>
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
        className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-bone/50"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-bone outline-none transition-colors placeholder:text-bone/30 focus:border-accent/50"
      />
    </div>
  );
}
