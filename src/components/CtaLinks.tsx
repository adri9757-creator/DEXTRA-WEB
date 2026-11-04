import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { SITE, whatsappLink } from "@/config/site";

interface CtaProps {
  className?: string;
  children: ReactNode;
  message?: string;
}

const NewTabHint = () => <span className="sr-only"> (se abre en una pestaña nueva)</span>;

/**
 * Botón de WhatsApp con el número de src/config/site.ts.
 * Si no hay número configurado, lleva al formulario de contacto.
 */
export const WhatsAppLink = ({ className, children, message }: CtaProps) => {
  const href = whatsappLink(message);
  if (!href) {
    return (
      <Link to="/contacto" className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <NewTabHint />
    </a>
  );
};

/** Enlace a la reserva de citas (cal.eu). Es un enlace: no se incrusta nada. */
export const BookingLink = ({ className, children }: Omit<CtaProps, "message">) => (
  <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
    <NewTabHint />
  </a>
);
