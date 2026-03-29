import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle, Calendar, ChevronDown } from "lucide-react";
import logo from "@/assets/Logo.png";
import { openWhatsApp } from "@/utils/whatsapp";

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

const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <button onClick={handleLogoClick} className="flex-shrink-0">
          <img src={logo} alt="Dextra Law Firm" className="h-16 w-auto" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.href} className="relative">
              {item.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="px-2 py-1">
                    <Link
                      to={item.href}
                      className={`text-sm font-medium font-sans tracking-wide transition-colors hover:text-primary flex items-center gap-1 ${
                        location.pathname === item.href ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </Link>
                  </div>
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-background border border-border rounded-md shadow-lg py-2 min-w-[200px] z-50">
                      {servicesItems.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-4 py-2 text-sm font-sans hover:bg-accent hover:text-accent-foreground transition-colors whitespace-nowrap text-center"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm font-medium font-sans tracking-wide transition-colors hover:text-primary ${
                    location.pathname === item.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold font-sans transition-all hover:opacity-90 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Contáctanos
            </button>
            <a
              href="https://cal.eu/adrian-garcia-lledo-babrwp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-md text-sm font-semibold font-sans transition-all hover:opacity-90 hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              Agenda tu cita
            </a>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium font-sans py-2 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <button
                onClick={() => {
                  openWhatsApp();
                  setOpen(false);
                }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold font-sans"
              >
                <MessageCircle className="w-4 h-4" />
                Contáctanos
              </button>
              <a
                href="https://cal.eu/adrian-garcia-lledo-babrwp"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-md text-sm font-semibold font-sans"
              >
                <Calendar className="w-4 h-4" />
                Agenda tu cita
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
