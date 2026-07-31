(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.VystavFinance = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  function normalizeDecimal(value) {
    const text = String(value ?? "").trim().replace(/\s+/g, "").replace(",", ".");
    if (!/^-?\d*(?:\.\d*)?$/.test(text) || text === "" || text === "-" || text === ".") return "0";
    return text;
  }

  function scaledInteger(value, scale) {
    const text = normalizeDecimal(value);
    const negative = text.startsWith("-");
    const unsigned = negative ? text.slice(1) : text;
    const [whole = "0", fraction = ""] = unsigned.split(".");
    const kept = (fraction + "0".repeat(scale + 1)).slice(0, scale + 1);
    let result = BigInt(whole || "0") * (10n ** BigInt(scale));
    result += BigInt(kept.slice(0, scale) || "0");
    if (Number(kept[scale] || "0") >= 5) result += 1n;
    return negative ? -result : result;
  }

  function roundDivide(numerator, denominator) {
    const negative = numerator < 0n;
    const absolute = negative ? -numerator : numerator;
    const rounded = (absolute + denominator / 2n) / denominator;
    return negative ? -rounded : rounded;
  }

  function toMinor(value) {
    return Number(scaledInteger(value, 2));
  }

  function fromMinor(value) {
    return Number(value || 0) / 100;
  }

  function calculateInvoice(lines, vatRate) {
    const calculatedLines = (lines || []).map((line) => {
      const quantityMillis = scaledInteger(line.quantity, 3);
      const unitPriceMinor = BigInt(toMinor(line.unit_price));
      const totalMinor = Number(roundDivide(quantityMillis * unitPriceMinor, 1000n));
      return { ...line, totalMinor, total: fromMinor(totalMinor) };
    });
    const subtotalMinor = calculatedLines.reduce((sum, line) => sum + line.totalMinor, 0);
    const vatBasisPoints = scaledInteger(vatRate, 2);
    const vatMinor = Number(roundDivide(BigInt(subtotalMinor) * vatBasisPoints, 10000n));
    const totalMinor = subtotalMinor + vatMinor;
    return {
      lines: calculatedLines,
      subtotalMinor,
      vatMinor,
      totalMinor,
      subtotal: fromMinor(subtotalMinor),
      vat: fromMinor(vatMinor),
      total: fromMinor(totalMinor),
    };
  }

  return { toMinor, fromMinor, calculateInvoice };
});
