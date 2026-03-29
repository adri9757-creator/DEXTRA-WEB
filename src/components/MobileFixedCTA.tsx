import { Phone, MessageCircle } from "lucide-react";

const MobileFixedCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background border-t border-border p-3 flex gap-3">
    <a
      href="tel:+34624164536"
      className="flex-1 inline-flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-md text-sm font-semibold font-sans"
    >
      <Phone className="w-4 h-4" />
      Llamar
    </a>
    <a
      href="/contacto"
      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md text-sm font-semibold font-sans"
    >
      <MessageCircle className="w-4 h-4" />
      Escribir
    </a>
  </div>
);

export default MobileFixedCTA;
