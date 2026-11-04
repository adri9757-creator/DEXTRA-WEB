import { Link } from "react-router-dom";
import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/config/site";
import { openCookieSettings, STORAGE_KEY } from "@/lib/consent";

/**
 * Política de cookies con el inventario REAL del sitio.
 * Si se añade o retira un servicio, actualizar esta tabla y src/lib/consent.ts.
 */
const Cookies = () => (
  <LegalLayout
    title="Política de cookies"
    intro="Qué cookies y tecnologías similares utiliza este sitio web, para qué sirven y cómo puedes aceptarlas, rechazarlas o cambiar tu decisión."
    updated="noviembre de 2026"
  >
    <h2>1. ¿Qué son las cookies?</h2>
    <p>
      Las cookies son pequeños archivos que un sitio web guarda en tu navegador. Esta política se aplica también a
      tecnologías similares, como el almacenamiento local del navegador (<em>localStorage</em>) o la carga de contenido de
      otros servidores que puede leer o instalar cookies (artículo 22.2 de la Ley 34/2002, LSSI-CE).
    </p>

    <h2>2. Resumen</h2>
    <ul>
      <li><strong>No usamos cookies analíticas ni publicitarias</strong>, ni perfilamos tu navegación.</li>
      <li>Solo guardamos, de forma técnica, tu decisión sobre cookies.</li>
      <li>
        El mapa de Google Maps y las reseñas de Google (widget de Elfsight) son contenido de terceros y{" "}
        <strong>no se cargan hasta que los permites</strong>.
      </li>
      <li>Puedes aceptar, rechazar o configurar con la misma facilidad, y cambiar de opinión en cualquier momento.</li>
    </ul>

    <h2>3. Cookies y tecnologías que utilizamos</h2>
    <div className="overflow-x-auto">
      <table>
        <caption className="sr-only">Inventario de cookies y tecnologías similares</caption>
        <thead>
          <tr>
            <th scope="col">Nombre / servicio</th>
            <th scope="col">Titular</th>
            <th scope="col">Tipo y finalidad</th>
            <th scope="col">Duración</th>
            <th scope="col">¿Necesita consentimiento?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>{STORAGE_KEY}</code> (almacenamiento local)</td>
            <td>Propia ({SITE.name})</td>
            <td>Técnica. Guarda tu decisión sobre cookies para no volver a preguntarte.</td>
            <td>12 meses</td>
            <td>No (exenta: necesaria para recordar tu elección)</td>
          </tr>
          <tr>
            <td>Google Maps (mapa en <Link to="/contacto">Contacto</Link>)</td>
            <td>Google Ireland Limited</td>
            <td>
              Contenido de terceros. Al cargar el mapa, Google recibe tu dirección IP y datos del navegador y puede instalar
              sus propias cookies (por ejemplo, <code>NID</code>) con fines que determina Google.
            </td>
            <td>Según Google (la cookie <code>NID</code> suele durar unos 6 meses)</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Reseñas de Google mediante Elfsight (página de inicio)</td>
            <td>Elfsight (proveedor del widget de reseñas); las fotos de perfil se sirven desde servidores de Google</td>
            <td>
              Contenido de terceros. Carga el widget de reseñas desde servidores de Elfsight, que reciben tu dirección IP y
              datos técnicos del navegador y pueden usar almacenamiento propio.
            </td>
            <td>Según la política de Elfsight</td>
            <td>Sí</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Enlaces a servicios externos (no instalan cookies en este sitio)</h3>
    <ul>
      <li>
        <strong>Cal.eu</strong> (reserva de citas): el botón «Agenda tu cita» abre la web de Cal.eu. No se incrusta nada en
        este sitio; al visitarla se aplican las políticas de Cal.eu.
      </li>
      <li>
        <strong>WhatsApp</strong> (WhatsApp Ireland Limited): los botones de WhatsApp abren la aplicación o su web.
      </li>
      <li><strong>Google</strong>: los enlaces «Ver en Google» o «Abrir en Google Maps» abren la web de Google.</li>
    </ul>

    <h3>Alojamiento</h3>
    <p>
      El sitio se aloja en Vercel. Vercel no instala cookies en tu navegador por servir esta web; trata datos técnicos de
      conexión (como la dirección IP) para entregar las páginas y proteger el servicio, tal y como se explica en la{" "}
      <Link to="/privacidad">Política de privacidad</Link>.
    </p>

    <h3>Gestor de consentimiento anterior</h3>
    <p>
      Hasta noviembre de 2026 este sitio usaba CookieScript para gestionar el consentimiento. Ya no se utiliza: si tu
      navegador conserva su cookie <code>CookieScriptConsent</code>, este sitio la elimina automáticamente.
    </p>

    <h2>4. Cómo aceptar, rechazar o cambiar tu decisión</h2>
    <p>
      La primera vez que visitas la web te mostramos un aviso con tres opciones del mismo peso: <strong>Rechazar</strong>,{" "}
      <strong>Configurar</strong> y <strong>Aceptar</strong>. Puedes navegar por la web sin decidir y sin aceptar nada. Tu
      decisión se guarda 12 meses; pasado ese tiempo, o si cambian los servicios, te volveremos a preguntar.
    </p>
    <p>
      Puedes cambiar o retirar tu consentimiento en cualquier momento, con la misma facilidad con que lo diste, desde el
      enlace «Configurar cookies» del pie de página o con este botón:
    </p>
    <p>
      <button
        type="button"
        onClick={openCookieSettings}
        className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-foreground px-5 py-2 font-semibold transition-colors hover:bg-foreground hover:text-background"
      >
        Configurar cookies
      </button>
    </p>
    <p>
      También puedes borrar o bloquear las cookies desde tu navegador:{" "}
      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a>,{" "}
      <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer">Firefox</a>,{" "}
      <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a>{" "}
      y{" "}
      <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a>.
      Las cookies de Google y Elfsight se gestionan en sus propios dominios.
    </p>

    <h2>5. Transferencias internacionales</h2>
    <p>
      Los proveedores de contenido de terceros pueden tratar datos fuera del Espacio Económico Europeo. Consulta la{" "}
      <Link to="/privacidad">Política de privacidad</Link> para más información sobre las garantías aplicables.
    </p>

    <h2>6. Más información</h2>
    <p>
      Para cualquier duda sobre esta política, escríbenos a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Puedes
      consultar las políticas de los terceros en{" "}
      <a href="https://policies.google.com/technologies/cookies?hl=es" target="_blank" rel="noopener noreferrer">Google</a>{" "}
      y{" "}
      <a href="https://elfsight.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Elfsight</a>.
    </p>
  </LegalLayout>
);

export default Cookies;
