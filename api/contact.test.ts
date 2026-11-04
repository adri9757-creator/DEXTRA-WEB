import { beforeEach, describe, expect, it, vi } from "vitest";
import { __resetRateLimit, allowedOrigins, handleContact, type ContactEnv } from "./contact";

const ORIGIN = "https://dextralawfirm.com";
const NOW = 1_800_000_000_000;

const ENABLED: ContactEnv = {
  CONTACT_FORM_ENABLED: "true",
  RESEND_API_KEY: "re_test_key",
  CONTACT_TO_EMAIL: "info@dextralawfirm.com",
  CONTACT_FROM_EMAIL: "Web <web@dextralawfirm.com>",
  VITE_SITE_URL: ORIGIN,
};

const valid = {
  nombre: "Ana Pérez",
  email: "ana@example.com",
  telefono: "+34 600 000 000",
  area: "civil",
  mensaje: "Me deben varias facturas <script>alert(1)</script> y quiero reclamarlas.",
  privacidad: true,
  website: "",
  startedAt: NOW - 10_000,
};

function req(body: unknown, headers: Record<string, string> = {}, ip = "1.2.3.4") {
  return new Request("https://dextralawfirm.com/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", origin: ORIGIN, "x-real-ip": ip, ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

const okFetch = () => vi.fn(async () => new Response("{}", { status: 200 })) as unknown as typeof fetch;

beforeEach(() => __resetRateLimit());

describe("POST /api/contact", () => {
  it("no envía nada mientras el formulario está desactivado", async () => {
    const fetchMock = okFetch();
    const res = await handleContact(req(valid), { VITE_SITE_URL: ORIGIN }, fetchMock, NOW);
    expect(res.status).toBe(503);
    expect((await res.json()).code).toBe("form_disabled");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("exige también la API key aunque CONTACT_FORM_ENABLED sea true", async () => {
    const res = await handleContact(req(valid), { ...ENABLED, RESEND_API_KEY: "" }, okFetch(), NOW);
    expect(res.status).toBe(503);
  });

  it("rechaza orígenes ajenos (CSRF) y peticiones sin Origin", async () => {
    expect((await handleContact(req(valid, { origin: "https://evil.example" }), ENABLED, okFetch(), NOW)).status).toBe(403);
    const noOrigin = new Request("https://x/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: "{}" });
    expect((await handleContact(noOrigin, ENABLED, okFetch(), NOW)).status).toBe(403);
  });

  it("en vista previa acepta la URL del despliegue y la URL fija de la rama, pero no en producción", async () => {
    const branch = "dextra-web-git-fix-fase-legal-seguridad-equipo.vercel.app";
    const deploy = "dextra-web-abc123-equipo.vercel.app";
    const preview: ContactEnv = { ...ENABLED, VERCEL_ENV: "preview", VERCEL_URL: deploy, VERCEL_BRANCH_URL: branch };
    expect(allowedOrigins(preview)).toEqual(expect.arrayContaining([ORIGIN, `https://${deploy}`, `https://${branch}`]));
    expect((await handleContact(req(valid, { origin: `https://${branch}` }), preview, okFetch(), NOW)).status).toBe(200);
    expect((await handleContact(req(valid, { origin: `https://${deploy}` }, "5.6.7.8"), preview, okFetch(), NOW)).status).toBe(200);

    const production: ContactEnv = { ...preview, VERCEL_ENV: "production" };
    expect(allowedOrigins(production)).toEqual([ORIGIN]);
    expect((await handleContact(req(valid, { origin: `https://${branch}` }, "9.9.9.9"), production, okFetch(), NOW)).status).toBe(403);
  });

  it("exige JSON", async () => {
    const res = await handleContact(req("a=b", { "content-type": "application/x-www-form-urlencoded" }), ENABLED, okFetch(), NOW);
    expect(res.status).toBe(415);
  });

  it("rechaza otros métodos", async () => {
    const res = await handleContact(new Request("https://x/api/contact", { method: "GET" }), ENABLED, okFetch(), NOW);
    expect(res.status).toBe(405);
  });

  it("valida en el servidor y devuelve los errores por campo", async () => {
    const res = await handleContact(req({ ...valid, email: "no-es-email", privacidad: false }), ENABLED, okFetch(), NOW);
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(Object.keys(body.fields)).toEqual(expect.arrayContaining(["email", "privacidad"]));
  });

  it("descarta en silencio los envíos con honeypot", async () => {
    const fetchMock = okFetch();
    const res = await handleContact(req({ ...valid, website: "http://spam" }), ENABLED, fetchMock, NOW);
    expect(res.status).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("descarta envíos demasiado rápidos", async () => {
    const res = await handleContact(req({ ...valid, startedAt: NOW - 500 }), ENABLED, okFetch(), NOW);
    expect(res.status).toBe(422);
  });

  it("rechaza cuerpos demasiado grandes", async () => {
    const res = await handleContact(req({ ...valid, mensaje: "x".repeat(20_000) }), ENABLED, okFetch(), NOW);
    expect(res.status).toBe(413);
  });

  it("limita los envíos por IP", async () => {
    const statuses: number[] = [];
    for (let i = 0; i < 6; i++) statuses.push((await handleContact(req(valid), ENABLED, okFetch(), NOW)).status);
    expect(statuses.slice(0, 5)).toEqual([200, 200, 200, 200, 200]);
    expect(statuses[5]).toBe(429);
  });

  it("envía a Resend con HTML escapado, sin que el usuario controle el destinatario", async () => {
    const fetchMock = okFetch();
    const res = await handleContact(req({ ...valid, to: "attacker@example.com" }), ENABLED, fetchMock, NOW);
    expect(res.status).toBe(200);
    const [url, init] = (fetchMock as unknown as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    expect(init.headers.Authorization).toBe("Bearer re_test_key");
    const payload = JSON.parse(init.body);
    expect(payload.to).toEqual(["info@dextralawfirm.com"]);
    expect(payload.reply_to).toBe("ana@example.com");
    expect(payload.html).not.toContain("<script>");
    expect(payload.html).toContain("&lt;script&gt;");
    expect(payload.subject).not.toMatch(/[\r\n]/);
  });

  it("informa de un fallo del proveedor sin filtrar detalles", async () => {
    const failing = vi.fn(async () => new Response("boom", { status: 500 })) as unknown as typeof fetch;
    const res = await handleContact(req(valid), ENABLED, failing, NOW);
    expect(res.status).toBe(502);
    expect(await res.json()).toEqual({ ok: false, code: "send_failed" });
  });
});
