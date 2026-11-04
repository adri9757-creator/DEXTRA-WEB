/**
 * Función serverless de Vercel: POST /api/contact
 *
 * Recibe el formulario de contacto, lo valida de nuevo en el servidor y lo
 * envía por correo con Resend. Medidas de protección:
 *  - Desactivada por defecto: solo envía si CONTACT_FORM_ENABLED="true" y
 *    están configuradas la API key y las direcciones (ver .env.example).
 *  - Verificación de origen (Origin debe ser el dominio del sitio) y
 *    Content-Type JSON obligatorio: mitiga CSRF (no hay cookies de sesión).
 *  - Límite de tamaño del cuerpo y límite de envíos por IP.
 *  - Honeypot y tiempo mínimo de cumplimentación contra bots.
 *  - Validación y saneado con el mismo esquema que el cliente; escape HTML
 *    al construir el correo; el usuario nunca controla destinatario ni remitente.
 *  - La API key solo existe en variables de entorno del servidor (sin prefijo
 *    VITE_, por lo que nunca llega al navegador).
 */
import { AREA_LABELS, contactSchema, escapeHtml, type ContactData } from "../src/lib/contact-schema";

const MAX_BODY_BYTES = 10_000;
const MIN_FILL_MS = 3_000;
const MAX_AGE_MS = 24 * 60 * 60 * 1000;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };

export interface ContactEnv {
  CONTACT_FORM_ENABLED?: string;
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
  VITE_SITE_URL?: string;
  ALLOWED_ORIGINS?: string;
  VERCEL_URL?: string;
  VERCEL_BRANCH_URL?: string;
  VERCEL_ENV?: string;
}

/**
 * Límite por IP en memoria. Es "best effort": cada instancia de la función
 * tiene su propia memoria. Para un límite global, añadir una regla de
 * rate limiting en el firewall de Vercel (ver docs/DESPLIEGUE.md).
 */
const hits = new Map<string, number[]>();
export function isRateLimited(ip: string, now = Date.now()): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) hits.clear(); // evita crecimiento ilimitado
  return recent.length > RATE_LIMIT.max;
}
export const __resetRateLimit = () => hits.clear();

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });
}

export function allowedOrigins(env: ContactEnv): string[] {
  const list = [env.VITE_SITE_URL, ...(env.ALLOWED_ORIGINS ?? "").split(",")]
    .map((o) => o?.trim().replace(/\/$/, ""))
    .filter(Boolean) as string[];
  // Despliegues de vista previa de Vercel (no producción): la URL única de cada
  // despliegue (VERCEL_URL) y la URL fija de la rama (VERCEL_BRANCH_URL).
  if (env.VERCEL_ENV !== "production") {
    for (const host of [env.VERCEL_URL, env.VERCEL_BRANCH_URL]) if (host) list.push(`https://${host}`);
  }
  return list;
}

function clientIp(request: Request): string {
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "desconocida"
  );
}

function buildEmail(data: ContactData) {
  const rows: [string, string][] = [
    ["Nombre", data.nombre],
    ["Email", data.email],
    ["Teléfono", data.telefono || "—"],
    ["Área", AREA_LABELS[data.area] ?? "—"],
  ];
  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nMensaje:\n${data.mensaje}\n\n—\nEnviado desde el formulario de la web. El remitente confirmó haber leído la información sobre protección de datos.`;
  const html = `<!doctype html><html><body style="font-family:system-ui,sans-serif;line-height:1.5">
<h1 style="font-size:18px">Nueva consulta desde la web</h1>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><th align="left" style="border-bottom:1px solid #ddd">${k}</th><td style="border-bottom:1px solid #ddd">${escapeHtml(v)}</td></tr>`)
    .join("")}</table>
<h2 style="font-size:16px">Mensaje</h2>
<p style="white-space:pre-wrap">${escapeHtml(data.mensaje)}</p>
<p style="color:#666;font-size:12px">Enviado desde el formulario de la web. El remitente confirmó haber leído la información sobre protección de datos.</p>
</body></html>`;
  // Asunto sin datos del mensaje y sin saltos de línea.
  const subject = `Consulta web: ${AREA_LABELS[data.area] ?? "Sin indicar"} — ${data.nombre}`.replace(/[\r\n]/g, " ").slice(0, 150);
  return { subject, text, html };
}

export async function handleContact(
  request: Request,
  env: ContactEnv,
  fetchImpl: typeof fetch = fetch,
  now = Date.now(),
): Promise<Response> {
  if (request.method !== "POST") return json(405, { ok: false, code: "method_not_allowed" });

  const origin = request.headers.get("origin")?.replace(/\/$/, "");
  if (!origin || !allowedOrigins(env).includes(origin)) return json(403, { ok: false, code: "forbidden_origin" });

  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return json(415, { ok: false, code: "unsupported_media_type" });
  }

  const enabled =
    env.CONTACT_FORM_ENABLED === "true" && !!env.RESEND_API_KEY && !!env.CONTACT_TO_EMAIL && !!env.CONTACT_FROM_EMAIL;
  if (!enabled) return json(503, { ok: false, code: "form_disabled" });

  if (isRateLimited(clientIp(request), now)) return json(429, { ok: false, code: "rate_limited" });

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json(413, { ok: false, code: "payload_too_large" });

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, code: "invalid_json" });
  }

  // Honeypot relleno: se responde como si fuera bien para no dar pistas al bot.
  if (body && typeof body === "object" && typeof (body as { website?: unknown }).website === "string" && (body as { website: string }).website !== "") {
    return json(200, { ok: true });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fields = Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0] ?? "form"), i.message]));
    return json(422, { ok: false, code: "validation_error", fields });
  }
  const data = parsed.data;

  const elapsed = now - data.startedAt;
  if (elapsed < MIN_FILL_MS || elapsed > MAX_AGE_MS) return json(422, { ok: false, code: "timing" });

  const { subject, text, html } = buildEmail(data);
  try {
    const res = await fetchImpl("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL,
        to: [env.CONTACT_TO_EMAIL],
        reply_to: data.email,
        subject,
        text,
        html,
      }),
    });
    if (!res.ok) {
      // No se registran datos personales del formulario, solo el estado.
      console.error("Resend error", res.status);
      return json(502, { ok: false, code: "send_failed" });
    }
  } catch {
    console.error("Resend request failed");
    return json(502, { ok: false, code: "send_failed" });
  }

  return json(200, { ok: true });
}

/** Punto de entrada de Vercel (API Web estándar en el runtime de Node.js). */
export function POST(request: Request): Promise<Response> {
  return handleContact(request, process.env as ContactEnv);
}
