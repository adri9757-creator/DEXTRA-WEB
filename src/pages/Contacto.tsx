import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import GoogleMap from "@/components/embeds/GoogleMap";
import { SITE } from "@/config/site";
import { AREAS, AREA_LABELS, LIMITS, contactSchema } from "@/lib/contact-schema";

type Fields = "nombre" | "email" | "telefono" | "area" | "mensaje" | "privacidad";
type Status = { kind: "idle" | "sending" | "success" | "error"; message?: string };

const EMPTY = { nombre: "", email: "", telefono: "", area: "", mensaje: "", privacidad: false, website: "" };

const inputClass =
  "w-full border border-input rounded-md px-4 py-3 font-sans text-base bg-background transition-colors focus:border-primary aria-[invalid=true]:border-destructive";

const SERVER_MESSAGES: Record<string, string> = {
  form_disabled: `El formulario todavía no está activo. Escríbenos a ${SITE.email} o llámanos al ${SITE.phone.display}.`,
  rate_limited: "Has enviado varios mensajes seguidos. Espera unos minutos y vuelve a intentarlo.",
  timing: "No hemos podido verificar el envío. Revisa el formulario y vuelve a intentarlo.",
  send_failed: `No hemos podido enviar tu mensaje. Inténtalo más tarde o escríbenos a ${SITE.email}.`,
};

const ErrorText = ({ field, message }: { field: Fields; message?: string }) =>
  message ? (
    <p id={`${field}-error`} className="mt-2 text-sm font-sans text-destructive">
      {message}
    </p>
  ) : null;

