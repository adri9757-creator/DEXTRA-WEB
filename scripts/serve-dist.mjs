#!/usr/bin/env node
/**
 * Servidor local para revisar dist/ como lo serviría Vercel:
 * cleanUrls, redirecciones y cabeceras de vercel.json (incluida la CSP) y
 * 404.html con estado 404. No ejecuta /api (usa `vercel dev` para eso).
 *
 * Uso: npm run build && npm run preview   →  http://localhost:4173
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");
const config = JSON.parse(await readFile(join(root, "vercel.json"), "utf8"));
const PORT = Number(process.env.PORT || 4173);

const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8",
};

// Convierte los patrones de Vercel ("/(.*)", "/assets/(.*)") en RegExp.
const toRegex = (source) => new RegExp(`^${source.replace(/\//g, "\\/")}$`);

async function isFile(p) {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
}

async function resolve(pathname) {
  const safe = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  const candidates = pathname === "/" ? ["index.html"] : [safe, `${safe}.html`, join(safe, "index.html")];
  for (const c of candidates) {
    const file = join(dist, c);
    if (file.startsWith(dist) && (await isFile(file))) return file;
  }
  return null;
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const redirect = config.redirects?.find((r) => r.source === url.pathname);
  if (redirect) {
    res.writeHead(redirect.permanent ? 308 : 307, { Location: redirect.destination });
    return res.end();
  }
  if (url.pathname.endsWith(".html") || (url.pathname.length > 1 && url.pathname.endsWith("/"))) {
    res.writeHead(308, { Location: url.pathname.replace(/(\/index)?\.html$|\/$/, "") || "/" });
    return res.end();
  }

  const headers = {};
  for (const rule of config.headers ?? []) {
    if (toRegex(rule.source).test(url.pathname)) for (const h of rule.headers) headers[h.key] = h.value;
  }

  let file = await resolve(url.pathname);
  let status = 200;
  if (!file) {
    file = join(dist, "404.html");
    status = 404;
  }
  headers["Content-Type"] ??= TYPES[extname(file)] ?? "application/octet-stream";
  res.writeHead(status, headers);
  res.end(await readFile(file));
}).listen(PORT, () => console.log(`dist/ en http://localhost:${PORT}`));
