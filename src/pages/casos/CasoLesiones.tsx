import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Scale, CheckCircle } from "lucide-react";

const CasoLesiones = () => {
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Absolución por delito de lesiones</h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Nuestro cliente fue absuelto tras acreditar que actuó en legítima defensa frente a una agresión iniciada por la otra parte.
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
                  Nuestro cliente fue denunciado por un presunto delito de lesiones tras una pelea ocurrida a la salida de un local de ocio nocturno en Cantabria.
                </p>
                
                <p>
                  La acusación particular sostenía que había agredido a otro joven sin motivo, provocándole contusiones y una brecha que requería puntos de sutura, solicitando para él pena de multa, indemnización y la imposición de costas.
                </p>
                
                <p>
                  Desde el primer momento, nuestro cliente mantuvo que no inició la agresión, sino que se limitó a defenderse y a intentar zafarse de los golpes que estaba recibiendo.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Hechos controvertidos</h3>
                <p>
                  Según constaba en las diligencias, la discusión se inició dentro del local por un malentendido insignificante y continuó en el exterior, donde se produjo el intercambio de golpes.
                </p>
                
                <p>
                  La versión de la acusación presentaba a nuestro cliente como agresor principal, mientras minimizaba la actitud del denunciante, pese a que existían testigos que señalaban que fue este último quien se abalanzó primero.
                </p>
                
                <p>
                  Además, los partes médicos reflejaban lesiones en ambas partes: el denunciante presentaba contusiones y una herida incisa, mientras que nuestro cliente mostraba hematomas en la cara y el torso compatibles con haber recibido varios golpes previos.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Estrategia de defensa</h3>
                <p>
                  La defensa se centró en acreditar que la intervención de nuestro cliente se produjo en un contexto de legítima defensa, cumpliéndose los requisitos legales: agresión ilegítima previa, necesidad racional del medio empleado y falta de provocación suficiente por su parte.
                </p>
                
                <p>
                  Trabajamos en tres líneas:
                </p>
                
                <ul className="ml-4 mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Agresión ilegítima previa:</strong> Mediante la declaración coherente de nuestro cliente y la de varios testigos imparciales, acreditamos que fue el denunciante quien inició la agresión física, empujándole y propinándole el primer puñetazo sin que existiera agresión previa por parte de nuestro representado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Necesidad y proporcionalidad de la respuesta:</strong> Explicamos que nuestro cliente se limitó a repeler la agresión inmediata para defender su integridad, sin utilizar objetos, sin perseguir al contrario una vez cesado el ataque y sin continuar golpeándolo cuando este ya estaba reducido.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Ausencia de provocación:</strong> Aportamos mensajes y testimonios que demostraban que nuestro cliente intentó evitar el conflicto, abandonando el local y tratando de marcharse, siendo seguido por el denunciante hasta la calle donde se produjo el incidente.</span>
                  </li>
                </ul>
                
                <p>
                  En el juicio, insistimos en que no toda lesión es automáticamente delictiva cuando concurre una causa de justificación como la legítima defensa, y que las lesiones sufridas por el denunciante eran consecuencia directa de su propia agresión inicial.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Resolución Judicial</h3>
                <p>
                  El Juzgado, tras escuchar a las partes y valorar la prueba testifical y documental, consideró probado que el denunciante inició la agresión y que nuestro cliente actuó para repeler un ataque actual e injusto.
                </p>
                
                <p>
                  Destacó la coherencia del relato de nuestro defendido frente a las contradicciones de la acusación, así como la compatibilidad de las lesiones de ambos con una reacción defensiva y no con una agresión gratuita.
                </p>
                
                <p>
                  El órgano judicial entendió que se cumplían los requisitos de la legítima defensa y que, en consecuencia, la conducta de nuestro cliente estaba amparada por una causa de justificación prevista en el Código Penal.
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-300 rounded-lg">
                  <h4 className="text-lg font-bold mb-2 text-orange-600 text-center">Resultado del Caso</h4>
                  <p className="text-black text-justify">
                    En consecuencia, dictó sentencia absolutoria, declarando que nuestro cliente actuó en legítima defensa y que su conducta no constituía delito penal.
                  </p>
                  <p className="text-black mt-2 text-justify">
                    El órgano judicial entendió que se cumplían los requisitos de la legítima defensa y que, en consecuencia, la conducta de nuestro cliente estaba amparada por una causa de justificación prevista en el Código Penal.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-4 text-black">¿Necesitas defensa en un caso de lesiones?</h3>
              <p className="text-black font-sans mb-6 text-justify">
                Si te han denunciado por un delito de lesiones o necesitas defensa en un juicio penal, contacta con nuestros abogados especialistas en derecho penal.
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

export default CasoLesiones;
