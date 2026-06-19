export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  company?: string;
}

export interface ValidationResult {
  ok: boolean;
  errors: Partial<Record<keyof ContactPayload, string>>;
  data?: ContactPayload;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(raw: Record<string, unknown>): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  const name = String(raw.name ?? "").trim();
  const email = String(raw.email ?? "").trim();
  const message = String(raw.message ?? "").trim();
  const company = String(raw.company ?? "").trim();

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please enter a longer message.";

  if (company.length > 0) errors.company = "Spam detected.";

  const ok = Object.keys(errors).length === 0;
  return ok ? { ok, errors, data: { name, email, message } } : { ok, errors };
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const apiKey = import.meta.env.EMAIL_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL ?? "hello@example.com";
  const from = import.meta.env.CONTACT_FROM_EMAIL ?? "no-reply@example.com";

  if (!apiKey) {
    console.info("[email] EMAIL_API_KEY not set; would have sent:", { to, from, payload });
    return;
  }

  throw new Error("sendContactEmail: provider not implemented. Wire it up in src/lib/email.ts.");
}
