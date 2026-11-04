import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ACTIVE_CATEGORIES,
  OPEN_SETTINGS_EVENT,
  SERVICES,
  acceptAll,
  getConsent,
  rejectAll,
  removeLegacyCookies,
  saveConsent,
  type ServiceId,
} from "@/lib/consent";
import { useConsent } from "./useConsent";

/**
 * Los tres botones comparten exactamente el mismo estilo: ninguna opción
 * se destaca sobre otra (guía AEPD, apartado sobre patrones engañosos).
 */
const choiceButton =
  "inline-flex min-h-11 flex-1 items-center justify-center rounded-md border-2 border-foreground bg-background px-4 py-2 text-sm font-semibold font-sans text-foreground transition-colors hover:bg-foreground hover:text-background";

/**
 * Primera capa (banner) + segunda capa (panel de configuración).
 * El banner no bloquea la navegación: no hay muro de cookies.
 */
const CookieConsent = () => {
  const consent = useConsent();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [draft, setDraft] = useState<Record<ServiceId, boolean>>(() => currentSelection());

  useEffect(() => {
    removeLegacyCookies();
    const open = () => {
      setDraft(currentSelection());
      dialogRef.current?.showModal();
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  const close = () => dialogRef.current?.close();
  const openSettings = () => {
    setDraft(currentSelection());
    dialogRef.current?.showModal();
  };

  return (
    <>
      {consent === null && (
        <section
          aria-labelledby="cookie-banner-title"
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
        >
          <div className="container py-5 md:py-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-8">
              <div className="flex-1 font-sans text-sm leading-relaxed text-foreground">
                <h2 id="cookie-banner-title" className="mb-2 font-serif text-lg font-bold">
                  Tu privacidad
                </h2>
                <p>
                  Usamos almacenamiento técnico imprescindible para que la web funcione y para recordar tu elección.
                  Con tu permiso, cargaremos también <strong>contenido de terceros</strong> (Google Maps y reseñas de
                  Google mediante Elfsight), que puede instalar cookies de esos proveedores.{" "}
                  <strong>No usamos cookies analíticas ni publicitarias.</strong>
                </p>
                <p className="mt-1">
                  Puedes cambiar tu decisión en cualquier momento desde «Configurar cookies», al pie de cada página.{" "}
                  <Link to="/cookies" className="font-semibold underline underline-offset-2">
                    Política de cookies
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row lg:w-[30rem]">
                <button type="button" className={choiceButton} onClick={rejectAll}>
                  Rechazar
                </button>
                <button type="button" className={choiceButton} onClick={openSettings}>
                  Configurar
                </button>
                <button type="button" className={choiceButton} onClick={acceptAll}>
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="cookie-settings-title"
        className="w-[min(40rem,calc(100vw-2rem))] max-h-[calc(100vh-2rem)] rounded-lg border border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/50"
      >
        <form
          method="dialog"
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            saveConsent(draft);
            close();
          }}
        >
          <div className="border-b border-border p-6">
            <h2 id="cookie-settings-title" className="font-serif text-2xl font-bold">
              Configurar cookies
            </h2>
            <p className="mt-2 font-sans text-sm text-muted-foreground">
              Elige qué contenido de terceros quieres permitir. Puedes cambiarlo cuando quieras.
            </p>
          </div>

          <div className="space-y-6 overflow-y-auto p-6 font-sans text-sm">
            <fieldset className="rounded-md border border-border p-4">
              <legend className="px-1 font-semibold">Técnicas (siempre activas)</legend>
              <p className="text-muted-foreground">
                Guardan tu decisión sobre cookies en este navegador durante 12 meses. Son necesarias y no requieren
                consentimiento.
              </p>
            </fieldset>

            {ACTIVE_CATEGORIES.map((category) => (
              <fieldset key={category.id} className="rounded-md border border-border p-4">
                <legend className="px-1 font-semibold">{category.name}</legend>
                <p className="mb-3 text-muted-foreground">{category.description}</p>
                <ul className="space-y-3">
                  {SERVICES.filter((s) => s.category === category.id).map((service) => (
                    <li key={service.id} className="flex items-start gap-3">
                      <input
                        id={`consent-${service.id}`}
                        type="checkbox"
                        className="mt-1 h-5 w-5 flex-shrink-0 accent-[hsl(var(--primary))]"
                        checked={draft[service.id]}
                        onChange={(e) => setDraft({ ...draft, [service.id]: e.target.checked })}
                      />
                      <label htmlFor={`consent-${service.id}`}>
                        <span className="block font-semibold">{service.name}</span>
                        <span className="block text-muted-foreground">
                          {service.purpose} Proveedor: {service.provider}.
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </fieldset>
            ))}

            <p className="text-muted-foreground">
              Más detalles en la{" "}
              <Link to="/cookies" className="font-semibold text-foreground underline underline-offset-2" onClick={close}>
                Política de cookies
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-2 border-t border-border p-6 sm:flex-row">
            <button
              type="button"
              className={choiceButton}
              onClick={() => {
                rejectAll();
                close();
              }}
            >
              Rechazar todo
            </button>
            <button type="submit" className={choiceButton}>
              Guardar selección
            </button>
            <button
              type="button"
              className={choiceButton}
              onClick={() => {
                acceptAll();
                close();
              }}
            >
              Aceptar todo
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

function currentSelection(): Record<ServiceId, boolean> {
  const services = getConsent()?.services;
  return Object.fromEntries(SERVICES.map((s) => [s.id, services?.[s.id] ?? false])) as Record<ServiceId, boolean>;
}

export default CookieConsent;
