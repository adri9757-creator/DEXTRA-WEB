import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/areas", label: "Áreas de práctica" },
  { to: "/blog", label: "Publicaciones" },
  { to: "/contacto", label: "Contacto" },
];

/** Página 404. En producción se sirve con estado HTTP 404 (dist/404.html). */
const NotFound = () => (
  <section className="pt-40 pb-28">
    <div className="container max-w-2xl text-center">
      <p className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">Error 404</p>
      <h1 className="mt-4 text-4xl md:text-5xl font-bold">Página no encontrada</h1>
      <p className="mt-6 font-sans text-lg text-muted-foreground">
        La página que buscas no existe o ha cambiado de dirección. Estas secciones pueden ayudarte:
      </p>
      <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="flex items-center justify-between rounded-lg border border-border px-5 py-4 font-sans font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              {l.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default NotFound;
