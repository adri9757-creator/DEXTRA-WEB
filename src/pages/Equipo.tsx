import Section from "@/components/Section";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Shield, Heart, Target, BookOpen } from "lucide-react";
import equipoImage from "@/assets/Captura de pantalla 2026-03-27 a las 12.59.03.png";
import formaTrabajarImage from "@/assets/JUSTICIA.jpeg";

const Equipo = () => (
  <>
    <section className="pt-32 pb-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">Nuestro equipo</h1>
        <div className="w-16 h-1 bg-primary mt-6" />
      </div>
    </section>

    {/* Intro */}
    <div className="container pb-20 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Estrategia y claridad para defender tus derechos</h2>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed mb-4 text-justify">
            Te explicamos tus opciones con claridad, diseñamos la mejor estrategia y te acompañamos en cada decisión. En Dextra Law Firm, la experiencia se une con un enfoque moderno para darte el mejor servicio legal en Valencia.
          </p>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed text-justify">
            Cada miembro de nuestro equipo está especializado en su área y comparte una misma filosofía: defender a nuestros clientes con rigor, cercanía y total transparencia.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square bg-muted rounded-md overflow-hidden relative max-w-sm mx-auto">
            <img 
              src={equipoImage} 
              alt="Equipo Dextra Law Firm" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <div class="flex items-center justify-center h-full">
                    <div class="text-center">
                      <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <p class="text-muted-foreground font-sans text-sm">Imagen del equipo</p>
                      <p class="text-muted-foreground font-sans text-xs mt-2">Añade la imagen en: /src/assets/equipo-image.jpg</p>
                    </div>
                  </div>
                `;
              }}
            />
          </div>
        </div>
      </div>
    </div>

    {/* Especialización */}
    <Section className="bg-secondary">
      <h2 className="text-3xl font-bold mb-12">Especializados para defender tu caso</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { icon: Shield, title: "Derecho Penal", desc: "Penalistas con amplia experiencia en la defensa y representación en todo tipo de procedimientos penales ante los juzgados." },
          { icon: BookOpen, title: "Derecho de Extranjería", desc: "Expertos en normativa migratoria, con cientos de expedientes tramitados con éxito." },
          { icon: Target, title: "Derecho Civil", desc: "Especialistas en reclamaciones, contratos y arrendamientos con un enfoque práctico y resolutivo." },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
              <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed group-hover:text-foreground transition-colors">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Valores */}
    <Section>
      <h2 className="text-3xl font-bold mb-4">Lo que nos define</h2>
      <p className="text-muted-foreground font-sans text-lg mb-12 max-w-2xl">
        Más allá de la especialización técnica, compartimos valores que guían cada decisión que tomamos.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Zap, title: "Claridad", desc: "Te explicamos tu situación sin tecnicismos. Entiendes cada paso antes de darlo." },
          { icon: Heart, title: "Cercanía", desc: "Atención directa y personal. Tu abogado te conoce, te escucha y responde." },
          { icon: Users, title: "Compromiso", desc: "Tu caso es nuestro caso. Luchamos por el mejor resultado como si fuera propio." },
          { icon: Shield, title: "Rigor", desc: "Preparación exhaustiva, análisis profundo y estrategia pensada al detalle." },
        ].map((v) => (
          <div key={v.title} className="group p-6 border border-border rounded-lg hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <v.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-2">{v.title}</h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Forma de trabajar */}
    <Section className="bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square bg-muted rounded-md overflow-hidden relative max-w-sm mx-auto">
            <img 
              src={formaTrabajarImage} 
              alt="Nuestra forma de trabajar" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <div class="flex items-center justify-center h-full">
                    <div class="text-center">
                      <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <p class="text-muted-foreground font-sans text-sm">Imagen de forma de trabajar</p>
                    </div>
                  </div>
                `;
              }}
            />
          </div>
        </div>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Nuestra forma de trabajar</h2>
          <div className="space-y-6 font-sans text-muted-foreground text-lg leading-relaxed">
            <p className="text-justify">
              No somos un despacho donde hablas con un intermediario. Desde el primer momento, tu abogado especialista es quien estudia tu caso, diseña la estrategia y te acompaña hasta el final.
            </p>
            <p className="text-justify">
              Trabajamos con un número limitado de casos para poder dar a cada uno la atención que merece. Preferimos calidad a cantidad, y eso se nota en los resultados.
            </p>
            <p className="text-justify">
              Además, te mantenemos informado en todo momento: sabes cómo avanza tu caso, qué esperar en cada fase y cuáles son tus opciones reales.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* CTA */}
    <section className="bg-foreground text-background py-20">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres que te ayudemos?</h2>
        <p className="text-background/70 font-sans mb-8 max-w-lg mx-auto">Cuéntanos tu situación y un abogado especialista te orientará sin compromiso.</p>
        <a
          href="https://wa.me/34624164536"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold font-sans hover:opacity-90 transition-all hover:scale-105"
        >
          Contactar <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  </>
);

export default Equipo;
