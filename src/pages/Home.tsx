import { Link } from "react-router-dom";
import { Shield, Users, Zap, Scale, Globe, FileText, ArrowRight, MessageCircle } from "lucide-react";
import Section from "@/components/Section";
import GoogleReviews from "@/components/embeds/GoogleReviews";
import { BookingLink, WhatsAppLink } from "@/components/CtaLinks";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        {/* Decorative semicircle */}
        <div aria-hidden="true" className="absolute bottom-0 right-0 w-64 h-32 md:w-96 md:h-48 bg-primary rounded-t-full opacity-20" />
        <div aria-hidden="true" className="absolute top-20 left-0 w-32 h-16 md:w-48 md:h-24 bg-primary rounded-b-full opacity-10" />
        
        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <h1 className="hero-in text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="text-primary-strong block">Defendemos tus derechos</span>
              <span className="text-gray-900">con estrategia y claridad</span>
            </h1>

            <p className="hero-in [animation-delay:150ms] mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground font-sans leading-relaxed">
              Te explicamos tus opciones con claridad, diseñamos la mejor estrategia y te acompañamos en cada decisión.
            </p>

            <div className="hero-in [animation-delay:300ms] mt-10 flex flex-col sm:flex-row gap-4">
              <BookingLink className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-base font-semibold font-sans transition-all hover:bg-primary/90">
                Solicitar una consulta
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </BookingLink>
              <WhatsAppLink className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-8 py-4 rounded-md text-base font-semibold font-sans transition-all hover:bg-foreground hover:text-background">
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Contáctanos
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ DEXTRA */}
      <Section className="bg-secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">¿Por qué Dextra?</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Shield, title: "Trayectoria real en Valencia", desc: "Años de experiencia defendiendo casos reales en juzgados de Valencia y provincia." },
            { icon: Zap, title: "Estrategia y claridad", desc: "Analizamos tu caso con rigor, te explicamos tus opciones y diseñamos el mejor camino." },
            { icon: Users, title: "Cercanía y respuesta rápida", desc: "Atención directa, sin intermediarios. Tu abogado te conoce y responde." },
          ].map((item) => (
            <div key={item.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <item.icon aria-hidden="true" className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ÁREAS DE PRÁCTICA */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Áreas de práctica</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Scale, title: "Derecho Penal", desc: "Penalistas con amplia experiencia en la defensa y representación en todo tipo de procedimientos penales ante los juzgados.", link: "/penal/abogados-penalistas-valencia" },
            { icon: Globe, title: "Extranjería", desc: "Expertos en normativa migratoria, con cientos de expedientes tramitados con éxito.", link: "/extranjeria/abogado-extranjeria-valencia" },
            { icon: FileText, title: "Derecho Civil", desc: "Especialistas en reclamaciones, contratos y arrendamientos con un enfoque práctico y resolutivo.", link: "/civil/abogado-reclamacion-cantidades-valencia" },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="group border border-border rounded-lg p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
            >
              <item.icon aria-hidden="true" className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-sans mb-4 leading-relaxed">{item.desc}</p>
              <span className="inline-flex items-center gap-1 text-primary font-sans font-semibold text-sm group-hover:gap-2 transition-all">
                Ver área <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* TESTIMONIOS */}
      <Section className="bg-secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen nuestros clientes</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" aria-hidden="true" />
        </div>
        
        {/* Reseñas reales de Google: solo se cargan con consentimiento */}
        <div className="mx-auto w-full max-w-6xl">
          <GoogleReviews />
        </div>
      </Section>
      
      
      {/* CÓMO TRABAJAMOS */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Cómo trabajamos</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { step: "01", title: "Primera toma de contacto", desc: "Escuchamos tu caso y te damos una primera valoración honesta y sin compromiso." },
            { step: "02", title: "Análisis y estrategia", desc: "Estudiamos tu situación en profundidad y diseñamos la estrategia más efectiva." },
            { step: "03", title: "Defensa y acompañamiento", desc: "Ejecutamos el plan, te mantenemos informado y luchamos por el mejor resultado." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <span aria-hidden="true" className="text-5xl font-bold text-primary/30 font-serif">{item.step}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="bg-foreground text-background py-20 md:py-28">
        <div className="container text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight"
          >
            ¿Tienes un problema legal en Valencia?{" "}
            <span className="text-primary">Cuéntanos tu caso.</span>
          </h2>
          <div className="mt-10">
            <WhatsAppLink className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-md text-lg font-semibold font-sans transition-all hover:bg-primary/90">
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Escríbenos ahora
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
