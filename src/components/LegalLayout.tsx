import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}

/** Plantilla común de las páginas legales (estilos en .legal-content, index.css). */
const LegalLayout = ({ title, intro, updated, children }: LegalLayoutProps) => (
  <>
    <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-strong font-sans font-semibold text-sm mb-6 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Volver al inicio
        </Link>
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-muted-foreground font-sans leading-relaxed">{intro}</p>
          <p className="mt-6 text-sm text-muted-foreground font-sans">Última actualización: {updated}</p>
        </div>
      </div>
    </section>
    <div className="container py-12 md:py-16">
      <article className="legal-content mx-auto max-w-4xl rounded-lg border border-border bg-background p-6 md:p-12">{children}</article>
    </div>
  </>
);

export default LegalLayout;
