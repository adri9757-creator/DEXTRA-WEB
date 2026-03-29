import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CasoEstafa from "./casos/CasoEstafa";
import CasoArraigo from "./casos/CasoArraigo";
import CasoReclamacion from "./casos/CasoReclamacion";
import CasoLesiones from "./casos/CasoLesiones";
import CasoTeletrabajador from "./casos/CasoTeletrabajador";
import CasoReclamacionImpago from "./casos/CasoReclamacionImpago";

const cases = [
  { area: "Penal", title: "Absolución por delito leve de estafa", text: "Cliente acusado de estafa en una compraventa online fue absuelto tras demostrar la ausencia de engaño y la legitimidad de la operación.", link: "/casos/absolucion-delito-leve-estafa" },
  { area: "Extranjería", title: "Arraigo social aprobado", text: "Tras una denegación inicial, recurrimos y logramos la autorización de residencia por arraigo social para una familia.", link: "/casos/arraigo-social-aprobado" },
  { area: "Civil", title: "Reclamación de cantidad desestimada", text: "Demanda de banco por préstamo impagado desestimada tras demostrar la falta de prueba y la prescripción de la acción.", link: "/casos/reclamacion-cantidad-desestimada" },
  { area: "Penal", title: "Absolución por delito de lesiones", text: "Nuestro cliente fue absuelto tras acreditar que actuó en legítima defensa frente a una agresión iniciada por la otra parte.", link: "/casos/absolucion-delito-lesiones" },
  { area: "Extranjería", title: "Residencia de teletrabajador internacional tras recurso", text: "Recurso de alzada exitoso que revocó la denegación de autorización de residencia como teletrabajador internacional.", link: "/casos/residencia-teletrabajador-internacional" },
  { area: "Civil", title: "Reclamación de cantidad por impago", text: "Sentencia favorable que condenó a la empresa deudora al pago íntegro de las facturas pendientes, más intereses y costas.", link: "/casos/reclamacion-cantidad-impago" },
];

const Casos = () => (
  <>
    <section className="pt-32 pb-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold">Casos de éxito</h1>
        <div className="w-16 h-1 bg-primary mt-6" />
        <p className="mt-6 text-muted-foreground font-sans text-lg max-w-2xl text-justify">
          Resultados reales que demuestran nuestra forma de trabajar.
        </p>
      </div>
    </section>

    <div className="container pb-20 md:pb-28">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {cases.map((caseItem, index) => (
          <Link 
            key={index}
            to={caseItem.link}
            className="group bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 block"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block bg-primary/10 text-primary font-sans text-xs font-semibold px-3 py-1 rounded-full">
                {caseItem.area}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {caseItem.title}
            </h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
              {caseItem.text}
            </p>
            <div className="flex items-center gap-2 text-primary font-sans text-sm font-semibold group-hover:gap-3 transition-all">
              <span>Ver caso completo</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
      <p className="text-xs text-muted-foreground font-sans mt-12 italic text-center">
        *Todos los datos han sido modificados para proteger la identidad y privacidad de nuestros clientes. Los resultados pasados no garantizan resultados futuros.
      </p>
    </div>

    <section className="bg-foreground text-background py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-6">¿Quieres que tu caso sea el próximo éxito?</h2>
        <a
          href="https://wa.me/34624164536"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold font-sans hover:opacity-90 transition-all hover:scale-105"
        >
          Contactar <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  </>
);

export default Casos;
