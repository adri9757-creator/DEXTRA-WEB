import { ExternalLink } from "lucide-react";
import ConsentGate from "@/components/consent/ConsentGate";
import { SITE } from "@/config/site";

const query = encodeURIComponent(SITE.address.mapQuery);

/** Mapa de Google bloqueado hasta consentimiento; sin él, enlace externo. */
const GoogleMap = () => (
  <ConsentGate
    service="googleMaps"
    label="el mapa"
    className="aspect-video"
    fallback={
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-semibold text-foreground underline underline-offset-2"
      >
        Abrir la ubicación en Google Maps
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">(se abre en una pestaña nueva)</span>
      </a>
    }
  >
    <div className="aspect-video overflow-hidden rounded-lg border border-border">
      <iframe
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title={`Mapa: ${SITE.name}, ${SITE.address.display}`}
        className="h-full w-full"
      />
    </div>
  </ConsentGate>
);

export default GoogleMap;
