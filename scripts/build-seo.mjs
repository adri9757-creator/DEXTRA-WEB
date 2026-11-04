#!/usr/bin/env node
/**
 * Paso posterior a `vite build`. Genera en dist/:
 *  - Un HTML por ruta (dist/despacho.html, dist/casos/x.html…) con su <title>,
 *    descripción, canonical y Open Graph, para que buscadores y redes sociales
 *    los lean sin ejecutar JavaScript. Vercel los sirve con "cleanUrls".
 *  - 404.html (Vercel lo devuelve con estado HTTP 404 en rutas inexistentes).
 *  - sitemap.xml, robots.txt y .well-known/security.txt.
 *  - JSON-LD LegalService en la portada y en contacto.
 *
 * Uso: node scripts/build-seo.mjs   (se ejecuta solo con `npm run build`)
 * Variables: VITE_SITE_URL (dominio canónico, sin barra final).
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const SITE_URL = (process.env.VITE_SITE_URL || "https://dextralawfirm.com").replace(/\/$/, "");

const seo = JSON.parse(await readFile(join(root, "src/config/routes.json"), "utf8"));
const business = JSON.parse(await readFile(join(root, "src/config/business.json"), "utf8"));
const template = await readFile(join(dist, "index.html"), "utf8");

if (!template.includes("<!--seo:start-->") || !template.includes("<!--seo:end-->")) {
  throw new Error("index.html no contiene los marcadores <!--seo:start--> / <!--seo:end-->");
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const urlFor = (path) => `${SITE_URL}${path === "/" ? "/" : path}`;

function jsonLd() {
  const { $comment, legalName, sameAs, ...b } = business;
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/#despacho`,
    name: b.name,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${seo.defaultImage}`,
    logo: `${SITE_URL}${seo.defaultImage}`,
    email: b.email,
    telephone: b.telephone,
    address: { "@type": "PostalAddress", ...b.address },
    openingHours: b.openingHours,
    areaServed: { "@type": "City", name: b.areaServed },
    knowsAbout: b.knowsAbout,
    founder: { "@type": "Person", name: legalName, jobTitle: "Abogado" },
    ...(sameAs?.length ? { sameAs } : {}),
  };
  // data-owner permite distinguirlo del JSON-LD que inyectan terceros.
  return `<script type="application/ld+json" data-owner="dextra">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

function headFor({ path, title, description, type = "website", noindex = false }) {
  const url = path ? urlFor(path) : null;
  const image = `${SITE_URL}${seo.defaultImage}`;
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    noindex ? `<meta name="robots" content="noindex" />` : `<meta name="robots" content="index, follow" />`,
    url ? `<link rel="canonical" href="${url}" />` : "",
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:site_name" content="${esc(business.name)}" />`,
    `<meta property="og:locale" content="es_ES" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    url ? `<meta property="og:url" content="${url}" />` : "",
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    path === "/" || path === "/contacto" ? jsonLd() : "",
  ]
    .filter(Boolean)
    .join("\n    ");
}

const render = (meta) =>
  template.replace(/<!--seo:start-->[\s\S]*<!--seo:end-->/, headFor(meta));

async function write(rel, content) {
  const file = join(dist, rel);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content);
}

for (const route of seo.routes) {
  const file = route.path === "/" ? "index.html" : `${route.path.slice(1)}.html`;
  await write(file, render(route));
}
await write("404.html", render({ ...seo.notFound, noindex: true }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${seo.routes
  .map((r) => `  <url><loc>${urlFor(r.path)}</loc><lastmod>${today}</lastmod><priority>${(r.priority ?? 0.5).toFixed(1)}</priority></url>`)
  .join("\n")}
</urlset>
`;
await write("sitemap.xml", sitemap);

await write(
  "robots.txt",
  `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`,
);

// RFC 9116. "Expires" es obligatorio: se fija a un año vista en cada build.
const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().replace(/\.\d{3}Z$/, "Z");
await write(
  ".well-known/security.txt",
  `Contact: mailto:${business.email}
Expires: ${expires}
Preferred-Languages: es, en
Canonical: ${SITE_URL}/.well-known/security.txt
Policy: ${SITE_URL}/seguridad
`,
);

console.log(`build-seo: ${seo.routes.length} páginas, 404.html, sitemap.xml, robots.txt y security.txt (${SITE_URL})`);