const Contacto = () => {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const startedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);

  // Momento en que se muestra el formulario (el servidor descarta envíos instantáneos).
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const set = (field: keyof typeof EMPTY, value: string | boolean) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field as Fields]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const focusFirstError = (errs: Partial<Record<Fields, string>>) => {
    const first = (["nombre", "email", "telefono", "area", "mensaje", "privacidad"] as Fields[]).find((f) => errs[f]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status.kind === "sending") return;

    const payload = { ...form, startedAt: startedAt.current };
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const errs: Partial<Record<Fields, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as Fields;
        if (key && !errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      setStatus({ kind: "error", message: "Revisa los campos marcados." });
      focusFirstError(errs);
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setForm(EMPTY);
        setErrors({});
        startedAt.current = Date.now();
        setStatus({ kind: "success", message: "Mensaje enviado. Te responderemos lo antes posible." });
        return;
      }
      if (data.code === "validation_error" && data.fields) {
        setErrors(data.fields);
        focusFirstError(data.fields);
      }
      const message =
        data.code === "validation_error"
          ? "Revisa los campos marcados e inténtalo de nuevo."
          : SERVER_MESSAGES[data.code] ?? SERVER_MESSAGES.send_failed;
      setStatus({ kind: "error", message });
    } catch {
      setStatus({ kind: "error", message: SERVER_MESSAGES.send_failed });
    }
  };

  const errorProps = (field: Fields) =>
    errors[field] ? { "aria-invalid": true as const, "aria-describedby": `${field}-error` } : {};

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Contacto</h1>
          <div className="w-16 h-1 bg-primary mt-6" aria-hidden="true" />
          <p className="mt-6 text-muted-foreground font-sans text-lg max-w-2xl">
            Cuéntanos tu caso y te orientamos sin compromiso.
          </p>
        </div>
      </section>

      <div className="container pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="form-required-note">
            <p id="form-required-note" className="font-sans text-sm text-muted-foreground">
              Los campos marcados con <span aria-hidden="true">*</span>
              <span className="sr-only">asterisco</span> son obligatorios.
            </p>

            <div>
              <label htmlFor="nombre" className="block font-sans text-sm font-medium mb-2">
                Nombre <span aria-hidden="true">*</span>
              </label>
              <input id="nombre" name="nombre" autoComplete="name" required maxLength={LIMITS.nombre} value={form.nombre}
                onChange={(e) => set("nombre", e.target.value)} className={inputClass} {...errorProps("nombre")} />
              <ErrorText field="nombre" message={errors.nombre} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block font-sans text-sm font-medium mb-2">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input id="email" name="email" type="email" autoComplete="email" required maxLength={LIMITS.email} value={form.email}
                  onChange={(e) => set("email", e.target.value)} className={inputClass} {...errorProps("email")} />
                <ErrorText field="email" message={errors.email} />
              </div>
              <div>
                <label htmlFor="telefono" className="block font-sans text-sm font-medium mb-2">Teléfono (opcional)</label>
                <input id="telefono" name="telefono" type="tel" autoComplete="tel" maxLength={LIMITS.telefono} value={form.telefono}
                  onChange={(e) => set("telefono", e.target.value)} className={inputClass} {...errorProps("telefono")} />
                <ErrorText field="telefono" message={errors.telefono} />
              </div>
            </div>

            <div>
              <label htmlFor="area" className="block font-sans text-sm font-medium mb-2">Área (opcional)</label>
              <select id="area" name="area" value={form.area} onChange={(e) => set("area", e.target.value)} className={inputClass}>
                <option value="">Selecciona un área</option>
                {AREAS.map((a) => (
                  <option key={a} value={a}>{AREA_LABELS[a]}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block font-sans text-sm font-medium mb-2">
                Mensaje <span aria-hidden="true">*</span>
              </label>
              <textarea id="mensaje" name="mensaje" required rows={6} maxLength={LIMITS.mensaje} value={form.mensaje}
                onChange={(e) => set("mensaje", e.target.value)} className={`${inputClass} resize-y`}
                aria-describedby={`mensaje-help${errors.mensaje ? " mensaje-error" : ""}`} aria-invalid={errors.mensaje ? true : undefined} />
              <p id="mensaje-help" className="mt-2 text-xs font-sans text-muted-foreground">
                Describe brevemente tu consulta. Evita incluir datos de salud u otra información especialmente sensible:
                la trataremos con detalle en la consulta. {form.mensaje.length}/{LIMITS.mensaje}
              </p>
              <ErrorText field="mensaje" message={errors.mensaje} />
            </div>

            {/* Honeypot: invisible para personas, los bots suelen rellenarlo. */}
            <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="website">No rellenes este campo</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" value={form.website}
                onChange={(e) => set("website", e.target.value)} />
            </div>

            {/* Información básica sobre protección de datos (primera capa, art. 11 LOPDGDD) */}
            <section aria-labelledby="info-datos" className="rounded-md border border-border bg-secondary p-4 font-sans text-xs leading-relaxed text-foreground">
              <h2 id="info-datos" className="mb-2 font-sans text-sm font-semibold">Información básica sobre protección de datos</h2>
              <dl className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1">
                <dt className="font-semibold">Responsable:</dt>
                <dd>{SITE.owner.name} ({SITE.name}).</dd>
                <dt className="font-semibold">Finalidad:</dt>
                <dd>Responder a tu consulta y, si lo pides, valorar un posible encargo profesional.</dd>
                <dt className="font-semibold">Legitimación:</dt>
                <dd>Aplicación de medidas precontractuales a petición tuya (art. 6.1.b RGPD).</dd>
                <dt className="font-semibold">Destinatarios:</dt>
                <dd>No se ceden datos a terceros salvo obligación legal. Proveedores de alojamiento y correo como encargados del tratamiento, algunos con transferencias internacionales amparadas en cláusulas contractuales tipo.</dd>
                <dt className="font-semibold">Derechos:</dt>
                <dd>Acceso, rectificación, supresión, oposición, limitación y portabilidad, y reclamación ante la AEPD.</dd>
                <dt className="font-semibold">Más información:</dt>
                <dd><Link to="/privacidad" className="font-semibold underline underline-offset-2">Política de privacidad</Link>.</dd>
              </dl>
            </section>

            <div>
              <div className="flex items-start gap-3">
                <input id="privacidad" name="privacidad" type="checkbox" required checked={form.privacidad}
                  onChange={(e) => set("privacidad", e.target.checked)}
                  className="mt-1 h-5 w-5 flex-shrink-0 accent-[hsl(var(--primary))]" {...errorProps("privacidad")} />
                <label htmlFor="privacidad" className="font-sans text-sm">
                  He leído la información básica sobre protección de datos y la{" "}
                  <Link to="/privacidad" className="font-semibold underline underline-offset-2">Política de privacidad</Link>.{" "}
                  <span aria-hidden="true">*</span>
                </label>
              </div>
              <ErrorText field="privacidad" message={errors.privacidad} />
            </div>

            <button
              type="submit"
              disabled={status.kind === "sending"}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold font-sans transition-all hover:bg-primary/90 disabled:opacity-60 w-full sm:w-auto justify-center"
            >
              {status.kind === "sending" ? (
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="w-4 h-4" aria-hidden="true" />
              )}
              {status.kind === "sending" ? "Enviando…" : "Enviar mensaje"}
            </button>

            <div role="status" aria-live="polite" className="font-sans text-sm">
              {status.message && (
                <p className={`rounded-md border p-4 ${status.kind === "success" ? "border-green-700 bg-green-50 text-green-900" : "border-destructive bg-red-50 text-red-900"}`}>
                  {status.message}
                </p>
              )}
            </div>
          </form>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
              <address className="not-italic space-y-4 font-sans">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{SITE.address.street}, {SITE.address.locality} {SITE.address.postalCode}</span>
                </p>
                <p className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <a href={`tel:${SITE.phone.tel}`} className="hover:text-primary transition-colors">{SITE.phone.display}</a>
                </p>
                <p className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${SITE.email}`} className="hover:text-primary transition-colors">{SITE.email}</a>
                </p>
                <p className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{SITE.hours.display}</span>
                </p>
              </address>
            </div>

            <GoogleMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
