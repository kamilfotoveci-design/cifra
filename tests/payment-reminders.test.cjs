const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const schema = fs.readFileSync("supabase/schema.sql", "utf8");
const migrations = fs.readdirSync("supabase/migrations").sort().map((name) => fs.readFileSync(`supabase/migrations/${name}`, "utf8")).join("\n");
const sql = `${schema}\n${migrations}`;
const core = fs.readFileSync("work/cifra-core.js", "utf8");
const edgeFunction = fs.readFileSync("supabase/functions/send-reminder/index.ts", "utf8");

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

test("frontend wires the reminder button to a real send function", () => {
  assert.match(core, /async function sendPaymentReminder\(/);
  assert.match(core, /data-remind-detail/);
  assert.match(core, /functions\/v1\/send-reminder/);
  assert.match(core, /inv\.customer_email/);
});
