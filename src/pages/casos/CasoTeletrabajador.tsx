import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Scale, CheckCircle } from "lucide-react";

const CasoTeletrabajador = () => {
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Residencia de teletrabajador internacional concedida</h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Recurso de alzada exitoso que revocó la denegación de autorización de residencia como teletrabajador internacional.
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
                  Nuestro cliente, profesional del sector tecnológico de un país extracomunitario, solicitó en España la autorización de residencia como teletrabajador de carácter internacional para poder seguir prestando servicios en remoto a sus clientes extranjeros desde territorio español.
                </p>
                
                <p>
                  Pese a aportar en su solicitud contratos de prestación de servicios, certificados de empresa y documentación técnica, la Administración denegó el permiso al entender que no quedaban suficientemente acreditados el carácter remoto de la actividad ni el cumplimiento de determinados requisitos formales.
                </p>
                
                <p>
                  Esta resolución ponía en riesgo su proyecto de vida en España y le obligaba, en principio, a abandonar el país una vez finalizado su periodo de estancia legal, con el impacto personal y profesional que ello conllevaba.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Motivos de la denegación</h3>
                <p>
                  En la resolución denegatoria se indicaban, entre otros, los siguientes motivos:
                </p>
                
                <ul className="ml-4 mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Dudas sobre la posibilidad de realizar la actividad 100% en remoto, al no describirse con suficiente detalle las funciones ni los medios tecnológicos empleados.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Falta de claridad en la documentación relativa a la empresa extranjera y a la relación profesional continuada con el cliente, cuestionando la estabilidad del proyecto.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Defectos formales en la acreditación de cobertura de Seguridad Social y en la traducción y legalización de ciertos documentos aportados.</strong></span>
                  </li>
                </ul>
                
                <p>
                  Nuestro cliente no comprendía cómo, pese a llevar años trabajando online para la misma empresa extranjera y haber preparado la solicitud con detalle, se le denegaba un permiso diseñado precisamente para su perfil profesional.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Estrategia del recurso de alzada</h3>
                <p>
                  Tras analizar la resolución y el expediente, optamos por interponer un recurso de alzada ante la Secretaría de Estado de Migraciones, solicitando la revisión íntegra de la denegación y acreditando punto por punto el cumplimiento de la Ley 14/2013.
                </p>
                
                <p>
                  Estructuramos la estrategia en tres ejes principales:
                </p>
                
                <ul className="ml-4 mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Acreditar el teletrabajo internacional real y continuado:</strong> Presentamos una memoria ampliada de funciones, justificando que todas las tareas (desarrollo, soporte, reuniones, entregas) se realizaban de forma telemática, acompañada de contratos actualizados, documentos de incorporación de la empresa extranjera y evidencias de la relación profesional continuada superior a tres meses.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Subsanar y reforzar la documentación formal:</strong> Aportamos certificados de empresa y de Seguridad Social del país de origen debidamente apostillados/legalizados, aclarando la cobertura y, en su caso, la aplicación de convenios internacionales, así como traducciones juradas de toda la documentación relevante.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Fundamentación jurídica detallada:</strong> En el recurso, rebatimos la interpretación restrictiva de la resolución inicial, citando la normativa aplicable a teletrabajadores de carácter internacional y la propia finalidad de la figura, orientada a atraer talento extranjero que trabaja para empresas ubicadas fuera de España.</span>
                  </li>
                </ul>
                
                <p>
                  Subrayamos que la denegación se basaba más en una apreciación formal y en lagunas fácilmente subsanables que en un incumplimiento real de los requisitos materiales del permiso.
                </p>
                
                <h3 className="text-2xl font-bold mb-3 mt-6 text-foreground">Resolución del recurso</h3>
                <p>
                  La Secretaría de Estado de Migraciones, tras revisar el contenido del recurso de alzada y la nueva documentación aportada, estimó nuestras alegaciones y revocó la resolución denegatoria dictada en primera instancia.
                </p>
                
                <p>
                  En su nueva resolución reconoció expresamente que:
                </p>
                
                <ul className="ml-4 mb-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>La actividad podía desarrollarse íntegramente en remoto, de acuerdo con la descripción de funciones y los medios técnicos aportados.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>La empresa extranjera estaba debidamente constituida y en funcionamiento, y la relación profesional con nuestro cliente era real, estable y anterior en más de tres meses a la solicitud.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>La documentación relativa a Seguridad Social y demás requisitos formales se había completado y adecuaba a lo exigido por la normativa.</strong></span>
                  </li>
                </ul>
                
                <p>
                  En consecuencia, se concedió a nuestro cliente la autorización de residencia como teletrabajador de carácter internacional por el periodo previsto, con efectos desde la fecha de la solicitud inicial.
                </p>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-300 rounded-lg">
                  <h4 className="text-lg font-bold mb-2 text-orange-600 text-center">Resultado del Caso</h4>
                  <p className="text-black text-justify">
                    En consecuencia, se concedió a nuestro cliente la autorización de residencia como teletrabajador de carácter internacional por el periodo previsto, con efectos desde la fecha de la solicitud inicial.
                  </p>
                  <p className="text-black mt-2 text-justify">
                    En consecuencia, se concedió a nuestro cliente la autorización de residencia como teletrabajador de carácter internacional por el periodo previsto, con efectos desde la fecha de la solicitud inicial.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-4 text-black">¿Necesitas ayuda con tu solicitud de teletrabajo?</h3>
              <p className="text-black font-sans mb-6 text-justify">
                Si tienes problemas con tu solicitud de residencia como teletrabajador o te han denegado el permiso, contacta con nuestros abogados especialistas en derecho de extranjería.
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

export default CasoTeletrabajador;
