import { useState } from "react";
import Section from "@/components/Section";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", area: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado. Te contactaremos pronto.");
    setForm({ nombre: "", email: "", telefono: "", area: "", mensaje: "" });
  };

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold">Contacto</h1>
          <div className="w-16 h-1 bg-primary mt-6" />
          <p className="mt-6 text-muted-foreground font-sans text-lg max-w-2xl">
            Cuéntanos tu caso y te orientamos sin compromiso.
          </p>
        </div>
      </section>

      <div className="container pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-sans text-sm font-medium mb-2">Nombre *</label>
              <input
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full border border-border rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                maxLength={100}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-sans text-sm font-medium mb-2">Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                  maxLength={255}
                />
              </div>
              <div>
                <label className="block font-sans text-sm font-medium mb-2">Teléfono</label>
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="w-full border border-border rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
                />
              </div>
            </div>
            <div>
              <label className="block font-sans text-sm font-medium mb-2">Área</label>
              <select
                value={form.area}
                onChange={(e) => setForm({ ...form, area: e.target.value })}
                className="w-full border border-border rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background"
              >
                <option value="">Selecciona un área</option>
                <option value="penal">Derecho Penal</option>
                <option value="extranjeria">Extranjería</option>
                <option value="civil">Derecho Civil</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block font-sans text-sm font-medium mb-2">Mensaje *</label>
              <textarea
                required
                rows={5}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full border border-border rounded-md px-4 py-3 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-background resize-none"
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold font-sans transition-all hover:opacity-90 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Send className="w-4 h-4" />
              Enviar mensaje
            </button>
          </form>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "Gran Vía Marques del Turia 49, Valencia 46005" },
                  { icon: Phone, text: "+34 624 164 536", href: "tel:+34624164536" },
                  { icon: Mail, text: "info@dextralawfirm.com", href: "mailto:info@dextralawfirm.com" },
                  { icon: Clock, text: "Lunes a jueves: 9:00 – 18:00 | Viernes: 9:00 – 15:00" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    {item.href ? (
                      <a href={item.href} className="font-sans text-foreground hover:text-primary transition-colors">{item.text}</a>
                    ) : (
                      <span className="font-sans text-muted-foreground">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <iframe 
                src="https://www.google.com/maps?q=Gran+Via+Marques+del+Turia+49,+Valencia+46005&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Google Maps - Dextra Law Firm"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
