const assert = require("node:assert/strict");
const fs = require("node:fs");

const core = fs.readFileSync("work/cifra-core.js", "utf8");
const url = process.env.SUPABASE_URL || core.match(/SUPABASE_URL="([^"]+)"/)?.[1];
const key = process.env.SUPABASE_PUBLISHABLE_KEY || core.match(/SUPABASE_KEY="([^"]+)"/)?.[1];
if (!url || !key) throw new Error("Missing Supabase URL or publishable key");

const headers = { apikey: key, Authorization: `Bearer ${key}` };
const model = {
  profiles: ["id", "full_name", "company_name", "ico", "dic", "ic_dph", "address", "city", "zip", "country", "phone", "website", "email", "logo_data", "stamp_data", "iban", "locale", "onboarding_completed", "created_at"],
  clients: ["id", "user_id", "name", "contact_person", "email", "phone", "website", "address", "city", "zip", "country", "ico", "dic", "ic_dph", "vat_payer", "info", "use_delivery_address", "delivery_name", "delivery_address", "delivery_city", "delivery_zip", "delivery_country", "iban", "created_at", "updated_at"],
  items: ["id", "user_id", "name", "unit", "price", "created_at", "updated_at"],
  invoices: ["id", "user_id", "number", "customer", "client_id", "issued_on", "due_on", "amount", "subtotal", "vat_rate", "vat_amount", "variable_symbol", "currency", "customer_email", "iban", "note", "qr_enabled", "status", "created_at", "updated_at"],
  invoice_items: ["id", "invoice_id", "user_id", "description", "quantity", "unit", "unit_price", "total", "vat_rate", "created_at"]
};

async function body(response) { const text = await response.text(); try { return JSON.parse(text); } catch { return text; } }

async function main() {
  const health = await fetch(`${url}/auth/v1/health`, { headers });
  assert.equal(health.ok, true, `Auth health failed: ${health.status}`);
  const failures = [];
  for (const [table, columns] of Object.entries(model)) {
    const response = await fetch(`${url}/rest/v1/${table}?select=${columns.join(",")}&limit=0`, { headers });
    if (!response.ok) failures.push(`${table}: ${response.status} ${JSON.stringify(await body(response))}`);
  }
  const rpc = await fetch(`${url}/rest/v1/rpc/save_invoice_with_items`, { method: "POST", headers: { ...headers, "Content-Type": "application/json" }, body: JSON.stringify({ p_id: "00000000-0000-0000-0000-000000000001", p_invoice: {}, p_items: [] }) });
  const rpcBody = await body(rpc);
  if (rpc.status === 404 || rpcBody?.code === "PGRST202") failures.push(`save_invoice_with_items RPC missing: ${JSON.stringify(rpcBody)}`);
  if (rpc.ok) failures.push("save_invoice_with_items accepted an anonymous write");
  assert.deepEqual(failures, [], `Live backend drift:\n${failures.join("\n")}`);
  console.log("Supabase backend contract is healthy.");
}

main().catch((error) => { console.error(error.message || error); process.exitCode = 1; });
