const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const schema = fs.readFileSync("supabase/schema.sql", "utf8");
const migrations = fs.readdirSync("supabase/migrations").sort().map((name) => fs.readFileSync(`supabase/migrations/${name}`, "utf8")).join("\n");
const sql = `${schema}\n${migrations}`;
const core = fs.readFileSync("work/cifra-core.js", "utf8");
const tables = ["profiles", "clients", "items", "invoices", "invoice_items"];

test("backend schema exposes the complete invoicing model", () => {
  for (const table of tables) {
    assert.match(sql, new RegExp(`create table(?: if not exists)? public\\.${table}\\b`, "i"));
    assert.match(sql, new RegExp(`alter table public\\.${table} enable row level security`, "i"));
  }
  assert.match(sql, /invoice_items[\s\S]*invoice_id[\s\S]*references public\.invoices\s*\(id\)[\s\S]*on delete cascade/i);
});

test("every user-owned table has complete CRUD ownership policies", () => {
  for (const table of tables) {
    const tableSql = sql.match(new RegExp(`(?:create policy[\\s\\S]{0,600}on public\\.${table}[\\s\\S]{0,600})`, "ig"))?.join("\n") || "";
    const hasAll = /for all/i.test(tableSql);
    if (!hasAll) {
      assert.match(tableSql, /for select/i, `${table}: missing select policy`);
      assert.match(tableSql, /for insert/i, `${table}: missing insert policy`);
      assert.match(tableSql, /for update/i, `${table}: missing update policy`);
      assert.match(tableSql, /for delete/i, `${table}: missing delete policy`);
    }
    assert.match(tableSql, /auth\.uid\s*\(\s*\)/i, `${table}: policies are not scoped to auth.uid()`);
  }
});

test("invoice and its items are persisted atomically by an authenticated RPC", () => {
  assert.match(sql, /create or replace function public\.save_invoice_with_items\b/i);
  assert.match(sql, /auth\.uid\s*\(\s*\)/i);
  assert.match(sql, /insert into public\.invoices/i);
  assert.match(sql, /insert into public\.invoice_items/i);
  assert.match(sql, /revoke all on function public\.save_invoice_with_items[\s\S]* from public/i);
  assert.match(sql, /grant execute on function public\.save_invoice_with_items[\s\S]* to authenticated/i);
  assert.match(core, /\.rpc\("save_invoice_with_items"/);
});

test("frontend does not mask permanent backend failures or split invoice writes", () => {
  assert.match(core, /if\s*\(!isRetryableSyncError\(error\)\)throw error/);
  assert.doesNotMatch(core, /save_invoice_with_items[\s\S]{0,500}const missing=/);
  assert.match(core, /op\.table==="invoices"&&Array\.isArray\(op\.items\)[\s\S]{0,300}saveInvoiceRemoteAtomic/);
});
