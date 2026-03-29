import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Scale, CheckCircle } from "lucide-react";

const CasoArraigo = () => {
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
              <span className="inline-block bg-primary/10 text-primary font-sans text-xs font-semibold px-3 py-1 rounded-full">Extranjería</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground font-sans text-sm">
                <Calendar className="w-4 h-4" /> 2024
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Arraigo social aprobado</h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Tras una denegación inicial, recurrimos y logramos la autorización de residencia por arraigo social para una familia.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-sans">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4" />
                <span>Área: Derecho de Extranjería</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Resultado: Autorización concedida</span>
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
                  Una familia de origen latinoamericano, residente en Valencia desde hacía más de tres años, acudió a nuestro despacho después de recibir la resolución de denegación de su solicitud de autorización de residencia por arraigo social.
                </p>
                
                <p>
                  Pese a llevar años viviendo en España, con menores escolarizados y una fuerte integración en su entorno, la Oficina de Extranjería entendió que no quedaban suficientemente acreditados algunos requisitos, especialmente la vinculación social y la disponibilidad de medios económicos estables.
                </p>
                
                <h3 className="text-xl font-bold mb-3 mt-6 text-foreground">Motivos de la denegación</h3>
                <p>
                  En la resolución administrativa se señalaban, entre otros, los siguientes motivos:
                </p>
                
                <ul className="ml-4 mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Dudas sobre la continuidad de la residencia en España durante los últimos tres años, por constar períodos sin empadronamiento actualizado.</strong> Siguen apareciendo verdes, y tienen que ser naranjas como en el resto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Consideración de que el informe de arraigo social emitido por el Ayuntamiento era insuficiente para acreditar la plena integración en la comunidad.</strong> Siguen apareciendo verdes, y tienen que ser naranjas como en el resto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Falta de valoración adecuada de la oferta de empleo presentada, al cuestionarse su estabilidad y adecuación a la normativa laboral.</strong> Siguen apareciendo verdes, y tienen que ser naranjas como en el resto.</span>
                  </li>
                </ul>
                
                <p>
                  La familia, que había presentado la solicitud por su cuenta, no comprendía el alcance de estas objeciones ni sabía qué margen tenía para reaccionar ante la decisión.
                </p>
                
                <h3 className="text-xl font-bold mb-3 mt-6 text-foreground">Estrategia del recurso</h3>
                <p>
                  Tras estudiar la resolución y el expediente, diseñamos una estrategia centrada en demostrar el cumplimiento real de todos los requisitos del arraigo social y en evidenciar los errores de valoración cometidos por la Administración.
                </p>
                
                <p>
                  Trabajamos en tres ejes principales:
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
                    <span><strong>Que la cantidad reflejada en un extracto resumido y en un certificado interno de deuda era líquida, vencida y exigible.</strong> Siguen siendo verdes y tendrían que ser naranjas como en el resto.</span>
                  </li>
                </ul>
                
                <p>
                  Con toda esta documentación, interpusimos recurso administrativo detallando, punto por punto, por qué la denegación vulneraba la finalidad de la figura del arraigo social y no se ajustaba a la realidad personal y familiar de los recurrentes.
                </p>
                
                <h3 className="text-xl font-bold mb-3 mt-6 text-foreground">Resolución del recurso</h3>
                <p>
                  La Administración, tras revisar el recurso y la nueva documentación aportada, estimó nuestras alegaciones y dejó sin efecto la resolución denegatoria inicial.
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-300 rounded-lg">
                  <h4 className="text-lg font-bold mb-2 text-orange-600 text-center">Resultado del Caso</h4>
                  <p className="text-black text-justify">
                    Como consecuencia, se concedió la autorización de residencia temporal por circunstancias excepcionales de arraigo social a ambos progenitores, con la consiguiente regularización de su situación y la protección derivada para sus hijos menores.
                  </p>
                  <p className="text-black mt-2 text-justify">
                    Como consecuencia, se concedió:
                  </p>
                  <ul className="ml-4 space-y-2 text-black">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Una residencia efectiva y continuada en España superior a tres años.</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Un claro arraigo social y familiar, con menores plenamente integrados en el sistema educativo español.</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Una oferta de empleo ajustada a derecho, suficiente para garantizar unos medios de vida estables.</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu solicitud de arraigo?</h3>
              <p className="text-black font-sans mb-6 text-justify">
                Si tienes problemas con tu solicitud de residencia por arraigo social o has recibido una denegación, contacta con nuestros abogados especialistas en derecho de extranjería.
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

export default CasoArraigo;
