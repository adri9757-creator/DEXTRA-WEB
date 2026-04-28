import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Dextra Law Firm</h3>
          <p className="text-background/70 font-sans text-sm leading-relaxed">
            Despacho de abogados en Valencia. Derecho penal, derecho de extranjería y derecho civil con estrategia y claridad.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="LinkedIn" className="text-background/60 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-background/60 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Areas */}
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">Áreas</h4>
          <ul className="space-y-3 font-sans text-sm">
            <li><Link to="/penal/abogados-penalistas-valencia" className="text-background/70 hover:text-primary transition-colors">Derecho Penal</Link></li>
            <li><Link to="/extranjeria/abogado-extranjeria-valencia" className="text-background/70 hover:text-primary transition-colors">Derecho de Extranjería</Link></li>
            <li><Link to="/civil/abogado-reclamacion-cantidades-valencia" className="text-background/70 hover:text-primary transition-colors">Derecho Civil</Link></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">Despacho</h4>
          <ul className="space-y-3 font-sans text-sm">
            <li><Link to="/despacho" className="text-background/70 hover:text-primary transition-colors">Quiénes somos</Link></li>
            <li><Link to="/equipo" className="text-background/70 hover:text-primary transition-colors">Equipo</Link></li>
            <li><Link to="/casos" className="text-background/70 hover:text-primary transition-colors">Casos de éxito</Link></li>
            <li><Link to="/blog" className="text-background/70 hover:text-primary transition-colors">Publicaciones</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">Contacto</h4>
          <ul className="space-y-3 font-sans text-sm">
            <li className="flex items-start gap-2 text-background/70">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Gran Vía Marques del Turia 49, Valencia 46005</span>
            </li>
            <li>
              <a href="tel:+34624164536" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +34 624 164 536
              </a>
            </li>
            <li>
              <a href="mailto:info@dextralawfirm.com" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@dextralawfirm.com
              </a>
            </li>
            <li className="flex items-start gap-2 text-background/70">
              <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Lunes a jueves: 9:00 - 18:00 | Viernes: 9:00 - 15:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-background/50 font-sans text-xs">
          © {new Date().getFullYear()} Dextra Law Firm. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 font-sans text-xs text-background/50">
          <Link to="/aviso-legal" className="hover:text-background/80 transition-colors">Aviso legal</Link>
          <Link to="/privacidad" className="hover:text-background/80 transition-colors">Privacidad</Link>
          <Link to="/cookies" className="hover:text-background/80 transition-colors">Cookies</Link>
          <Link to="/politica-cookies" className="hover:text-background/80 transition-colors">Política de Cookies</Link>
          <Link to="/condiciones" className="hover:text-background/80 transition-colors">Condiciones</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
