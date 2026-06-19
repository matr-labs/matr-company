import type { APIRoute } from "astro";
import { validateContact, sendContactEmail } from "@lib/email";

export const prerender = false;

function redirect(path: string, status = 303): Response {
  return new Response(null, { status, headers: { Location: path } });
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const contentType = request.headers.get("content-type") ?? "";
  const wantsJson = request.headers.get("accept")?.includes("application/json");

  let raw: Record<string, unknown> = {};
  if (contentType.includes("application/json")) {
    raw = await request.json().catch(() => ({}));
  } else {
    raw = Object.fromEntries((await request.formData()).entries());
  }

  const result = validateContact(raw);
  if (!result.ok || !result.data) {
    return wantsJson
      ? json({ ok: false, errors: result.errors }, 422)
      : redirect("/contact?status=error");
  }

  try {
    await sendContactEmail(result.data);
  } catch (err) {
    console.error("[contact] send failed:", err);
    return wantsJson
      ? json({ ok: false, error: "Failed to send message." }, 502)
      : redirect("/contact?status=error");
  }

  return wantsJson ? json({ ok: true }) : redirect("/contact?status=sent");
};

export const GET: APIRoute = () =>
  json({ ok: false, error: "Method not allowed. Use POST." }, 405);
