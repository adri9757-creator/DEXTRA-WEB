import { useEffect } from "react";
import { Link } from "react-router-dom";

const PoliticaCookies = () => {
  useEffect(() => {
    // Cargar el script de Cookie-Script para la tabla de cookies
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "UTF-8";
    script.setAttribute("data-cookiescriptreport", "report");
    script.src = "//report.cookie-script.com/r/d6cf83137771aa1dc3690eac2c7e94cd.js";
    
    // Insertar el script después del título y párrafo intro
    const targetElement = document.getElementById("cookies-script-container");
    if (targetElement) {
      targetElement.appendChild(script);
    }

    return () => {
      // Limpiar el script al desmontar el componente
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-foreground text-background py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Cookies</h1>
            <p className="text-lg text-background/80 font-sans leading-relaxed">
              En Dextra Law Firm utilizamos cookies para mejorar tu experiencia de navegación y garantizar el correcto funcionamiento de nuestros servicios. A continuación encontrarás información detallada sobre las cookies que utilizamos.
            </p>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl">
            {/* Contenedor para el script de Cookie-Script */}
            <div id="cookies-script-container" className="mb-12">
              {/* El script se insertará aquí dinámicamente */}
            </div>

            {/* Información adicional */}
            <div className="prose prose-lg max-w-none font-sans">
              <h2 className="text-2xl font-bold text-foreground mb-4">¿Qué son las cookies?</h2>
              <p className="text-muted-foreground mb-6">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos permiten reconocer tu navegador y recordar información sobre tus preferencias.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">¿Cómo utilizamos las cookies?</h2>
              <p className="text-muted-foreground mb-6">
                Utilizamos cookies para mejorar tu experiencia en nuestra web, analizar el tráfico del sitio y personalizar el contenido según tus intereses.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Gestión de cookies</h2>
              <p className="text-muted-foreground mb-6">
                Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar ciertas cookies puede afectar el funcionamiento de nuestra web.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Contacto</h2>
              <p className="text-muted-foreground mb-4">
                Si tienes alguna pregunta sobre nuestra política de cookies, puedes contactarnos en:
              </p>
              <ul className="text-muted-foreground list-disc list-inside mb-6">
                <li>Email: info@dextralawfirm.com</li>
                <li>Teléfono: +34 624 164 536</li>
                <li>Dirección: Gran Vía Marques del Turia 49, Valencia 46005</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg mt-8">
                <p className="text-sm text-muted-foreground">
                  Esta política de cookies fue actualizada por última vez el {new Date().toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaCookies;
