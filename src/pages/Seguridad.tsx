import { Link } from "react-router-dom";
import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/config/site";

const Seguridad = () => (
  <LegalLayout
    title="Política de seguridad"
    intro="Cómo protegemos este sitio web y cómo puedes avisarnos si encuentras una vulnerabilidad."
    updated="noviembre de 2026"
  >
    <h2>1. Medidas aplicadas en este sitio</h2>
    <ul>
      <li><strong>Conexión cifrada</strong>: todo el tráfico usa HTTPS, con HSTS para que el navegador no use conexiones sin cifrar.</li>
      <li>
        <strong>Cabeceras de seguridad</strong>: política de seguridad de contenidos (CSP) que limita desde dónde pueden
        cargarse scripts, estilos, imágenes y marcos; protección frente a la inserción del sitio en marcos ajenos
        (clickjacking); y políticas estrictas de referente y de permisos del navegador.
      </li>
      <li><strong>Sin seguimiento</strong>: no usamos analítica ni publicidad, y el contenido de terceros se bloquea hasta que lo permites.</li>
      <li>
        <strong>Formulario de contacto protegido</strong>: validación y saneado en el navegador y en el servidor,
        verificación del origen de la petición, límite de envíos, campo trampa contra bots y escape del contenido al
        generar el correo.
      </li>
      <li><strong>Secretos fuera del navegador</strong>: las claves de los servicios solo existen en el servidor.</li>
      <li><strong>Minimización</strong>: solo pedimos los datos necesarios para responder a tu consulta.</li>
      <li><strong>Mantenimiento</strong>: revisión periódica de dependencias y de avisos de vulnerabilidades.</li>
    </ul>

    <h2>2. Comunicar una vulnerabilidad</h2>
    <p>
      Si crees haber encontrado un problema de seguridad en este sitio, escríbenos a{" "}
      <a href={`mailto:${SITE.email}?subject=Seguridad`}>{SITE.email}</a> con el asunto «Seguridad». Incluye una descripción,
      los pasos para reproducirlo y la URL afectada. También publicamos esta información en{" "}
      <a href="/.well-known/security.txt">/.well-known/security.txt</a> (RFC 9116).
    </p>
    <p>Te pedimos que:</p>
    <ul>
      <li>No accedas, modifiques ni borres datos de terceros, y te limites a lo imprescindible para demostrar el problema.</li>
      <li>No realices pruebas de denegación de servicio, ingeniería social ni envíos masivos del formulario.</li>
      <li>Nos des un plazo razonable para corregirlo antes de hacerlo público.</li>
    </ul>
    <p>
      Responderemos lo antes posible. No ofrecemos recompensas económicas. Si la incidencia afecta a datos personales,
      actuaremos conforme al RGPD (incluida, cuando proceda, la notificación a la AEPD en 72 horas).
    </p>

    <h2>3. Más información</h2>
    <p>
      Sobre el tratamiento de datos personales, consulta la <Link to="/privacidad">Política de privacidad</Link>.
    </p>
  </LegalLayout>
);

export default Seguridad;
