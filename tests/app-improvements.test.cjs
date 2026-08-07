const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const schema = fs.readFileSync("supabase/schema.sql", "utf8");
const migrations = fs.readdirSync("supabase/migrations").sort().map((name) => fs.readFileSync(`supabase/migrations/${name}`, "utf8")).join("\n");
const sql = `${schema}\n${migrations}`;
const core = fs.readFileSync("work/cifra-core.js", "utf8");
const rebuildHtml = fs.readFileSync("work/cifra-premium-rebuild.html", "utf8");

test("recurring flag and public token columns are migrated", () => {
  assert.match(sql, /alter table public\.invoices add column if not exists is_recurring boolean not null default false/i);
  assert.match(sql, /alter table public\.invoices add column if not exists public_token uuid not null default gen_random_uuid\(\)/i);
});

test("save_invoice_with_items persists is_recurring", () => {
  const fn = sql.match(/create or replace function public\.save_invoice_with_items[\s\S]*?\$\$;/g)?.pop() || "";
  assert.match(fn, /is_recurring/);
});

test("public invoice lookup is a single security-definer function, not a table-level anon policy", () => {
  assert.match(sql, /create or replace function public\.get_public_invoice\(p_token uuid\)/i);
  assert.match(sql, /security definer/i);
  assert.match(sql, /grant execute on function public\.get_public_invoice\(uuid\) to anon/i);
  assert.doesNotMatch(sql, /create policy[\s\S]{0,200}on public\.invoices[\s\S]{0,200}to anon/i);
});

test("invoiceDocument accepts an optional profile so it can render without a session", () => {
  assert.match(core, /function invoiceDocument\(inv,items,profile=null\)/);
});

test("dashboard renders an aging report and a recurring-invoice nudge", () => {
  assert.match(core, /function agingBuckets\(/);
  assert.match(core, /function renderAgingPanel\(/);
  assert.match(core, /function recurringDueList\(/);
  assert.match(core, /function renderRecurringNudge\(/);
  assert.match(core, /renderDashboard=function\(\)\{baseRenderDashboardV7\(\);renderAgingPanel\(\);renderRecurringNudge\(\)\}/);
  assert.match(core, /duplicateInvoiceV3/);
});

test("public invoice route mirrors the existing /kontakt pattern and calls the RPC", () => {
  assert.match(core, /const isInvoiceRoute=/);
  assert.match(core, /async function showPublicInvoice\(/);
  assert.match(core, /async function renderPublicInvoice\(/);
  assert.match(core, /rpc\("get_public_invoice"/);
  assert.match(core, /publicInvoice=\$\("#publicInvoice"\)/);
});

test("invoice detail can copy a public link", () => {
  assert.match(core, /async function copyPublicInvoiceLink\(/);
  assert.match(core, /data-copy-link-detail/);
  assert.match(core, /inv\.public_token/);
});

test("the public invoice screen shell exists in the source template", () => {
  assert.match(rebuildHtml, /id="publicInvoice"/);
  assert.match(rebuildHtml, /id="publicInvoiceBody"/);
});
