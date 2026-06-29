"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    await resend.emails.send({
      from: "Core Productions Website <enquiries@coreproductions.co.za>",
      to: "bernard@coreproductions.co.za",
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` — ${company}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : "",
        ``,
        `Project Brief:`,
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return { success: true };
  } catch {
    return { success: false, error: "Failed to send. Please try again or email us directly." };
  }
}
