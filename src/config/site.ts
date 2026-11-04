/**
 * Configuración central del sitio.
 *
 * Todos los datos de contacto, enlaces externos y datos del titular se leen
 * desde aquí para no repetirlos (y no desincronizarlos) en cada página.
 *
 * Convención: cualquier dato pendiente de confirmar se marca con
 * "[POR_CONFIRMAR]". Los componentes que dependen de un dato opcional
 * (redes sociales, WhatsApp) lo ocultan o usan una alternativa si está vacío.
 */

import business from "./business.json";

export const SITE_URL: string = (import.meta.env.VITE_SITE_URL || "https://dextralawfirm.com").replace(/\/$/, "");

export const SITE = {
  name: business.name,

  /** Titular del sitio web (LSSI-CE art. 10). Datos ya publicados en el Aviso Legal. */
  owner: {
    name: "Adrián García Lledó",
    nif: "35597868D",
    address: "Gran Vía Marqués del Turia 49, -1, 46005 Valencia",
    bar: "Ilustre Colegio de la Abogacía de Valencia (ICAV)",
    barNumber: "19.921",
    degree: "Graduado en Derecho y Máster de Acceso a la Abogacía y Procura, título expedido en España.",
  },

  address: {
    street: business.address.streetAddress,
    postalCode: business.address.postalCode,
    locality: business.address.addressLocality,
    region: business.address.addressRegion,
    country: business.address.addressCountry,
  },

  phone: { display: "+34 624 164 536", tel: business.telephone },
  email: business.email,

  /**
   * Número de WhatsApp en formato internacional sin "+" ni espacios.
   * [POR_CONFIRMAR] Se usa el número que ya figuraba en la cabecera y en los
   * casos (624 164 536). Sustituir si el WhatsApp del despacho es otro.
   * Si se deja vacío, los botones de WhatsApp llevan a /contacto.
   */
  whatsapp: "34624164536",
  whatsappMessage: "Hola, necesito información sobre sus servicios legales",

  /** Enlace de reserva de citas (se abre en cal.eu, no se incrusta). */
  bookingUrl: "https://cal.eu/adrian-garcia-lledo-babrwp",

  hours: {
    display: "Lunes a jueves: 9:00 – 18:00 | Viernes: 9:00 – 15:00",
    /** Formato schema.org para el JSON-LD. */
    schema: business.openingHours,
  },

  /**
   * Perfil público de reseñas en Google.
   * [POR_CONFIRMAR] Sustituir por el enlace directo de la ficha de Google Business.
   */
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Dextra%20Law%20Firm%20Valencia",

  /** ID del widget de Elfsight (reseñas de Google). Solo se carga con consentimiento. */
  elfsightWidgetId: "e9a2697c-b453-43a5-86d4-6bcf43e3807e",

  /**
   * Redes sociales. Se muestran en el pie solo si tienen URL.
   * [POR_CONFIRMAR] Añadir las URL reales si existen perfiles.
   */
  social: {
    linkedin: "",
    instagram: "",
  },
} as const;

/** Enlace de WhatsApp, o null si no hay número configurado. */
export function whatsappLink(message: string = SITE.whatsappMessage): string | null {
  const digits = SITE.whatsapp.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
