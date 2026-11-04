import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/config/site";

const MobileFixedCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t border-border p-3 flex gap-3">
    <a
      href={`tel:${SITE.phone.tel}`}
      className="flex-1 inline-flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-md text-sm font-semibold font-sans"
    >
      <Phone className="w-4 h-4" aria-hidden="true" />
      Llamar
    </a>
    <Link
      to="/contacto"
      className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-interactive text-brand-interactive-foreground py-3 rounded-md text-sm font-semibold font-sans"
    >
      <MessageCircle className="w-4 h-4" aria-hidden="true" />
      Escribir
    </Link>
  </div>
);

export default MobileFixedCTA;
