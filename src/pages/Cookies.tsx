import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, Cookie, Settings, Eye, Users } from "lucide-react";

const Cookies = () => {
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
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Cookies</h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">
              Información sobre el uso de cookies y tecnologías similares en nuestro sitio web.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-sans">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Última actualización: 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>GDPR compliant</span>
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
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Cookie className="w-6 h-6 text-primary" />
                    1. ¿Qué son las cookies?
                  </h2>
                  <p>
                    Una cookie es un pequeño fichero de texto que se almacena en tu navegador cuando visitas determinadas páginas. Permite que el sitio web recuerde información sobre tu visita, como tu idioma preferido o las páginas que has visitado, para mejorar tu experiencia de navegación.
                  </p>
                  <p>
                    Las cookies no identifican directamente a la persona usuaria, aunque pueden asociarse a un identificador único del dispositivo o de la sesión de navegación.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    2. ¿Qué tipos de cookies usamos en esta web?
                  </h2>
                  <p>
                    En el sitio web de Dextra Law Firm utilizamos cookies propias y de terceros con las siguientes finalidades:
                  </p>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Cookies técnicas o necesarias</strong> - Son aquellas que permiten que la página web funcione correctamente y que puedas navegar por ella, utilizar áreas seguras, recordar tus preferencias básicas o mantener la seguridad del sitio. Estas cookies son imprescindibles para el funcionamiento de la web y no requieren tu consentimiento.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Cookies de análisis (Google Analytics)</strong> - Son aquellas que nos permiten medir y analizar la forma en que las personas usuarias utilizan la web (páginas más visitadas, tiempo de visita, clics en determinados enlaces, etc.), con el fin de mejorar nuestros contenidos y servicios. Estas cookies las proporciona Google Analytics y se instalan únicamente si las aceptas expresamente a través del banner de cookies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Cookies de rendimiento</strong> - Recopilan información sobre cómo los usuarios utilizan el sitio web para ayudarnos a mejorar su funcionamiento.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Cookies funcionales</strong> - Permiten que el sitio web recuerde las elecciones del usuario y proporciona características mejoradas y más personales.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Cookies de publicidad</strong> - Se utilizan para presentar anuncios relevantes para el usuario y sus intereses.</span>
                    </li>
                  </ul>
                  <p>
                    En este momento, Dextra Law Firm no utiliza cookies publicitarias ni de perfiles de comportamiento.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-primary" />
                    3. Cookies específicas utilizadas
                  </h2>
                  <p>
                    A continuación detallamos las cookies específicas que utilizamos en nuestro sitio web:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-bold mb-2">Cookies Esenciales</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>session_id:</strong> Mantiene la sesión del usuario activa</li>
                        <li>• <strong>csrf_token:</strong> Protege contra ataques CSRF</li>
                        <li>• <strong>auth_token:</strong> Autentica al usuario si ha iniciado sesión</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-bold mb-2">Cookies de Rendimiento</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>_ga, _gid:</strong> Google Analytics para análisis de tráfico</li>
                        <li>• <strong>_gat:</strong> Limita la tasa de solicitudes</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-bold mb-2">Cookies Funcionales</h4>
                      <ul className="text-sm space-y-1">
                        <li>• <strong>preferences:</strong> Almacena preferencias del usuario</li>
                        <li>• <strong>language:</strong> Recuerda el idioma seleccionado</li>
                        <li>• <strong>theme:</strong> Almacena preferencias de tema visual</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    4. ¿Quién utiliza las cookies?
                  </h2>
                  <p>
                    Las cookies que se instalan en esta web pueden ser:
                  </p>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Cookies propias:</strong> son gestionadas por Dextra Law Firm como responsable del sitio web.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Cookies de terceros:</strong> en particular, utilizamos cookies de análisis de:</span>
                    </li>
                    <li className="flex items-start gap-2 ml-8">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Google Analytics</strong>, un servicio de análisis web prestado por Google LLC, con domicilio en 1600 Amphitheatre Parkway, Mountain View, California 94043, Estados Unidos. Google Analytics utiliza cookies para recopilar información anónima y agregada sobre el uso del sitio (por ejemplo, número de visitantes, páginas visitadas, tiempo de permanencia), que es transmitida y tratada por Google en sus servidores, de acuerdo con su propia política de privacidad.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    5. Base legitimadora y plazo de conservación
                  </h2>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>El uso de cookies técnicas se basa en el interés legítimo de Dextra Law Firm en garantizar el correcto funcionamiento del sitio web.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>El uso de cookies de análisis (Google Analytics) se basa en tu consentimiento, que puedes otorgar o revocar en cualquier momento.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>Las cookies se conservarán en tu dispositivo durante el tiempo estrictamente necesario para las finalidades indicadas y, en todo caso, durante los plazos establecidos por sus proveedores (por ejemplo, determinadas cookies de Google Analytics pueden permanecer activas hasta aproximadamente 12–13 meses).</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    6. ¿Cómo obtenemos tu consentimiento?
                  </h2>
                  <p>
                    Al acceder por primera vez al sitio web de Dextra Law Firm, se muestra un banner de cookies que te informa de forma resumida sobre su uso. En dicho banner puedes:
                  </p>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>Aceptar todas las cookies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>Rechazar todas las cookies no necesarias.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span>Configurar tus preferencias y elegir qué tipos de cookies de análisis deseas permitir.</span>
                    </li>
                  </ul>
                  <p>
                    Puedes modificar tu elección en cualquier momento mediante el enlace o botón "Configurar cookies" disponible en el sitio web, o ajustando la configuración de tu navegador.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-primary" />
                    7. ¿Cómo puedes gestionar o desactivar las cookies?
                  </h2>
                  <p>
                    Puedes permitir, bloquear o eliminar las cookies instaladas en tu dispositivo mediante la configuración de las opciones del navegador que utilizas.
                  </p>
                  <p>
                    En los siguientes enlaces encontrarás información sobre cómo hacerlo en los navegadores más habituales:
                  </p>
                  <ul className="ml-4 mb-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Google Chrome:</strong> https://support.google.com/chrome/answer/95647</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Mozilla Firefox:</strong> https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Microsoft Edge:</strong> https://support.microsoft.com/es-es/windows/administrar-cookies-en-microsoft-edge-</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 text-primary mt-0.5 flex-shrink-0">•</span>
                      <span><strong>Safari:</strong> https://support.apple.com/es-es/105082</span>
                    </li>
                  </ul>
                  <p>
                    Ten en cuenta que, si bloqueas o eliminas determinadas cookies técnicas, la web puede dejar de funcionar correctamente o algunas funcionalidades pueden verse afectadas.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    8. Más información
                  </h2>
                  <p>
                    Para más información sobre el tratamiento de tus datos personales, quién es el responsable, cuáles son tus derechos y cómo puedes ejercitarlos (acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad), puedes consultar nuestra Política de Privacidad.
                  </p>
                  <p>
                    Si tienes cualquier duda sobre esta Política de Cookies, puedes contactar con nosotros en: info@dextralawfirm.com.
                  </p>
                </section>

                <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                  <div className="space-y-4">
                    <p className="text-sm text-foreground font-bold text-center">Para cualquier consulta sobre la Política de Privacidad puede contactar con nosotros</p>
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <div className="space-y-2">
                        <p><strong>Correo electrónico:</strong> info@dextralawfirm.com</p>
                        <p><strong>Teléfono de contacto:</strong> 624 164 536</p>
                        <p><strong>Dirección:</strong> Gran Vía Marqués del Turia 49, -1, 46005 Valencia</p>
                      </div>
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

export default Cookies;
