/**
 * Gestor de consentimiento de cookies y contenido de terceros.
 *
 * Diseñado según la "Guía sobre el uso de las cookies" de la AEPD:
 *  - Nada no esencial se carga antes del consentimiento (los componentes
 *    consultan `hasConsent()` antes de inyectar scripts o iframes).
 *  - Consentimiento granular por servicio y por categoría.
 *  - Aceptar y rechazar tienen el mismo peso y el consentimiento puede
 *    retirarse en cualquier momento (enlace "Configurar cookies" en el pie).
 *  - La elección se guarda en localStorage (almacenamiento técnico exento,
 *    necesario para recordar la propia decisión) y caduca a los 12 meses.
 *
 * Para añadir un servicio nuevo: declararlo en SERVICES con su categoría,
 * documentarlo en la Política de Cookies y envolverlo en <ConsentGate>.
 */

export type CategoryId = "thirdParty" | "analytics" | "marketing";
export type ServiceId = "googleMaps" | "elfsight";

export interface ServiceInfo {
  id: ServiceId;
  name: string;
  provider: string;
  purpose: string;
  category: CategoryId;
}

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "thirdParty",
    name: "Contenido de terceros",
    description:
      "Mapas y reseñas que se cargan desde servidores de otras empresas. Al activarlos, esos proveedores reciben tu dirección IP y datos técnicos del navegador y pueden instalar sus propias cookies.",
  },
  // Las categorías sin servicios no se muestran. Hoy no se usan cookies
  // analíticas ni publicitarias; si se añaden, declararlas aquí y en SERVICES.
  { id: "analytics", name: "Analíticas", description: "Medición del uso del sitio." },
  { id: "marketing", name: "Publicidad", description: "Publicidad personalizada." },
];

export const SERVICES: ServiceInfo[] = [
  {
    id: "googleMaps",
    name: "Google Maps",
    provider: "Google Ireland Limited",
    purpose: "Mostrar el mapa con la ubicación del despacho en la página de contacto.",
    category: "thirdParty",
  },
  {
    id: "elfsight",
    name: "Reseñas de Google (widget de Elfsight)",
    provider: "Elfsight [POR_CONFIRMAR: razón social y domicilio del proveedor]",
    purpose: "Mostrar en la página de inicio las reseñas públicas del despacho en Google.",
    category: "thirdParty",
  },
];

/** Categorías que tienen al menos un servicio (las que se muestran al usuario). */
export const ACTIVE_CATEGORIES = CATEGORIES.filter((c) => SERVICES.some((s) => s.category === c.id));

/** Sube este número si cambian los servicios: se volverá a pedir el consentimiento. */
export const CONSENT_VERSION = 1;
export const STORAGE_KEY = "dextra_consent";
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // 12 meses

export interface ConsentRecord {
  version: number;
  /** ISO 8601 */
  date: string;
  services: Record<ServiceId, boolean>;
}

type Listener = () => void;
const listeners = new Set<Listener>();
let cache: ConsentRecord | null | undefined;

function emptyServices(value: boolean): Record<ServiceId, boolean> {
  return Object.fromEntries(SERVICES.map((s) => [s.id, value])) as Record<ServiceId, boolean>;
}

function read(): ConsentRecord | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (Date.now() - new Date(parsed.date).getTime() > MAX_AGE_MS) return null;
    return { ...parsed, services: { ...emptyServices(false), ...parsed.services } };
  } catch {
    return null;
  }
}

/** Decisión guardada, o null si el usuario aún no ha decidido (o caducó). */
export function getConsent(): ConsentRecord | null {
  if (cache === undefined) cache = typeof window === "undefined" ? null : read();
  return cache;
}

export function hasConsent(service: ServiceId): boolean {
  return getConsent()?.services[service] === true;
}

export function saveConsent(services: Partial<Record<ServiceId, boolean>>): void {
  const previous = getConsent();
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    date: new Date().toISOString(),
    services: { ...emptyServices(false), ...previous?.services, ...services },
  };
  const revoked = previous ? SERVICES.some((s) => previous.services[s.id] && !record.services[s.id]) : false;
  cache = record;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* almacenamiento bloqueado: la decisión vale para esta visita */
  }
  listeners.forEach((l) => l());
  // Un script de terceros ya ejecutado no se puede "descargar": si se retira
  // un consentimiento, se recarga la página para que deje de ejecutarse.
  if (revoked) window.location.reload();
}

export const acceptAll = () => saveConsent(emptyServices(true));
export const rejectAll = () => saveConsent(emptyServices(false));

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Abre el panel de configuración desde cualquier sitio (p. ej. el pie). */
export const OPEN_SETTINGS_EVENT = "dextra:open-cookie-settings";
export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

/**
 * Elimina la cookie que dejaba el anterior gestor (CookieScript) en los
 * navegadores de visitas previas, para que no quede información obsoleta.
 */
export function removeLegacyCookies(): void {
  for (const name of ["CookieScriptConsent"]) {
    if (document.cookie.split("; ").some((c) => c.startsWith(`${name}=`))) {
      const host = window.location.hostname;
      document.cookie = `${name}=; Max-Age=0; path=/`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${host}`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${host}`;
    }
  }
}

/** Solo para tests. */
export function __resetConsentCache(): void {
  cache = undefined;
}
