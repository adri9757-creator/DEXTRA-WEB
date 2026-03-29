import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { Scale, Globe, FileText, ArrowRight } from "lucide-react";

const areas = [
  {
    icon: Scale,
    title: "Derecho Penal",
    desc: "Defensa penal estratégica en todo tipo de procedimientos: delitos contra personas, patrimonio, violencia doméstica, tráfico y recursos.",
    link: "/penal/abogados-penalistas-valencia",
  },
  {
    icon: Globe,
    title: "Derecho de Extranjería",
    desc: "Residencia, arraigo, nacionalidad, renovaciones y recursos. Gestionamos tu situación con seguridad y rigor para que vivas tranquilo.",
    link: "/extranjeria/abogado-extranjeria-valencia",
  },
  {
    icon: FileText,
    title: "Derecho Civil",
    desc: "Reclamaciones de cantidades, contratos, arrendamientos y deudas. Defendemos tus intereses con eficacia y claridad.",
    link: "/civil/abogado-reclamacion-cantidades-valencia",
  },
];

const Areas = () => (
  <>
    <section className="pt-32 pb-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold">Áreas de práctica</h1>
        <div className="w-16 h-1 bg-primary mt-6" />
        <p className="mt-6 text-muted-foreground font-sans text-lg max-w-2xl">
          Nos especializamos en tres áreas del derecho donde podemos ofrecer la mayor experiencia y los mejores resultados.
        </p>
      </div>
    </section>

    <div className="container pb-20 md:pb-28">
      <div className="space-y-8">
        {areas.map((area) => (
          <Link
            key={area.title}
            to={area.link}
            className="group flex flex-col md:flex-row gap-6 p-8 border border-border rounded-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
              <area.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{area.title}</h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-4 text-justify">{area.desc}</p>
              <span className="inline-flex items-center gap-1 text-primary font-sans font-semibold text-sm group-hover:gap-2 transition-all">
                Ver más <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
);

export default Areas;
