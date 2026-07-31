const test = require("node:test");
const assert = require("node:assert/strict");
const finance = require("../work/vystav-finance.js");

test("parses decimal commas and rounds to cents", () => {
  assert.equal(finance.toMinor("12,345"), 1235);
  assert.equal(finance.toMinor("0.1"), 10);
  assert.equal(finance.toMinor("0.2"), 20);
});

test("calculates line totals in minor units without float drift", () => {
  const result = finance.calculateInvoice([
    { description: "A", quantity: "3", unit_price: "0.10" },
    { description: "B", quantity: "1", unit_price: "0.20" },
  ], "20");
  assert.equal(result.subtotalMinor, 50);
  assert.equal(result.vatMinor, 10);
  assert.equal(result.totalMinor, 60);
});

test("supports three decimal quantity precision", () => {
  const result = finance.calculateInvoice([
    { description: "Consulting", quantity: "1.255", unit_price: "19.99" },
  ], "21");
  assert.equal(result.lines[0].totalMinor, 2509);
  assert.equal(result.subtotal, 25.09);
  assert.equal(result.vat, 5.27);
  assert.equal(result.total, 30.36);
});

test("handles zero and large valid totals deterministically", () => {
  assert.deepEqual(
    finance.calculateInvoice([], "21"),
    { lines: [], subtotalMinor: 0, vatMinor: 0, totalMinor: 0, subtotal: 0, vat: 0, total: 0 },
  );
  const result = finance.calculateInvoice([
    { description: "Large", quantity: "999.999", unit_price: "999999.99" },
  ], "21");
  assert.equal(result.totalMinor, 120999877790);
});
