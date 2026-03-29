import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";

const BlogDeuda = () => {
  const post = {
    category: "Penal",
    title: "¿Qué hacer si te detienen en Valencia?",
    excerpt: "Guía completa sobre tus derechos y los plazos legales si eres detenido en Valencia en 2026.",
    date: "28 Mar 2026",
    author: "Dextra Law Firm",
    readTime: "8 min lectura",
    tags: ["detención", "valencia", "derechos", "penal", "guía"],
    content: `
# ¿Qué hacer si te detienen en Valencia?

En España, y por tanto en Valencia, la detención en 2026 sigue sujeta al marco constitucional del artículo 17 de la Constitución Española y a la Ley de Enjuiciamiento Criminal (LECrim), que regulan cuándo y cómo se puede privar de libertad a una persona. En particular, los artículos 490, 492 y 520 LECrim fijan los supuestos de detención, sus límites temporales y las garantías mínimas del detenido. Esta guía ofrece una explicación accesible para cualquier ciudadano, pero con un enfoque técnico y actualizado.

## 1. **Qué es una detención** y cuándo procede

La detención es una privación temporal de libertad acordada por la autoridad para investigar un posible delito o asegurar la presencia del investigado ante el juez. Solo puede practicarse en los casos y forma previstos en la ley, nunca de manera arbitraria.

De forma simplificada, en España se puede detener a una persona cuando concurre alguno de estos supuestos legales:

• **Delito flagrante**: cuando se está cometiendo el delito o acaba de cometerse.
• **Existencia de orden de detención o búsqueda** dictada por un juez.
• **Indicios racionales de participación en un delito** y riesgo de fuga o de no comparecer ante la autoridad judicial.
• **Procesado por delito con pena relevante** (superior a prisión correccional) o, aun siendo inferior, si sus antecedentes o las circunstancias hacen presumir que no comparecerá.

Una pelea en la vía pública en zonas de ocio de Valencia (como Ruzafa) puede dar lugar a una detención en delito flagrante si la policía presencia directamente la agresión o llega instantes después identificando claramente a los implicados. Otro ejemplo frecuente es la detención tras un control de tráfico por un presunto delito contra la seguridad vial, cuando el conductor duplica la tasa de alcoholemia permitida o conduce bajo la influencia de drogas.

<div class="my-8 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
  <div class="aspect-video bg-muted rounded-lg flex items-center justify-center">
    <span class="text-muted-foreground/50 text-lg font-medium">📍 Zonas de ocio en Valencia - Ruzafa</span>
  </div>
  <p class="text-center text-sm text-muted-foreground mt-4">Contexto local: Ejemplos prácticos de detenciones en zonas de ocio de Valencia</p>
</div>

## 2. **Plazos máximos** de la detención

La regla general es clara: la detención policial no puede exceder de 72 horas, plazo dentro del cual el detenido debe ser puesto en libertad o a disposición judicial. Este límite deriva del artículo 17.2 de la Constitución y del artículo 520 LECrim.

**Puntos clave sobre el cómputo del plazo:**

• El plazo empieza desde el momento efectivo de la detención, no desde la llegada a comisaría.
• La detención debe durar solo el tiempo estrictamente necesario para las diligencias básicas; quepan 72 horas no significa que siempre sea legítimo agotar el plazo.
• Superar injustificadamente estos límites puede convertir la detención en ilegal, con posible vulneración del derecho fundamental a la libertad y derecho a habeas corpus.

### Excepciones: delitos de terrorismo y similares

Para delitos relacionados con bandas armadas, terrorismo o rebelión, la LECrim permite una ampliación excepcional de la detención hasta un máximo de 48 horas adicionales, alcanzando 120 horas (5 días), siempre con autorización judicial motivada.

La solicitud de prórroga debe cursarse dentro de las primeras 48 horas de detención.

El juez competente debe resolver en un plazo muy breve, mediante resolución motivada que justifique la necesidad de la ampliación.

## 3. **Derechos básicos** de la persona detenida

Desde el mismo momento de la detención, la persona cuenta con una serie de derechos fundamentales reconocidos en la Constitución (especialmente art. 17 y 24) y desarrollados en el art. 520 LECrim. Entre los más relevantes:

• **Derecho a ser informado** de forma inmediata, comprensible y por escrito de los hechos que se le imputan, las razones de la detención y sus derechos.
• **Derecho a guardar silencio**: puede no declarar, no contestar a alguna o todas las preguntas, y manifestar que solo declarará ante el juez.
• **Derecho a no declarar contra sí mismo** ni confesarse culpable.
• **Derecho a designar abogado** de confianza o, si no lo hace o no puede, a que se le nombre uno de oficio.
• **Derecho a comunicarse con un familiar** o persona de confianza para informar de la detención, así como con su consulado si es extranjero.
• **Derecho a ser reconocido por un médico**, propio o forense, especialmente relevante en supuestos de lesiones o vulnerabilidad.
• **Derecho a ser puesto a disposición judicial** en el plazo legal y a solicitar el procedimiento de habeas corpus en caso de detención ilegal.

<div class="my-8 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
  <div class="aspect-video bg-muted rounded-lg flex items-center justify-center">
    <span class="text-muted-foreground/50 text-lg font-medium">⚖️ Defensa legal de derechos</span>
  </div>
  <p class="text-center text-sm text-muted-foreground mt-4">Asesoramiento legal: Protección de tus derechos fundamentales durante la detención</p>
</div>

Si una persona es detenida en un control de alcoholemia en la salida de una zona de ocio de costa y presenta síntomas de intoxicación, tiene derecho a solicitar un reconocimiento médico para que conste su estado físico y cualquier posible lesión derivada del procedimiento policial. Igualmente, si se produce una detención tras un altercado nocturno, el detenido puede exigir que se le informe por escrito de los hechos concretos que se le atribuyen y designar desde ese momento a su abogado de confianza.

En la práctica, una recomendación fundamental que recogen numerosos profesionales y manuales es ejercer con firmeza el derecho a guardar silencio hasta que el abogado esté presente. Esto incluye limitar las respuestas a los datos de identificación (nombre, apellidos, domicilio, DNI) y responder al resto de preguntas con fórmulas como: «No deseo declarar hasta contar con la asistencia de mi abogado».

## 4. **Qué hacer** si te detienen en Valencia

Aunque la regulación es estatal, es útil aterrizar estas pautas a la realidad práctica de Valencia y su entorno policial y judicial.

**Pasos prácticos recomendables:**

• **Mantener la calma y no resistirse**. La resistencia o desobediencia puede derivar en delitos adicionales, como atentado contra la autoridad.
• **Preguntar de inmediato el motivo de la detención** y solicitar que se lean y entreguen por escrito los derechos como detenido.
• **Ejercer el derecho a guardar silencio** hasta la presencia del abogado, limitando la información a los datos identificativos.
• **Designar cuanto antes un abogado de confianza** o solicitar abogado de oficio en Valencia si no se dispone de uno.
• **Comunicar la detención a un familiar** o persona de confianza y, si se es extranjero, al consulado correspondiente.
• **Solicitar reconocimiento médico** si existen golpes, lesiones o problemas de salud, y procurar que todo conste en el parte y en las diligencias.

<div class="my-8 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
  <div class="aspect-video bg-muted rounded-lg flex items-center justify-center">
    <span class="text-muted-foreground/50 text-lg font-medium">🏢 Comisaría y procedimientos</span>
  </div>
  <p class="text-center text-sm text-muted-foreground mt-4">Aplicación práctica: Procedimientos en comisaría y pasos a seguir</p>
</div>

Tras una intervención policial en Ruzafa por un altercado en un local de ocio, es frecuente que varias personas sean trasladadas a comisaría para ser identificadas y, en su caso, detenidas; en ese contexto, resulta esencial no discutir los hechos sin abogado, pedir copia de la información de derechos y comunicar la situación a un familiar.

En comisaría, una vez tomadas las diligencias esenciales (toma de declaración, actuaciones básicas de investigación), la policía debe decidir entre liberar al detenido o ponerlo a disposición del Juzgado de Guardia de Valencia antes de que se cumplan las 72 horas.

## 5. **El habeas corpus** como garantía frente a detenciones ilegales

El habeas corpus es un procedimiento rápido dirigido a que un juez controle la legalidad y las condiciones de una detención cuando se considere que puede ser ilegal o arbitraria. Está pensado para proteger al detenido frente a privaciones de libertad sin cobertura legal, detenciones que superan injustificadamente el tiempo necesario o el límite de 72 horas y situaciones en las que no se respetan los derechos básicos (información, abogado, comunicación, etc.).

Pueden solicitar el habeas corpus el propio detenido, su cónyuge o pareja, ascendientes, descendientes, hermanos, representante legal o el Ministerio Fiscal, y la petición puede hacerse incluso de forma verbal ante el juez de guardia. El papel del abogado penalista es clave para valorar si concurren los requisitos y formalizar la solicitud con la rapidez que exige este mecanismo.

## Conclusión

En definitiva, conocer cómo funciona una detención en Valencia y cuáles son tus derechos es esencial para no cometer errores que puedan perjudicar tu situación procesal. Si has sido detenido, has recibido una citación policial o simplemente tienes dudas sobre tus derechos como investigado o detenido, es importante que no afrontes el problema solo y cuentes con asesoramiento jurídico especializado desde el primer momento.

En Dextra Law Firm, ponemos a tu disposición un abogado penalista para asistirte de forma inmediata ante cualquier detención, declaración en comisaría o citación judicial en Valencia y resto de España, analizando tu caso, acompañándote en dependencias policiales y defendiendo tus intereses ante los tribunales. Puedes contactar con nosotros para una consulta directa y confidencial y recibir asistencia jurídica inmediata y adaptada a tu situación concreta.
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
                    .replace(/(<\/p>)\n(<p)/gim, '$1</div><div class="mb-6">$2')
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
              <h3 className="text-2xl font-bold mb-4">¿Necesitas asistencia por detención?</h3>
              <p className="text-muted-foreground font-sans mb-6">
                Si has sido detenido o necesitas asesoramiento legal inmediato en Valencia, contacta con nuestros abogados especialistas en derecho penal.
              </p>
              <a
                href="https://www.cal.eu/adrian-garcia-lledo-babrwp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-sans font-semibold hover:bg-primary/90 transition-colors"
              >
                Consultar Abogado Penalista
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BlogDeuda;
