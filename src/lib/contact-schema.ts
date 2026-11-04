/**
 * Validación y saneado del formulario de contacto.
 *
 * Se usa EN EL CLIENTE (mensajes de error inmediatos) y EN EL SERVIDOR
 * (api/contact.ts), que es quien decide: nunca se confía en lo que llega del
 * navegador. Sin alias "@/" para que la función de Vercel pueda importarlo.
 */
import { z } from "zod";

// Zod 4 intenta optimizar con `new Function` (eval); la CSP lo bloquea y el
// navegador lo registra como infracción. Se desactiva: el coste es mínimo.
z.config({ jitless: true });

export const AREAS = ["penal", "extranjeria", "civil", "otro"] as const;

export const LIMITS = { nombre: 100, email: 254, telefono: 20, mensaje: 2000 } as const;

/**
 * Normaliza texto: Unicode NFC, elimina caracteres de control (salvo saltos de
 * línea en el mensaje) y espacios sobrantes. No "escapa" HTML aquí: el escape
 * se hace al construir el correo (ver escapeHtml), que es donde importa.
 */
/** Construye una clase de caracteres a partir de rangos de puntos de código (sin caracteres invisibles en el fuente). */
const charClass = (ranges: [number, number][], flags = "g") =>
  new RegExp(`[${ranges.map(([a, b]) => `${String.fromCodePoint(a)}-${String.fromCodePoint(b)}`).join("")}]`, flags);

/** Caracteres de control C0 y DEL, conservando tabulador (9) y salto de línea (10). */
const CONTROL_MULTILINE = charClass([[0, 8], [11, 12], [14, 31], [127, 127]]);
/** Todos los caracteres de control C0 y DEL. */
const CONTROL_ALL = charClass([[0, 31], [127, 127]]);
/** Espacios de ancho cero y marcas de dirección de texto (bidi), usados para ocultar contenido. */
const INVISIBLE = charClass([[0x200b, 0x200f], [0x202a, 0x202e], [0x2066, 0x2069]]);

export function cleanText(value: unknown, { multiline = false } = {}): string {
  if (typeof value !== "string") return "";
  let s = value.normalize("NFC");
  s = multiline ? s.replace(/\r\n?/g, "\n").replace(CONTROL_MULTILINE, "") : s.replace(CONTROL_ALL, " ");
  s = s.replace(INVISIBLE, "");
  return multiline ? s.replace(/[ \t]+\n/g, "\n").replace(/\n{4,}/g, "\n\n\n").trim() : s.replace(/\s+/g, " ").trim();
}

export const contactSchema = z.object({
  nombre: z
    .string()
    .transform((v) => cleanText(v))
    .pipe(z.string().min(2, "Indica tu nombre.").max(LIMITS.nombre, `Máximo ${LIMITS.nombre} caracteres.`)),
  email: z
    .string()
    .transform((v) => cleanText(v).toLowerCase())
    .pipe(z.email("Introduce un correo electrónico válido.").max(LIMITS.email)),
  telefono: z
    .string()
    .optional()
    .default("")
    .transform((v) => cleanText(v))
    .pipe(
      z
        .string()
        .max(LIMITS.telefono, "Teléfono demasiado largo.")
        .regex(/^[0-9+()\s.-]*$/, "El teléfono solo puede contener números, espacios y + ( ) - ."),
    ),
  area: z.enum(["", ...AREAS]).optional().default(""),
  mensaje: z
    .string()
    .transform((v) => cleanText(v, { multiline: true }))
    .pipe(
      z
        .string()
        .min(10, "Cuéntanos brevemente tu consulta (mínimo 10 caracteres).")
        .max(LIMITS.mensaje, `Máximo ${LIMITS.mensaje} caracteres.`),
    ),
  privacidad: z.literal(true, { error: "Debes confirmar que has leído la información básica sobre protección de datos y aceptar la Política de privacidad." }),
  /** Honeypot: campo invisible que una persona deja vacío. */
  website: z.string().max(0).optional().default(""),
  /** Momento (ms) en que se mostró el formulario; para descartar envíos instantáneos de bots. */
  startedAt: z.number().int().positive(),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;

export const AREA_LABELS: Record<string, string> = {
  "": "Sin indicar",
  penal: "Derecho Penal",
  extranjeria: "Extranjería",
  civil: "Derecho Civil",
  otro: "Otro",
};

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
