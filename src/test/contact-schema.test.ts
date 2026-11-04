import { describe, expect, it } from "vitest";
import { cleanText, contactSchema, escapeHtml } from "@/lib/contact-schema";

const base = {
  nombre: "  Ana   Pérez ",
  email: " ANA@Example.com ",
  telefono: "",
  area: "",
  mensaje: "Necesito ayuda con una reclamación.",
  privacidad: true,
  website: "",
  startedAt: Date.now(),
};

describe("contactSchema", () => {
  it("normaliza espacios y el correo", () => {
    const r = contactSchema.parse(base);
    expect(r.nombre).toBe("Ana Pérez");
    expect(r.email).toBe("ana@example.com");
  });

  it("exige la casilla de privacidad (no premarcada)", () => {
    expect(contactSchema.safeParse({ ...base, privacidad: false }).success).toBe(false);
  });

  it("rechaza teléfonos con caracteres no válidos", () => {
    expect(contactSchema.safeParse({ ...base, telefono: "600<b>" }).success).toBe(false);
  });

  it("rechaza áreas desconocidas", () => {
    expect(contactSchema.safeParse({ ...base, area: "laboral" }).success).toBe(false);
  });

  it("limita la longitud del mensaje", () => {
    expect(contactSchema.safeParse({ ...base, mensaje: "x".repeat(2001) }).success).toBe(false);
  });
});

describe("cleanText", () => {
  it("elimina caracteres de control e invisibles", () => {
    const nul = String.fromCharCode(0);
    const zwsp = String.fromCodePoint(0x200b);
    const rlo = String.fromCodePoint(0x202e);
    expect(cleanText(`a${nul}b${zwsp}c${rlo}d`)).toBe("a bcd");
  });

  it("conserva saltos de línea en modo multilínea", () => {
    expect(cleanText("hola\r\nmundo", { multiline: true })).toBe("hola\nmundo");
  });
});

describe("escapeHtml", () => {
  it("escapa los caracteres HTML", () => {
    expect(escapeHtml(`<img src=x onerror="a">&'`)).toBe("&lt;img src=x onerror=&quot;a&quot;&gt;&amp;&#39;");
  });
});
