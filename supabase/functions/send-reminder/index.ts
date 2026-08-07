// Sends a payment-reminder email for one overdue invoice, on explicit user action.
// Deploy: supabase functions deploy send-reminder
// Secret required: supabase secrets set RESEND_API_KEY=...
// Optional secret: REMINDER_FROM_EMAIL (defaults to Resend's sandbox sender)
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

const COPY = {
  SK: {
    subject: (number: string) => `Pripomienka: faktúra ${number} po splatnosti`,
    noEmail: "Klient nemá zadaný e-mail.",
    alreadyPaid: "Faktúra je už označená ako uhradená.",
    notFound: "Faktúra sa nenašla.",
    body: (name: string, number: string, amount: string, dueOn: string, variableSymbol: string) =>
      `Dobrý deň,\n\npripomínam faktúru ${number} na sumu ${amount}, splatnú ${dueOn}` +
      `${variableSymbol ? ` (variabilný symbol ${variableSymbol})` : ""}.\n\n` +
      `Ak je už uhradená, tento e-mail prosím ignorujte.\n\nĎakujem,\n${name}`,
  },
  CZ: {
    subject: (number: string) => `Připomínka: faktura ${number} po splatnosti`,
    noEmail: "Klient nemá zadaný e-mail.",
    alreadyPaid: "Faktura je už označená jako uhrazená.",
    notFound: "Faktura se nenašla.",
    body: (name: string, number: string, amount: string, dueOn: string, variableSymbol: string) =>
      `Dobrý den,\n\npřipomínám fakturu ${number} na částku ${amount}, splatnou ${dueOn}` +
      `${variableSymbol ? ` (variabilní symbol ${variableSymbol})` : ""}.\n\n` +
      `Pokud je již uhrazená, tento e-mail prosím ignorujte.\n\nDěkuji,\n${name}`,
  },
};

function formatAmount(amount: number, currency: string, locale: string) {
  return new Intl.NumberFormat(locale === "CZ" ? "cs-CZ" : "sk-SK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(amount) || 0) + " " + (currency === "CZK" ? "Kč" : "€");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS_HEADERS });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "Missing Authorization header" }, 401);

  const resendKey = Deno.env.get("RESEND_API_KEY");
  if (!resendKey) return json({ error: "RESEND_API_KEY is not configured" }, 500);
  const fromEmail = Deno.env.get("REMINDER_FROM_EMAIL") ?? "onboarding@resend.dev";

  let payload: { invoiceId?: string; locale?: string; pdfBase64?: string; pdfFilename?: string; subject?: string; body?: string };
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }
  const invoiceId = payload.invoiceId;
  if (!invoiceId) return json({ error: "invoiceId is required" }, 400);
  const locale = payload.locale === "CZ" ? "CZ" : "SK";
  const copy = COPY[locale];

  // Scoped with the caller's own JWT (not the service-role key) so the existing
  // "invoices own rows" / "profiles own row" RLS policies enforce ownership.
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );

  const { data: invoice, error: invoiceError } = await supabase
    .from("invoices")
    .select("id, user_id, number, customer_email, amount, currency, due_on, variable_symbol, status")
    .eq("id", invoiceId)
    .maybeSingle();

  if (invoiceError) return json({ error: invoiceError.message }, 500);
  if (!invoice) return json({ error: copy.notFound }, 404);
  if (!invoice.customer_email) return json({ error: copy.noEmail }, 400);
  if (invoice.status === "paid") return json({ error: copy.alreadyPaid }, 400);

  const { data: profile } = await supabase
    .from("profiles")
    .select("company_name, full_name")
    .eq("id", invoice.user_id)
    .maybeSingle();
  const senderName = profile?.company_name || profile?.full_name || "VYSTAV";

  const amountText = formatAmount(invoice.amount, invoice.currency, locale);
  const dueOnText = new Intl.DateTimeFormat(locale === "CZ" ? "cs-CZ" : "sk-SK").format(
    new Date(`${invoice.due_on}T12:00:00`),
  );

  const attachments = payload.pdfBase64
    ? [{ filename: payload.pdfFilename || `faktura-${invoice.number}.pdf`, content: payload.pdfBase64 }]
    : undefined;

  // The frontend lets the sender review/edit the subject and body before
  // sending (an editable popup, not a fire-and-forget template) - honor that
  // if provided, otherwise fall back to the default template.
  const subject = (payload.subject && payload.subject.trim()) || copy.subject(invoice.number);
  const bodyText = (payload.body && payload.body.trim())
    || copy.body(senderName, invoice.number, amountText, dueOnText, invoice.variable_symbol ?? "");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${senderName} <${fromEmail}>`,
      to: [invoice.customer_email],
      subject,
      text: bodyText,
      ...(attachments ? { attachments } : {}),
    }),
  });

  if (!resendResponse.ok) {
    const detail = await resendResponse.text().catch(() => "");
    return json({ error: "Email sa nepodarilo odoslať.", detail }, 502);
  }

  const sentAt = new Date().toISOString();
  const { error: updateError } = await supabase
    .from("invoices")
    .update({ reminder_sent_at: sentAt })
    .eq("id", invoiceId);
  if (updateError) return json({ error: updateError.message }, 500);

  return json({ ok: true, sentAt });
});
