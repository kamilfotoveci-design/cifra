const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");

const core = fs.readFileSync("work/cifra-core.js", "utf8");
const shell = fs.readFileSync("work/cifra-premium-rebuild.html", "utf8");
const landing = fs.readFileSync("work/landing-v6.js", "utf8");

test("dynamic frontend copy follows the selected locale", () => {
  assert.match(core, /function appLoadingLabel\(\)/);
  assert.match(core, /syncDocumentTitle\(\)/);
  assert.match(core, /updateNetworkState\(navigator\.onLine/);
  assert.match(landing, /document\.documentElement\.lang = locale === 'CZ' \? 'cs' : 'sk'/);
});

test("dialogs have one keyboard handler and restore focus", () => {
  assert.match(core, /container\.dataset\.dialogA11yBound/);
  assert.match(core, /dialogTrigger/);
  assert.match(core, /restoreTarget\?\.isConnected/);
});

test("account popovers expose keyboard and ARIA behavior", () => {
  assert.match(core, /notification\?\.setAttribute\("aria-haspopup","dialog"\)/);
  assert.match(core, /profile\?\.setAttribute\("aria-controls","profileMenu"\)/);
  assert.match(core, /id="profileMenu"/);
  assert.match(core, /event\.key==="Escape"/);
  assert.doesNotMatch(core, /Účet Cifra/);
});

test("authentication mode switch is a real accessible tab set", () => {
  assert.match(core, /tabs\?\.setAttribute\("role","tablist"\)/);
  assert.match(core, /button\.setAttribute\("role","tab"\)/);
  assert.match(core, /form\?\.setAttribute\("aria-labelledby","authTitle"\)/);
  assert.match(core, /setAttribute\("aria-selected",String\(active\)\)/);
});

