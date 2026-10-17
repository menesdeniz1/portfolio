import assert from "node:assert/strict";

// Read-only HTTP smoke checks against a running local production build.
const base = new URL(process.env.TEST_BASE_URL || "http://127.0.0.1:3109");
assert(
  ["localhost", "127.0.0.1", "[::1]"].includes(base.hostname),
  "Tests must target localhost",
);
const paths = [
  "",
  "/resume",
  "/work/industrial-vision",
  "/work/keepmoney",
  "/work/camera-to-device",
];
const pages = new Map();
for (const prefix of ["", "/tr"]) {
  for (const path of paths) {
    const route = prefix + path || "/";
    const response = await fetch(new URL(route, base));
    assert.equal(response.status, 200, route);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    const html = await response.text();
    assert.match(
      html,
      new RegExp('<html[^>]+lang="' + (prefix ? "tr" : "en") + '"'),
      route + " language",
    );
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route + " H1");
    assert.match(html, /<title>[^<]+<\/title>/, route + " title");
    assert.match(
      html,
      /name="robots" content="noindex, nofollow"/,
      route + " local indexing policy",
    );
    assert(!html.includes('href="#"'), route + " placeholder link");
    pages.set(route, html);
  }
}

let links = 0;
const assets = new Set();
for (const [route, html] of pages) {
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const url = new URL(
      match[1].replaceAll("&amp;", "&"),
      new URL(route, base),
    );
    if (url.origin !== base.origin) continue;
    const target = pages.get(url.pathname);
    assert(target, route + " links to unknown local page " + url.pathname);
    if (url.hash)
      assert(
        target.includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'),
        route + " broken anchor " + url.hash,
      );
    links++;
  }
  for (const match of html.matchAll(/(?:src|href)="(\/_next\/static\/[^"?]+)/g))
    assets.add(match[1]);
}
for (const path of [
  "/icon.svg",
  "/social-card.png",
  "/robots.txt",
  "/sitemap.xml",
  ...assets,
]) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
}
for (const path of [
  "/work/not-a-project",
  "/tr/work/not-a-project",
  "/missing-page",
]) {
  assert.equal((await fetch(new URL(path, base))).status, 404, path);
}
console.log(
  JSON.stringify(
    {
      pages: pages.size,
      internalLinks: links,
      staticAssets: assets.size,
      unknownPages: "404",
      result: "PASS",
    },
    null,
    2,
  ),
);
