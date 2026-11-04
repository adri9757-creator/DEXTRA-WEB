import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * En Vercel, cada archivo de api/ es una función y se ejecuta como módulo ES
 * de Node.js, que exige extensión en las importaciones relativas. Vite y
 * Vitest no lo exigen, así que sin este test el fallo solo aparecería al
 * desplegar (ERR_MODULE_NOT_FOUND).
 */
const apiDir = join(import.meta.dirname, "../../api");
const files = readdirSync(apiDir).filter((f) => f.endsWith(".ts"));

describe("funciones de Vercel (api/)", () => {
  it("no contienen tests ni otros archivos que Vercel publicaría como endpoints", () => {
    expect(files.filter((f) => /\.(test|spec)\.ts$/.test(f))).toEqual([]);
  });

  it("las importaciones relativas llevan extensión .js", () => {
    for (const f of files) {
      const src = readFileSync(join(apiDir, f), "utf8");
      const relative = [...src.matchAll(/from\s+["'](\.{1,2}\/[^"']+)["']/g)].map((m) => m[1]);
      for (const spec of relative) expect(spec, `${f}: ${spec}`).toMatch(/\.js$/);
    }
  });
});
