import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowRight, Scale, Globe, FileText, CheckCircle, HelpCircle, Phone } from "lucide-react";

const faqs = [
  { q: "¿Qué hago si me detienen?", a: "Tienes derecho a no declarar y a contar con un abogado. Llámanos inmediatamente y un penalista estará contigo en la comisaría." },
  { q: "¿Cuánto tarda un juicio penal?", a: "Depende del tipo de procedimiento. Los juicios rápidos se resuelven en días; los procedimientos ordinarios pueden tardar meses." },
  { q: "¿Puedo recurrir una sentencia?", a: "Sí, en la mayoría de casos. Analizamos las opciones de recurso y te aconsejamos sobre la viabilidad." },
  { q: "¿Cuánto cuesta la defensa penal?", a: "Depende de la complejidad. En la primera consulta te damos un presupuesto claro y cerrado." },
  { q: "¿Trabajan con juicios con jurado?", a: "Sí. Tenemos experiencia en juicios con jurado popular en la Audiencia Provincial de Valencia." },
];

const ServicePage = ({
  icon: Icon,
  title,
  h1,
  intro,
  services,
  faqItems,
  caseStudy,
  showImage = false,
  imageName = "service-illustration",
  backgroundColor = "secondary",
}: {
  icon: any;
  title: string;
  h1: string;
  intro: string;
  services: { title: string; desc: string }[];
  faqItems: { q: string; a: string }[];
  caseStudy: { title: string; text: string };
  showImage?: boolean;
  imageName?: string;
  backgroundColor?: string;
}) => (
  <>
    <section className={`pt-32 pb-16 ${backgroundColor === "white" ? "bg-white" : "bg-secondary"}`}>
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <Icon className="w-10 h-10 text-primary" />
            <span className="text-primary font-serif font-bold text-3xl md:text-4xl uppercase tracking-wider">{title}</span>
          </div>
          <div className="w-20 h-1 bg-primary mt-8 mx-auto"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <p className="text-muted-foreground font-sans text-lg leading-relaxed">{intro}</p>
          </div>
          <div className="lg:w-80 lg:flex-shrink-0">
            {showImage ? (
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center overflow-hidden">
                <img 
                  src={`/images/${imageName}.png`} 
                  alt="Service illustration" 
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center">
                <Icon className="w-24 h-24 text-primary/30" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>

    <Section className="bg-secondary">
      <h2 className="text-3xl font-bold mb-12">En qué podemos ayudarte</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="flex gap-4 p-6 bg-background rounded-lg border border-border">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold font-sans mb-1">{s.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed text-justify">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Section className="pt-4">
      <h2 className="text-3xl font-bold mb-4">Caso real</h2>
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        <div className="flex-1 border-l-4 border-primary pl-6">
          <h3 className="font-bold font-sans text-lg mb-2">{caseStudy.title}</h3>
          <p className="text-muted-foreground font-sans leading-relaxed text-justify max-w-md" 
             dangerouslySetInnerHTML={{ 
               __html: caseStudy.text.replace(
                 "Logramos la absolución de un cliente acusado de un delito de lesiones tras demostrar la falta de intencionalidad y la legítima defensa. El tribunal reconoció nuestra argumentación y dictó la libre absolución.",
                 "Logramos la absolución de un cliente acusado de un delito de lesiones tras demostrar la falta de intencionalidad y la legítima defensa."
               )
             }}>
          </p>
          <p className="text-xs text-muted-foreground font-sans mt-4 italic">*Los datos han sido modificados para proteger la identidad del cliente.</p>
        </div>
        <div className="lg:w-[600px] lg:flex-shrink-0 lg:mr-16 lg:mt-0 lg:mb-2">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center overflow-hidden w-full">
            <img 
              src="/images/ChatGPT Image 30 mar 2026, 01_02_16.png" 
              alt="Caso real - Absolución en delito de lesiones" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>

    <Section className="bg-secondary">
      <h2 className="text-3xl font-bold mb-12 text-center">Preguntas frecuentes</h2>
      <div className="max-w-2xl mx-auto grid grid-cols-1 gap-6">
        {faqItems.map((faq, index) => (
          <details key={faq.q} className="group bg-background rounded-lg border border-border p-6 cursor-pointer">
            <summary className="font-sans font-semibold flex items-center gap-3 list-none">
              <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
              {faq.q}
            </summary>
            <p className="mt-4 text-muted-foreground font-sans leading-relaxed pl-8 text-justify">{faq.a}</p>
          </details>
        ))}
      </div>
    </Section>

    <section className="bg-foreground text-background py-20">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas ayuda con tu caso?</h2>
        <p className="text-background/70 font-sans mb-8">Cuéntanos tu situación y te orientamos sin compromiso.</p>
        <a
          href="https://cal.eu/adrian-garcia-lledo-babrwp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold font-sans hover:opacity-90 transition-all hover:scale-105"
        >
          Solicitar consulta <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  </>
);

export const Penal = () => {
  const penalFaqs = [
    { q: "¿Qué hago si me detienen o imputan?", a: "Te asesoramos desde el primer momento con un análisis detallado de tu caso y diseñamos la estrategia de defensa más adecuada para proteger tus derechos constitucionales." },
    { q: "¿Quién me representa en la comisaría?", a: "Nuestro equipo acude inmediatamente a prestar asistencia letrada en todas las diligencias policiales, declaraciones y reconocimientos, garantizando tus derechos desde el minuto uno." },
    { q: "¿Cómo se prepara la defensa para el juicio oral?", a: "Realizamos un análisis exhaustivo de la prueba de cargo y de descargo, preparando la defensa técnica y la argumentación jurídica que mejor se adapte a las circunstancias de tu caso." },
    { q: "¿Puedo recurrir una sentencia penal desfavorable?", a: "Sí. Analizamos las posibilidades de apelación ante la Audiencia Provincial o casación ante el Tribunal Supremo, interponiendo los recursos procesales pertinentes con las mejores perspectivas de éxito." },
    { q: "¿Cuánto tarda un procedimiento penal?", a: "Depende del tipo: procedimientos de juicio rápido se resuelven en días; los ordinarios pueden durar meses. Te informamos de los plazos en cada fase de tu caso específico." },
    { q: "¿Me asisten si soy investigado pero no estoy detenido?", a: "Por supuesto. La defensa técnica es igual de importante en la fase de investigación; te representamos ante el Juzgado de Instrucción en todas las diligencias." },
    { q: "¿Qué estrategia siguen en mi primera consulta?", a: "Estudiamos tu caso concreto, identificamos puntos débiles de la acusación y te explicamos las opciones reales de defensa, con total transparencia sobre expectativas y costes." },
    { q: "¿Cuánto cuesta la defensa penal?", a: "Depende de la complejidad y duración del procedimiento. En la primera consulta gratuita te facilitamos un presupuesto cerrado y detallado antes de cualquier compromiso." }
  ];

  return (
    <ServicePage
      icon={Scale}
      title="Derecho Penal"
      h1="Derecho Penal"
      intro="Si te encuentras en una situación delicada, necesitas un abogado penalista que te defienda con firmeza y estrategia. En Dextra protegemos tus derechos en cada fase del proceso."
      services={[
        { title: "Asesoramiento inicial", desc: "Análisis detallado de tu caso y estrategia de defensa desde el primer momento." },
        { title: "Defensa en comisaría", desc: "Representación legal en todas las diligencias y declaraciones." },
        { title: "Juicio oral", desc: "Defensa técnica y argumentación en el juicio oral." },
        { title: "Recursos", desc: "Apelación y casación de sentencias desfavorables." },
      ]}
      faqItems={penalFaqs}
      caseStudy={{
        title: "Absolución en delito de lesiones",
        text: "Logramos la absolución de un cliente acusado de un delito de lesiones tras demostrar la falta de intencionalidad y la legítima defensa. El tribunal reconoció nuestra argumentación y dictó la libre absolución."
      }}
      showImage={true}
      imageName="penal-illustration"
    />
  );
};

export const Extranjeria = () => {
  const extranjeriaFaqs = [
    { q: "¿Cómo obtener la residencia temporal en España?", a: "Tramitamos autorizaciones de residencia temporal y de larga duración, preparando toda la documentación necesaria para maximizar las probabilidades de aprobación favorable." },
    { q: "¿Qué requisitos tiene el arraigo social, laboral o familiar?", a: "Analizamos tu situación específica (permanencia en España, vínculos familiares o laborales) y preparamos el expediente completo, incluyendo empadronamiento histórico y certificados requeridos." },
    { q: "¿Puedo solicitar la nacionalidad española?", a: "Sí. Gestionamos solicitudes de nacionalidad por residencia, subsanamos defectos formales y presentamos recursos si procede, asesorándote en todo el procedimiento." },
    { q: "¿Cómo renuevo mi permiso de residencia y trabajo?", a: "Te ayudamos a renovar sin contratiempos, verificando medios económicos, contrato laboral y demás requisitos, presentando la solicitud dentro de plazo para evitar interrupciones." },
    { q: "¿Qué plazo tengo si me deniegan una autorización de residencia?", a: "Dispones de un mes para interponer recurso de reposición o alzada; si es necesario, elevamos el caso a vía judicial contencioso-administrativa con solicitud de medidas cautelares." },
    { q: "¿Puedo trabajar mientras espero la resolución de mi renovación?", a: "Sí, si solicitas la renovación en plazo, mantienes tu autorización vigente hasta la resolución; en caso de denegación, solicitamos suspensión cautelar para preservar tu situación." },
    { q: "¿Cuánto tarda el procedimiento de arraigo?", a: "Generalmente entre 3 y 8 meses, dependiendo de la Oficina de Extranjería; realizamos seguimiento activo para agilizar y resolver cualquier incidencia." },
    { q: "¿Cuánto cuestan estos trámites de extranjería?", a: "Los honorarios varían según la complejidad del expediente; en la primera consulta te proporcionamos un presupuesto cerrado, más las tasas administrativas oficiales." }
  ];

  return (
    <ServicePage
      icon={Globe}
      title="Derecho de extranjería"
      h1="Extranjería"
      intro="Sabemos lo que está en juego: tu vida, tu familia, tu futuro en España. Por eso tratamos cada expediente con el máximo rigor y te acompañamos en todo el proceso para que puedas vivir con tranquilidad."
      services={[
        { title: "Residencia", desc: "Tramitación de autorizaciones de residencia temporal y de larga duración." },
        { title: "Arraigo social, laboral y familiar", desc: "Preparamos tu expediente para que todo esté en orden y maximizamos las posibilidades de aprobación." },
        { title: "Nacionalidad española", desc: "Solicitud, subsanación y recursos en procedimientos de nacionalidad." },
        { title: "Renovaciones", desc: "Renovación de permisos de residencia y trabajo sin contratiempos." },
        { title: "Recursos administrativos y judiciales", desc: "Impugnamos denegaciones ante la administración y los tribunales." },
      ]}
      faqItems={extranjeriaFaqs}
      caseStudy={{
        title: "Arraigo social aprobado tras denegación inicial",
        text: "Tras una denegación por falta de documentación, preparamos un recurso sólido con toda la documentación necesaria. El arraigo fue aprobado en segunda instancia.",
      }}
      showImage={true}
      imageName="extranjeria-illustration"
    />
  );
};

export const Civil = () => {
  const civilFaqs = [
    { q: "¿Qué puedo hacer si alguien me debe dinero?", a: "Estudiamos tu caso y la documentación disponible para reclamar la deuda por vía amistosa o judicial, según la cuantía y la situación del deudor." },
    { q: "¿Qué documentación necesito para reclamar una cantidad económica?", a: "Son especialmente útiles contratos, facturas, presupuestos aceptados, correos o mensajes que acrediten el encargo y el impago; en la primera consulta revisamos toda la documentación y valoramos la viabilidad." },
    { q: "¿Cuánto puede durar una reclamación de cantidad?", a: "Depende del importe y del tipo de procedimiento: los procesos más sencillos pueden resolverse en unos meses, mientras que un juicio ordinario puede alargarse más tiempo según la carga del juzgado." },
    { q: "¿Y si el deudor no paga aunque exista sentencia?", a: "Podemos solicitar la ejecución de la sentencia, pedir el embargo de sus bienes y, en su caso, la subasta para cobrar la cantidad reconocida, intereses y costas." },
    { q: "¿Puedo reclamar por cláusulas abusivas en mi contrato?", a: "Sí. Analizamos tus contratos (bancarios, de seguros, suministros, compraventas, alquiler, etc.), identificamos posibles cláusulas abusivas y ejercitamos la acción de nulidad y la devolución de las cantidades que procedan." },
    { q: "¿Qué hago si tengo un problema con un vecino o con la comunidad?", a: "Revisamos la situación (ruidos, filtraciones, obras, uso de zonas comunes) y te asesoramos sobre la estrategia más eficaz: requerimientos formales, mediación o demanda judicial si no es posible el acuerdo." },
    { q: "¿Pueden ayudarme en un procedimiento de desahucio?", a: "Sí. Asistimos tanto a propietarios que necesitan recuperar su vivienda o local por impago o incumplimiento, como a inquilinos que quieren defender sus derechos frente a un desahucio." },
    { q: "¿Cómo se gestionan las indemnizaciones por accidentes y responsabilidad civil?", a: "Valoramos los daños personales y materiales, reunimos informes médicos y periciales y nos encargamos de reclamar a la aseguradora o al responsable la indemnización que te corresponda, negociando o acudiendo a juicio si es necesario." },
    { q: "¿Cuánto cuesta contratar la defensa en un asunto civil?", a: "Los honorarios dependen de la complejidad del caso y de la cuantía reclamada; en la primera consulta te facilitamos un presupuesto cerrado y transparente antes de iniciar cualquier actuación." }
  ];

  return (
    <ServicePage
      icon={FileText}
      title="Derecho Civil"
      h1="Derecho Civil"
      intro="Si te deben dinero, si tienes un problema con un contrato o si necesitas reclamar una indemnización, necesitas un abogado civilista que actúe con rapidez y precisión. En Dextra recuperamos lo que es tuyo."
      services={[
        { title: "Reclamaciones de cantidad", desc: "Recuperación de deudas y reclamaciones de cantidades económicas." },
        { title: "Contratos y condiciones generales", desc: "Análisis de cláusulas abusivas y nulidad de contratos." },
        { title: "Desahucios y conflictos de vecindad", desc: "Defensa en procedimientos de desahucio y mediación en conflictos vecinales." },
        { title: "Indemnizaciones", desc: "Reclamaciones por accidentes de tráfico, accidentes laborales y responsabilidad civil." },
      ]}
      faqItems={civilFaqs}
      caseStudy={{
        title: "Cláusula suelo abusiva declarada nula",
        text: "Un autónomo no había cobrado varias facturas. Iniciamos un monitorio y en menos de dos meses el deudor abonó la totalidad de la deuda más intereses."
      }}
      showImage={true}
      imageName="civil-illustration-new"
      backgroundColor="secondary"
    />
  );
};
