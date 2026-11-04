import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import seo from "@/config/routes.json";

const appSource = readFileSync(join(import.meta.dirname, "../App.tsx"), "utf8");
const appPaths = [...appSource.matchAll(/<Route path="([^"*]+)"/g)].map((m) => m[1]);

describe("metadatos SEO", () => {
  it("cada ruta de la app tiene título y descripción en routes.json, y viceversa", () => {
    const seoPaths = seo.routes.map((r) => r.path);
    expect([...seoPaths].sort()).toEqual([...appPaths].sort());
  });

  it("títulos y descripciones únicos y de longitud razonable", () => {
    const titles = new Set(seo.routes.map((r) => r.title));
    expect(titles.size).toBe(seo.routes.length);
    for (const r of seo.routes) {
      expect(r.title.length, r.path).toBeLessThanOrEqual(75);
      expect(r.description.length, r.path).toBeGreaterThan(40);
      expect(r.description.length, r.path).toBeLessThanOrEqual(170);
    }
  });
});
