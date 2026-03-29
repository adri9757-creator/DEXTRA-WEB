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
            className="inline-flex items-center gap-2 text-primary font-sans font-semibold text-sm mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-primary/10 text-primary font-sans text-xs font-semibold px-3 py-1 rounded-full">Legal</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Condiciones generales de contratación</h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Términos y condiciones que regulan la contratación de consultas jurídicas presenciales y por videoconferencia.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-sans">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Última actualización: 2026</span>
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
                    Los honorarios de las consultas (precio por sesión, impuestos aplicables, etc.) se indicarán de forma clara al Cliente antes de la contratación y podrán figurar también en la propia web de Dextra Law Firm.
                  </p>
                  <p>
                    El pago se realizará con carácter previo a la consulta, mediante cualquiera de los medios aceptados por el despacho en cada momento (por ejemplo, transferencia bancaria, TPV virtual, tarjeta, Bizum, etc.).
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
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    6. Derecho de desistimiento
                  </h2>
                  <p>
                    Cuando el Cliente tenga la condición de consumidor, podrá existir derecho de desistimiento en los términos previstos en la normativa de consumidores y usuarios, teniendo en cuenta que:
                  </p>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>Si la consulta se ha prestado íntegramente antes de que transcurra el plazo de 14 días naturales desde la contratación, con el consentimiento previo expreso del Cliente y el reconocimiento de que, una vez prestado el servicio, pierde su derecho de desistimiento, no procederá el reembolso.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>Si el Cliente desiste antes de la prestación del servicio, dentro del plazo legal, Dextra Law Firm podrá devolver los honorarios, pudiendo deducir, en su caso, los gastos de gestión justificados ya realizados.</span>
                    </li>
                  </ul>
                  <p>
                    En cada caso concreto, se informará al Cliente sobre la aplicación o no del derecho de desistimiento, atendiendo a la normativa vigente.
                  </p>
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
                    Salvo que la normativa de consumidores disponga otra cosa, cualquier controversia que pueda surgir en relación con la interpretación o cumplimiento de estas Condiciones se someterá a los Juzgados y Tribunales de Valencia, con renuncia expresa a cualquier otro fuero que pudiera corresponder.
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
