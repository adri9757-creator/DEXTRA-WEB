import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Calendar, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.webp";
import { BookingLink, WhatsAppLink } from "@/components/CtaLinks";

const navItems = [
  { label: "Despacho", href: "/despacho" },
  { label: "Áreas", href: "/areas", hasDropdown: true },
  { label: "Equipo", href: "/equipo" },
  { label: "Casos", href: "/casos" },
  { label: "Publicaciones", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const servicesItems = [
  { label: "Derecho Penal", href: "/penal/abogados-penalistas-valencia" },
  { label: "Derecho de Extranjería", href: "/extranjeria/abogado-extranjeria-valencia" },
  { label: "Derecho Civil", href: "/civil/abogado-reclamacion-cantidades-valencia" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium font-sans tracking-wide transition-colors hover:text-primary ${
    isActive ? "text-primary" : "text-foreground"
  }`;

const Header = () => {
  const { pathname } = useLocation();
  // Cada menú recuerda en qué página se abrió: al navegar, se cierra solo.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const [dropdownOn, setDropdownOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const dropdownOpen = dropdownOn === pathname;
  const setOpen = (value: boolean) => setOpenOn(value ? pathname : null);
  const setDropdownOpen = (value: boolean | ((v: boolean) => boolean)) =>
    setDropdownOn((typeof value === "function" ? value(dropdownOpen) : value) ? pathname : null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Escape cierra el desplegable y devuelve el foco a su botón.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOn(null);
        dropdownRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [dropdownOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex-shrink-0" aria-label="Dextra Law Firm, ir al inicio">
          <img src={logo} alt="" width={300} height={162} className="h-16 w-auto" />
        </Link>

        {/* Navegación de escritorio */}
        <nav aria-label="Principal" className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <li
                  key={item.href}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center gap-1">
                    <NavLink to={item.href} className={navLinkClass}>
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      className="rounded p-1 text-foreground hover:text-primary"
                      aria-expanded={dropdownOpen}
                      aria-controls="menu-areas"
                      aria-label="Mostrar áreas de práctica"
                      onClick={() => setDropdownOpen((v) => !v)}
                    >
                      <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                    </button>
                  </div>
                  <ul
                    id="menu-areas"
                    hidden={!dropdownOpen}
                    className="absolute top-full left-1/2 -translate-x-1/2 bg-background border border-border rounded-md shadow-lg py-2 min-w-[220px] z-50"
                  >
                    {servicesItems.map((service) => (
                      <li key={service.href}>
                        <Link
                          to={service.href}
                          className="block px-4 py-2 text-sm font-sans hover:bg-secondary hover:text-primary transition-colors whitespace-nowrap text-center"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <NavLink to={item.href} className={navLinkClass}>
                    {item.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
          <div className="flex items-center gap-3">
            <WhatsAppLink className="inline-flex items-center gap-2 bg-brand-interactive text-brand-interactive-foreground px-5 py-2.5 rounded-md text-sm font-semibold font-sans transition-all hover:bg-brand-interactive-hover">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Contáctanos
            </WhatsAppLink>
            <BookingLink className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-semibold font-sans transition-all hover:bg-foreground/85">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Agenda tu cita
            </BookingLink>
          </div>
        </nav>

        {/* Botón de menú móvil */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-movil"
        >
          {open ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Menú móvil */}
      <div id="menu-movil" hidden={!open} className="lg:hidden bg-background border-t border-border max-h-[calc(100vh-5rem)] overflow-y-auto">
        <nav aria-label="Principal (móvil)" className="container py-6">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink to={item.href} className={({ isActive }) => `block text-base font-medium font-sans py-2 transition-colors hover:text-primary ${isActive ? "text-primary" : ""}`}>
                  {item.label}
                </NavLink>
                {item.hasDropdown && (
                  <ul className="ml-4 border-l border-border pl-4">
                    {servicesItems.map((s) => (
                      <li key={s.href}>
                        <NavLink to={s.href} className="block py-1.5 text-sm font-sans text-muted-foreground hover:text-primary">
                          {s.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-6">
            <WhatsAppLink className="inline-flex items-center justify-center gap-2 bg-brand-interactive text-brand-interactive-foreground px-5 py-3 rounded-md text-sm font-semibold font-sans">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Contáctanos
            </WhatsAppLink>
            <BookingLink className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-md text-sm font-semibold font-sans">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Agenda tu cita
            </BookingLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
