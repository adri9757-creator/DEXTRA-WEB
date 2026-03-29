import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Scale, CheckCircle } from "lucide-react";

const CasoEstafa = () => {
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
              <span className="inline-block bg-primary/10 text-primary font-sans text-xs font-semibold px-3 py-1 rounded-full">Penal</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground font-sans text-sm">
                <Calendar className="w-4 h-4" /> 2024
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Absolución por delito leve de estafa</h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Cliente acusado de estafa en una compraventa online fue absuelto tras demostrar la ausencia de engaño y la legitimidad de la operación.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-sans">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4" />
                <span>Área: Derecho Penal</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Resultado: Absolución completa</span>
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
                  Nuestro cliente, joven emprendedor valenciano, fue denunciado por un presunto delito leve de estafa tras la venta de un ordenador portátil de segunda mano a través de una plataforma de compraventa entre particulares, por importe de 350 euros.
                </p>
                
                <p>
                  La denunciante sostenía que, tras realizar una transferencia bancaria por el precio pactado, no había recibido el producto en el plazo inicialmente acordado, interpretando el retraso en el envío como una maniobra fraudulenta para quedarse con el dinero.
                </p>
                
                <p>
                  A raíz de la denuncia, el Juzgado de Instrucción incoó diligencias por un presunto delito leve de estafa, citando a nuestro cliente a juicio rápido y exponiéndole a una posible condena de multa y al pago de responsabilidad civil, con los consiguientes antecedentes penales, pese a la reducida cuantía.
                </p>
                
                <p>
                  La operación se había completado íntegramente de forma telemática: anuncio, negociación del precio, aceptación, envío de datos bancarios y confirmación de la transferencia, todo ello mediante la mensajería interna de la plataforma y mensajes de correo electrónico.
                </p>
                
                <p>
                  Nuestro cliente reconocía el retraso, pero explicaba que se debía a la avería del dispositivo el día previo al envío, a la necesidad de repararlo antes de remitirlo y a problemas personales que demoraron la gestión, sin ánimo de engañar ni de apropiarse del dinero.
                </p>
                
                <p>
                  Durante ese tiempo se produjeron intercambios de mensajes en los que el cliente informaba de la incidencia, proponía dos soluciones (reparar el ordenador y enviarlo, o devolver íntegramente el importe) e incluso llegó a iniciar una orden de devolución que la otra parte rechazó al considerar que ya se había cometido el delito.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Estrategia de la Defensa</h3>
                <p>
                  La estrategia de defensa se centró en demostrar que no existió engaño inicial bastante, ni intención de defraudar, sino un simple conflicto derivado de un retraso y de una gestión poco diligente de la incidencia.
                </p>
                
                <p>
                  Para ello, aportamos al juicio:
                </p>
                
                <ul className="ml-4 mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Extractos bancarios:</strong> que acreditaban tanto la recepción de la transferencia de 350 euros como el intento documentado de devolución íntegra del importe.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Historial completo de mensajes:</strong> de la plataforma y correos electrónicos, donde se veía claramente cómo nuestro cliente informaba del problema técnico y planteaba soluciones alternativas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Justificante del servicio técnico:</strong> en el que constaba la fecha de entrada y reparación del portátil, coherente con las fechas de los mensajes y con la demora producida.</span>
                  </li>
                </ul>
                
                <p>
                  En sala insistimos en que, aunque la cuantía era reducida y el tipo penal aplicable podía ser el de delito leve de estafa (al ser inferior a 400 euros), seguían siendo exigibles todos los elementos del delito: engaño bastante, ánimo de lucro y relación de causalidad entre el engaño y el perjuicio.
                </p>
                
                <p>
                  Defendimos que el caso encajaba mejor en un incumplimiento contractual o una mala experiencia de compraventa online, nunca en una conducta penalmente relevante.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Valoración del Juzgado de Instrucción</h3>
                <p>
                  El Juzgado de Instrucción, tras oír a ambas partes y analizar la documentación aportada, consideró que no se había acreditado un engaño inicial ni una voluntad defraudatoria por parte de nuestro cliente.
                </p>
                
                <p>
                  Destacó que la existencia de comunicaciones continuas, la propuesta de devolución del dinero y la reparación efectiva del ordenador demostraban que la intención del vendedor era cumplir el contrato, aunque lo hiciera con retraso.
                </p>
                
                <p>
                  El órgano judicial recordó que el mero incumplimiento del plazo o un servicio deficiente no convierten automáticamente la relación en delito, especialmente cuando la cuantía es reducida y existe una explicación razonable y documentada de lo ocurrido.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Resolución Judicial</h3>
                <p>
                  El Juzgado dictó sentencia absolutoria, declarando que los hechos no eran constitutivos de delito leve de estafa y absolviendo a nuestro cliente con todos los pronunciamientos favorables.
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-300 rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold mb-2 text-orange-600 text-center">Resultado del Caso</h4>
                  <p className="text-black text-justify">
                    De este modo, evitó la imposición de cualquier multa, la obligación de indemnizar por vía penal y, sobre todo, la generación de antecedentes penales por un hecho derivado de un conflicto menor en una compraventa online.
                  </p>
                  <p className="text-black mt-2 text-justify">
                    Gracias a esta resolución, nuestro cliente pudo preservar su reputación personal y profesional, y gestionar la incidencia con la compradora desde un plano estrictamente civil, sin cargar con las consecuencias desproporcionadas de una condena penal por una cuantía de apenas 350 euros.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-300 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4 text-black">¿Necesitas defensa en un caso de estafa?</h3>
              <p className="text-black font-sans mb-6 text-justify">
                Si te acusan falsamente de un delito de estafa, contacta con nuestros abogados especialistas en derecho penal.
              </p>
              <a
                href="https://wa.me/34624164536"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => window.open('https://www.cal.eu/adrian-garcia-lledo-babrwp', '_blank')}
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-sans font-semibold hover:bg-orange-600 transition-colors"
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

export default CasoEstafa;
