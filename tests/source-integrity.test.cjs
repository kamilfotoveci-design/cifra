const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const core = fs.readFileSync("work/cifra-core.js", "utf8");
const build = fs.readFileSync("work/build.js", "utf8");
const migration = fs.readFileSync("supabase/migrations/20260731_security_and_atomic_invoices.sql", "utf8");

test("browser cache is scoped to the authenticated user", () => {
  assert.match(core, /vystav-\$\{state\.session\?\.user\?\.id\|\|"anonymous"\}-\$\{k\}/);
  assert.doesNotMatch(core, /const localKey=k=>`cifra-\$\{k\}`/);
});

test("financial calculations use the dedicated minor-unit module", () => {
  assert.match(core, /VystavFinance\.calculateInvoice/);
  assert.match(build, /vystav-finance\.js/);
  assert.match(build, /<script>'\+finance\+'<\/script>/);
});

test("invoice item ownership and atomic persistence are migrated", () => {
  assert.match(migration, /invoice_item_belongs_to_user/);
  assert.match(migration, /save_invoice_with_items/);
  assert.match(core, /saveInvoiceRemoteAtomic/);
});

test("Czech document language uses the valid BCP 47 code", () => {
  assert.match(core, /state\.locale==="CZ"\?"cs":"sk"/);
  assert.doesNotMatch(core, /documentElement\.lang=state\.locale\.toLowerCase/);
});
