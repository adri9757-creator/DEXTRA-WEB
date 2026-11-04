import type { ReactNode } from "react";
import { saveConsent, SERVICES, openCookieSettings, type ServiceId } from "@/lib/consent";
import { useConsent } from "./useConsent";

interface ConsentGateProps {
  service: ServiceId;
  /** Contenido de terceros: solo se monta con consentimiento. */
  children: ReactNode;
  /** Qué verá el usuario al activarlo, p. ej. "el mapa". */
  label: string;
  /** Alternativa útil sin cargar nada de terceros (enlace externo, dirección...). */
  fallback?: ReactNode;
  className?: string;
}

/**
 * Bloqueo previo de contenido de terceros: hasta que el usuario lo permite,
 * se muestra un marcador local y no se hace ninguna petición al proveedor.
 */
const ConsentGate = ({ service, children, label, fallback, className = "" }: ConsentGateProps) => {
  const consent = useConsent();
  const info = SERVICES.find((s) => s.id === service)!;

  if (consent?.services[service]) return <>{children}</>;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border bg-secondary p-6 text-center font-sans text-sm ${className}`}
    >
      <p className="max-w-md text-muted-foreground">
        Para ver {label} necesitamos cargar contenido de <strong className="text-foreground">{info.name}</strong>{" "}
        ({info.provider}), que recibirá tu dirección IP y puede instalar sus propias cookies.
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => saveConsent({ [service]: true })}
          className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-foreground bg-background px-5 py-2 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Permitir y cargar {label}
        </button>
        <button
          type="button"
          onClick={openCookieSettings}
          className="inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2 font-semibold text-foreground underline underline-offset-2"
        >
          Configurar cookies
        </button>
      </div>
      {fallback}
    </div>
  );
};

export default ConsentGate;
