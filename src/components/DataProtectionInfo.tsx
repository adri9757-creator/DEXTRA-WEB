import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { SITE } from "@/config/site";

export const DATA_INFO_BUTTON_ID = "info-datos-boton";
export const DATA_INFO_PANEL_ID = "info-datos-contenido";

interface DataProtectionInfoProps {
  open: boolean;
  onToggle: () => void;
}

/**
 * Primera capa de información sobre protección de datos (RGPD art. 13,
 * LOPDGDD art. 11), en un acordeón cerrado por defecto. El contenido sigue en
 * el DOM aunque esté cerrado (atributo hidden), y el botón expone su estado con
 * aria-expanded y aria-controls.
 */
const DataProtectionInfo = ({ open, onToggle }: DataProtectionInfoProps) => (
  <div className="rounded-md border border-border bg-secondary font-sans text-sm text-foreground">
    <h2 className="font-sans text-sm font-semibold">
      <button
        id={DATA_INFO_BUTTON_ID}
        type="button"
        aria-expanded={open}
        aria-controls={DATA_INFO_PANEL_ID}
        onClick={onToggle}
        className="flex min-h-11 w-full items-center justify-between gap-3 rounded-md px-4 py-3 text-left hover:bg-background/60"
      >
        Información básica sobre protección de datos
        <ChevronDown className={`h-4 w-4 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
    </h2>
    <div id={DATA_INFO_PANEL_ID} role="region" aria-labelledby={DATA_INFO_BUTTON_ID} hidden={!open} className="border-t border-border px-4 py-3 text-xs leading-relaxed">
      <dl className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1.5">
        <dt className="font-semibold">Responsable</dt>
        <dd>{SITE.owner.name} ({SITE.name}).</dd>
        <dt className="font-semibold">Finalidad</dt>
        <dd>Responder a tu consulta.</dd>
        <dt className="font-semibold">Legitimación</dt>
        <dd>Tu solicitud de información (medidas precontractuales, art. 6.1.b RGPD).</dd>
        <dt className="font-semibold">Destinatarios</dt>
        <dd>No se ceden datos salvo obligación legal. Intervienen proveedores de alojamiento y correo como encargados del tratamiento.</dd>
        <dt className="font-semibold">Derechos</dt>
        <dd>Acceso, rectificación, supresión, oposición, limitación y portabilidad, y reclamación ante la AEPD.</dd>
      </dl>
      <p className="mt-2">
        Más información en la{" "}
        <Link to="/privacidad" className="font-semibold underline underline-offset-2">Política de privacidad</Link>.
      </p>
    </div>
  </div>
);

export default DataProtectionInfo;
