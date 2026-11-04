import { Link } from "react-router-dom";
import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/config/site";

/**
 * Política de privacidad (RGPD arts. 13 y 14; LOPDGDD art. 11).
 * Los datos pendientes se marcan con [POR_CONFIRMAR]. Revisar cada vez que se
 * añada un proveedor, formulario o finalidad nueva.
 */
const Privacidad = () => (
  <LegalLayout
    title="Política de privacidad"
    intro="Cómo tratamos tus datos personales cuando visitas esta web, nos escribes o reservas una cita, y qué derechos tienes."
    updated="noviembre de 2026"
  >
    <h2>1. Responsable del tratamiento</h2>
    <ul>
      <li><strong>Responsable:</strong> {SITE.owner.name} ({SITE.name}), abogado colegiado n.º {SITE.owner.barNumber} del {SITE.owner.bar}.</li>
      <li><strong>NIF:</strong> {SITE.owner.nif}</li>
      <li><strong>Domicilio:</strong> {SITE.owner.address}</li>
      <li><strong>Correo electrónico:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
      <li><strong>Teléfono:</strong> {SITE.phone.display}</li>
      <li>
        <strong>Delegado de protección de datos:</strong> No se ha designado Delegado de Protección de Datos, al no
        resultar obligatorio conforme a la normativa aplicable.
      </li>
    </ul>

    <h2>2. Qué datos tratamos, para qué y con qué base jurídica</h2>

    <h3>2.1. Consultas por formulario, correo electrónico, teléfono o WhatsApp</h3>
    <ul>
      <li><strong>Datos:</strong> nombre, correo electrónico, teléfono (opcional), área de interés y el contenido de tu mensaje.</li>
      <li><strong>Finalidad:</strong> responder a tu consulta y, si lo solicitas, valorar y presupuestar un posible encargo profesional.</li>
      <li>
        <strong>Base jurídica:</strong> aplicación de medidas precontractuales adoptadas a petición tuya (art. 6.1.b RGPD).
        La casilla del formulario sirve para que confirmes que has leído esta información.
      </li>
      <li>
        <strong>Datos especialmente protegidos:</strong> te pedimos que no incluyas en el formulario datos de salud u otra
        información sensible que no sea imprescindible. Si para valorar tu caso es necesario tratar datos de categorías
        especiales o relativos a infracciones penales, lo haremos para la formulación, el ejercicio o la defensa de
        reclamaciones (art. 9.2.f RGPD) y en el marco del ejercicio de la abogacía (art. 10 LOPDGDD), con deber de secreto
        profesional.
      </li>
      <li>
        <strong>Conservación:</strong> durante el tiempo necesario para responder a tu consulta y, después, bloqueados
        durante los plazos legales de prescripción. Si se formaliza un encargo, se aplicará el apartado 2.3.
      </li>
    </ul>

    <h3>2.2. Reserva de citas en Cal.eu</h3>
    <ul>
      <li><strong>Datos:</strong> los que facilites en el formulario de reserva (nombre, correo, teléfono y motivo de la cita).</li>
      <li><strong>Finalidad:</strong> gestionar la cita y, en su caso, el pago previo de la consulta según las <Link to="/condiciones">Condiciones</Link>.</li>
      <li><strong>Base jurídica:</strong> ejecución del contrato de consulta o medidas precontractuales (art. 6.1.b RGPD).</li>
      <li><strong>Conservación:</strong> durante el tiempo necesario para gestionar la reserva y, después, bloqueados durante los plazos legales de prescripción; si hay facturación, durante los plazos fiscales legales.</li>
    </ul>

    <h3>2.3. Clientes</h3>
    <p>
      Si contratas nuestros servicios, trataremos tus datos para prestar el servicio encargado, facturar y cumplir las
      obligaciones legales aplicables (base: ejecución del contrato y cumplimiento de obligaciones legales, art. 6.1.b y
      6.1.c RGPD). Te facilitaremos información específica en la hoja de encargo. Los datos se conservarán mientras dure la
      relación profesional y, posteriormente, durante los plazos legales aplicables, incluidos los de prescripción de
      acciones, obligaciones fiscales y, cuando resulte aplicable, las obligaciones de prevención del blanqueo de capitales y
      financiación del terrorismo. Transcurridos dichos plazos, los datos serán suprimidos o bloqueados.
    </p>

    <h3>2.4. Navegación y seguridad del sitio</h3>
    <ul>
      <li>
        <strong>Datos:</strong> dirección IP, fecha y hora, página solicitada y datos técnicos del navegador, registrados por
        el proveedor de alojamiento.
      </li>
      <li><strong>Finalidad:</strong> servir la web, garantizar su seguridad y prevenir abusos (por ejemplo, envíos masivos del formulario).</li>
      <li><strong>Base jurídica:</strong> interés legítimo en la seguridad del sitio (art. 6.1.f RGPD).</li>
      <li><strong>Conservación:</strong> según la configuración del proveedor de alojamiento, durante el tiempo mínimo necesario para garantizar la seguridad del servicio.</li>
    </ul>

    <h3>2.5. Contenido de terceros (mapa y reseñas)</h3>
    <p>
      Solo si lo aceptas, se cargan Google Maps y el widget de reseñas de Elfsight, que reciben tu dirección IP y datos
      técnicos del navegador. Base jurídica: tu consentimiento (art. 6.1.a RGPD), que puedes retirar en cualquier momento.
      Más detalles en la <Link to="/cookies">Política de cookies</Link>.
    </p>

    <p>
      <strong>No</strong> enviamos comunicaciones comerciales ni boletines, <strong>no</strong> elaboramos perfiles y{" "}
      <strong>no</strong> tomamos decisiones automatizadas que te afecten.
    </p>

    <h2>3. Destinatarios y encargados del tratamiento</h2>
    <p>
      No cedemos tus datos a terceros, salvo obligación legal o cuando sea necesario para el encargo profesional (por
      ejemplo, juzgados, tribunales o administraciones públicas ante los que actuemos en tu nombre). Para prestar el
      servicio contamos con proveedores que tratan datos por cuenta nuestra (encargados del tratamiento), con los que debe
      formalizarse el contrato de encargo del art. 28 RGPD:
    </p>
    <div className="overflow-x-auto">
      <table>
        <caption className="sr-only">Encargados del tratamiento</caption>
        <thead>
          <tr>
            <th scope="col">Proveedor</th>
            <th scope="col">Servicio</th>
            <th scope="col">Ubicación y garantías</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vercel Inc.</td>
            <td>Alojamiento de la web y ejecución del envío del formulario</td>
            <td>
              EE. UU. La función del formulario se ejecuta en la región de París (UE). Las transferencias fuera del EEE
              deben ampararse en cláusulas contractuales tipo de la Comisión Europea.{" "}
              [POR_CONFIRMAR: revisión y aceptación del DPA de Vercel.]
            </td>
          </tr>
          <tr>
            <td>Resend (proveedor de envío de correo electrónico)</td>
            <td>Envío por correo electrónico de los mensajes del formulario</td>
            <td>
              Envío previsto desde la región de la UE (eu-west-1, Irlanda). Resend es una empresa de EE. UU.: las
              transferencias fuera del EEE deben ampararse en cláusulas contractuales tipo (SCC) de la Comisión Europea.{" "}
              [POR_CONFIRMAR: revisión y aceptación del DPA de Resend.]
            </td>
          </tr>
          <tr>
            <td>[POR_CONFIRMAR: identificación del proveedor real del correo {SITE.email}]</td>
            <td>Recepción y gestión del correo electrónico</td>
            <td>Se indicarán al identificar el proveedor.</td>
          </tr>
          <tr>
            <td>Cal.eu (proveedor de reservas)</td>
            <td>Gestión de reservas de citas</td>
            <td>[POR_CONFIRMAR: ubicación de los datos y garantías de Cal.eu.]</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Si nos escribes por <strong>WhatsApp</strong>, WhatsApp Ireland Limited trata tus datos como responsable conforme a su
      propia política de privacidad. Si prefieres no usarlo, puedes contactarnos por correo, teléfono o formulario.
    </p>

    <h2>4. Transferencias internacionales</h2>
    <p>
      Algunos proveedores (Vercel y Resend) son empresas de Estados Unidos y pueden acceder a datos desde fuera del Espacio
      Económico Europeo. En esos casos, las transferencias se basarán en las cláusulas contractuales tipo aprobadas por la
      Comisión Europea (art. 46.2.c RGPD) y, cuando proceda, en la decisión de adecuación del Marco de Privacidad de Datos
      UE-EE. UU. (art. 45 RGPD). Puedes solicitarnos más información sobre estas garantías.
    </p>

    <h2>5. Tus derechos</h2>
    <p>Puedes ejercer en cualquier momento, de forma gratuita, los derechos de:</p>
    <ul>
      <li><strong>Acceso</strong> a tus datos.</li>
      <li><strong>Rectificación</strong> de datos inexactos.</li>
      <li><strong>Supresión</strong> cuando ya no sean necesarios.</li>
      <li><strong>Oposición</strong> y <strong>limitación</strong> del tratamiento.</li>
      <li><strong>Portabilidad</strong> de los datos que nos hayas facilitado.</li>
      <li><strong>Retirar el consentimiento</strong> dado, sin que afecte a la licitud del tratamiento anterior.</li>
    </ul>
    <p>
      Para ejercerlos, escríbenos a <a href={`mailto:${SITE.email}`}>{SITE.email}</a> o por correo postal a{" "}
      {SITE.owner.address}, indicando el derecho que ejerces. Si tenemos dudas razonables sobre tu identidad, podremos pedirte
      la información adicional necesaria para confirmarla. Te responderemos en el plazo de un mes. Ten en cuenta que el
      secreto profesional y las obligaciones legales de conservación pueden limitar algunos derechos.
    </p>

    <h2>6. Reclamación ante la autoridad de control</h2>
    <p>
      Si consideras que no hemos tratado tus datos correctamente, puedes presentar una reclamación ante la{" "}
      <strong>Agencia Española de Protección de Datos</strong> (C/ Jorge Juan, 6, 28001 Madrid,{" "}
      <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>). Te recomendamos que antes
      nos contactes para intentar resolverlo.
    </p>

    <h2>7. Menores de edad</h2>
    <p>
      Esta web no está dirigida a menores de 14 años. Si eres menor de esa edad, la consulta debe hacerla tu padre, madre o
      representante legal.
    </p>

    <h2>8. Seguridad</h2>
    <p>
      Aplicamos medidas técnicas y organizativas adecuadas al riesgo: conexión cifrada (HTTPS), cabeceras de seguridad,
      validación de los datos en el servidor, limitación de envíos y acceso restringido a la información. Más detalles en la{" "}
      <Link to="/seguridad">Política de seguridad</Link>.
    </p>

    <h2>9. Cambios en esta política</h2>
    <p>
      Podemos actualizar esta política para adaptarla a cambios normativos o en los servicios que utilizamos. La fecha de la
      última actualización figura al principio de la página.
    </p>
  </LegalLayout>
);

export default Privacidad;
