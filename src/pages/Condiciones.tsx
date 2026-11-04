import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, Users, Clock, Gavel } from "lucide-react";

const Condiciones = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-strong font-sans font-semibold text-sm mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-primary/10 text-primary-strong font-sans text-xs font-semibold px-3 py-1 rounded-full">Legal</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Condiciones generales de contratación</h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Términos y condiciones que regulan la contratación de consultas jurídicas presenciales y por videoconferencia.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-sans">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Última actualización: noviembre de 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Protegido por ley</span>
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
              <div className="space-y-8 text-foreground font-sans leading-relaxed text-justify">
                
                <section>
                  <p>
                    Las presentes Condiciones Generales de Contratación (en adelante, las "Condiciones") regulan la contratación de consultas jurídicas presenciales y por videoconferencia ofrecidas por Dextra Law Firm a través de su página web y canales de contacto asociados.
                  </p>
                  <p>
                    La contratación de cualquiera de estos servicios implica la aceptación plena y sin reservas de estas Condiciones por parte del cliente (en adelante, el "Cliente").
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    1. Objeto del contrato
                  </h2>
                  <p>
                    El presente contrato tiene por objeto la prestación, por parte de Dextra Law Firm, de servicios de asesoramiento y consulta jurídica en las modalidades de:
                  </p>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Consulta presencial en el despacho.</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Consulta por videoconferencia</strong> (por ejemplo, mediante Zoom, Teams, Meet u otra herramienta similar).</span>
                    </li>
                  </ul>
                  <p>
                    En ambos casos, se trata de un servicio de consulta y orientación jurídica puntual, que no incluye la representación letrada en procedimientos judiciales o administrativos, salvo que posteriormente se firme la correspondiente hoja de encargo profesional.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-primary" />
                    2. Proceso de contratación
                  </h2>
                  <p>
                    El proceso de contratación de las consultas será, con carácter general, el siguiente:
                  </p>
                  <ol className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">1.</span>
                      <span>El Cliente contacta con Dextra Law Firm a través del formulario de contacto de la web, correo electrónico, teléfono o sistema de reserva habilitado.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">2.</span>
                      <span>El despacho informa al Cliente del tipo de consulta disponible (presencial o videoconferencia), duración aproximada, honorarios y forma de pago.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">3.</span>
                      <span>El Cliente confirma su interés y facilita los datos necesarios para la emisión de la factura y la reserva de fecha y hora.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">4.</span>
                      <span>El Cliente realiza el pago de los honorarios pactados por la consulta (prepago), por el medio acordado (transferencia, TPV, pasarela online, Bizum, etc.).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">5.</span>
                      <span>Una vez verificado el pago, Dextra Law Firm confirma al Cliente, por correo electrónico o medio equivalente, la fecha, hora y modalidad de la consulta.</span>
                    </li>
                  </ol>
                  <p>
                    En el caso de consultas por videoconferencia, el Cliente recibirá además el enlace o instrucciones necesarias para conectarse.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    3. Características del servicio de consulta
                  </h2>
                  <p>
                    Salvo que se indique otra cosa, las consultas tendrán las siguientes características orientativas:
                  </p>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Duración aproximada:</strong> de 60 minutos por sesión, pudiendo ser inferior el tiempo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Finalidad:</strong> ofrecer al Cliente una orientación jurídica inicial sobre las cuestiones planteadas, aclarando dudas y valorando posibles opciones legales.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>La consulta se basa en la información y documentación que el Cliente facilite antes o durante la sesión.</strong></span>
                    </li>
                  </ul>
                  <p>
                    <strong>Límites del servicio:</strong>
                  </p>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>La consulta no incluye la elaboración de demandas, recursos, contratos complejos, escritos extensos ni la tramitación completa de procedimientos, salvo pacto posterior mediante hoja de encargo.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>La contratación de la consulta no implica automáticamente que Dextra Law Firm asuma la representación del Cliente en ningún procedimiento judicial o administrativo. En caso de que el Cliente desee dicha representación, se le facilitará una hoja de encargo profesional específica.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Gavel className="w-6 h-6 text-primary" />
                    4. Precio y forma de pago
                  </h2>
                  <p>
                    <strong>Precio de la consulta:</strong> [POR_CONFIRMAR: importe por modalidad y duración] €, <strong>IVA (21 %) incluido</strong>. Todos los precios que se comunican al Cliente consumidor incluyen los impuestos aplicables.
                  </p>
                  <p>
                    El precio final, con impuestos, se muestra al Cliente en la página de reserva (cal.eu) o se le comunica por escrito <strong>antes</strong> de que realice el pago. No se cobran gastos adicionales por el medio de pago [POR_CONFIRMAR].
                  </p>
                  <p>
                    Los honorarios de actuaciones posteriores (demandas, recursos, asistencia en procedimientos) no están incluidos en la consulta y se presupuestan por escrito en la correspondiente hoja de encargo.
                  </p>
                  <p>
                    El pago se realizará con carácter previo a la consulta (prepago), mediante los medios aceptados por el despacho: [POR_CONFIRMAR: transferencia bancaria, tarjeta a través de la pasarela de cal.eu, Bizum…]. Tras el pago se emitirá la correspondiente factura.
                  </p>
                  <p>
                    La consulta se entenderá correctamente contratada y confirmada una vez Dextra Law Firm haya verificado la recepción del pago y lo haya confirmado al Cliente.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-primary" />
                    5. Política de cancelación y modificaciones
                  </h2>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>Si el Cliente necesita cancelar o reprogramar la consulta, deberá comunicarlo con una antelación mínima de 48 horas respecto a la fecha y hora fijadas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>En caso de aviso dentro de dicho plazo, Dextra Law Firm ofrecerá una nueva fecha y hora para la consulta o, en su caso, podrá acordarse la devolución de los honorarios abonados, descontando, si procediera, los gastos de gestión.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>Si el Cliente no se presenta a la consulta en la fecha y hora acordadas, o cancela con una antelación inferior a la indicada, Dextra Law Firm podrá retener el importe abonado en concepto de gastos de reserva y disponibilidad, salvo que se aprecien causas justificadas.</span>
                    </li>
                  </ul>
                  <p>
                    En las consultas por videoconferencia, si existen problemas técnicos imputables al despacho que impidan realizar la sesión, se ofrecerá una nueva cita sin coste adicional para el Cliente.
                  </p>
                  <p>
                    Lo dispuesto en este apartado se entiende sin perjuicio del derecho de desistimiento del Cliente consumidor regulado en el apartado 6. [POR_CONFIRMAR: revisar que la retención por inasistencia sea proporcionada al coste real de la reserva.]
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    6. Derecho de desistimiento
                  </h2>
                  <p>
                    Cuando la consulta se contrate a distancia (web, correo electrónico, teléfono o sistema de reserva) y el Cliente sea consumidor, este dispone de un plazo de <strong>14 días naturales</strong> desde la celebración del contrato para desistir sin indicar el motivo y sin penalización (artículos 102 y siguientes del Real Decreto Legislativo 1/2007, texto refundido de la Ley General para la Defensa de los Consumidores y Usuarios).
                  </p>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                      <span><strong>Cómo desistir:</strong> comunicándolo de forma inequívoca a <a href="mailto:info@dextralawfirm.com" className="font-semibold underline underline-offset-2">info@dextralawfirm.com</a> o por correo postal a Gran Vía Marqués del Turia 49, -1, 46005 Valencia. Puede utilizarse el modelo de formulario que figura al final de este apartado, aunque no es obligatorio.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                      <span><strong>Reembolso:</strong> se devolverán todos los pagos recibidos sin demora y, como máximo, en 14 días naturales desde que se reciba la comunicación, por el mismo medio de pago utilizado, salvo que el Cliente acepte otro, sin coste para él.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                      <span><strong>Consulta dentro del plazo:</strong> si el Cliente solicita expresamente que la consulta se preste antes de que finalice el plazo de desistimiento y después desiste, abonará un importe proporcional a la parte del servicio ya prestada.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                      <span><strong>Pérdida del derecho:</strong> el derecho de desistimiento no podrá ejercerse cuando la consulta se haya prestado por completo, siempre que su ejecución haya comenzado con el consentimiento previo y expreso del Cliente y con su reconocimiento de que, una vez prestada, pierde ese derecho. [POR_CONFIRMAR: recabar este consentimiento en el proceso de reserva (casilla en cal.eu) y confirmarlo por escrito.]</span>
                    </li>
                  </ul>
                  <div className="rounded-md border border-border bg-secondary p-4 text-sm">
                    <p className="font-semibold">Modelo de formulario de desistimiento</p>
                    <p className="mt-2">(Solo debe cumplimentar y enviar este formulario si desea desistir del contrato.)</p>
                    <p className="mt-2">
                      A la atención de Adrián García Lledó (Dextra Law Firm), Gran Vía Marqués del Turia 49, -1, 46005 Valencia, info@dextralawfirm.com:
                    </p>
                    <p className="mt-2">
                      Por la presente le comunico que desisto de mi contrato de prestación del siguiente servicio: ______. Contratado el: ______. Nombre del consumidor: ______. Domicilio del consumidor: ______. Firma (solo si se envía en papel): ______. Fecha: ______.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    7. Obligaciones del Cliente
                  </h2>
                  <p>
                    El Cliente se compromete a:
                  </p>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>Facilitar información veraz, completa y actualizada sobre los hechos y documentos relevantes para la consulta.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>Abonar los honorarios correspondientes en la forma y plazos acordados.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>Mantener una comunicación respetuosa y diligente con el despacho y sus profesionales.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    8. Confidencialidad y protección de datos
                  </h2>
                  <p>
                    Dextra Law Firm tratará la información y documentación facilitada por el Cliente con absoluta confidencialidad profesional.
                  </p>
                  <p>
                    Los datos personales del Cliente serán tratados conforme a lo previsto en la Política de Privacidad del despacho y a la normativa aplicable en materia de protección de datos (RGPD y LOPDGDD).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    9. Propiedad intelectual
                  </h2>
                  <p>
                    Los informes, correos, documentos o materiales que Dextra Law Firm pueda remitir al Cliente en el marco de la consulta son para uso personal del Cliente y están protegidos por las normas de propiedad intelectual.
                  </p>
                  <p>
                    Queda prohibida su reproducción, difusión o cesión a terceros sin autorización expresa del despacho, salvo para el ejercicio de derechos del propio Cliente ante autoridades o tribunales.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Gavel className="w-6 h-6 text-primary" />
                    10. Responsabilidad
                  </h2>
                  <p>
                    El asesoramiento ofrecido en la consulta se basa en la información facilitada por el Cliente y en la normativa y jurisprudencia vigentes en el momento de la misma.
                  </p>
                  <p>
                    La obligación del abogado es de medios y no de resultado: el despacho se compromete a actuar con la diligencia y conforme a las normas deontológicas de la profesión.
                  </p>
                  <p>
                    Dextra Law Firm no garantiza un resultado concreto en caso de que el Cliente decida iniciar acciones legales posteriores, que dependerán de múltiples factores ajenos al control del despacho (decisiones judiciales, pruebas disponibles, actuación de terceros, etc.).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-primary" />
                    11. Ley aplicable y jurisdicción
                  </h2>
                  <p>
                    Las presentes Condiciones se rigen por la legislación española.
                  </p>
                  <p>
                    Si el Cliente es consumidor, serán competentes los Juzgados y Tribunales de su domicilio, conforme a la normativa de consumidores y usuarios. Si el Cliente no es consumidor, las partes se someten a los Juzgados y Tribunales de Valencia.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" aria-hidden="true" />
                    12. Quejas y reclamaciones
                  </h2>
                  <p>
                    El Cliente puede dirigir sus quejas o reclamaciones a <a href="mailto:info@dextralawfirm.com" className="font-semibold underline underline-offset-2">info@dextralawfirm.com</a> o a la dirección postal del despacho. Se responderá en el menor plazo posible y, en todo caso, en el plazo máximo de un mes.
                  </p>
                  <p>
                    También puede acudir al servicio de atención a consumidores y usuarios del Ilustre Colegio de la Abogacía de Valencia (<a href="https://www.icav.es" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">www.icav.es</a>) y a los organismos de consumo competentes. [POR_CONFIRMAR: indicar si el despacho dispone de hojas de reclamaciones oficiales de la Comunitat Valenciana y si está adherido a algún sistema de resolución alternativa de litigios.]
                  </p>
                </section>

                <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-bold mb-4 text-primary text-center">Información del Titular y Contacto</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p><strong><strong>Titular del sitio web:</strong></strong> Adrián García Lledó</p>
                      <p><strong>NIF:</strong> 35597868D</p>
                      <p><strong>Domicilio profesional:</strong> Gran Vía Marqués del Turia 49, -1, 46005 Valencia</p>
                      <p><strong>Correo electrónico:</strong> info@dextralawfirm.com</p>
                      <p><strong>Teléfono de contacto:</strong> 624 164 536</p>
                      <p><strong>Colegio profesional:</strong> Ilustre Colegio de la Abogacía de Valencia (ICAV)</p>
                      <p><strong>Número de colegiado:</strong> 19.921</p>
                      <p><strong>Titulación académica:</strong> Graduado en Derecho y Máster de Acceso a la Abogacía y Procura, título expedido en España.</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <p className="text-sm text-foreground font-bold text-center">Para cualquier consulta de las Condiciones Generales puede contactar con nosotros</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Condiciones;
