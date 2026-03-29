import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";

const BlogPost = () => {
  const post = {
    category: "Civil",
    title: "Cómo reclamar una deuda: guía paso a paso",
    excerpt: "Todo lo que necesitas saber para recuperar el dinero que te deben de forma rápida y efectiva.",
    date: "26 Mar 2026",
    author: "Dextra Law Firm",
    readTime: "6 min lectura",
    tags: ["deuda", "reclamación", "civil", "guía", "paso a paso"],
    content: `
# Cómo reclamar una deuda: guía paso a paso

Reclamar una deuda puede convertirse en una fuente de tensión si no tienes claro qué hacer, qué plazos se aplican y qué pruebas necesitas para demostrar lo que te deben. En esta guía te explico, de forma ordenada y con lenguaje sencillo, cómo reclamar una deuda en España en 2026, desde el primer recordatorio amistoso hasta la posible vía judicial.

## Paso 1: **Verificar la deuda**

Antes de reclamar, asegúrate de que la deuda está clara y es exigible.

**Cantidad exacta**: calcula el importe total, incluyendo posibles intereses si están pactados o previstos en contrato o factura.

**Concepto**: identifica con precisión el origen (factura impagada, préstamo entre particulares, renta de alquiler, servicios profesionales, etc.).

**Documentación**: reúne facturas, contratos, presupuestos aceptados, correos electrónicos, mensajes y cualquier justificante de la relación y del impago.

**Plazos de prescripción (orientativos)**

En España, el plazo general de prescripción de las acciones personales (deudas civiles y mercantiles sin plazo especial) es de 5 años desde que la deuda puede exigirse, según el artículo 1964 del Código Civil tras la reforma de 2015. Como regla práctica, muchas reclamaciones de cantidad entre particulares o frente a empresas se rigen por ese plazo de 5 años, salvo que exista una regulación específica distinta (por ejemplo, ciertas deudas laborales, fiscales o con la Administración).

Si tienes dudas sobre si tu deuda está prescrita o no, es recomendable que un abogado revise fechas y documentos antes de iniciar cualquier reclamación formal.

<div class="my-8 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
  <div class="aspect-video bg-muted rounded-lg flex items-center justify-center">
    <span class="text-muted-foreground/50 text-lg font-medium">📋 Verificación de deudas</span>
  </div>
  <p class="text-center text-sm text-muted-foreground mt-4">Análisis inicial: Documentación y plazos de prescripción</p>
</div>

## Paso 2: **Contacto amistoso**

Siempre es aconsejable empezar por la vía amistosa.

**Primer recordatorio**

• Envía un mensaje o correo electrónico recordando la deuda de forma cordial.

• Incluye: importe, concepto, fecha de vencimiento y una propuesta de fecha de pago.

• Ofrece flexibilidad (fraccionar la deuda, nuevo calendario de pago) si la situación económica del deudor lo justifica.

**Comunicación formal pero amistosa**

• Si el primer recordatorio no funciona, eleva ligeramente el tono, manteniendo la corrección.

• Envía un correo más formal o una carta sencilla.

• Reitera los datos: cantidad, concepto, fecha de vencimiento.

• Indica un plazo concreto para el pago (por ejemplo, 7–10 días).

• Conserva siempre copia de todo lo enviado y recibido.

<div class="my-8 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
  <div class="aspect-video bg-muted rounded-lg flex items-center justify-center">
    <span class="text-muted-foreground/50 text-lg font-medium">📧 Comunicación formal</span>
  </div>
  <p class="text-center text-sm text-muted-foreground mt-4">Contacto estructurado: Burofax y requerimientos de pago</p>
</div>

## Paso 3: **Reclamación extrajudicial formal (burofax o requerimiento)**

Si la vía amistosa fracasa, conviene dejar constancia fehaciente de que reclamas la deuda.

**Requerimiento de pago**

• Forma: lo más habitual es un burofax con acuse de recibo y certificación de contenido, o, en su caso, un requerimiento notarial.

• Contenido mínimo:

• Datos del acreedor y del deudor.

• Importe exacto reclamado.

• Origen de la deuda (contrato, factura, préstamo…).

• Fecha de vencimiento.

• Plazo final para el pago (por ejemplo, 10–15 días).

• Advertencia de que, si no se paga, se iniciarán acciones legales con posibles costes adicionales.

**Ejemplo de texto de requerimiento (adaptable):**

<div class="my-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
  <p class="font-medium text-black">Asunto: Requerimiento de pago</p>
  <p class="font-medium text-black mb-4">Estimado/a [Nombre]:</p>
  <br>
  <p class="font-medium text-black mb-4">Por medio de la presente le requiero formalmente para que proceda al pago de la cantidad de [X] €, correspondiente a [concepto de la deuda], vencida el día [fecha].</p>
  <br>
  <p class="font-medium text-black mb-4">A día de hoy, la deuda asciende a [cantidad total] €.</p>
  <br>
  <p class="font-medium text-black mb-4">Le otorgo un plazo de [10/15] días naturales desde la recepción de esta carta para realizar el pago.</p>
  <br>
  <p class="font-medium text-black mb-4">En caso de no atender este requerimiento, me veré obligado/a a iniciar las acciones legales oportunas para la reclamación de la deuda, con los costes adicionales que ello pueda comportar.</p>
  <br>
  <p class="font-medium text-black mb-4">Atentamente,</p>
  <br>
  <p class="font-medium text-black">[Tu nombre / datos de contacto]</p>
</div>

Con el resguardo del burofax o requerimiento, podrás demostrar ante el juzgado que intentaste cobrar extrajudicialmente y que el deudor fue advertido.

## Paso 4: **Mediación y conciliación**

Antes de ir al juzgado, en algunos casos puede ser útil intentar una solución intermedia.

**Mediación**

Consiste en acudir a un mediador neutral que ayude a buscar una solución pactada (plazos, quitas, daciones en pago, etc.).

Suele ser más rápida y económica que un procedimiento judicial, y puede preservar la relación comercial o personal.

**Acto de conciliación**

Se puede solicitar un acto de conciliación ante el juzgado, citando al deudor para tratar de alcanzar un acuerdo formal.

Si hay acuerdo, se recoge en un acta con valor ejecutivo; si no lo hay, quedará constancia del intento, lo que puede ser útil después en juicio.

## Paso 5: **Reclamación judicial de la deuda**

Si el deudor sigue sin pagar, la vía judicial es el siguiente escalón.

Las opciones principales, de forma simplificada, son:

• **Procedimiento monitorio**: muy útil cuando existe una deuda dineraria, líquida, determinada, vencida y exigible, acreditada documentalmente (facturas, contratos, albaranes, etc.).

• **Juicio verbal**: para reclamaciones de hasta 6.000 euros (salvo excepciones), más rápido y con trámite simplificado.

• **Juicio ordinario**: para cantidades superiores a 6.000 euros o asuntos más complejos.

Elegir uno u otro procedimiento dependerá de la cuantía, de la documentación de la que dispongas y de las circunstancias concretas del caso, por lo que es aconsejable contar con asesoramiento profesional.

<div class="my-8 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
  <div class="aspect-video bg-muted rounded-lg flex items-center justify-center">
    <span class="text-muted-foreground/50 text-lg font-medium">⚖️ Procedimientos judiciales</span>
  </div>
  <p class="text-center text-sm text-muted-foreground mt-4">Vía judicial: Monitorio, verbal y ordinario</p>
</div>

## 6. **Por qué contar con un abogado**

Aunque algunas reclamaciones de pequeña cuantía pueden iniciarse sin abogado, la intervención de un profesional incrementa notablemente las posibilidades de éxito y reduce errores formales.

Un abogado especializado puede:

• Analizar si la deuda está o no prescrita y qué pruebas son necesarias.

• Redactar un burofax o requerimiento sólido que deje clara tu posición.

• Elegir el procedimiento judicial más adecuado (monitorio, verbal, ordinario) y tramitarlo correctamente.

• Negociar acuerdos que te permitan recuperar tu dinero sin alargar el conflicto.

## 7. **Conclusión: organización, prueba y estrategia**

En definitiva, conocer cómo funciona la reclamación de una deuda, qué plazos se aplican y qué pasos debes seguir en cada fase es esencial para no cometer errores que puedan hacerte perder tiempo, dinero o incluso tu derecho a cobrar. Si te deben dinero, has recibido impagos reiterados o simplemente dudas sobre la viabilidad de reclamar judicialmente una cantidad, es importante que no afrontes el problema solo y cuentes con asesoramiento jurídico especializado desde el primer momento.

En Dextra Law Firm, te ofrecemos un abogado civil especializado en reclamaciones de cantidad para ayudarte a analizar tu caso, estudiar si la deuda está prescrita, preparar los requerimientos de pago y, cuando sea necesario, iniciar el procedimiento judicial más adecuado para defender tus intereses. Puedes contactar con nosotros para una consulta directa y confidencial y recibir asistencia jurídica inmediata y adaptada a tu situación concreta, ya sea en Valencia o en el resto de España.
    `
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary font-sans font-semibold text-sm mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Publicaciones
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-primary/10 text-primary font-sans text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
              <span className="flex items-center gap-1 text-muted-foreground font-sans text-sm">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed mb-8">{post.excerpt}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-sans">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
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
              <div 
                className="text-foreground font-sans leading-relaxed text-justify"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-6 mt-8 text-foreground text-center">$1</h1>')
                    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-5 mt-8 text-foreground text-left">$1</h2>')
                    .replace(/^## (Conclusión)$/gim, '<h2 class="text-2xl font-bold mb-5 mt-8 text-foreground text-center">$1</h2>')
                    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mb-4 mt-6 text-foreground text-left">$1</h3>')
                    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
                    .replace(/^\* (.*)$/gim, '<li class="ml-4 mb-3 text-left">• $1</li>')
                    .replace(/^- (.*)$/gim, '<li class="ml-4 mb-3 text-left">• $1</li>')
                    .replace(/^- (.*)$/gim, '<li class="ml-4 mb-3 text-left">• $1</li>')
                    .replace(/❌ \*\*(.*)\*\*/gim, '<li class="ml-4 mb-3 text-red-600 text-left">❌ <strong>$1</strong></li>')
                    .replace(/\n\n/gim, '</p><p class="mb-6">')
                    .replace(/^([^#<\n])/gim, '<p class="mb-6">$1')
                    .replace(/<br>/gim, '<br class="mb-4">')
                    .replace(/<br><br>/gim, '<br class="mb-8"><br class="mb-8">')
                    .replace(/(<\/p>)\s+<p>/gim, '$1</p><p class="mb-6">$2')
                    .replace(/(<\/p>)\n(<p)/gim, '$1</p><p class="mb-6">$2')
                    .replace(/(<\/li>)\n/gim, '$1</li>')
                    .replace(/\n(<li)/gim, '<div class="mb-6">$1')
                    .replace(/(<\/li>)\n\n/gim, '$1</li></div>')
                    .replace(/```([^`]*)```/gim, '<pre class="bg-muted p-4 rounded-lg mb-6 text-sm text-left"><code>$1</code></pre>')
                }}
              />
            </div>
            
            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
            
            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas reclamar una deuda?</h3>
              <p className="text-muted-foreground font-sans mb-6">
                Si tienes una deuda impagada y necesitas ayuda profesional, contacta con nuestros abogados especialistas en derecho civil.
              </p>
              <a
                href="https://www.cal.eu/adrian-garcia-lledo-babrwp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-sans font-semibold hover:bg-primary/90 transition-colors"
              >
                Consultar Abogado
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogPost;
