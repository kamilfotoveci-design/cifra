const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const schema = fs.readFileSync("supabase/schema.sql", "utf8");
const migrations = fs.readdirSync("supabase/migrations").sort().map((name) => fs.readFileSync(`supabase/migrations/${name}`, "utf8")).join("\n");
const sql = `${schema}\n${migrations}`;
const core = fs.readFileSync("work/cifra-core.js", "utf8");
const edgeFunction = fs.readFileSync("supabase/functions/send-reminder/index.ts", "utf8");

// work/cifra-core.js has a known "layered override" pattern: several
// functions (including openInvoiceDetail) get a base `function foo(){}`
// declaration and a LATER `foo=async function(){}` reassignment that wins at
// runtime and shadows the first. Regexing the whole file for a wiring string
// can pass even when the edit only landed in the dead first copy - that
// exact mistake happened once already. These tests specifically slice out
// the region starting at the LAST (active) reassignment to catch it again.
function activeOpenInvoiceDetailBody() {
  const marker = "openInvoiceDetail=async function(id)";
  const idx = core.lastIndexOf(marker);
  assert.notStrictEqual(idx, -1, "openInvoiceDetail=async function(id){...} reassignment not found");
  return core.slice(idx, idx + 4000);
}

test("payment reminder tracking column is migrated", () => {
  assert.match(sql, /alter table public\.invoices add column if not exists reminder_sent_at timestamptz/i);
});

test("reminder edge function reads its secret from the environment, never hardcodes it", () => {
  assert.match(edgeFunction, /Deno\.env\.get\("RESEND_API_KEY"\)/);
  assert.doesNotMatch(edgeFunction, /RESEND_API_KEY\s*[:=]\s*"[^"]+"/);
  assert.doesNotMatch(edgeFunction, /re_[A-Za-z0-9]{10,}/, "no literal Resend key should ever be committed");
});

test("reminder edge function is scoped to the caller's own JWT, not the service-role key", () => {
  assert.match(edgeFunction, /Authorization["']?\s*[,:]\s*authHeader/);
  assert.doesNotMatch(edgeFunction, /SERVICE_ROLE/i);
});

test("reminder attaches the invoice PDF instead of duplicating the PDF renderer", () => {
  assert.match(core, /async function downloadInvoicePdf\(id,download=true\)/);
  assert.match(core, /downloadInvoicePdf\(inv,false\)/);
  assert.match(core, /return pdf\.output\("datauristring"\)/);
  assert.match(core, /pdfBase64/);
  assert.match(edgeFunction, /pdfBase64/);
  assert.match(edgeFunction, /attachments/);
});

test("reminder and invoice-send both open an editable subject/body popup, instead of sending immediately", () => {
  assert.match(core, /function reminderTemplateDefaults\(/);
  assert.match(core, /function invoiceEmailTemplateDefaults\(/);
  assert.match(core, /function emailDialogMarkup\(inv,kind\)/);
  assert.match(core, /function openInvoiceEmailDialog\(inv,kind="reminder"\)/);
  assert.match(core, /async function sendInvoiceEmail\(inv,overrides=\{\}\)/);
  // the old direct-send names must be fully retired, not left as a second path
  assert.doesNotMatch(core, /openReminderDialog|sendPaymentReminder/);
});

test("the ACTIVE openInvoiceDetail (not a shadowed dead copy) wires both email buttons to the popup", () => {
  const body = activeOpenInvoiceDetailBody();
  assert.match(body, /data-copy-link-detail/, "copy-link button missing from the active function");
  assert.match(body, /data-remind-detail/, "reminder button missing from the active function");
  assert.match(body, /\$\("\[data-email-detail\]",page\)\.onclick=\(\)=>openInvoiceEmailDialog\(inv,"invoice"\)/);
  assert.match(body, /\$\("\[data-remind-detail\]",page\)\?\.addEventListener\("click",\(\)=>openInvoiceEmailDialog\(inv,"reminder"\)\)/);
  assert.match(body, /\$\("\[data-copy-link-detail\]",page\)\?\.addEventListener\("click",\(\)=>copyPublicInvoiceLink\(inv\)\)/);
  assert.match(body, /reminder_sent_at/);
});

test("edge function honors an owner-edited subject/body, falling back to a kind-specific default template", () => {
  assert.match(edgeFunction, /payload\.subject/);
  assert.match(edgeFunction, /payload\.body/);
  assert.match(edgeFunction, /payload\.kind/);
  assert.match(edgeFunction, /invoiceSubject/);
  assert.match(edgeFunction, /invoiceBody/);
  // sending/resending the invoice itself must be allowed even if already paid;
  // only the overdue "reminder" kind should ever refuse a paid invoice.
  assert.match(edgeFunction, /kind === "reminder" && invoice\.status === "paid"/);
});
