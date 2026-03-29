import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Scale, CheckCircle } from "lucide-react";

const CasoReclamacion = () => {
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reclamación de cantidad desestimada</h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Demanda de banco por préstamo impagado desestimada tras demostrar la falta de prueba y la prescripción de la acción.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-sans">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4" />
                <span>Área: Derecho Civil</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Resultado: Demanda desestimada</span>
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
                  Nuestra clienta, consumidora, fue demandada por una entidad bancaria en un juicio verbal de reclamación de cantidad, al amparo del artículo 250 de la Ley de Enjuiciamiento Civil, por el supuesto impago de un préstamo personal contratado años atrás.
                </p>
                
                <p>
                  La entidad reclamaba más de 6.000 euros en concepto de capital pendiente, intereses y comisiones, sosteniendo que la deuda provenía de un contrato de préstamo cuyo cumplimiento habría incumplido la demandada.
                </p>
                
                <p>
                  La clienta apenas recordaba las condiciones exactas del préstamo y llevaba años sin recibir notificaciones formales, más allá de llamadas telefónicas y comunicaciones genéricas de empresas de recobro, hasta que recibió la citación para el juicio verbal.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Motivos de la reclamación</h3>
                <p>
                  En su demanda de juicio verbal, la entidad alegaba:
                </p>
                
                <ul className="ml-4 mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>La existencia de un contrato de préstamo personal suscrito con nuestra clienta.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>El impago de diversas cuotas, que habría generado el vencimiento anticipado y el saldo que se reclamaba.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Que la cantidad reflejada en un extracto resumido y en un certificado interno de deuda era líquida, vencida y exigible.</strong> Los iconos, emotis, ticks o como se llamen deben ser naranjas, como los demás en las otras páginas.</span>
                  </li>
                </ul>
                
                <p>
                  Sin embargo, junto a la demanda el banco únicamente aportó un extracto de movimientos y un certificado de saldo, sin acompañar el contrato original firmado ni un cuadro de amortización que permitiera comprobar cómo se había formado la cantidad reclamada.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Estrategia de defensa</h3>
                <p>
                  Tras analizar la documentación aportada y la cronología de la relación, planteamos la defensa de nuestra clienta con dos ejes centrales: falta de prueba suficiente del préstamo y prescripción de la acción.
                </p>
                
                <p>
                  Desarrollamos, en síntesis, estos argumentos:
                </p>
                
                <ul className="ml-4 mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Carga de la prueba del banco:</strong> Recordamos al Juzgado que, tratándose de un préstamo, corresponde a la entidad acreditar la existencia del contrato, la entrega del capital, las condiciones pactadas (intereses, comisiones, vencimiento anticipado) y el cálculo detallado del saldo pendiente; un certificado unilateral no basta.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Documentación insuficiente:</strong> Destacamos que, sin el contrato de préstamo ni un cuadro de amortización completo, no era posible verificar si la deuda se correspondía realmente con el capital dispuesto, ni controlar la posible existencia de cláusulas abusivas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Prescripción de la acción:</strong> Aportamos una cronología de pagos y comunicaciones que mostraba que, desde la fecha en que la entidad situaba el impago como definitivo, había dejado transcurrir en exceso el plazo legal sin presentar demanda ni realizar requerimientos fehacientes de interrupción.</span>
                  </li>
                </ul>
                
                <p>
                  En la vista del juicio verbal insistimos en que no se puede condenar a un consumidor a pagar una deuda relevante de préstamo sin que la entidad acredite mínimamente el contrato, las condiciones aplicadas y la no prescripción de la acción.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Resolución Judicial</h3>
                <p>
                  El Juzgado, tras escuchar a las partes y examinar la escasa documentación aportada por la entidad, concluyó que no quedaba acreditada de forma suficiente la existencia y cuantía del préstamo reclamado.
                </p>
                
                <p>
                  Subrayó que el certificado de deuda y un simple extracto de movimientos no pueden sustituir al contrato de préstamo y a una liquidación clara y detallada sometida al control judicial.
                </p>
                
                <p>
                  Además, el Juzgado apreció la prescripción de la acción, al constatar que, desde la fecha en que la entidad situaba el impago como definitivo, había dejado transcurrir en exceso el plazo legal sin presentar demanda ni realizar requerimientos fehacientes de interrupción.
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-300 rounded-lg">
                  <h4 className="text-lg font-bold mb-2 text-orange-600 text-center">Resultado del Caso</h4>
                  <p className="text-black text-justify">
                    En consecuencia, dictó sentencia desestimando íntegramente la demanda de reclamación de cantidad promovida por la entidad bancaria.
                  </p>
                  <p className="text-black mt-2 text-justify">
                    Además, el Juzgado apreció la prescripción de la acción, al constatar que, desde la fecha en que la entidad situaba el impago como definitivo, había dejado transcurrir en exceso el plazo legal sin presentar demanda ni realizar requerimientos fehacientes de interrupción.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas defensa en una reclamación de cantidad?</h3>
              <p className="text-black font-sans mb-6 text-justify">
                Si te han demandado por una reclamación de cantidad o necesitas defensa en un juicio civil, contacta con nuestros abogados especialistas en derecho civil.
              </p>
              <a
                href="https://wa.me/34624164536"
                target="_blank"
                rel="noopener noreferrer"
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

export default CasoReclamacion;
