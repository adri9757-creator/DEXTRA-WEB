import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import ConsentGate from "@/components/consent/ConsentGate";
import { SITE } from "@/config/site";

const ELFSIGHT_SCRIPT = "https://static.elfsight.com/platform/platform.js";

/**
 * Elfsight inyecta un JSON-LD de tipo "Product" con la valoración media.
 * Google considera ese marcado de reseñas propias ("self-serving") contrario a
 * sus directrices, así que se elimina en cuanto aparece. El marcado correcto
 * del despacho (LegalService) se genera en el HTML estático.
 *
 * Recomendado además: desactivar "Rich snippets" en el editor del widget.
 */
function stripElfsightStructuredData(): MutationObserver {
  const strip = () => {
    document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]').forEach((el) => {
      if (el.dataset.owner === "dextra") return;
      try {
        const data = JSON.parse(el.textContent || "{}");
        const types = [data["@type"], ...(Array.isArray(data["@graph"]) ? data["@graph"].map((n) => n["@type"]) : [])];
        if (types.includes("Product") || "aggregateRating" in data) el.remove();
      } catch {
        /* no es JSON válido: no es nuestro, se deja */
      }
    });
  };
  strip();
  const observer = new MutationObserver(strip);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  return observer;
}

const ElfsightWidget = () => {
  useEffect(() => {
    const observer = stripElfsightStructuredData();
    if (!document.querySelector(`script[src="${ELFSIGHT_SCRIPT}"]`)) {
      const s = document.createElement("script");
      s.src = ELFSIGHT_SCRIPT;
      s.async = true;
      document.body.appendChild(s);
    }
    return () => observer.disconnect();
  }, []);

  return <div className={`elfsight-app-${SITE.elfsightWidgetId}`} data-elfsight-app-lazy />;
};

const ReviewsLink = () => (
  <a
    href={SITE.googleReviewsUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 font-semibold text-foreground underline underline-offset-2"
  >
    Ver las reseñas directamente en Google
    <ExternalLink className="h-4 w-4" aria-hidden="true" />
    <span className="sr-only">(se abre en una pestaña nueva)</span>
  </a>
);

/** Reseñas reales de Google. Sin consentimiento, solo un enlace a Google. */
const GoogleReviews = () => (
  <ConsentGate service="elfsight" label="las reseñas" fallback={<ReviewsLink />} className="min-h-[14rem]">
    <ElfsightWidget />
  </ConsentGate>
);

export default GoogleReviews;
