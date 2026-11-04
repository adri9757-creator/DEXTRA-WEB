import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "@/config/site";
import { openCookieSettings } from "@/lib/consent";

const socialLinks = [
  { href: SITE.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: SITE.social.instagram, label: "Instagram", Icon: Instagram },
].filter((s) => s.href);

const linkClass = "text-background/75 hover:text-primary transition-colors";
const legalClass = "text-background/70 hover:text-background transition-colors underline-offset-2 hover:underline";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <p className="font-serif text-2xl font-bold mb-4">{SITE.name}</p>
          <p className="text-background/75 font-sans text-sm leading-relaxed">
            Despacho de abogados en Valencia. Derecho penal, derecho de extranjería y derecho civil con estrategia y claridad.
          </p>
          {socialLinks.length > 0 && (
            <ul className="flex gap-4 mt-6">
              {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">{label} (se abre en una pestaña nueva)</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-labelledby="footer-areas">
          <h2 id="footer-areas" className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-background/85">Áreas</h2>
          <ul className="space-y-3 font-sans text-sm">
            <li><Link to="/penal/abogados-penalistas-valencia" className={linkClass}>Derecho Penal</Link></li>
            <li><Link to="/extranjeria/abogado-extranjeria-valencia" className={linkClass}>Derecho de Extranjería</Link></li>
            <li><Link to="/civil/abogado-reclamacion-cantidades-valencia" className={linkClass}>Derecho Civil</Link></li>
          </ul>
        </nav>

        <nav aria-labelledby="footer-despacho">
          <h2 id="footer-despacho" className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-background/85">Despacho</h2>
          <ul className="space-y-3 font-sans text-sm">
            <li><Link to="/despacho" className={linkClass}>Quiénes somos</Link></li>
            <li><Link to="/equipo" className={linkClass}>Equipo</Link></li>
            <li><Link to="/casos" className={linkClass}>Casos</Link></li>
            <li><Link to="/blog" className={linkClass}>Publicaciones</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="font-sans font-semibold text-sm uppercase tracking-wider mb-4 text-background/85">Contacto</h2>
          <address className="not-italic">
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex items-start gap-2 text-background/75">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{SITE.address.street}, {SITE.address.locality} {SITE.address.postalCode}</span>
              </li>
              <li>
                <a href={`tel:${SITE.phone.tel}`} className={`flex items-center gap-2 ${linkClass}`}>
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {SITE.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className={`flex items-center gap-2 ${linkClass}`}>
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/75">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{SITE.hours.display}</span>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-background/15 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-background/70 font-sans text-xs">
          © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
        </p>
        <nav aria-label="Información legal">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans text-xs">
            <li><Link to="/aviso-legal" className={legalClass}>Aviso legal</Link></li>
            <li><Link to="/privacidad" className={legalClass}>Privacidad</Link></li>
            <li><Link to="/cookies" className={legalClass}>Cookies</Link></li>
            <li>
              <button type="button" onClick={openCookieSettings} className={legalClass}>
                Configurar cookies
              </button>
            </li>
            <li><Link to="/condiciones" className={legalClass}>Condiciones</Link></li>
            <li><Link to="/seguridad" className={legalClass}>Seguridad</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
