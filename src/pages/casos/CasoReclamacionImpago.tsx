import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Scale, CheckCircle } from "lucide-react";

const CasoReclamacionImpago = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container">
          <Link 
            to="/casos" 
            className="inline-flex items-center gap-2 text-primary font-sans font-semibold text-sm mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Casos de Éxito
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-primary/10 text-primary font-sans text-xs font-semibold px-3 py-1 rounded-full">Civil</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground font-sans text-sm">
                <Calendar className="w-4 h-4" /> 2024
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reclamación de cantidad por impago</h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Sentencia favorable que condenó a la empresa deudora al pago íntegro de las facturas pendientes, más intereses y costas.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-sans">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4" />
                <span>Área: Derecho Civil</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Resultado: Sentencia favorable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-background rounded-lg border border-border p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Contexto y hechos</h2>
              
              <div className="space-y-6 text-foreground font-sans leading-relaxed text-justify">
                <p>
                  Nuestro cliente, autónomo dedicado a la prestación de servicios profesionales para empresas, acudió a nuestro despacho tras varios intentos fallidos de cobrar las facturas impagadas por una mercantil con la que había trabajado durante más de un año.
                </p>
                
                <p>
                  Pese a haberse prestado los servicios en tiempo y forma, y a existir correos electrónicos de conformidad y ausencia de quejas, la empresa dejó sin pagar diversas facturas mensuales, acumulando una deuda superior a 8.000 euros.
                </p>
                
                <p>
                  Tras múltiples requerimientos amistosos por email y burofax, sin respuesta efectiva, se decidió interponer demanda civil de reclamación de cantidad por incumplimiento contractual ante el Juzgado de Primera Instancia.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Posición de la parte demandada</h3>
                <p>
                  En su contestación a la demanda, la empresa deudora trató de oponerse alegando genéricamente que los servicios no se habrían prestado correctamente o que eran "innecesarios", sin aportar prueba concreta de incidencias ni comunicaciones previas de disconformidad.
                </p>
                
                <p>
                  Además, discutió parcialmente la cuantía de la deuda, cuestionando algunas facturas sin justificar por qué no eran debidas, ni presentar peritajes o informes que avalaran sus objeciones.
                </p>
                
                <p>
                  La demandada intentó también sostener que parte de la deuda estaría prescrita, sin fundamentar adecuadamente los plazos ni los posibles actos de interrupción derivados de los requerimientos de pago documentados.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Estrategia de la demanda</h3>
                <p>
                  La estrategia jurídica se centró en demostrar de forma clara y ordenada tres puntos: la existencia de la relación contractual, la prestación efectiva de los servicios y el impago de las facturas en los importes reclamados.
                </p>
                
                <p>
                  Para ello:
                </p>
                
                <ul className="ml-4 mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Aportamos el contrato de prestación de servicios y, en su defecto, la cadena de correos electrónicos y documentos comerciales que acreditaban la relación continuada entre las partes.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Incorporamos todas las facturas emitidas, con detalle de trabajos realizados, fechas de vencimiento y medios de pago pactados.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Adjuntamos comunicaciones de la propia empresa deudora (emails de agradecimiento, aceptación de trabajos, ausencia de reclamaciones técnicas) que corroboraban la conformidad con los servicios prestados.</strong></span>
                  </li>
                </ul>
                
                <p>
                  En el juicio, destacamos que la demandada no había probado ninguna causa concreta que justificara el impago (incumplimientos, defectos, rechazo oportuno de las facturas), por lo que debía responder del total de la deuda.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Sentencia del Juzgado</h3>
                <p>
                  El Juzgado de Primera Instancia estimó que estaba plenamente acreditada la existencia de la relación contractual, la prestación de los servicios y el impago de las facturas reclamadas.
                </p>
                
                <p>
                  Subrayó que la demandada no había probado ninguna causa concreta que justificara el impago (incumplimientos, defectos, rechazo oportuno de las facturas), por lo que debía responder del total de la deuda.
                </p>
                
                <p>
                  Asimismo, rechazó los argumentos sobre la prescripción, al considerar válidos los requerimientos extrajudiciales como actos interruptivos, y entendió que la acción se había ejercitado en plazo.
                </p>
                
                <p>
                  En consecuencia, dictó sentencia estimando íntegramente la demanda de reclamación de cantidad, condenando a la empresa al pago de todas las facturas adeudadas, más intereses legales desde la reclamación judicial y con expresa condena en costas.
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-300 rounded-lg">
                  <h4 className="text-lg font-bold mb-2 text-orange-600 text-center">Resultado del Caso</h4>
                  <p className="text-black text-justify">
                    En consecuencia, dictó sentencia estimando íntegramente la demanda de reclamación de cantidad, condenando a la empresa al pago de todas las facturas adeudadas, más intereses legales desde la reclamación judicial y con expresa condena en costas.
                  </p>
                  <p className="text-black mt-2 text-justify">
                    Asimismo, rechazó los argumentos sobre la prescripción, al considerar válidos los requerimientos extrajudiciales como actos interruptivos, y entendió que la acción se había ejercitado en plazo.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda con una reclamación de cantidad?</h3>
              <p className="text-black font-sans mb-6 text-justify">
                Si tienes problemas con el cobro de facturas impagadas o necesitas interponer una demanda civil de reclamación de cantidad, contacta con nuestros abogados especialistas en derecho civil.
              </p>
              <a
                href="https://wa.me/34624164536"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.open('https://www.cal.eu/adrian-garcia-lledo-babrwp', '_blank')}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-sans font-semibold hover:bg-primary/90 transition-colors"
              >
                Consultar con un Abogado
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CasoReclamacionImpago;
